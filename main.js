const { app, BrowserWindow, Notification, ipcMain } = require('electron'),
  path = require('path');
const isDev = !app.isPackaged;

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      // will sanitize JS code
      worldSafeExecuteJavaScript: true,
      // ensures that both the preload scripts and Electron
      // internal logic runs in separate context
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  win.loadFile('index.html');
  isDev && win.webContents.openDevTools();
}

if (isDev) {
  require('electron-reload')(__dirname, {
    Electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
  });
}

app.whenReady().then(() => {
  createWindow();
  // const notification = new Notification({
  //   title: 'hello',
  //   body: 'my notification'
  // });
  // notification.show();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

ipcMain.on('notification:send', (e, message) => {
  new Notification({ title: 'Notification', body: message }).show();
});
