const { ipcRenderer, contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  notificationApi: {
    sendNotification(message) {
      ipcRenderer.send('notification:send', message);
    }
  }
});

// window.sendNotification = message => {
//   ipcRenderer.send('notification:send', message);
// };
