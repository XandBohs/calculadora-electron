const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 300,
    height: 360,
    resizable: false,
    icon: path.join(__dirname, "assets/icon.png"),
    webPreferences: {
      preload: path.join(__dirname, "renderer.js")
    }
  });

  win.loadFile("index.html");
}

app.whenReady().then(createWindow);
