/**
 * Created by Wyp on 2017/7/17.
 */
const twgl = require('twgl.js');

const RenderConstants = require('./RenderConstants');
const PenSkin = require('./PenSkin');



class CheckerSkin extends PenSkin {
    /**
     * Create a Skin which implements a Scratch pen layer.
     * @param {int} id - The unique ID for this Skin.
     * @param {RenderWebGL} renderer - The renderer which will use this Skin.
     * @extends PenSkin
     */
    constructor (id, renderer, xLeft, xRight, yBottom, yTop) {
        super(id, renderer);
        this._xLeft = xLeft;
        this._xRight = xRight;
        this._yBottom = yBottom;
        this._yTop = yTop;
        this.drawChecker();
    }
    drawChecker(){
        var xLeft = this._xLeft;
        var  xRight = this._xRight;
        var yBottom = this._yBottom ;
        var  yTop = this._yTop;

        var mainAxis = {
            coordinates: [{ x0: xLeft, y0: 0, x1: xRight, y1: 0 }, { x0: 0, y0: yBottom, x1: 0, y1: yTop }],
            penAttributes: {
                diameter: 2,
                color4f: [0.2, 0.6, 0.6, 0.8]
            }
        };
        this.drawText({text: 0, y: 0, x: 0});
        var unitAxis = {
            coordinates: [],
            penAttributes: {
                diameter: 1,
                color4f: [0.2, 0.6, 0.6, 0.6]
            }
        };
        var baseCoord = 100;
        while(baseCoord < xRight){
            unitAxis.coordinates.push({ x0: baseCoord, y0: yBottom, x1: baseCoord, y1: yTop });
            unitAxis.coordinates.push({ x0: -baseCoord, y0: yBottom, x1: -baseCoord, y1: yTop });
            this.drawText({text: baseCoord, y: 0, x: baseCoord});
            this.drawText({text: -baseCoord, y: 0, x: -baseCoord});
            baseCoord += 100;
        }
        baseCoord = 100;
        while(baseCoord < yTop){
            unitAxis.coordinates.push({ x0: xLeft, y0: baseCoord, x1: xRight, y1: baseCoord });
            unitAxis.coordinates.push({ x0: xLeft, y0: -baseCoord, x1: xRight, y1: -baseCoord });
            this.drawText({text: -baseCoord, x: 0, y: baseCoord});
            this.drawText({text: baseCoord, x: 0, y: -baseCoord});
            baseCoord += 100;
        }

        var detailAxis = {
            coordinates: [],
            penAttributes: {
                diameter: 0.5,
                color4f: [0.2, 0.6, 0.6, 0.5]
            }
        };
        baseCoord = 0;
        while(baseCoord < xRight){
            baseCoord += 20;
            if(baseCoord%100 === 0) continue;
            detailAxis.coordinates.push({ x0: baseCoord, y0: yBottom, x1: baseCoord, y1: yTop });
            detailAxis.coordinates.push({ x0: -baseCoord, y0: yBottom, x1: -baseCoord, y1: yTop });

        }
        baseCoord = 0;
        while(baseCoord < yTop){
            baseCoord += 20;
            if(baseCoord%100 === 0) continue;
            detailAxis.coordinates.push({ x0: xLeft, y0: baseCoord, x1: xRight, y1: baseCoord });
            detailAxis.coordinates.push({ x0: xLeft, y0: -baseCoord, x1: xRight, y1: -baseCoord });
        }

        this.drawAxis(mainAxis);
        this.drawAxis(unitAxis);
        this.drawAxis(detailAxis);
    }
    drawAxis(axisData) {
        var i;
        for(i = 0; i < axisData.coordinates.length; i++){
            var c = axisData.coordinates[i];
            this.drawLine(axisData.penAttributes, c.x0, c.y0, c.x1, c.y1);
        }
    }
    drawText(textAttr){
        const ctx = this._canvas.getContext('2d');
        ctx.font = '14px consolas';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'Middle';
        var r,g,b,a;
        r = 0.2; g =  0.6; b = 0.6;

        a = 0.8;
        ctx.fillStyle = "#00ffff";//`rgba(${r},${g},${b},${a})`;
        ctx.strokeStyle = "#00ffff";//`rgba(${r},${g},${b},${a})`;
        ctx.strokeText(textAttr.text, this._rotationCenter[0] + textAttr.x, this._rotationCenter[1] + textAttr.y);
        // ctx.font = 'bold 144px arial';
        // ctx.fillStyle = 'red';
        // ctx.fillText('World', 300,300);
    }
}

module.exports = CheckerSkin;




