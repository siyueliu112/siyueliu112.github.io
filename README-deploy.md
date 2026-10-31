# Publish at https://siyueliu112.github.io/

Use this direct-upload package instead of the Jekyll integration ZIP.

1. Extract this ZIP.
2. Open https://github.com/siyueliu112/siyueliu112.github.io and select the master branch.
3. Choose Add file > Upload files. Drag the extracted .nojekyll, index.html, about/, publications/, teaching/, assets/, LICENSE-academicpages, and this README into the upload area. Upload the contents, not the containing folder or the ZIP. Commit to master. Existing files with the same names are replaced; keep the existing files/ directory so old lecture-PDF links continue working.
4. Verify that .nojekyll is present at the repository root after upload. If your file browser hid it, use Add file > Create new file in GitHub, name it .nojekyll, enter the line "Disable Jekyll", and commit. This makes GitHub serve the ready-made HTML directly, bypassing the old Jekyll template.
5. In Settings > Pages, set Source to Deploy from a branch, Branch to master, and Folder to /(root). Save.
6. Wait for the Pages deployment to finish, then open https://siyueliu112.github.io/.

The home page shows publications; About is at /about/ and Teaching is at /teaching/. The /publications/ URL is also supported. Original lecture PDFs stay at their existing addresses. No domain-name change or paid hosting is required.

Edit assets/publications.json to update papers and their master order. The assets/ directory contains the photo, CV PDF, styling, script, and bibliography. No build command or dependencies are needed.
