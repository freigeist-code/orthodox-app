// List of books (Orthodox order, KJV names for API)
const BOOKS = [
  { name: "Genesis", kjv: "Genesis", chapters: 50 },
  { name: "Exodus", kjv: "Exodus", chapters: 40 },
  { name: "Leviticus", kjv: "Leviticus", chapters: 27 },
  { name: "Numbers", kjv: "Numbers", chapters: 36 },
  { name: "Deuteronomy", kjv: "Deuteronomy", chapters: 34 },
  { name: "Joshua", kjv: "Joshua", chapters: 24 },
  { name: "Judges", kjv: "Judges", chapters: 21 },
  { name: "Ruth", kjv: "Ruth", chapters: 4 },
  { name: "1 Samuel", kjv: "1 Samuel", chapters: 31 },
  { name: "2 Samuel", kjv: "2 Samuel", chapters: 24 },
  { name: "1 Kings", kjv: "1 Kings", chapters: 22 },
  { name: "2 Kings", kjv: "2 Kings", chapters: 25 },
  { name: "1 Chronicles", kjv: "1 Chronicles", chapters: 29 },
  { name: "2 Chronicles", kjv: "2 Chronicles", chapters: 36 },
  { name: "Ezra", kjv: "Ezra", chapters: 10 },
  { name: "Nehemiah", kjv: "Nehemiah", chapters: 13 },
  { name: "Esther", kjv: "Esther", chapters: 10 },
  { name: "Job", kjv: "Job", chapters: 42 },
  { name: "Psalms", kjv: "Psalms", chapters: 150 },
  { name: "Proverbs", kjv: "Proverbs", chapters: 31 },
  { name: "Ecclesiastes", kjv: "Ecclesiastes", chapters: 12 },
  { name: "Song of Solomon", kjv: "Song of Solomon", chapters: 8 },
  { name: "Isaiah", kjv: "Isaiah", chapters: 66 },
  { name: "Jeremiah", kjv: "Jeremiah", chapters: 52 },
  { name: "Lamentations", kjv: "Lamentations", chapters: 5 },
  { name: "Ezekiel", kjv: "Ezekiel", chapters: 48 },
  { name: "Daniel", kjv: "Daniel", chapters: 12 },
  { name: "Hosea", kjv: "Hosea", chapters: 14 },
  { name: "Joel", kjv: "Joel", chapters: 3 },
  { name: "Amos", kjv: "Amos", chapters: 9 },
  { name: "Obadiah", kjv: "Obadiah", chapters: 1 },
  { name: "Jonah", kjv: "Jonah", chapters: 4 },
  { name: "Micah", kjv: "Micah", chapters: 7 },
  { name: "Nahum", kjv: "Nahum", chapters: 3 },
  { name: "Habakkuk", kjv: "Habakkuk", chapters: 3 },
  { name: "Zephaniah", kjv: "Zephaniah", chapters: 3 },
  { name: "Haggai", kjv: "Haggai", chapters: 2 },
  { name: "Zechariah", kjv: "Zechariah", chapters: 14 },
  { name: "Malachi", kjv: "Malachi", chapters: 4 },
  // New Testament
  { name: "Matthew", kjv: "Matthew", chapters: 28 },
  { name: "Mark", kjv: "Mark", chapters: 16 },
  { name: "Luke", kjv: "Luke", chapters: 24 },
  { name: "John", kjv: "John", chapters: 21 },
  { name: "Acts", kjv: "Acts", chapters: 28 },
  { name: "Romans", kjv: "Romans", chapters: 16 },
  { name: "1 Corinthians", kjv: "1 Corinthians", chapters: 16 },
  { name: "2 Corinthians", kjv: "2 Corinthians", chapters: 13 },
  { name: "Galatians", kjv: "Galatians", chapters: 6 },
  { name: "Ephesians", kjv: "Ephesians", chapters: 6 },
  { name: "Philippians", kjv: "Philippians", chapters: 4 },
  { name: "Colossians", kjv: "Colossians", chapters: 4 },
  { name: "1 Thessalonians", kjv: "1 Thessalonians", chapters: 5 },
  { name: "2 Thessalonians", kjv: "2 Thessalonians", chapters: 3 },
  { name: "1 Timothy", kjv: "1 Timothy", chapters: 6 },
  { name: "2 Timothy", kjv: "2 Timothy", chapters: 4 },
  { name: "Titus", kjv: "Titus", chapters: 3 },
  { name: "Philemon", kjv: "Philemon", chapters: 1 },
  { name: "Hebrews", kjv: "Hebrews", chapters: 13 },
  { name: "James", kjv: "James", chapters: 5 },
  { name: "1 Peter", kjv: "1 Peter", chapters: 5 },
  { name: "2 Peter", kjv: "2 Peter", chapters: 3 },
  { name: "1 John", kjv: "1 John", chapters: 5 },
  { name: "2 John", kjv: "2 John", chapters: 1 },
  { name: "3 John", kjv: "3 John", chapters: 1 },
  { name: "Jude", kjv: "Jude", chapters: 1 },
  { name: "Revelation", kjv: "Revelation", chapters: 22 }
];

function populateBibleBooks() {
  const bookSel = document.getElementById('bibleBook');
  bookSel.innerHTML = '';
  BOOKS.forEach((b, i) => {
    const opt = document.createElement('option');
    opt.value = i;
    opt.textContent = b.name;
    bookSel.appendChild(opt);
  });
}

function populateBibleChapters() {
  const bookSel = document.getElementById('bibleBook');
  const chapSel = document.getElementById('bibleChapter');
  const book = BOOKS[bookSel.value];
  chapSel.innerHTML = '';
  for (let i = 1; i <= book.chapters; i++) {
    const opt = document.createElement('option');
    opt.value = i;
    opt.textContent = `Chapter ${i}`;
    chapSel.appendChild(opt);
  }
}

function loadBiblePassage() {
  const bookSel = document.getElementById('bibleBook');
  const chapSel = document.getElementById('bibleChapter');
  const passageTitle = document.getElementById('biblePassageTitle');
  const bibleContent = document.getElementById('bibleContent');
  const book = BOOKS[bookSel.value];
  const chapter = chapSel.value;

  passageTitle.textContent = `${book.name} ${chapter} (KJV)`;
  bibleContent.innerHTML = '<div class="loading">Loading...</div>';

  if (!book.kjv) {
    bibleContent.innerHTML = `<div class="error">This book is not in the KJV.</div>`;
    return;
  }
  try {
    const ref = `${book.kjv} ${chapter}`;
    const url = `https://bible-api.com/${encodeURIComponent(ref)}?translation=kjv`;
    fetch(url).then(res => res.json()).then(data => {
      if (data.verses && data.verses.length > 0) {
        bibleContent.innerHTML = data.verses.map(v =>
          `<span class="bible-verse-num">${v.verse}</span> <span class="bible-verse-text">${v.text.trim()}</span>`
        ).join(' ');
      } else {
        bibleContent.innerHTML = `<div class="error">No verses found for this chapter.</div>`;
      }
    }).catch(e => {
      bibleContent.innerHTML = `<div class="error">Unable to load passage.</div>`;
    });
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
});


