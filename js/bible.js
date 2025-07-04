let BRENTON_LXX = null;

// Orthodox book order and mapping (use the exact keys from your JSON)
const BOOKS = [
  { name: "Genesis", lxx: "Genesis", kjv: "Genesis", chapters: 50 },
  { name: "Exodus", lxx: "Exodus", kjv: "Exodus", chapters: 40 },
  { name: "Leviticus", lxx: "Leviticus", kjv: "Leviticus", chapters: 27 },
  { name: "Numbers", lxx: "Numbers", kjv: "Numbers", chapters: 36 },
  { name: "Deuteronomy", lxx: "Deuteronomy", kjv: "Deuteronomy", chapters: 34 },
  { name: "Joshua", lxx: "Joshua", kjv: "Joshua", chapters: 24 },
  { name: "Judges", lxx: "Judges", kjv: "Judges", chapters: 21 },
  { name: "Ruth", lxx: "Ruth", kjv: "Ruth", chapters: 4 },
  { name: "Kings I", lxx: "Kings I", kjv: "1 Samuel", chapters: 31 },
  { name: "Kings II", lxx: "Kings II", kjv: "2 Samuel", chapters: 24 },
  { name: "Kings III", lxx: "Kings III", kjv: "1 Kings", chapters: 22 },
  { name: "Kings IV", lxx: "Kings IV", kjv: "2 Kings", chapters: 25 },
  { name: "Chronicles I", lxx: "Chronicles I", kjv: "1 Chronicles", chapters: 29 },
  { name: "Chronicles II", lxx: "Chronicles II", kjv: "2 Chronicles", chapters: 36 },
  { name: "I Esdras", lxx: "I Esdras", kjv: null, chapters: 9 },
  { name: "Ezra", lxx: "Ezra", kjv: "Ezra", chapters: 10 },
  { name: "Nehemiah", lxx: "Nehemiah", kjv: "Nehemiah", chapters: 13 },
  { name: "Tobit", lxx: "Tobit", kjv: null, chapters: 14 },
  { name: "Judith", lxx: "Judith", kjv: null, chapters: 16 },
  { name: "Esther", lxx: "Esther", kjv: "Esther", chapters: 16 },
  { name: "I Maccabees", lxx: "I Maccabees", kjv: null, chapters: 16 },
  { name: "II Maccabees", lxx: "II Maccabees", kjv: null, chapters: 15 },
  { name: "III Maccabees", lxx: "III Maccabees", kjv: null, chapters: 7 },
  { name: "Psalms", lxx: "Psalms", kjv: "Psalms", chapters: 151 },
  { name: "Job", lxx: "Job", kjv: "Job", chapters: 42 },
  { name: "Proverbs of Solomon", lxx: "Proverbs", kjv: "Proverbs", chapters: 31 },
  { name: "Ecclesiastes", lxx: "Ecclesiastes", kjv: "Ecclesiastes", chapters: 12 },
  { name: "Song of Solomon", lxx: "The Song of Solomon", kjv: "Song of Solomon", chapters: 8 },
  { name: "Wisdom of Solomon", lxx: "Wisdom", kjv: null, chapters: 19 },
  { name: "Wisdom of Sirach", lxx: "Sirach", kjv: null, chapters: 51 },
  { name: "Hosea", lxx: "Hosea", kjv: "Hosea", chapters: 14 },
  { name: "Amos", lxx: "Amos", kjv: "Amos", chapters: 9 },
  { name: "Micah", lxx: "Micah", kjv: "Micah", chapters: 7 },
  { name: "Joel", lxx: "Joel", kjv: "Joel", chapters: 4 },
  { name: "Obadiah", lxx: "Obadiah", kjv: "Obadiah", chapters: 1 },
  { name: "Jonah", lxx: "Jonah", kjv: "Jonah", chapters: 4 },
  { name: "Nahum", lxx: "Nahum", kjv: "Nahum", chapters: 3 },
  { name: "Habakkuk", lxx: "Habakkuk", kjv: "Habakkuk", chapters: 3 },
  { name: "Zephaniah", lxx: "Zephaniah", kjv: "Zephaniah", chapters: 3 },
  { name: "Haggai", lxx: "Haggai", kjv: "Haggai", chapters: 2 },
  { name: "Zechariah", lxx: "Zechariah", kjv: "Zechariah", chapters: 14 },
  { name: "Malachi", lxx: "Malachi", kjv: "Malachi", chapters: 4 },
  { name: "Isaiah", lxx: "Isaiah", kjv: "Isaiah", chapters: 66 },
  { name: "Jeremiah", lxx: "Jeremiah", kjv: "Jeremiah", chapters: 52 },
  { name: "Baruch", lxx: "Baruch", kjv: null, chapters: 5 },
  { name: "Lamentations of Jeremiah", lxx: "Lamentations", kjv: "Lamentations", chapters: 5 },
  { name: "Epistle of Jeremiah", lxx: "Epistle of Jeremiah", kjv: null, chapters: 1 },
  { name: "Ezekiel", lxx: "Ezekiel", kjv: "Ezekiel", chapters: 48 },
  { name: "Daniel", lxx: "Daniel", kjv: "Daniel", chapters: 14 },
  // New Testament
  { name: "Matthew", lxx: "Matthew", kjv: "Matthew", chapters: 28 },
  { name: "Mark", lxx: "Mark", kjv: "Mark", chapters: 16 },
  { name: "Luke", lxx: "Luke", kjv: "Luke", chapters: 24 },
  { name: "John", lxx: "John", kjv: "John", chapters: 21 },
  { name: "Acts of the Apostles", lxx: "Acts", kjv: "Acts", chapters: 28 },
  { name: "Romans", lxx: "Romans", kjv: "Romans", chapters: 16 },
  { name: "I Corinthians", lxx: "I Corinthians", kjv: "1 Corinthians", chapters: 16 },
  { name: "II Corinthians", lxx: "II Corinthians", kjv: "2 Corinthians", chapters: 13 },
  { name: "Galatians", lxx: "Galatians", kjv: "Galatians", chapters: 6 },
  { name: "Ephesians", lxx: "Ephesians", kjv: "Ephesians", chapters: 6 },
  { name: "Philippians", lxx: "Philippians", kjv: "Philippians", chapters: 4 },
  { name: "Colossians", lxx: "Colossians", kjv: "Colossians", chapters: 4 },
  { name: "I Thessalonians", lxx: "I Thessalonians", kjv: "1 Thessalonians", chapters: 5 },
  { name: "II Thessalonians", lxx: "II Thessalonians", kjv: "2 Thessalonians", chapters: 3 },
  { name: "I Timothy", lxx: "I Timothy", kjv: "1 Timothy", chapters: 6 },
  { name: "II Timothy", lxx: "II Timothy", kjv: "2 Timothy", chapters: 4 },
  { name: "Titus", lxx: "Titus", kjv: "Titus", chapters: 3 },
  { name: "Philemon", lxx: "Philemon", kjv: "Philemon", chapters: 1 },
  { name: "Hebrews", lxx: "Hebrews", kjv: "Hebrews", chapters: 13 },
  { name: "James", lxx: "James", kjv: "James", chapters: 5 },
  { name: "I Peter", lxx: "I Peter", kjv: "1 Peter", chapters: 5 },
  { name: "II Peter", lxx: "II Peter", kjv: "2 Peter", chapters: 3 },
  { name: "I John", lxx: "I John", kjv: "1 John", chapters: 5 },
  { name: "II John", lxx: "II John", kjv: "2 John", chapters: 1 },
  { name: "III John", lxx: "III John", kjv: "3 John", chapters: 1 },
  { name: "Jude", lxx: "Jude", kjv: "Jude", chapters: 1 },
  { name: "Revelation", lxx: "Revelation", kjv: "Revelation", chapters: 22 }
];

