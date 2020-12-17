## html5代码片段集



#### data-*属性

```html
<div id='test' class="test" data-a="this a value" data-b="this is b"></div>
```

```js
var testBox = document.getElementById('test');
// t1
testBox.getAttribute('data-a'); // this a value
testBox.getAttribute('data-b'); // this is b

// t2
var data = testBox.dataset;
data.a; // this a value
data.b; // this is b
```

##### dataset

- 兼容性：IE10+

```js
function getDataset(ele){
    if(ele.dataset){
        return ele.dataset;
    }else{
        var attrs = ele.attributes,//元素的属性集合
            dataset = {},
            name,
            matchStr;

        for(var i = 0;i<attrs.length;i++){
            //是否是data- 开头
            matchStr = attrs[i].name.match(/^data-(.+)/);
            if(matchStr){
                //data-auto-play 转成驼峰写法 autoPlay
                name = matchStr[1].replace(/-([\da-z])/gi,function(all,letter){
                    return letter.toUpperCase();
                });
                dataset[name] = attrs[i].value;
            }
        }
        return dataset;
    }
}
```

##### 通过css访问

```css
/*attr访问*/ 
.test::before {
    content: attr(data-a);
}
/*属性选择器*/
div[data-a="this a value"] {
    border-width: 1px;
}
```

##### 修改信息

```js
testBox.dataset.a = 'update a';
testBox.setAttribute('data-b', 'update b');
```

