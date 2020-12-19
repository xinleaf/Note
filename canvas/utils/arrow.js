function Arrow (x, y, color, angle) {
    //  箭头中心坐标
    this.x = x || 0;
    this.y = y || 0;
    // 颜色
    this.color = color || 'FF0099';
    // 旋转角度,默认值为0
    this.angle = angle || 0;
}
Arrow.prototype.stroke = function (cxt) {
    cxt.save();
    cxt.translate(this.x, this.y); // 移动
    cxt.rotate(this.angle);
    cxt.strokeStyle = this.color;
    cxt.beginPath();
    cxt.moveTo(-20, -10);
    cxt.lineTo(0, -10);
    cxt.lineTo(0, -20);
    cxt.lineTo(20, 0);
    cxt.lineTo(0, 20);
    cxt.lineTo(0, 10);
    cxt.lineTo(-20, 10);
    cxt.closePath();
    cxt.stroke();
    cxt.restore();
};

Arrow.prototype.fill =  function(cxt) {
    cxt.save();
    cxt.translate(this.x, this.y); // 移动
    cxt.rotate(this.angle);
    cxt.strokeStyle = this.color;
    cxt.beginPath();
    cxt.moveTo(-20, -10);
    cxt.lineTo(0, -10);
    cxt.lineTo(0, -20);
    cxt.lineTo(20, 0);
    cxt.lineTo(0, 20);
    cxt.lineTo(0, 10);
    cxt.lineTo(-20, 10);
    cxt.closePath();
    cxt.fill();
    cxt.restore();
}
