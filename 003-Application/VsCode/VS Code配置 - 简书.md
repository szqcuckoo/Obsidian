> 本文由 [简悦 SimpRead](http://ksria.com/simpread/) 转码， 原文地址 [www.jianshu.com](https://www.jianshu.com/p/fd945e8e099d) ![](http://upload-images.jianshu.io/upload_images/2484592-953a46211ce42e7d.jpg)

> VS Code 是一个开源的跨平台开发工具，是我目前用的最顺手的编辑器。本文介绍了一些常用的插件和快捷键，帮你大大提高软件开发的效率，让你有更多的时间去撸铁和泡妹子。

### 初识 VS Code

先放上它的官网：

[https://code.visualstudio.com/](https://links.jianshu.com/go?to=https%3A%2F%2Fcode.visualstudio.com%2F)

![](http://upload-images.jianshu.io/upload_images/2484592-fa96e26ecaac9664.jpg) image

VSCode 全称是 Visual Studio Code，光从名字上来看，一开始可能有人会把 VSCode 和 Visual Studio 搞混，他俩都属于微软爸爸公司旗下的产品，而后者早已名声在外，长期占据程序员最喜爱编辑器榜首，为了让新儿子 VSCode 蹭蹭热度，所以起一个差不多的名字，就像 Javascript 之于 Java。

说 VSCode 是个新生儿，一点都不为过，从它诞生到现在也只是过了 4 年时间，跟历史悠久的各大编辑器相比它只是个弟弟。但是就在最近的一到两年，它高速成长，市场占有率开始飙升，远远领先于其他的编辑器，Sublime Text 迅速下降，Atom 不温不火，WebStorm 由于收费问题一直在国内的使用率不高，Vim 由于学习成本太高也渐渐退出历史舞台。如果你正好从别的编辑器转到 VS Code 也完全不用担心，它提供了对应的 Keymap 插件，可以将你的键盘设置迁移过来，帮你快速上手操作，而不用再重新花时间去适应快捷键。

![](http://upload-images.jianshu.io/upload_images/2484592-9b266ce637affb36.jpg) image

而且它为每一种语言都提供了很好的支持，将开发中需要用到的 Extension 打包成一个合集，基本上开发的时候下载对应的 Extension Package 就可以获得很好的支持。

![](http://upload-images.jianshu.io/upload_images/2484592-ea26ec10245b8ec6.jpg) image

微软给 VSCode 的定义就是：免费、开源、跨平台。重新定义代码编辑器。再加上去年微软收购 Github 的举动，这些都说明微软在开源方面有了越来越多的尝试。

![](http://upload-images.jianshu.io/upload_images/2484592-b3d798abf8e842b1.jpg) image

开源对于一个产品的长期发展极为重要。在四款编辑器中，Sublime 是闭源的，VS Code、Vim 和 Atom 都是开源的，而 VS Code 可以说是开源做的最好的。

VS Code 不仅仅是把代码开源出来。而是把整个产品的开发过程建立于开源之上，与整个社区深入合作，倾听用户在 GitHub 上的反馈，使 VS Code 越做越好：

每一年，VS Code 团队都会在 GitHub Wiki 发布 Roadmap ，列出一整年的规划图。

每个月初，在产品设计阶段，VS Code 团队会在 GitHub Issue 上会发布 Iteration Plan ，列出这个月会做的每一个功能，每一个功能基本会对应一个 GitHub Issue，你可以看到详细的设计以及 mockup，并且可以提出你自己的见解。

每个月末，临近产品发布，你可以在 GitHub 看到 Endgame 了解到 VS Code 是如何进行产品测试与发布的。

不仅代码开源，VS Code 整个产品的计划，设计以及发布管理都是 “开源” 的：每一个阶段对每一个用户是公开透明的，你不仅可以开 Issue，发 PR，你甚至也可以参与到每个功能的设计与讨论中去！

关于 VSCode 业界一直有一个争议——它到底是不是一个 IDE？对于 Visual Studio，微软直接就把它定义为同类中最好用的 IDE，而对于 VSCode，微软目前还只是把它定义为一个 Code Editor。

> Visual Studio Code is a lightweight but powerful source code editor

为了解决这个问题，我们首先要搞清楚一个概念，什么是 IDE？它的全称是 Integrated development environment，字面意思是集成开发环境，也就是说把开发过程中的一些主要活动和使用到的工具都集成在一个开发环境中，这样我们就可以在一个程序里进行编写代码、调试代码、运行命令行、版本控制等开发过程。

目前 VSCode 拥有强大的 API 支持，已经基本可以实现 IDE。我们用它编写代码，运用内置的 Terminal 终端快速的运行命令行，下载 Debug 插件，设置断点，轻松调试代码。使用内置的 Git 进行版本控制，轻松管理源代码。不论哪种语言都可以下载到相应的插件合集，一次性打包安装，整个开发过程都可以在这个一个工具中完成，它真正做到了重新定义代码编辑器，在 Stack Overflow 的 2018 年开发者调查中，VS Code 成为了最受欢迎的开发工具。

### 基本插件

> 这个部分介绍一些必装的开发插件，帮你大大提升代码编辑效率。

VS Code 有着丰富且快速增长的插件生态，如今，已经有超过一万个插件。不仅有中心化的插件市场，而且在 VS Code 编辑器里也可以轻松搜索插件，直接进行安装与管理。相比之下，Sublime 只有 5000 不到的插件，而且在编辑器里不能很方便地搜索管理插件；Vim 插件虽多，但因为没有一个中心化的插件市场，查找插件很麻烦；Atom 有 8000 多的插件，比 VS Code 少一些，虽然在编辑器内也是可以查找插件，但 VS Code 的搜索和浏览功能做的要比 Atom 要好。

#### Chinese(Simplified) Language Pack for Visual Stidio Code 中文汉化包

对于一些英文不太好的小伙伴，上来第一件事肯定是要切换成中文语言环境，安装汉化包插件之后，按快捷键 Ctrl+Shift+P 调出命令面板，输入 Configure Display Language，选择 zh-ch，然后重启 vs code 即可。

![](http://upload-images.jianshu.io/upload_images/2484592-5aed578e0de47403.jpg) image

#### open-in-browser 在浏览器中查看

VS Code 没有提供直接在浏览器中运行程序的内置功能，所以我们需要安装此插件，在浏览器中查看我们的程序运行效果。

![](http://upload-images.jianshu.io/upload_images/2484592-21b75e715da81b23.jpg) image

#### Live Server 实时预览

安装这个插件之后，我们在编辑器中修改代码，按 Ctrl+S 保存，修改效果就会实时同步，显示在浏览器中，再不用手动刷新。

![](http://upload-images.jianshu.io/upload_images/2484592-571d6afcd4460bd6.jpg) image

[图片上传失败...(image-9b80fc-1564194236095)]

#### Auto Close Tag 自动闭合标签

输入标签名称的时候自动生成闭合标签，特别方便。

![](http://upload-images.jianshu.io/upload_images/2484592-2f29226bb25a3ad0.jpg) image

![](http://upload-images.jianshu.io/upload_images/2484592-64e0bd4dfd9e256f.gif) image

#### Auto Rename Tag 尾部闭合标签同步修改

自动检测配对标签，同步修改。

![](http://upload-images.jianshu.io/upload_images/2484592-ba1fbad5b38f8e11.jpg) image

![](http://upload-images.jianshu.io/upload_images/2484592-2b55ad52ed51ff52.gif) image

#### Bracket Pair Colorizer 用不同颜色高亮显示匹配的括号

对配对的括号进行着色，方便区分，未安装该插件之前括号统一都是白色的。

![](http://upload-images.jianshu.io/upload_images/2484592-6867a6ee33a812e0.jpg) image

![](http://upload-images.jianshu.io/upload_images/2484592-8cdd4751313f0d4b.jpg) image

#### Highlight Matching Tag 高亮显示匹配标签

这个插件自动帮我们将选中的匹配标签高亮显示，再也不用费劲查找了。

![](http://upload-images.jianshu.io/upload_images/2484592-c3fa7a3ddcc61408.gif) image

#### Vscode-icons VSCode 文件图标

此插件可以帮助我们根据不同的文件类型生成对应的图标，这样我们在侧边栏查看文件列表的时候直接通过图标就可以区分文件类型。

![](http://upload-images.jianshu.io/upload_images/2484592-2a49fee3adfbe58f.jpg) image

使用 mac 的小伙伴可以选择下载 Vscode-icons-mac，基本图标与 Vscode-icons 类似，就是文件夹采用的是 mac 风格。

![](http://upload-images.jianshu.io/upload_images/2484592-ea38a4dae1b91f13.png) img

#### TODO Highlight 高亮

如果我们在编写代码时想在某个地方做一个标记，后续再来完善或者修改里面的内容，可以利用此插件高亮显示，之后可以帮助我们快速定位到需要修改的代码行。

![](http://upload-images.jianshu.io/upload_images/2484592-48daeb60991da2b0.jpg) image

![](http://upload-images.jianshu.io/upload_images/2484592-6c1e3baa7d6d759f.jpg) image

#### Code Spell Checker 单词拼写检查

我们在编写代码的时候经常会不小心拼写错误造成软件运行失败，安装这个插件后会自动帮我们识别单词拼写错误并且给出修改建议，大大帮我们减轻了排除 bug 的压力。

![](http://upload-images.jianshu.io/upload_images/2484592-96f1550c6ad2e18b.jpg) image

![](http://upload-images.jianshu.io/upload_images/2484592-5bae0bd9948a6a8d.gif) image

#### Code Runner 运行选中代码段

如果你需要学习或者接触各种各样的开发语言，那么 Code Runner 插件可以让你不用搭建各种语言的开发环境，直接通过此插件就可以直接运行对应语言的代码，非常适合学习或测试各种开发语言，使用方式直接右键选择 Run Code，支持大量语言，包括 Node。

![](http://upload-images.jianshu.io/upload_images/2484592-ac402b4cd22af580.jpg) image

#### Improt Cost 成本提示

这个插件可以在你导入工具包的时候提示这个包的体积，如果体积过大就需要考虑压缩包，为后期上线优化做准备。

![](http://upload-images.jianshu.io/upload_images/2484592-aa5306417e5ba278.jpg) image

![](http://upload-images.jianshu.io/upload_images/2484592-cdbd74114332cb25.gif) image

#### GitLens 查看 Git 信息

将光标移到代码行上，即可显示当前行最近的 commit 信息和作者，多人开发的时候十分有用，责任到人，防止甩锅。

![](http://upload-images.jianshu.io/upload_images/2484592-1f587280008a3dae.jpg) image

![](http://upload-images.jianshu.io/upload_images/2484592-9d6d6e973013104d.jpg) image

#### Bookmarks 书签

对代码进行书签标记，通过快捷键实现快速跳转到书签位置。

![](http://upload-images.jianshu.io/upload_images/2484592-d93c126f1defd2f1.gif) image

具体的快捷键可以在键盘快捷方式中自定义设置：

![](http://upload-images.jianshu.io/upload_images/2484592-3015d49788f1090b.jpg) image

### 拓展插件

这部分主要介绍一些针对特定开发环境的插件

#### Vscode-element-helper

使用 element-ui 库的可以安装这个插件，编写标签时自动提示 element 标签名称。

![](http://upload-images.jianshu.io/upload_images/2484592-88cbce9692a5ec4a.jpg) image

![](http://upload-images.jianshu.io/upload_images/2484592-2c9831f44f9834a7.gif) image

#### Version Lens 工具包版本信息

在 package.json 中显示你下载安装的 npm 工具包的版本信息，同时会告诉你当前包的最新版本。

![](http://upload-images.jianshu.io/upload_images/2484592-b645935a7a99f803.jpg) image

![](http://upload-images.jianshu.io/upload_images/2484592-f90c3119d86bd789.jpg) image

#### Vetur VUE 语言包

VUE 是时下最流行的 js 框架之一，很多公司都会选择基于 VUE 来构建产品，Vetur 对 VUE 提供了很好的语言支持。

![](http://upload-images.jianshu.io/upload_images/2484592-2e75d1c7b22aab54.jpg) image

没有安装该插件之前之前编写后缀名为. vue 的文件时代码是白色的

![](http://upload-images.jianshu.io/upload_images/2484592-71c4551cf1cc0817.jpg) image

安装插件后编写 vue 文件输入 s，按 Tab 键就可以自动补全模版。

![](http://upload-images.jianshu.io/upload_images/2484592-a535f4a1b73399e6.gif) image

#### WakaTime 计算代码工作量

这是一款时间记录工具，它可以帮助你在 vs code 中记录有效的编程的时间。

![](http://upload-images.jianshu.io/upload_images/2484592-1b3fe6bd24ed8b16.jpg) image

并且将数据用折线图的形式展示出来，为你呈现一周内的工作趋势，曾经编写项目的时候最多一天编程将近 12 个小时，你的付出和努力 wakatime 都知道。

![](http://upload-images.jianshu.io/upload_images/2484592-350a7c5494e492e5.jpg) image

同时在他的官网中，也会显示用扇形图的形式显示你编写各个语言所占用的时间比例，以及你在各个项目中所用的时间占比，是一个非常好的数据报告，项目结束的时候你可以在它的 Dashboard 中清晰地看出自己的时间都是如何分配的。

![](http://upload-images.jianshu.io/upload_images/2484592-05e6f33644e08e22.jpg) image

#### Settings Sync VSCode 设置同步到 Gist

有时候我们到了新公司或者换了新电脑需要配置新的开发环境，这时候一个一个下载插件，再重新配置 vs code 就非常麻烦而且你还不一定记得那么全面，通过这个插件我们可以将当前 vs code 中的配置上传到 Gist，之后再通过 Gist 下载，就可以将所有配置同步到新环境中了。

在 Github 首页点击头像，选择 Settings 进入设置页面。

![](http://upload-images.jianshu.io/upload_images/2484592-e97f43bc31b51a95.jpg) image

点击左侧侧边栏 Developer settings，进入开发者设置。

![](http://upload-images.jianshu.io/upload_images/2484592-7b284b2cff283da9.jpg) image

选择 Personal access tokens，点击右侧 Generate new token。

![](http://upload-images.jianshu.io/upload_images/2484592-5dfbc7fcd4d5ffdc.jpg) image

填写 token 名称，在下方勾选 gist。

![](http://upload-images.jianshu.io/upload_images/2484592-183b50dddddfe84b.jpg) image

点击下方的 Generate token 按钮生成一个新的 token。

![](http://upload-images.jianshu.io/upload_images/2484592-5ce857aa44d894f4.jpg) image

将生成的新的 token 保存下来。

![](http://upload-images.jianshu.io/upload_images/2484592-7d3042b52c11b2eb.jpg) image

在 vscode 中安装 Settings Sync 插件，输入 Ctrl+Shift+p 输入 Sync，选择更新 / 上传配置。

![](http://upload-images.jianshu.io/upload_images/2484592-267fdce4be085b8e.jpg) image

将 github 中生成的 token 输入，点击回车。

![](http://upload-images.jianshu.io/upload_images/2484592-1edaacf536084e16.jpg) image

在控制台中自动生成一串 id, 之后便可以通过 token 和 id 进行配置同步。

![](http://upload-images.jianshu.io/upload_images/2484592-5f49a5b446e71fa3.jpg) image

输入 Ctrl+Shift+p 输入 Sync，选择下载配置，输入 token 和 id 即可同步下载。

![](http://upload-images.jianshu.io/upload_images/2484592-8e5e227ab16b7675.jpg) image

这篇文章中介绍的 vs code 配置已经全部同步到 Gist，有需要的小伙伴可以下载一下。

```
token:b3c5f29c0e6f9f49b23b44ce89467226cd91c9c6

Id:338d5dfb6b7784c980250cffe8365899
```

可以在配置文件中选择是否自动上传和下载

```
"sync.removeExtensions": true,
      "sync.syncExtensions": true,
      "sync.autoDownload": true,
      "sync.autoUpload": true,
      "sync.gist": "338d5dfb6b7784c980250cffe8365899"
```

### 颜色主题

作为一名程序员，每天大部分时间都是坐在电脑前敲代码，需要长时间的跟编辑器打交道，为我们的 vscode 选择一款好看的颜色主题，能极大地提升写代码过程中的愉悦感，为了保护眼睛，这里推荐一个深色主题安装包，里面包含了如下几款皮肤。

![](http://upload-images.jianshu.io/upload_images/2484592-6a166057cb5d9254.jpg) image

![](http://upload-images.jianshu.io/upload_images/2484592-173a44231cb182ff.jpg) image

我个人最喜欢的还是下面两款深色主题，主题这个东西一般用习惯了也不会来回去换，所以选择一款自己用着舒服的就好。

Dracula Official 吸血鬼主题（本人目前使用的一款）

![](http://upload-images.jianshu.io/upload_images/2484592-59737aaa6f273c11.png) image

One Dark Pro

![](http://upload-images.jianshu.io/upload_images/2484592-750969bb25cb25d1) image

### 常用快捷键

#### 编辑器与窗口管理

Ctrl+Shift+P: 打开命令面板。

Ctrl+Shift+N: 新建窗口。

Ctrl+Shift+W: 关闭窗口。

切分窗口：Ctrl+1/Ctrl+3/Ctrl+3

Ctrl+H：最小化窗口

Ctrl+B：显示 / 隐藏侧边栏

Ctrl+"+/-"：放大 / 缩小界面

#### 文件操作

Ctrl+N：新建文件

Ctrl+W：关闭文件

Ctrl+Tab：文件切换

#### 格式调整

Ctrl+C/Ctrl+V：复制或剪切当前行 / 当前选中内容

Alt+Up/Down：向上 / 下移动一行

Shift+Alt+Up//Down：向上 / 下复制一行

Ctrl+Delete：删除当前行

Shift+Alt+Left/Right：从光标开始向左 / 右选择内容

#### 代码编辑

Ctrl+D：选中下一个相同内容

Ctrl+Shift+L：选中所有相同内容

Ctrl+F：查找内容

Ctrl+Shit+F：在整个文件夹中查找内容

### 常用设置

我们可以在 settings.json 中手动进行一些设置，让我们的编辑器更好用。

#### 关闭标签介绍信息

我们在编写代码的时候鼠标移动到某个标签上，经常会自动弹出一些介绍信息，挡住部分代码，给我们的阅读带来了很大的困难，一直没有找到关闭它的方法，目前可以通过设置时间延迟暂时实现这个效果，我设置的 5000 毫秒，你可以设置的更大一些，基本上它就不会弹出来了。

```
"editor.hover.delay": 5000
```

![](http://upload-images.jianshu.io/upload_images/2484592-2012684bddf2e150.jpg) image

#### 自动折行

设置代码根据编辑器窗口大小自动折行

```
"editor.wordWrap": "on"
```

![](http://upload-images.jianshu.io/upload_images/2484592-ecb1bc0a78243946.gif) image

#### 字体设置

```
// 一款适合代码显示的字体包（需要将字体包下载到本地）
      "editor.fontFamily": "Source Code Pro, 'Source Code Pro'",
      // 设置代码字体大小
      "editor.fontSize": 15,
```

#### 自动保存

目前有四个选项：

*   off：关闭自动保存。
*   afterDelay：当文件修改后的时间超过 "Files：Auto Save Delay" 中配置的值时自动进行保存。
*   onFocusChange：编辑器失去焦点时自动保存更新后的文件。
*   onWindowChange：窗口失去焦点时自动保存更新后的文件。

```
"files.autoSave": "off"
```

#### 关闭代码提示

```
"editor.quickSuggestions": { "other": false, "comments": false, "strings": false }
```