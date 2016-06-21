﻿##UI开发框架

框架适合PC端（响应式）和移动端（自适应）制作，陆续更新中，不断实践和修复bug。

##项目的文件解释

src/css/onebase.css是底层文件，没有设置任何关于数值的属性。

src/css/style.css是设置关于有数值的样式的文件（有响应式栅格）。

src/css/t.css是设置关于组件样式的文件。

##移动端开发

规则1：要求设计师设计的PSD宽度为640px或其他标准尺寸，但DPI必须是为72,这样才接近一比一还原。

规则2：在html文件的head中，都加了一段js，实现动态改变根元素的值令字体与盒子模型的值等比例缩放，从而告别

繁琐的媒体查询。★★★（变量maxW就是设计稿的画布宽度值）★★★

规则3：样式表里的单位写px，已内置gulp-px3rem，建议用Flexbox布局。

##PC端开发

文件名为src/cc.html里有案例，对于平常用的Bootstrap框架的同学一下就能看懂，本框架只采用栅格系统用于自己的项目中。

这里有篇文章讲得挺好的，推荐一下，希望对大家有帮助（对布局与设计的讲得很好）。

https://www.douban.com/note/489518516/

##关于工作流

框架配有gulp内置的插件，有需要的朋友可以自行修改里面的代码。


