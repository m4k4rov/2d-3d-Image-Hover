const url = require('url').format({
  protocol: 'file',
  slashes:true,
  pathname: require('path').join(__dirname, 'index.html')
});

const {app, BrowserWindow} = require('electron');

let win;

function createWindow() {
  win = new BrowserWindow({
    opacity: 0.9,
    titleBarStyle: 'hidden',
    minWidth: 292,
    width: 316,
    height: 776
  });

  win.loadURL(url);

  win.on('closed', function () {
    win = null;
  });
}

app.on('ready', createWindow);
app.on('window-all-closed', function() {
  app.quit();
})
