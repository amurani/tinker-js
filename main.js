var {app, BrowserWindow} = require('electron');

let win;

function createWindow() {
  window = new BrowserWindow({width: 800, height: 600});
  window.loadURL(`file://${__dirname}/index.html`);
  window.on('closed', () => {
    window = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin')
    app.quit();
});

app.on('activate', () => {
  if (window != null)
    createWindow();
});
