// Orthodox Canon Book List & Bolls.life Mapping (expand as needed)
const BOLLS_BOOKS = [
  { name: "Genesis", lxx: 1, kjv: 1, chapters: 50 },
  { name: "Exodus", lxx: 2, kjv: 2, chapters: 40 },
  { name: "Leviticus", lxx: 3, kjv: 3, chapters: 27 },
  { name: "Numbers", lxx: 4, kjv: 4, chapters: 36 },
  { name: "Deuteronomy", lxx: 5, kjv: 5, chapters: 34 },
  { name: "Joshua", lxx: 6, kjv: 6, chapters: 24 },
  { name: "Judges", lxx: 7, kjv: 7, chapters: 21 },
  { name: "Ruth", lxx: 8, kjv: 8, chapters: 4 },
  { name: "1 Samuel", lxx: 9, kjv: 9, chapters: 31 },
  { name: "2 Samuel", lxx: 10, kjv: 10, chapters: 24 },
  { name: "1 Kings", lxx: 11, kjv: 11, chapters: 22 },
  { name: "2 Kings", lxx: 12, kjv: 12, chapters: 25 },
  { name: "1 Chronicles", lxx: 13, kjv: 13, chapters: 29 },
  { name: "2 Chronicles", lxx: 14, kjv: 14, chapters: 36 },
  { name: "1 Esdras", lxx: 15, kjv: null, chapters: 9 },
  { name: "Ezra", lxx: 16, kjv: 15, chapters: 10 },
  { name: "Nehemiah", lxx: 17, kjv: 16, chapters: 13 },
  { name: "Tobit", lxx: 18, kjv: null, chapters: 14 },
  { name: "Judith", lxx: 19, kjv: null, chapters: 16 },
  { name: "Esther", lxx: 20, kjv: 17, chapters: 16 },
  { name: "1 Maccabees", lxx: 21, kjv: null, chapters: 16 },
  { name: "2 Maccabees", lxx: 22, kjv: null, chapters: 15 },
  { name: "3 Maccabees", lxx: 23, kjv: null, chapters: 7 },
  { name: "4 Maccabees", lxx: 24, kjv: null, chapters: 18 },
  { name: "Job", lxx: 25, kjv: 18, chapters: 42 },
  { name: "Psalms", lxx: 26, kjv: 19, chapters: 151 },
  { name: "Proverbs", lxx: 27, kjv: 20, chapters: 31 },
  { name: "Ecclesiastes", lxx: 28, kjv: 21, chapters: 12 },
  { name: "Song of Songs", lxx: 29, kjv: 22, chapters: 8 },
  { name: "Wisdom of Solomon", lxx: 30, kjv: null, chapters: 19 },
  { name: "Wisdom of Sirach", lxx: 31, kjv: null, chapters: 51 },
  { name: "Isaiah", lxx: 32, kjv: 23, chapters: 66 },
  { name: "Jeremiah", lxx: 33, kjv: 24, chapters: 52 },
  { name: "Baruch", lxx: 34, kjv: null, chapters: 5 },
  { name: "Lamentations", lxx: 35, kjv: 25, chapters: 5 },
  { name: "Epistle of Jeremiah", lxx: 36, kjv: null, chapters: 1 },
  { name: "Ezekiel", lxx: 37, kjv: 26, chapters: 48 },
  { name: "Daniel", lxx: 38, kjv: 27, chapters: 14 },
  { name: "Hosea", lxx: 39, kjv: 28, chapters: 14 },
  { name: "Joel", lxx: 40, kjv: 29, chapters: 4 },
  { name: "Amos", lxx: 41, kjv: 30, chapters: 9 },
  { name: "Obadiah", lxx: 42, kjv: 31, chapters: 1 },
  { name: "Jonah", lxx: 43, kjv: 32, chapters: 4 },
  { name: "Micah", lxx: 44, kjv: 33, chapters: 7 },
  { name: "Nahum", lxx: 45, kjv: 34, chapters: 3 },
  { name: "Habakkuk", lxx: 46, kjv: 35, chapters: 3 },
  { name: "Zephaniah", lxx: 47, kjv: 36, chapters: 3 },
  { name: "Haggai", lxx: 48, kjv: 37, chapters: 2 },
  { name: "Zechariah", lxx: 49, kjv: 38, chapters: 14 },
  { name: "Malachi", lxx: 50, kjv: 39, chapters: 4 },
  { name: "Matthew", lxx: 51, kjv: 40, chapters: 28 },
  { name: "Mark", lxx: 52, kjv: 41, chapters: 16 },
  { name: "Luke", lxx: 53, kjv: 42, chapters: 24 },
  { name: "John", lxx: 54, kjv: 43, chapters: 21 },
  { name: "Acts", lxx: 55, kjv: 44, chapters: 28 },
  { name: "Romans", lxx: 56, kjv: 45, chapters: 16 },
  { name: "1 Corinthians", lxx: 57, kjv: 46, chapters: 16 },
  { name: "2 Corinthians", lxx: 58, kjv: 47, chapters: 13 },
  { name: "Galatians", lxx: 59, kjv: 48, chapters: 6 },
  { name: "Ephesians", lxx: 60, kjv: 49, chapters: 6 },
  { name: "Philippians", lxx: 61, kjv: 50, chapters: 4 },
  { name: "Colossians", lxx: 62, kjv: 51, chapters: 4 },
  { name: "1 Thessalonians", lxx: 63, kjv: 52, chapters: 5 },
  { name: "2 Thessalonians", lxx: 64, kjv: 53, chapters: 3 },
  { name: "1 Timothy", lxx: 65, kjv: 54, chapters: 6 },
  { name: "2 Timothy", lxx: 66, kjv: 55, chapters: 4 },
  { name: "Titus", lxx: 67, kjv: 56, chapters: 3 },
  { name: "Philemon", lxx: 68, kjv: 57, chapters: 1 },
  { name: "Hebrews", lxx: 69, kjv: 58, chapters: 13 },
  { name: "James", lxx: 70, kjv: 59, chapters: 5 },
  { name: "1 Peter", lxx: 71, kjv: 60, chapters: 5 },
  { name: "2 Peter", lxx: 72, kjv: 61, chapters: 3 },
  { name: "1 John", lxx: 73, kjv: 62, chapters: 5 },
  { name: "2 John", lxx: 74, kjv: 63, chapters: 1 },
  { name: "3 John", lxx: 75, kjv: 64, chapters: 1 },
  { name: "Jude", lxx: 76, kjv: 65, chapters: 1 },
  { name: "Revelation", lxx: 77, kjv: 66, chapters: 22 }
];

