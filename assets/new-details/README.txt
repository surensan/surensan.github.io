以后新增详情页项目，按这个结构放：

assets/new-details/项目名称/01.jpg
assets/new-details/项目名称/02.jpg
assets/new-details/项目名称/03.jpg

文件名按 01、02、03 排序，就是详情页展示顺序。
放好后，双击或运行根目录的 update-projects.ps1。

如果想显示修改时间线，可以在项目文件夹里新建 meta.txt：

修改记录=2026-06,2026-07,2026-08
显示记录=12

不想显示某次小修改，就不要把那个月份写进 meta.txt。
