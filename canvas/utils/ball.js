// 小球绘制
function Ball (x, y, radius, color) {
    // 小球中心坐标
    this.x = x || 0;
    this.y = y || 0;
    // 小球半径
    this.radius = radius || 12;
    // 颜色
    this.color = color || "#6699FF";
    this.scaleX = 1;
    this.scaleY = 1;
}

// 绘制“描边”小球
Ball.prototype.stroke = function (cxt) {
    cxt.save();
    cxt.scale(this.scaleX, this.scaleY);
    cxt.strokeStyle = this.color;
    cxt.beginPath();
    cxt.arc(this.x, this.y, this.radius, 0, 360* Math.PI/180, false);
    cxt.closePath();
    cxt.stroke();
    cxt.restore();
}

// 绘制“填充”小球
Ball.prototype.fill = function (cxt) {
    cxt.save();
    cxt.scale(this.scaleX, this.scaleY);
    this.strokeStyle = this.color;
    cxt.beginPath();
    cxt.arc(this.x, this.y, this.radius, 0, 360 * Math.PI/180, false);
    cxt.closePath();
    cxt.fill();
    cxt.restore();
} 