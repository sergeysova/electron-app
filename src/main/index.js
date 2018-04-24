const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')


let mainWindow = null

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    titleBarStyle: 'hidden-inset',
    vibrancy: 'light',
  })

  // mainWindow.loadURL(url.format({
  //   pathname: path.join(__dirname, '..', 'renderer', 'index.html'),
  //   protocol: 'file:',
  //   slashes: true,
  // }))

  mainWindow.loadURL('http://localhost:4000/')

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  // if (process.platform !== 'darwin') {
  app.quit()
  // }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})