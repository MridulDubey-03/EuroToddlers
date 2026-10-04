# Downloads

Put downloadable files (syllabus PDFs) in this folder. Files here are served from `/downloads/<file-name>`.

Suggested names:

- `play-group-syllabus.pdf`
- `nursery-syllabus.pdf`
- `junior-kg-syllabus.pdf`
- `senior-kg-syllabus.pdf`

Then set `syllabusFile` for the program in `src/data/programs.js`, for example:

```js
syllabusFile: "/downloads/nursery-syllabus.pdf",
```

The "Download Syllabus" button on that program's page turns on automatically.
