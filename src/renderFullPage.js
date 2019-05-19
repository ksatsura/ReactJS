export default function renderFullPage(html, preloadedState) {
    return `
      <!doctype html>
      <html>
        <head>
          <title>Redux Universal Example</title>
          <link href="/dist/style.css" rel="stylesheet">
        </head>
        <body>
          <div id="app">${html}</div>
          <script>
            // WARNING: See the following for security issues around embedding JSON in HTML:
            // http://redux.js.org/recipes/ServerRendering.html#security-considerations
            window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
        /</g,
        '\\u003c'
    )}
          </script>
          <script type="text/javascript" src="/dist/server.js"></script>
        </body>
      </html>`;
}