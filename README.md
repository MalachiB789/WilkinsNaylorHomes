# WilkinsNaylorHomes

## Blog editing

The blog now uses simple markdown files in [src/content/blog](/Users/Malachi/Documents/WilkinsNaylorHomes/src/content/blog).

To add a post:

1. Duplicate [src/content/blog/_template.md](/Users/Malachi/Documents/WilkinsNaylorHomes/src/content/blog/_template.md).
2. Rename it to the page URL you want, for example `new-kitchen-upgrade.md`.
3. Fill in the front matter at the top:
   `title`, `date`, and `excerpt` are required.
4. Write the article underneath using simple formatting:
   `##` for large headings, `###` for smaller headings, `-` for bullet points, `**bold**` for bold text, `[[br]]` for a manual line break.
5. Run `node scripts/generate-blog-posts.js`.

That command rebuilds:

- [docs/js/posts.js](/Users/Malachi/Documents/WilkinsNaylorHomes/docs/js/posts.js) for the blog listing and homepage preview
- [docs/blog](/Users/Malachi/Documents/WilkinsNaylorHomes/docs/blog) for the individual post pages