// Load the JSON once on page load
fetch('js/brenton-lxx-complete.json')
  .then(res => res.json())
  .then(data => { BRENTON_LXX = data; });

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

async function loadBiblePassage() {
  const bookSel = document.getElementById('bibleBook');
  const chapSel = document.getElementById('bibleChapter');
  const versionSel = document.getElementById('bibleVersion');
  const passageTitle = document.getElementById('biblePassageTitle');
  const bibleContent = document.getElementById('bibleContent');
  const book = BOOKS[bookSel.value];
  const chapter = chapSel.value;
  const version = versionSel.value;

  passageTitle.textContent = `${book.name} ${chapter} (${version})`;
  bibleContent.innerHTML = '<div class="loading">Loading...</div>';

  if (version === "LXX") {
    if (!BRENTON_LXX) {
      bibleContent.innerHTML = "<div class='loading'>Loading LXX...</div>";
      return;
    }
    const bookData = BRENTON_LXX[book.lxx];
    if (!bookData) {
      bibleContent.innerHTML = `<div class="error">Book not found in LXX JSON: ${book.lxx}</div>`;
      console.log("Available LXX books:", Object.keys(BRENTON_LXX));
      return;
    }
    if (!bookData[chapter]) {
      bibleContent.innerHTML = `<div class="error">Chapter not found in LXX JSON: ${book.lxx} ${chapter}</div>`;
      console.log("Available chapters for this book:", Object.keys(bookData));
      return;
    }
    bibleContent.innerHTML = bookData[chapter].map((v, idx) =>
      `<span class="bible-verse-num">${idx + 1}</span> <span class="bible-verse-text">${v.text}</span>` +
      (v.footnotes && v.footnotes.length
        ? `<span class="bible-footnotes"><sup>[${v.footnotes.join('; ')}]</sup></span>`
        : '')
    ).join(' ');
  } else if (version === "KJV") {
    if (!book.kjv) {
      bibleContent.innerHTML = `<div class="error">This book is not in the KJV.</div>`;
      return;
    }
    try {
      const ref = `${book.kjv} ${chapter}`;
      const url = `https://bible-api.com/${encodeURIComponent(ref)}?translation=kjv`;
      const res = await fetch(url);
      const data = await res.json();
      if (data.verses && data.verses.length > 0) {
        bibleContent.innerHTML = data.verses.map(v =>
          `<span class="bible-verse-num">${v.verse}</span> <span class="bible-verse-text">${v.text.trim()}</span>`
        ).join(' ');
        return;
      }
      bibleContent.innerHTML = `<div class="error">No verses found for this chapter.</div>`;
    } catch (e) {
      bibleContent.innerHTML = `<div class="error">Unable to load passage.</div>`;
    }
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





