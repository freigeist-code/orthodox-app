// Use Luxon for robust timezone handling
function formatDatePacific(date) {
    const DateTime = luxon.DateTime;
    const pacific = DateTime.fromJSDate(date).setZone('America/Los_Angeles');
    return pacific.toFormat('yyyy-MM-dd');
}

let currentDate = new Date();

function updateDate() {
    const DateTime = luxon.DateTime;
    const pacific = DateTime.fromJSDate(currentDate).setZone('America/Los_Angeles');
    document.getElementById('currentDate').textContent =
        pacific.toLocaleString({ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    updateContent();
    fillDateDropdown();
}

function changeDate(days) {
    const DateTime = luxon.DateTime;
    // Always base off Pacific time
    const pacific = DateTime.fromJSDate(currentDate).setZone('America/Los_Angeles').plus({ days });
    currentDate = pacific.toJSDate();
    updateDate();
}

// Helper to create bible.oca.org URL from a reading string
function createBibleOcaUrl(reading) {
    if (!reading) return null;
    reading = reading.toLowerCase().replace(/\s+/g, ' ').trim();
    const match = reading.match(/^(\d?\s?[a-z]+(?:\s[a-z]+)*)\s(\d+)(?::([\d\-]+))?/);
    if (!match) return null;
    let book = match[1].replace(/\s+/g, '-');
    let chapter = match[2];
    let verses = match[3] ? `/${match[3]}` : '';
    return `https://bible.oca.org/${book}/${chapter}${verses}`;
}

async function updateContent() {
    document.getElementById('readings').innerHTML = '<li class="loading">Loading readings...</li>';
    document.getElementById('saints').innerHTML = '<div class="loading">Loading saints...</div>';
    document.getElementById('fasting').innerHTML = 'Loading fasting info...';

    const dateStr = formatDatePacific(currentDate);
    let data = null;
    try {
        const response = await fetch(`/api/oca/${dateStr}`);
        if (response.ok) data = await response.json();
    } catch (e) {
        // Network/proxy error
    }

    // Readings: clickable link, collapsible inline passage
    if (data && data.readings && data.readings.length > 0) {
        document.getElementById('readings').innerHTML = data.readings.map((r, index) => {
            const verse = r.display || r.source || r.title || r;
            const url = createBibleOcaUrl(verse);
            let passageText = '';
            if (r.passage && r.passage.length > 0) {
                passageText = r.passage.map(v =>
                    `<span class="bible-verse-num">${v.verse}</span> <span class="bible-verse-text">${v.content}</span>`
                ).join(' ');
            }
            return `<li>
                <div>
                    <span class="chi-rho">&#9767;</span>
                    <a href="${url}" target="_blank" rel="noopener noreferrer" class="bible-link" onclick="togglePassage(${index}); return false;">${verse}</a>
                </div>
                <div id="passage-${index}" class="bible-passage" style="display:none;">
                    ${passageText}
                </div>
            </li>`;
        }).join('');
    } else {
        document.getElementById('readings').innerHTML = '<li class="error">No readings found.</li>';
    }

    // Saints/Feasts (stories)
    if (data && data.stories && data.stories.length > 0) {
        document.getElementById('saints').innerHTML = data.stories.map(s =>
            `<div class="saint-name">${s.title}</div>${s.story ? `<div>${s.story}</div>` : ''}`
        ).join('');
    } else if (data && data.summary_title) {
        document.getElementById('saints').innerHTML = `<div class="saint-name">${data.summary_title}</div>`;
    } else {
        document.getElementById('saints').innerHTML = '<div class="error">No commemorations found.</div>';
    }

    // Fasting
    if (data && (data.fast_level_desc || data.fast_exception_desc)) {
        let fastText = [data.fast_level_desc, data.fast_exception_desc].filter(Boolean).join(' — ');
        document.getElementById('fasting').textContent = fastText || 'No fasting info.';
    } else {
        document.getElementById('fasting').textContent = 'Fasting info unavailable.';
    }
}

// Collapsible passage toggle
function togglePassage(index) {
    const passageDiv = document.getElementById(`passage-${index}`);
    if (passageDiv.style.display === 'none') {
        passageDiv.style.display = 'block';
    } else {
        passageDiv.style.display = 'none';
    }
}

// Dropdown date picker logic
function fillDateDropdown() {
    const dropdown = document.getElementById('dateDropdown');
    if (!dropdown) return;
    dropdown.innerHTML = ''; // Clear old options

    // Show 2 years before and after today for navigation
    const DateTime = luxon.DateTime;
    const today = DateTime.now().setZone('America/Los_Angeles');
    const start = today.minus({ years: 2 });
    const end = today.plus({ years: 2 });

    let d = start;
    while (d <= end) {
        const value = d.toFormat('yyyy-MM-dd');
        const label = d.toLocaleString({ weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
        const option = document.createElement('option');
        option.value = value;
        option.textContent = label;
        if (formatDatePacific(currentDate) === value) {
            option.selected = true;
        }
        dropdown.appendChild(option);
        d = d.plus({ days: 1 });
    }
}

function handleDropdownChange() {
    const dropdown = document.getElementById('dateDropdown');
    if (!dropdown || !dropdown.value) return;
    const DateTime = luxon.DateTime;
    const pacific = DateTime.fromISO(dropdown.value, { zone: 'America/Los_Angeles' });
    currentDate = pacific.toJSDate();
    updateDate();
}

document.addEventListener('DOMContentLoaded', function () {
    updateDate();
    fillDateDropdown();
    const dropdown = document.getElementById('dateDropdown');
    if (dropdown) {
        dropdown.addEventListener('change', handleDropdownChange);
    }
});










