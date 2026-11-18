# UH Sugar Land Student Center Website

CIS 2336, Fall 2026, Web Project (individual project)

## Developer
- Name: Jason Iyamu
- Email: ijiyamu@cougarnet.uh.edu

## Project description
A website for the new University of Houston Sugar Land student center. Visitors can read about the center, browse the FAQ, and request a study room reservation.

## Project structure
```text
CIS2336-FA26-project-JasonIyamu/
├── frontend/
│   ├── index.html        (Homepage)
│   ├── FAQ.html          (FAQ page)
│   ├── roombooking.html  (Room booking form)
│   ├── reference.html    (References and AI prompts)
│   ├── styles.css
│   └── script.js
├── backend/
│   └── app.js            (Node.js/Express server, coming in Phase 3)
└── README.md
```

## Front-end features (Phase 2)
- **Homepage:** Hero section, an embedded YouTube video, and a "Developer Contact" section.
- **Dynamic navigation menu:** Built with JavaScript from a list of pages in `script.js`, and highlights the current page.
- **FAQ page:** 5 questions that open and close as collapsibles.
- **Room booking form:** 5 rooms, with JavaScript validation on every field:
  - Full name: required, at least 2 characters.
  - PeopleSoft ID: exactly 7 digits.
  - Room: must choose one.
  - Date: required and cannot be in the past.
  - Error messages appear under each field and clear as the user fixes them.
- **References page:** Lists the AI prompts used during development.
- **Responsive design:** Layout adjusts for screens under 600px wide.

## How to run (front-end only)
No installation is needed for this phase.
1. Download or clone the repository.
2. Open `frontend/index.html` in a web browser.
3. Use the menu to visit each page.

Note: The booking form validates in the browser, but submitting it will not work until the Node.js backend is added in Phase 3.

## Technologies
HTML5, CSS3, JavaScript, Node.js and Express (backend, Phase 3)

## Notes
- The video on the homepage is embedded from YouTube.
- AI assistance is documented on the References page.

