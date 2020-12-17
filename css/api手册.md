## api手册

供个人使用，主要以生疏列举。不保证全面

##### user-select

> 用户是否可以选中

- 继承性：无
- 兼容性：IE10+
- 默认值：text

|  取值   |                             说明                             |      |
| :-----: | :----------------------------------------------------------: | ---- |
|  none   |                        文本不能被选择                        |      |
|  text   |                         可以选择文本                         |      |
|   all   | 当所有内容作为一个整体时可以被选择。如果双击或者在上下文上点击子元素，那么被选择的部分将是以该子元素向上回溯的最高祖先元素。 |      |
| element |           可以选择文本，但选择范围受元素边界的约束           |      |

###### 设置或检索是否允许用户选中文本

- IE6-9不支持该属性，但支持使用标签属性 `onselectstart="return false;"` 来达到 `user-select:none` 的效果；Safari和Chrome也支持该标签属性；
- 直到Opera12.5仍然不支持该属性，但和IE6-9一样，也支持使用私有的标签属性 `unselectable="on"` 来达到 `user-select:none` 的效果；unselectable 的另一个值是 off；
- 除Chrome和Safari外，在其它浏览器中，如果将文本设置为 `-ms-user-select:none;`，则用户将无法在该文本块中开始选择文本。不过，如果用户在页面的其他区域开始选择文本，则用户仍然可以继续选择将文本设置为 `-ms-user-select:none;` 的区域文本；
- 对应的脚本特性为**userSelect**。

```css
.box{
     -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
```



##### outline

> 绘制于元素周围的一条线，位于边框边缘的外围，可起到突出元素的作用。

- 属性设置（按顺序）： outline-color, outline-style, outline-width
- 继承性：无
- 兼容性： IE8+

|      值       |                   说明                    |      |
| :-----------: | :---------------------------------------: | ---- |
| outline-color |                边框的颜色                 |      |
| outline-style |                边框的样式                 |      |
| outline-width |                边框的宽度                 |      |
|    inherit    | 规定应该从父元素继承 outline 属性的设置。 |      |



##### outline-width

> 规定轮廓的宽度。不参与盒模型计算

- 默认值： medium

|    值    |                 说明                 | 备注                 |
| :------: | :----------------------------------: | -------------------- |
|   thin   |                细轮廓                |                      |
|  medium  |               中等轮廓               |                      |
|  thick   |                粗轮廓                |                      |
| [length] |        允许你规定轮廓粗细的值        | {outline-width：3px} |
| inherit  | 规定应该从父元素继承轮廓宽度的设置。 |                      |

##### outline-color

- 默认值： invert

|   值    |                             说明                             |      |
| :-----: | :----------------------------------------------------------: | ---- |
| [color] |                                                              |      |
| invert  | 执行颜色反转（逆向的颜色）。可使轮廓在不同的背景颜色中都是可见的 |      |
| inherit |                                                              |      |

##### outline-style

- 默认值： none

|   值    |                        说明                         |      |
| :-----: | :-------------------------------------------------: | ---- |
|  none   |                     定义无轮廓                      |      |
| dotted  |                      点状轮廓                       |      |
| dashed  |                      虚线轮廓                       |      |
|  solid  |                      实线轮廓                       |      |
| double  | 定义双线轮廓。双线的宽度等同于 outline-width 的值。 |      |
| groove  |  定义 3D 凹槽轮廓。此效果取决于 outline-color 值。  |      |
|  ridge  |  定义 3D 凸槽轮廓。此效果取决于 outline-color 值。  |      |
|  inset  |  定义 3D 凹边轮廓。此效果取决于 outline-color 值。  |      |
| outset  |  定义 3D 凸边轮廓。此效果取决于 outline-color 值。  |      |
| inherit |                                                     |      |

##### outline-offset

> 设置轮廓框架在 border 边缘外的偏移

- 兼容性： IE不兼容