function populateBibleBooks() {
  const bookSel = document.getElementById('bibleBook');
  bookSel.innerHTML = '';
  BOLLS_BOOKS.forEach((b, i) => {
    const opt = document.createElement('option');
    opt.value = i;
    opt.textContent = b.name;
    bookSel.appendChild(opt);
  });
}

function populateBibleChapters() {
  const bookSel = document.getElementById('bibleBook');
  const chapSel = document.getElementById('bibleChapter');
  const book = BOLLS_BOOKS[bookSel.value];
  chapSel.innerHTML = '';
  for (let i = 1; i <= book.chapters; i++) {
    const opt = document.createElement('option');
    opt.value = i;
    opt.textContent = `Chapter ${i}`;
    chapSel.appendChild(opt);
  }
}

// Fetch all verses in a chapter and display them
async function fetchChapter(translation, bookNum, chapterNum, numVerses) {
  let versesHtml = '';
  for (let v = 1; v <= numVerses; v++) {
    const url = `https://bolls.life/get-verse/${translation}/${bookNum}/${chapterNum}/${v}/`;
    try {
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        if (data.text) {
          versesHtml += `<span class="bible-verse-num">${v}</span> <span class="bible-verse-text">${data.text}</span> `;
        }
      }
    } catch (e) {
      versesHtml += `<span class="bible-verse-num">${v}</span> <span class="bible-verse-text error">[Error]</span> `;
    }
  }
  return versesHtml;
}

async function loadBiblePassage() {
  const bookSel = document.getElementById('bibleBook');
  const chapSel = document.getElementById('bibleChapter');
  const versionSel = document.getElementById('bibleVersion');
  const passageTitle = document.getElementById('biblePassageTitle');
  const bibleContent = document.getElementById('bibleContent');
  const book = BOLLS_BOOKS[bookSel.value];
  const chapter = parseInt(chapSel.value, 10);
  const version = versionSel.value;

  passageTitle.textContent = `${book.name} ${chapter} (${version})`;
  bibleContent.innerHTML = '<div class="loading">Loading...</div>';

  const bookNum = version === 'LXX' ? book.lxx : book.kjv;
  if (!bookNum) {
    bibleContent.innerHTML = `<div class="error">This book is not available in the selected version.</div>`;
    return;
  }

  // Estimate number of verses: fetch up to 200, but stop if blank is returned
  let versesHtml = '';
  let foundAny = false;
  for (let v = 1; v <= 200; v++) {
    const url = `https://bolls.life/get-verse/${version}/${bookNum}/${chapter}/${v}/`;
    try {
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        if (data.text && data.text.trim() !== "") {
          foundAny = true;
          versesHtml += `<span class="bible-verse-num">${v}</span> <span class="bible-verse-text">${data.text}</span> `;
        } else {
          // No more verses in this chapter
          break;
        }
      } else {
        break;
      }
    } catch (e) {
      break;
    }
  }
  if (foundAny) {
    bibleContent.innerHTML = versesHtml;
  } else {
    bibleContent.innerHTML = `<div class="error">No verses found for this chapter.</div>`;
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


