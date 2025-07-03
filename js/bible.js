// Orthodox Bible book list and chapters (OCA order, simplified for demo)
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
  { name: "Ezra", chapters: 10 },
  { name: "Nehemiah", chapters: 13 },
  { name: "Tobit", chapters: 14 },
  { name: "Judith", chapters: 16 },
  { name: "Esther", chapters: 10 },
  { name: "1 Maccabees", chapters: 16 },
  { name: "2 Maccabees", chapters: 15 },
  { name: "Job", chapters: 42 },
  { name: "Psalms", chapters: 151 },
  { name: "Proverbs", chapters: 31 },
  { name: "Ecclesiastes", chapters: 12 },
  { name: "Song of Songs", chapters: 8 },
  { name: "Wisdom of Solomon", chapters: 19 },
  { name: "Wisdom of Sirach", chapters: 51 },
  { name: "Isaiah", chapters: 66 },
  { name: "Jeremiah", chapters: 52 },
  { name: "Lamentations", chapters: 5 },
  { name: "Ezekiel", chapters: 48 },
  { name: "Daniel", chapters: 14 },
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

function slugifyOcaBook(book) {
  return book.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9\-]/g, '');
}

function populateBibleBooks() {
  const bookSel = document.getElementById('bibleBook');
  bookSel.innerHTML = '';
  BIBLE_BOOKS.forEach((b, i) => {
    const opt = document.createElement('option');
    opt.value = i;
    opt.textContent = b.name;
    bookSel.appendChild(opt);
  });
}

function populateBibleChapters() {
  const bookSel = document.getElementById('bibleBook');
  const chapSel = document.getElementById('bibleChapter');
  chapSel.innerHTML = '';
  const book = BIBLE_BOOKS[bookSel.value];
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
  const passageTitle = document.getElementById('biblePassageTitle');
  const bibleContent = document.getElementById('bibleContent');
  const book = BIBLE_BOOKS[bookSel.value].name;
  const chapter = chapSel.value;

  passageTitle.textContent = `${book} ${chapter}`;

  // Try Orthocal API for the passage (e.g., "John 1")
  const passageRef = `${book} ${chapter}`;
  const orthocalUrl = `https://orthocal.info/api/passage/${encodeURIComponent(passageRef)}`;

  try {
    const res = await fetch(orthocalUrl);
    if (res.ok) {
      const data = await res.json();
      if (data && data.passage && data.passage.length > 0) {
        bibleContent.innerHTML = data.passage.map(v =>
          `<span class="bible-verse-num">${v.verse}</span> <span class="bible-verse-text">${v.content}</span>`
        ).join(' ');
        return;
      }
    }
    // If not found, fall through to OCA Bible link
  } catch (e) {
    // ignore and fall through
  }

  // If passage not found, show OCA Bible link
  const ocaUrl = `https://bible.oca.org/${slugifyOcaBook(book)}/${chapter}`;
  bibleContent.innerHTML = `
    <div style="margin-bottom:12px;">
      <a href="${ocaUrl}" target="_blank" class="bible-link">Read ${book} ${chapter} at bible.oca.org</a>
    </div>
    <em>Full text viewing inside the app is only available for readings included in the OCA lectionary.</em>
  `;
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


// Helper to slugify book names for OCA URLs
function slugifyOcaBook(book) {
  return book.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9\-]/g, '');
}

// Populate book and chapter dropdowns
function populateBibleBooks() {
  const bookSel = document.getElementById('bibleBook');
  bookSel.innerHTML = '';
  BIBLE_BOOKS.forEach((b, i) => {
    const opt = document.createElement('option');
    opt.value = i;
    opt.textContent = b.name;
    bookSel.appendChild(opt);
  });
}

function populateBibleChapters() {
  const bookSel = document.getElementById('bibleBook');
  const chapSel = document.getElementById('bibleChapter');
  chapSel.innerHTML = '';
  const book = BIBLE_BOOKS[bookSel.value];
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
  const passageTitle = document.getElementById('biblePassageTitle');
  const bibleContent = document.getElementById('bibleContent');
  const book = BIBLE_BOOKS[bookSel.value].name;
  const chapter = chapSel.value;

  passageTitle.textContent = `${book} ${chapter}`;

  // OCA Bible URL format: https://bible.oca.org/${slugified-book}/${chapter}
  const ocaUrl = `https://bible.oca.org/${slugifyOcaBook(book)}/${chapter}`;

  // Try to fetch the passage text from OCA's site (if CORS is allowed)
  try {
    // OCA does not have a public JSON API, so we just link for now
    bibleContent.innerHTML = `
      <div style="margin-bottom:12px;">
        <a href="${ocaUrl}" target="_blank" class="bible-link">Read ${book} ${chapter} at bible.oca.org</a>
      </div>
      <em>Full text viewing inside the app coming soon!</em>
    `;
  } catch (e) {
    bibleContent.innerHTML = `<div class="error">Unable to load passage. <a href="${ocaUrl}" target="_blank">View on OCA Bible</a></div>`;
  }
}

// Event listeners for navigation
document.addEventListener('DOMContentLoaded', function () {
  populateBibleBooks();
  populateBibleChapters();

  document.getElementById('bibleBook').addEventListener('change', function () {
    populateBibleChapters();
  });

  document.getElementById('bibleGoBtn').addEventListener('click', function () {
    loadBiblePassage();
  });

  // Optionally, load the first passage by default:
  // loadBiblePassage();
});