|    值    |      |      |
| :------: | ---- | ---- |
| [length] |      |      |
| inherit  |      |      |

##### cusor

> 光标形状

- 兼容性： IE6+
- 默认值： auto

|  值  |          说明           | 备注                                                         |
| :--: | :---------------------: | ------------------------------------------------------------ |
| url  | 需使用的自定义光标的URL | 注释：请在此列表的末端始终定义一种普通的光标，以防没有由 URL 定义的可用光标。 |
|      |                         |                                                              |



##### zoom

> 设置或检索对象的缩放比例

- 兼容性： IE6+、Firefox不支持
- 继承性：yes
- 默认值： normal

|      值      |                说明                | 备注 |
| :----------: | :--------------------------------: | ---- |
|    normal    |         使用对象的实际尺寸         |      |
|   [number]   |   浮点数定义缩放比例。不允许负值   |      |
| [percentage] | 用百分比来定义缩放比例。不允许负值 |      |



##### box-sizing

> 允许以某种方式定义元素，以适应指定区域

- 兼容性： IE8+(IE8之前是boder-box)
- 默认值：content-box
- 继承性：no

- 

|     值      |                        说明                        | 备注 |
| :---------: | :------------------------------------------------: | ---- |
| content-box |          标准盒模型.width=实际的内容宽度           |      |
| border-box  | IE盒模型。width = 实际的内容宽度+2*padding+2*boder |      |
|   inherit   |                                                    |      |



##### resize

> 指定一个元素是否是由用户调整大小的。该属性适用于计算其他元素的溢出值是不是"visible"。

- 兼容性：IE不兼容
- 继承性：no
- 默认值： none

|     值     |             说明             |
| :--------: | :--------------------------: |
|    none    |   用户无法调整元素的尺寸。   |
|    both    | 用户可调整元素的高度和宽度。 |
| horizontal |    用户可调整元素的宽度。    |
|  vertical  |    用户可调整元素的高度。    |



##### border-radius

> 定义边框形状

- 兼容性： IE9+

#### 背景

##### background-clip

> 用于指定元素背景的绘制区域

- 兼容性：IE9+

|     值      |                      说明                      |
| :---------: | :--------------------------------------------: |
| border-box  | 默认值。背景绘制在边框方框内（剪切成边框方框） |
| padding-box |     背景绘制在衬距方框内（剪切成衬距方框）     |
| content-box |     背景绘制在内容方框内（剪切成内容方框）     |



##### background-origin

> 指定background-position属性应该是相对位置。

- 兼容性：IE9+

|     值      |            描述            |
| :---------: | :------------------------: |
| padding-box |  背景图像填充框的相对位置  |
| border-box  |  背景图像边界框的相对位置  |
| content-box | 背景图像的相对位置的内容框 |



##### background-size

> 指定背景图片大小

- 兼容性：IE9+

|     值     |                             说明                             | 备注                   |
| :--------: | :----------------------------------------------------------: | ---------------------- |
|   length   | 设置背景图片高度和宽度。第一个值设置宽度，第二个值设置的高度。如果只给出一个值，第二个是设置为 auto(自动) |                        |
| percentage | 将计算相对于背景定位区域的百分比。第一个值设置宽度，第二个值设置的高度。如果只给出一个值，第二个是设置为"auto(自动)" |                        |
|   cover    | 此时会保持图像的纵横比并将图像缩放成将完全覆盖背景定位区域的最小大小。 |                        |
|  contain   | 此时会保持图像的纵横比并将图像缩放成将适合背景定位区域的最大大小 | 最大程度的显示全背景图 |



#### css3边框

##### box-shadow

> 设置边框阴影。box-shadow: h-shadow v-shadow blur spread color inset;

- 兼容性：IE 9+

