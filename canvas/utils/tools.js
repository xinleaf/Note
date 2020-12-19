// 将tools定义为window上的属性
window.tools = {};

// 获取鼠标位置
window.tools.getMouse = function (element) {
    // 定义一个mouse对象
    var mouse = {x: 0, y: 0}
    // 为传入的元素添加mousemove事件
    addEvent(element, 'mousemove', function(e) {
        var x, y;
        // 在IE中，event对象是作为window对象的一个属性存在
        var e = e || window.event;
        // 获取鼠标位置，并作兼容处理
        // 兼容FirFox, chrome、IE9+
        if (e.pageX || e.pageY) {
            x = e.pageX;
            y = e.pageY;
        } else {
            // 兼容IE8-、以及混杂模式下的chrome和safari
            x = e.clientX + document.body.scrollLeft || document.documentElement.scrollLeft;
            y = e.clientY + document.body.scrollTop || document.documentElement.scrollTop;
        }
        // 将当前的坐标值减去canvas元素的偏移位置，则x、y为鼠标在canvas中的相对坐标
        x -= element.offsetLeft;
        y -= element.offsetTop;
        mouse.x = x;
        mouse.y = y;
    });
    return mouse;
}

// 获取键盘控制方向
window.tools.getKey = function () {
    var key = {};
    window.addEventListener('keydown', function(e) {
        // 由于keyCode将被弃用，采用key监听（需要注意到‘大写锁定’）
        // ArrowUp
        if (e.key === 'w' || e.key === 'W' || e.key === 'ArrowUp') {
            key.direction = 'up';
        } else if (e.key === 's' || e.key === 'S' || e.key === 'ArrowDown') {
            key.direction = 'down';
        } else if (e.key === 'a' || e.key === 'A' || e.key === 'ArrowLeft') {
            key.direction = 'left';
        } else if (e.key === 'd' || e.key === 'D' || e.key === 'ArrowRight') {
            key.direction = 'right';
        } else {
            key.direction = '';
        }
        // console.log('getKey-e:', e)
    }, false);
    // console.log('return-key:', key)
    return key;
}

// requestAnimationFrame-兼容性处理
window.requestAnimationFrame = (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    function (callback) {
        return window.setTimeout(callback, 1000/60);
    }
);

function addEvent(el, eventType, callback) {
    el.addEventListener(eventType, callback);
}
function $(selector) {
    return document.querySelectorAll(selector);
}
function $$(id) {
    return document.getElementById(id);
}