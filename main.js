
const Librus = require("librus-api");

let client = new Librus();

const {app, BrowserWindow, ipcMain} = require('electron')
const path = require('path');
const url = require('url');

require('dotenv').config();
require('electron-reload')(__dirname, {
  electron: require('${__dirname}/../../node_modules/electron')
}
);
ipcMain.on('getGrades', function(event, arg) {
  console.log('getGrades');

client.authorize("login", "pass").then(function () {
  client.info.getGrades().then(data => {
  event.sender.send('gradesResponse', data);
  });
  });

});
let win = null;

app.on('window-all-closed', function () {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function () {

  // Initialize the window to our specified dimensions
  win = new BrowserWindow({
    width: 1000,
    height: 600,
    icon: './src/assets/img/icon.png'
  });

  // Specify entry point
  if (process.env.PACKAGE === 'true'){
    win.loadURL(url.format({
      pathname: path.join(__dirname, 'dist/index.html'),
      protocol: 'file:',
      slashes: true
    }));
  } else {
    win.loadURL(process.env.HOST);
    win.webContents.openDevTools();
  }

  // Remove window once app is closed
  win.on('closed', function () {

    win = null;

  });

});
