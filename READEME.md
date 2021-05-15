打包命令

这里我们使用electron-packager来进行打包。全局方式下下载安装：

```
npm install -g electron-packager
```

在项目根目录执行以下打包命令：

```
electron-packager . HelloWorld --win --out ../HelloWorldApp --arch=x64
```

这里，我们声明项目名称为HelloWorld, 仅打包到Windows 64位平台，打包输出文件为根目录上一级的

