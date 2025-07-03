// Orthodox Canon Book List with Elpenor Slugs
const BIBLE_BOOKS = [
  { name: "Genesis", slug: "genesis", chapters: 50 },
  { name: "Exodus", slug: "exodus", chapters: 40 },
  { name: "Leviticus", slug: "leviticus", chapters: 27 },
  { name: "Numbers", slug: "numbers", chapters: 36 },
  { name: "Deuteronomy", slug: "deuteronomy", chapters: 34 },
  { name: "Joshua", slug: "joshua", chapters: 24 },
  { name: "Judges", slug: "judges", chapters: 21 },
  { name: "Ruth", slug: "ruth", chapters: 4 },
  { name: "1 Samuel", slug: "kings-i", chapters: 31 },
  { name: "2 Samuel", slug: "kings-ii", chapters: 24 },
  { name: "1 Kings", slug: "kings-iii", chapters: 22 },
  { name: "2 Kings", slug: "kings-iv", chapters: 25 },
  { name: "1 Chronicles", slug: "chronicles-i", chapters: 29 },
  { name: "2 Chronicles", slug: "chronicles-ii", chapters: 36 },
  { name: "1 Esdras", slug: "esdras-a", chapters: 9 },
  { name: "Ezra", slug: "esdras-b", chapters: 10 },
  { name: "Nehemiah", slug: "nehemiah", chapters: 13 },
  { name: "Tobit", slug: "tobit", chapters: 14 },
  { name: "Judith", slug: "judith", chapters: 16 },
  { name: "Esther", slug: "esther", chapters: 16 },
  { name: "1 Maccabees", slug: "maccabees-i", chapters: 16 },
  { name: "2 Maccabees", slug: "maccabees-ii", chapters: 15 },
  { name: "3 Maccabees", slug: "maccabees-iii", chapters: 7 },
  { name: "4 Maccabees", slug: "maccabees-iv", chapters: 18 },
  { name: "Job", slug: "job", chapters: 42 },
  { name: "Psalms", slug: "psalms", chapters: 151 },
  { name: "Proverbs", slug: "proverbs", chapters: 31 },
  { name: "Ecclesiastes", slug: "ecclesiastes", chapters: 12 },
  { name: "Song of Songs", slug: "song-of-songs", chapters: 8 },
  { name: "Wisdom of Solomon", slug: "wisdom", chapters: 19 },
  { name: "Wisdom of Sirach", slug: "sirach", chapters: 51 },
  { name: "Isaiah", slug: "isaiah", chapters: 66 },
  { name: "Jeremiah", slug: "jeremiah", chapters: 52 },
  { name: "Baruch", slug: "baruch", chapters: 5 },
  { name: "Lamentations", slug: "lamentations", chapters: 5 },
  { name: "Epistle of Jeremiah", slug: "jeremiah-epistle", chapters: 1 },
  { name: "Ezekiel", slug: "ezekiel", chapters: 48 },
  { name: "Daniel", slug: "daniel", chapters: 14 },
  { name: "Hosea", slug: "hosea", chapters: 14 },
  { name: "Joel", slug: "joel", chapters: 4 },
  { name: "Amos", slug: "amos", chapters: 9 },
  { name: "Obadiah", slug: "obadiah", chapters: 1 },
  { name: "Jonah", slug: "jonah", chapters: 4 },
  { name: "Micah", slug: "micah", chapters: 7 },
  { name: "Nahum", slug: "nahum", chapters: 3 },
  { name: "Habakkuk", slug: "habakkuk", chapters: 3 },
  { name: "Zephaniah", slug: "zephaniah", chapters: 3 },
  { name: "Haggai", slug: "haggai", chapters: 2 },
  { name: "Zechariah", slug: "zechariah", chapters: 14 },
  { name: "Malachi", slug: "malachi", chapters: 4 },
  { name: "Matthew", slug: "matthew", chapters: 28 },
  { name: "Mark", slug: "mark", chapters: 16 },
  { name: "Luke", slug: "luke", chapters: 24 },
  { name: "John", slug: "john", chapters: 21 },
  { name: "Acts", slug: "acts", chapters: 28 },
  { name: "Romans", slug: "romans", chapters: 16 },
  { name: "1 Corinthians", slug: "corinthians-i", chapters: 16 },
  { name: "2 Corinthians", slug: "corinthians-ii", chapters: 13 },
  { name: "Galatians", slug: "galatians", chapters: 6 },
  { name: "Ephesians", slug: "ephesians", chapters: 6 },
  { name: "Philippians", slug: "philippians", chapters: 4 },
  { name: "Colossians", slug: "colossians", chapters: 4 },
  { name: "1 Thessalonians", slug: "thessalonians-i", chapters: 5 },
  { name: "2 Thessalonians", slug: "thessalonians-ii", chapters: 3 },
  { name: "1 Timothy", slug: "timothy-i", chapters: 6 },
  { name: "2 Timothy", slug: "timothy-ii", chapters: 4 },
  { name: "Titus", slug: "titus", chapters: 3 },
  { name: "Philemon", slug: "philemon", chapters: 1 },
  { name: "Hebrews", slug: "hebrews", chapters: 13 },
  { name: "James", slug: "james", chapters: 5 },
  { name: "1 Peter", slug: "peter-i", chapters: 5 },
  { name: "2 Peter", slug: "peter-ii", chapters: 3 },
  { name: "1 John", slug: "john-i", chapters: 5 },
  { name: "2 John", slug: "john-ii", chapters: 1 },
  { name: "3 John", slug: "john-iii", chapters: 1 },
  { name: "Jude", slug: "jude", chapters: 1 },
  { name: "Revelation", slug: "revelation", chapters: 22 }
];

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
  const book = BIBLE_BOOKS[bookSel.value];
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
  const book = BIBLE_BOOKS[bookSel.value];
  const chapter = chapSel.value;
  const version = versionSel.value;

  passageTitle.textContent = `${book.name} ${chapter} (${version})`;
  bibleContent.innerHTML = '<div class="loading">Loading...</div>';

  if (version === "KJV") {
    // --- KJV API ---
    try {
      const ref = `${book.name} ${chapter}`;
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
  } else if (version === "LXX") {
    // --- LXX Brenton via Elpenor ---
    try {
      // Elpenor URLs: https://www.ellopos.net/elpenor/greek-texts/septuagint/genesis/1.asp
      const url = `https://www.ellopos.net/elpenor/greek-texts/septuagint/${book.slug}/${chapter}.asp`;
      // Use a CORS proxy (allorigins)
      const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;
      const res = await fetch(proxyUrl);
      const data = await res.json();
      const parser = new DOMParser();
      const doc = parser.parseFromString(data.contents, "text/html");
      // The English verses are in the right column, which is the 2nd <td> in each <tr>
      const rows = doc.querySelectorAll("table tr");
      let versesHtml = '';
      let verseNum = 1;
      rows.forEach(row => {
        const tds = row.querySelectorAll("td");
        if (tds.length === 2) {
          const text = tds[1].textContent.trim();
          if (text) {
            versesHtml += `<span class="bible-verse-num">${verseNum}</span> <span class="bible-verse-text">${text}</span> `;
            verseNum++;
          }
        }
      });
      bibleContent.innerHTML = versesHtml || `<div class="error">No English LXX text found for this chapter.</div>`;
    } catch (e) {
      bibleContent.innerHTML = `<div class="error">Unable to load LXX passage.</div>`;
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