- 继承性： no

  |    值    |                       说明                        |
  | :------: | :-----------------------------------------------: |
  | h-shadow |         必需的。水平阴影的位置。允许负值          |
  | v-shadow |         必需的。垂直阴影的位置。允许负值          |
  |   blur   |                  可选。模糊距离                   |
  |  spread  |                 可选。阴影的大小                  |
  |  color   | 可选。阴影的颜色。在CSS颜色值寻找颜色值的完整列表 |
  |  inset   |   可选。从外层的阴影（开始时）改变阴影内侧阴影    |



##### border-image

> 设置边框图像。border-image: source slice width outset repeat|initial|inherit;

- 兼容性：IE11+

| 值                                                           | 描述                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [border-image-source](https://www.html.cn/book/css/properties/border/border-image-source.htm) | 指定要用于绘制边框的图像的位置                               |
| [border-image-slice](https://www.html.cn/book/css/properties/border/border-image-slice.htm) | 图像边界向内偏移                                             |
| [border-image-width ](https://www.html.cn/book/css/properties/border/border-image-width.htm) | 图像边界的宽度                                               |
| [border-image-outset ](https://www.html.cn/book/css/properties/border/border-image-outset.htm) | 指定在边框外部绘制 border-image-area 的量                    |
| [border-image-repeat](https://www.html.cn/book/css/properties/border/border-image-repeat.htm) | 设置图像边界是否应重复（repeat）、拉伸（stretch）或铺满（round） |

 



#### 文字相关

##### font-style

> 指定文本的字体样式

- 兼容性：all
- 继承性：yes

|   值    |                  说明                  |
| :-----: | :------------------------------------: |
| normal  | 默认值。浏览器显示一个标准的字体样式。 |
| italic  |    浏览器会显示一个斜体的字体样式。    |
| oblique |    浏览器会显示一个倾斜的字体样式。    |
| inherit |     规定应该从父元素继承字体样式。     |



##### font-weight

> 字体粗细。400 等同于 normal，而 700 等同于 bold。



##### text-align



##### text-align-last

> 规定如何对齐文本的最后一行；该属性只在text-align:justify时才起作用。

- 兼容性： IE6+、safrai不支持
- 默认值：auto
- 继承性：yes

|   值    |                             说明                             |
| :-----: | :----------------------------------------------------------: |
|  auto   |             默认值。最后一行被调整，并向左对齐。             |
|  left   |                      最后一行向左对齐。                      |
|  right  |                      最后一行向右对齐。                      |
| center  |                      最后一行居中对齐。                      |
| justify |                  最后一行被调整为两端对齐。                  |
|  start  | 最后一行在行开头对齐（如果 text-direction 是从左到右，则向左对齐；如果 text-direction 是从右到左，则向右对齐）。 |
|   end   | 最后一行在行末尾对齐（如果 text-direction 是从左到右，则向右对齐；如果 text-direction 是从右到左，则向左对齐）。 |
| initial | 设置该属性为它的默认值。[请参阅 initial。](https://www.html.cn/book/css/values/textual/initial.htm) |
| inherit | 从父元素继承该属性。[请参阅 inherit。](https://www.html.cn/book/css/values/textual/inherit.htm) |



##### text-justify

> 当text-align: justify时。指定怎样对齐文本以及对齐间距

- IE专属
- 继承性： yes



##### text-overflow

> 指定当文本溢出包含它的元素，应该发生什么

- 继承性：无
- 兼容性： IE6+

|    值    |                说明                |      |
| :------: | :--------------------------------: | ---- |
|   clip   |              修剪文本              |      |
| ellipsis |   显示省略符号来代表被修剪的文本   |      |
|  string  | 使用给定的字符串来代表被修剪的文本 |      |



##### white-space

> 设置如何处理元素内的空白

- 兼容性：任何的版本的 Internet Explorer （包括 IE8）都不支持属性值 "inherit"。
- 继承性：yes
- 默认值：normal

|    值    |                             说明                             |
| :------: | :----------------------------------------------------------: |
|  normal  |                  默认。空白会被浏览器忽略。                  |
|   pre    |  空白会被浏览器保留。其行为方式类似 HTML 中的 <pre> 标签。   |
|  nowrap  | 文本不会换行，文本会在在同一行上继续，直到遇到 <br> 标签为止。 |
| pre-wrap |             保留空白符序列，但是正常地进行换行。             |
| pre-line |               合并空白符序列，但是保留换行符。               |
| inherit  |         规定应该从父元素继承 white-space 属性的值。          |





##### text-shadow

> 用于向文本设置阴影。可以向文本添加一个或多个阴影，用逗号分隔。text-shadow: h-shadow v-shadow blur color;

- 兼容性： IE10+

- 继承性：yes

  |    值    |                             描述                             |
  | :------: | :----------------------------------------------------------: |
  | h-shadow |               必需。水平阴影的位置。允许负值。               |
  | v-shadow |               必需。垂直阴影的位置。允许负值。               |
  |   blur   |                      可选。模糊的距离。                      |
  |  color   | 可选。阴影的颜色。参阅 [CSS 颜色值](http://a.python2.com/css/css/136.html)。 |



##### word-break

> 指定”非中日韩“脚本的断行规则。

- 兼容性：IE6+
- 继承性：yes
- 默认值： normal

|    值     |             说明             |      |
| :-------: | :--------------------------: | ---- |
|  normal   |   使用浏览器默认的换行规则   |      |
| break-all |       允许在单词内换行       |      |
| keep-all  | 只能在半角空格或连字符处换行 |      |



##### word-wrap

> 允许长的内容可以换行。

- 兼容性：IE6+
- 继承性：yes
- 默认值： normal

|     值     |                     说明                     |
| :--------: | :------------------------------------------: |
|   normal   | 只在允许的断字点换行（浏览器保持默认处理）。 |
| break-word |      在长单词或 URL 地址内部进行换行。       |



#### 多列

- 列相关兼容性均为IE10+、无继承性
- 属性暂时不枚举，需要时再说

##### columns

> 指定容器分为几列。文本流默认从左到右列满切换。columns: column-width column-count;

- 兼容性：IE10+
- 继承性：no



##### column-width

> 列宽

- 默认值： auto

##### column-count

> 指定某个元素应分为的列数。

|    值    |                    说明                    |
| :------: | :----------------------------------------: |
| [number] |   列的最佳数目将其中的元素的内容无法流出   |
|   auto   | 列数将取决于其他属性，例如："column-width" |



##### column-gap

> 指定列之间的间距

|   值   |                  说明                   |
| :----: | :-------------------------------------: |
| length |   一个指定的长度，将设置列之间的差距    |
| normal | 指定一个列之间的普通差距。 W3C建议1EM值 |



#### 图片相关

##### 缩略图

##### 响应式图片

```css
img{
    max-width: 100%;
    height: auto;
}
```

##### 图片滤镜

```css
.demo{
	-webkit-filter: grayscale(60%); /* Chrome, Safari, Opera */
    filter: grayscale(50%);
}
```

##### 卡片式图片

```css
div.box {
  width:500px;
  background-color: #cfd9cd;
  box-shadow: 0 10px 8px 0 rgba(202, 34, 34, 0.2), 0 6px 20px 0 rgba(127, 7, 7,0.19);
  margin-bottom: 25px;

}
img{
	margin-left: 22px;
	margin-top:18px;
}
div.content {
  text-align: center;
  padding: 10px 20px;
}
```

#### other

##### 面包屑导航

```css
ul{
    padding: 8px 16px;
    list-style: none;
    background-color: #eee;
}
ul li {display: inline;}
ul li+li:before {
    padding: 8px;
    color: black;
    content: "/\00a0";/*表示/的意思*/
}
li a {
    color: #444;
 	list-style: none;
}
```

