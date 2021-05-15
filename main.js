const { app, BrowserWindow,ipcMain} = require('electron')
const path = require('path')
let win;
function createWindow () {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: false
    }
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

ipcMain.on('window-close',function(){
  win.close();
})


ipcMain.on('window-min',function(){
  win.minimize();
})

ipcMain.on('window-max',function(){
  win.maximize();
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
})

// const template = [
//   {
//     label: 'app', // macOS下第一个标签是应用程序名字，此处设置无效
//     submenu: [
//       { label: '退出', click: () => { app.quit() } },
//       { label: '关于', click: () => { app.showAboutPanel() } }
//     ]
//   },
//   {
//     label: '文件',
//     submenu: [
//       {
//         label: '子菜单', 
//         click: () => {
//           // 调用了dialog（弹窗模块），演示效果
//           dialog.showMessageBoxSync({
//             type: 'info',
//             title: '提示',
//             message: '点击了子菜单'
//           })
//         }
//       }
//     ]
//   }
// ]

// const menu = Menu.buildFromTemplate(template)

// Menu.setApplicationMenu(menu)