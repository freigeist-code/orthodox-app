// Orthodox Bible book list and chapters (OCA/LXX order, with all canonical books)
const BIBLE_BOOKS = [
  { name: "Genesis", chapters: 50 },
  { name: "Exodus", chapters: 40 },
  { name: "Leviticus", chapters: 27 },
  { name: "Numbers", chapters: 36 },
  { name: "Deuteronomy", chapters: 34 },
  { name: "Joshua", chapters: 24 },
  { name: "Judges", chapters: 21 },
  { name: "Ruth", chapters: 4 },
  { name: "1 Samuel", chapters: 31 },
  { name: "2 Samuel", chapters: 24 },
  { name: "1 Kings", chapters: 22 },
  { name: "2 Kings", chapters: 25 },
  { name: "1 Chronicles", chapters: 29 },
  { name: "2 Chronicles", chapters: 36 },
  { name: "1 Esdras", chapters: 9 },
  { name: "Ezra", chapters: 10 },
  { name: "Nehemiah", chapters: 13 },
  { name: "Tobit", chapters: 14 },
  { name: "Judith", chapters: 16 },
  { name: "Esther", chapters: 16 }, // LXX Esther is longer
  { name: "1 Maccabees", chapters: 16 },
  { name: "2 Maccabees", chapters: 15 },
  { name: "3 Maccabees", chapters: 7 },
  { name: "4 Maccabees", chapters: 18 },
  { name: "Job", chapters: 42 },
  { name: "Psalms", chapters: 151 },
  { name: "Prayer of Manasseh", chapters: 1 },
  { name: "Proverbs", chapters: 31 },
  { name: "Ecclesiastes", chapters: 12 },
  { name: "Song of Songs", chapters: 8 },
  { name: "Wisdom of Solomon", chapters: 19 },
  { name: "Wisdom of Sirach", chapters: 51 },
  { name: "Isaiah", chapters: 66 },
  { name: "Jeremiah", chapters: 52 },
  { name: "Baruch", chapters: 5 },
  { name: "Lamentations", chapters: 5 },
  { name: "Epistle of Jeremiah", chapters: 1 },
  { name: "Ezekiel", chapters: 48 },
  { name: "Daniel", chapters: 14 }, // LXX Daniel includes Susanna, Bel and the Dragon
  { name: "Hosea", chapters: 14 },
  { name: "Joel", chapters: 4 },
  { name: "Amos", chapters: 9 },
  { name: "Obadiah", chapters: 1 },
  { name: "Jonah", chapters: 4 },
  { name: "Micah", chapters: 7 },
  { name: "Nahum", chapters: 3 },
  { name: "Habakkuk", chapters: 3 },
  { name: "Zephaniah", chapters: 3 },
  { name: "Haggai", chapters: 2 },
  { name: "Zechariah", chapters: 14 },
  { name: "Malachi", chapters: 4 },
  { name: "Matthew", chapters: 28 },
  { name: "Mark", chapters: 16 },
  { name: "Luke", chapters: 24 },
  { name: "John", chapters: 21 },
  { name: "Acts", chapters: 28 },
  { name: "Romans", chapters: 16 },
  { name: "1 Corinthians", chapters: 16 },
  { name: "2 Corinthians", chapters: 13 },
  { name: "Galatians", chapters: 6 },
  { name: "Ephesians", chapters: 6 },
  { name: "Philippians", chapters: 4 },
  { name: "Colossians", chapters: 4 },
  { name: "1 Thessalonians", chapters: 5 },
  { name: "2 Thessalonians", chapters: 3 },
  { name: "1 Timothy", chapters: 6 },
  { name: "2 Timothy", chapters: 4 },
  { name: "Titus", chapters: 3 },
  { name: "Philemon", chapters: 1 },
  { name: "Hebrews", chapters: 13 },
  { name: "James", chapters: 5 },
  { name: "1 Peter", chapters: 5 },
  { name: "2 Peter", chapters: 3 },
  { name: "1 John", chapters: 5 },
  { name: "2 John", chapters: 1 },
  { name: "3 John", chapters: 1 },
  { name: "Jude", chapters: 1 },
  { name: "Revelation", chapters: 22 }
];

function populateBibleBooks() {
  const bookSel = document.getElementById('bibleBook');
  bookSel.innerHTML = '';
  BIBLE_BOOKS.forEach((b, i) => {
    const opt = document.createElement('option');
    opt.value = b.name;
    opt.textContent = b.name;
    bookSel.appendChild(opt);
  });
}

function populateBibleChapters() {
  const bookSel = document.getElementById('bibleBook');
  const chapSel = document.getElementById('bibleChapter');
  const book = BIBLE_BOOKS.find(b => b.name === bookSel.value);
  chapSel.innerHTML = '';
  for (let i = 1; i <= book.chapters; i++) {
    const opt = document.createElement('option');
    opt.value = i;
    opt.textContent = `Chapter ${i}`;
    chapSel.appendChild(opt);
  }
}

async function loadBiblePassage() {
  const book = document.getElementById('bibleBook').value;
  const chapter = document.getElementById('bibleChapter').value;
  const version = document.getElementById('bibleVersion').value;
  const passageTitle = document.getElementById('biblePassageTitle');
  const bibleContent = document.getElementById('bibleContent');

  passageTitle.textContent = `${book} ${chapter} (${version})`;
  bibleContent.innerHTML = '<div class="loading">Loading...</div>';

  // API expects book names like "Genesis", "Tobit", "Wisdom of Solomon" etc.
  const apiUrl = `https://bible.helloao.org/api/${version}/${encodeURIComponent(book)}/${chapter}.json`;

  try {
    const res = await fetch(apiUrl);
    if (res.ok) {
      const data = await res.json();
      if (data && data.chapter && data.chapter.content) {
        bibleContent.innerHTML = data.chapter.content.map(item => {
          if (item.type === 'heading') {
            return `<div class="bible-heading"><strong>${item.content.join(' ')}</strong></div>`;
          }
          if (item.type === 'verse') {
            return `<span class="bible-verse-num">${item.number}</span> <span class="bible-verse-text">${item.content.join(' ')}</span>`;
          }
          if (item.type === 'line_break') {
            return '<br>';
          }
          if (item.type === 'hebrew_subtitle') {
            return `<div class="bible-hebrew-subtitle"><em>${item.content.join(' ')}</em></div>`;
          }
          return '';
        }).join(' ');
        return;
      }
    }
    bibleContent.innerHTML = `<div class="error">Passage not found in ${version}.</div>`;
  } catch (e) {
    bibleContent.innerHTML = `<div class="error">Unable to load passage.</div>`;
  }
}

document.addEventListener('DOMContentLoaded', function () {
  populateBibleBooks();
  populateBibleChapters();

  document.getElementById('bibleBook').addEventListener('change', function () {
    populateBibleChapters();
  });

  document.getElementById('bibleGoBtn').addEventListener('click', function () {
    loadBiblePassage();
  });

  document.getElementById('bibleVersion').addEventListener('change', function () {
    loadBiblePassage();
  });
});

