# 作品集维护说明

## 1. 更换或新增图片

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
