新增作品放这里，不需要改网页代码。

文件夹结构：

assets/new-details/作品名称/01.jpg
assets/new-details/作品名称/02.jpg
assets/new-details/作品名称/03.jpg
assets/new-details/作品名称/meta.txt

图片文件名按 01、02、03 排序，就是详情页展示顺序。第一张默认当封面。

meta.txt 可以照抄这个模板：

标题=作品展示名称
主分类=平面设计
分类=详情页
标签=详情页,电商页面,儿童产品
简介=这里写作品简介，会显示在弹窗里。
修改记录=2026-06
显示记录=12

可用主分类：
平面设计
渲染作品

可用分类：
详情页
主图
视觉规范
AI 海报
合成海报
产品渲染
详情页卖点渲染
练习作品
动画展示

可选字段：

封面=02.jpg
卡片说明=一句很短的卡片说明
详情布局=grid

放好后，回到根目录双击 publish.bat。
它会先更新 extra-projects.js，再上传到 GitHub Pages。
