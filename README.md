open-platform-site
==================

## Running Locally

### Install gulp
```
npm install -g gulp
```

### Run gulp
```
cd build
gulp
```

## Viewing documentation locally
We use the content negotiation on GitHub Pages to resolve paths without a file extension
e.g. `tag.html` is resolved as `tag` by GitHub Pages.
When running locally to view the file add back the file extension e.g. `http://localhost:18080/documentation/tag.html`
