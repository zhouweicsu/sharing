const props = ['--fill-color','--radius','--caret-size','--caret-offset','--shadow','--offset'];

registerPaint('chat', class {
    static get inputProperties() { return props; }
    paint(ctx, geom, properties) {
        const defaultValues = ['#000', 0, 0, 0, 'no', 30];
        let [fillColor, radius, caretSize, caretOffset, shadow, offset] = props.map((name, i) => {
            return getProperty(properties, name, defaultValues[i]);
        });
        const borderWidth = 30;
        const shadowOffset = 5;

        if(shadow==='yes'){
            ctx.fillStyle = 'gray';
            ctx.strokeStyle = 'gray';
            //roundRect(ctx, borderWidth+shadowOffset, borderWidth+shadowOffset, geom.width-2*borderWidth,geom.height-2*borderWidth,radius);
            //triangle(ctx, borderWidth+caretOffset+radius+shadowOffset, geom.height-borderWidth+shadowOffset, caretSize);
        
            ctx.shadowColor = '#777';
            ctx.shadowBlur = 10;
            ctx.shadowOffsetX = 5;
            ctx.shadowOffsetY = 5;
        }
        ctx.fillStyle = fillColor;
        ctx.strokeStyle = fillColor;

        roundRect(ctx, borderWidth, borderWidth, geom.width-2*borderWidth, geom.height-2*borderWidth, radius);
        triangle(ctx, borderWidth+caretOffset+radius, geom.height-borderWidth, caretSize);

    }
});

function getProperty(properties, name, defaultValue){
    if(properties.get(name)){
        var value = properties.get(name).cssText.trim();
        if(parseInt(value)){
            return parseInt(value);
        }
        return value;
    }else {
        return defaultValue;
    }
}

//圆角矩形
function roundRect (ctx, x, y, w, h, r) {
    if (w < 2 * r) r = w / 2;
    if (h < 2 * r) r = h / 2;
    ctx.beginPath();
    ctx.moveTo(x+r, y);
    ctx.arcTo(x+w, y, x+w, y+h, r);
    ctx.arcTo(x+w, y+h, x, y+h, r);
    ctx.arcTo(x, y+h, x, y, r);
    ctx.arcTo(x, y, x+w, y, r);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
}

//三角形
function triangle (ctx, x, y, size) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x+size, y);
    ctx.lineTo(x+size, y+size);
    ctx.lineTo(x, y);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
}