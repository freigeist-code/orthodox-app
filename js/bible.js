// List of books with both display names and codes for JSON and KJV API
const BOOKS = [
  // OT (LXX/Brenton and KJV names)
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
  { name: "Ezra", lxx: "Ezra", kjv: "Ezra", chapters: 10 },
  { name: "Nehemiah", lxx: "Nehemiah", kjv: "Nehemiah", chapters: 13 },
  { name: "Tobit", lxx: "Tobit", kjv: null, chapters: 14 },
  { name: "Judith", lxx: "Judith", kjv: null, chapters: 16 },
  { name: "Esther (Greek)", lxx: "Esther (Greek)", kjv: "Esther", chapters: 16 },
  { name: "Job", lxx: "Job", kjv: "Job", chapters: 42 },
  { name: "Psalms", lxx: "Psalms", kjv: "Psalms", chapters: 151 },
  { name: "Proverbs", lxx: "Proverbs", kjv: "Proverbs", chapters: 31 },
  { name: "Ecclesiastes", lxx: "Ecclesiastes", kjv: "Ecclesiastes", chapters: 12 },
  { name: "The Song of Solomon", lxx: "The Song of Solomon", kjv: "Song of Solomon", chapters: 8 },
  { name: "Wisdom", lxx: "Wisdom", kjv: null, chapters: 19 },
  { name: "Sirach", lxx: "Sirach", kjv: null, chapters: 51 },
  { name: "Esaias", lxx: "Esaias", kjv: "Isaiah", chapters: 66 },
  { name: "Jeremias", lxx: "Jeremias", kjv: "Jeremiah", chapters: 52 },
  { name: "Lamentations", lxx: "Lamentations", kjv: "Lamentations", chapters: 5 },
  { name: "Jezekiel", lxx: "Jezekiel", kjv: "Ezekiel", chapters: 48 },
  { name: "Daniel (Greek)", lxx: "Daniel (Greek)", kjv: "Daniel", chapters: 14 },
  { name: "Osee", lxx: "Osee", kjv: "Hosea", chapters: 14 },
  { name: "Joel", lxx: "Joel", kjv: "Joel", chapters: 4 },
  { name: "Amos", lxx: "Amos", kjv: "Amos", chapters: 9 },
  { name: "Obdias", lxx: "Obdias", kjv: "Obadiah", chapters: 1 },
  { name: "Jonas", lxx: "Jonas", kjv: "Jonah", chapters: 4 },
  { name: "Michæas", lxx: "Michæas", kjv: "Micah", chapters: 7 },
  { name: "Naum", lxx: "Naum", kjv: "Nahum", chapters: 3 },
  { name: "Ambacum", lxx: "Ambacum", kjv: "Habakkuk", chapters: 3 },
  { name: "Sophonias", lxx: "Sophonias", kjv: "Zephaniah", chapters: 3 },
  { name: "Aggæus", lxx: "Aggæus", kjv: "Haggai", chapters: 2 },
  { name: "Zacharias", lxx: "Zacharias", kjv: "Zechariah", chapters: 14 },
  { name: "Malachias", lxx: "Malachias", kjv: "Malachi", chapters: 4 },
  { name: "Baruch", lxx: "Baruch", kjv: null, chapters: 5 },
  { name: "Epistle of Jeremy", lxx: "Epistle of Jeremy", kjv: null, chapters: 1 },
  { name: "Susanna", lxx: "Susanna", kjv: null, chapters: 1 },
  { name: "Bel and the Dragon", lxx: "Bel and the Dragon", kjv: null, chapters: 1 },
  { name: "I Maccabees", lxx: "I Maccabees", kjv: null, chapters: 16 },
  { name: "II Maccabees", lxx: "II Maccabees", kjv: null, chapters: 15 },
  { name: "I Esdras", lxx: "I Esdras", kjv: null, chapters: 9 },
  { name: "Prayer of Manasses", lxx: "Prayer of Manasses", kjv: null, chapters: 1 },
  { name: "III Maccabees", lxx: "III Maccabees", kjv: null, chapters: 7 },
  { name: "IV Maccabees", lxx: "IV Maccabees", kjv: null, chapters: 18 },
  // NT (KJV only)
  { name: "Matthew", lxx: "Matthew", kjv: "Matthew", chapters: 28 },
  { name: "Mark", lxx: "Mark", kjv: "Mark", chapters: 16 },
  { name: "Luke", lxx: "Luke", kjv: "Luke", chapters: 24 },
  { name: "John", lxx: "John", kjv: "John", chapters: 21 },
  { name: "Acts", lxx: "Acts", kjv: "Acts", chapters: 28 },
  { name: "Romans", lxx: "Romans", kjv: "Romans", chapters: 16 },
  { name: "1 Corinthians", lxx: "1 Corinthians", kjv: "1 Corinthians", chapters: 16 },
  { name: "2 Corinthians", lxx: "2 Corinthians", kjv: "2 Corinthians", chapters: 13 },
  { name: "Galatians", lxx: "Galatians", kjv: "Galatians", chapters: 6 },
  { name: "Ephesians", lxx: "Ephesians", kjv: "Ephesians", chapters: 6 },
  { name: "Philippians", lxx: "Philippians", kjv: "Philippians", chapters: 4 },
  { name: "Colossians", lxx: "Colossians", kjv: "Colossians", chapters: 4 },
  { name: "1 Thessalonians", lxx: "1 Thessalonians", kjv: "1 Thessalonians", chapters: 5 },
  { name: "2 Thessalonians", lxx: "2 Thessalonians", kjv: "2 Thessalonians", chapters: 3 },
  { name: "1 Timothy", lxx: "1 Timothy", kjv: "1 Timothy", chapters: 6 },
  { name: "2 Timothy", lxx: "2 Timothy", kjv: "2 Timothy", chapters: 4 },
  { name: "Titus", lxx: "Titus", kjv: "Titus", chapters: 3 },
  { name: "Philemon", lxx: "Philemon", kjv: "Philemon", chapters: 1 },
  { name: "Hebrews", lxx: "Hebrews", kjv: "Hebrews", chapters: 13 },
  { name: "James", lxx: "James", kjv: "James", chapters: 5 },
  { name: "1 Peter", lxx: "1 Peter", kjv: "1 Peter", chapters: 5 },
  { name: "2 Peter", lxx: "2 Peter", kjv: "2 Peter", chapters: 3 },
  { name: "1 John", lxx: "1 John", kjv: "1 John", chapters: 5 },
  { name: "2 John", lxx: "2 John", kjv: "2 John", chapters: 1 },
  { name: "3 John", lxx: "3 John", kjv: "3 John", chapters: 1 },
  { name: "Jude", lxx: "Jude", kjv: "Jude", chapters: 1 },
  { name: "Revelation", lxx: "Revelation", kjv: "Revelation", chapters: 22 }
];

let BRENTON_LXX = null;

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
    // Use local Brenton LXX JSON
    if (!BRENTON_LXX) {
      bibleContent.innerHTML = "<div class='loading'>Loading LXX...</div>";
      return;
    }
    const bookData = BRENTON_LXX[book.lxx];
    if (bookData && bookData[chapter]) {
      bibleContent.innerHTML = bookData[chapter].map((text, idx) =>
        `<span class="bible-verse-num">${idx + 1}</span> <span class="bible-verse-text">${text}</span>`
      ).join(' ');
    } else {
      bibleContent.innerHTML = `<div class="error">No English LXX text found for this chapter.</div>`;
    }
  } else if (version === "KJV") {
    // Use bible-api.com for KJV
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



