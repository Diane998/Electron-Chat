const { app, BrowserWindow, Notification, ipcMain } = require('electron'),
  path = require('path'),
  os = require('os');
const isDev = !app.isPackaged;

const installExtensions = async () => {
  const installer = require('electron-devtools-installer');
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
  const extensions = ['REACT_DEVELOPER_TOOLS', 'REDUX_DEVTOOLS'];

  return Promise.all(
    extensions.map(name => installer.default(installer[name], forceDownload))
  )
    .then(name => console.log(`Added Extension: ${name}`))
    .catch(err => console.log('An error occurred: ', err));
};

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

  win.on('close', () => {
    win = null;
  });
}

if (isDev) {
  require('electron-reload')(__dirname, {
    Electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
  });
}

app.whenReady().then(async () => {
  await installExtensions(); // devtools extensions

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
