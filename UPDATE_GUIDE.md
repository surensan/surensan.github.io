# 作品集维护说明

## 最简单的新增详情页方法

不用改 `app.js`。

1. 打开这个文件夹：

```text
F:\Codex\作品集\assets\new-details
```

2. 新建一个项目文件夹，文件夹名就是网页里的项目名，例如：

```text
儿童学习桌详情页
```

3. 把详情页图片放进去，按展示顺序命名：

```text
01.jpg
02.jpg
03.jpg
```

4. 如果想自定义简介，在项目文件夹里新建：

```text
description.txt
```

里面写一段中文说明即可。

如果想显示版权时间戳式的月度修改记录，再新建：

```text
meta.txt
```

内容示例：

```text
修改记录=2026-06,2026-07,2026-08
显示记录=12
```

网页会显示为：

```text
修改记录 2026-06 / 2026-07 / 2026-08
```

小修改不想给 HR 看到，就不要把那个月份写进 `meta.txt`。

5. 回到 `F:\Codex\作品集`，双击：

```text
publish.bat
```

它会自动更新 `extra-projects.js`，然后上传到 GitHub。

## 只更新清单但不上传

如果你只想本地预览，不想上传，可以运行：

```powershell
cd F:\Codex\作品集
.\update-projects.ps1
```

## 上传更新到网页

最简单方式：双击根目录的 `publish.bat`。

等待 1-3 分钟后刷新：

```text
https://surensan.github.io
```

## 自己替换封面

可以。只要你替换的是同一个文件路径，我后续修改其他代码时会保留你的封面。

例如你想替换儿童自行车详情页封面，就替换：

```text
assets/covers/detail-page-17.jpg
```

注意：如果让我重新从 PDF 生成封面，才可能覆盖它。平时改布局、改文字、改分类，不会动你的封面。

## 渲染分类

现在渲染作品分为：

```text
详情页卖点渲染
产品渲染
动画
练习作品
```

如果只是新增详情页，用 `assets/new-details` 就够了。

如果你想自己新增“全新的分类按钮”，目前需要改 `app.js` 里的 `categoryLabels` 和 `subFilterMap`。你可以告诉我分类名，我帮你加一次；后面同类项目就可以继续复用。

## 1. 手动更换或新增图片

把新图片放到：

```text
assets/extracted/
```

建议使用英文文件名，例如：

```text
new-project-01.jpg
```

然后打开 `app.js`，在 `projects` 数组里新增或修改项目：

```js
imageProject(
  999,
  "项目标题",
  "2d",
  "detail",
  page("new-project-01.jpg"),
  [page("new-project-01.jpg")],
  ["详情页", "电商视觉"],
  "项目简介和卖点说明。"
)
```

## 2. 新增视频

把 MP4 放到：

```text
assets/videos/
```

然后在 `app.js` 里新增：

```js
videoProject(
  1000,
  "视频项目标题",
  "3d",
  "animation",
  page("video-cover.jpg"),
  video("your-video.mp4"),
  ["动画", "产品展示"],
  "视频项目说明。"
)
```

## 3. 修改分类

主要分类：

```text
2d = 平面设计
3d = 渲染作品
```

子分类在 `app.js` 的 `categoryLabels` 和 `subFilterMap` 里维护。

## 4. 修改网页布局

- 页面结构：`index.html`
- 视觉样式：`style.css`
- 作品数据与筛选逻辑：`app.js`

## 5. 上传到 GitHub Pages

每次改完后，在 PowerShell 里执行：

```powershell
cd F:\Codex\作品集
git add .
git commit -m "Update portfolio"
git push -u origin main
```

上传成功后等待 1-3 分钟，访问：

```text
https://surensan.github.io
```
