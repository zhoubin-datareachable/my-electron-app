let ipcRenderer = require('electron').ipcRenderer;

const myNotification = new Notification('你好',{
    body:'hello notice'
})

myNotification.onclick = ()=>{
    console.log('Notification clicked');
}

var close = document.getElementById('close');
if(close){
    close.addEventListener('click',()=>{
        console.log(close);
        //发送关闭命令
        ipcRenderer.send('window-close')
    })
}

var min = document.getElementById('minimize');
if(min){
    min.addEventListener('click',()=>{
        //最小化
        ipcRenderer.send('window-min')
    })
}


var max = document.getElementById('maximize');
if(max){
    max.addEventListener('click',()=>{
        //最大化
        ipcRenderer.send('window-max')
    })
}