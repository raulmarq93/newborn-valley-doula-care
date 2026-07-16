# Manual Push Steps

The website files in this folder are ready to view and build.

Because this Codex sandbox cannot create or write the `.git` folder, push from Terminal using a fresh clone so GitHub history is preserved.

Run these commands:

```bash
cd ~/Documents
mv momswebsite momswebsite-preview
git clone https://github.com/raulmarq93/newborn-valley-doula-care.git momswebsite
rsync -av --exclude node_modules --exclude dist --exclude .git momswebsite-preview/ momswebsite/
cd momswebsite
npm install
npm run build
git status
git add .
git commit -m "Update contact info"
git push origin main
```

After the push finishes, GitHub Pages should redeploy automatically.
