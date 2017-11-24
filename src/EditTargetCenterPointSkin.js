/**
 * Created by Wyp on 2017/11/23.
 * 当前角色编辑对象的中心点
 */
const twgl = require('twgl.js');

const Skin = require('./Skin');

class EditTargetCenterPointSkin extends Skin{

    constructor(id, renderer, editingTarget){
        super(id, renderer);
        this._renderer = renderer;
        this._editingTarget = editingTarget;
        this._canvas = document.createElement('canvas');
        this._setCanvasSize([24,24])
        this.draw();

    }
    get size () {
        return [this._canvas.width, this._canvas.height];
    }
    getTexture (scale) {
        /** @todo re-render a scaled version if the requested scale is significantly larger than the current render */
        if (this._canvasDirty) {
            this._canvasDirty = false;

            const gl = this._renderer.gl;
            gl.bindTexture(gl.TEXTURE_2D, this._texture);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this._canvas);
        }

        return this._texture;
    }
    _setCanvasSize (canvasSize) {
        const [width, height] = canvasSize;

        const gl = this._renderer.gl;
        this._canvas.width = width;
        this._canvas.height = height;
        this._rotationCenter[0] = width / 2;
        this._rotationCenter[1] = height / 2;
        this._texture = twgl.createTexture(
            gl,
            {
                auto: true,
                mag: gl.NEAREST,
                min: gl.NEAREST,
                wrap: gl.CLAMP_TO_EDGE,
                src: this._canvas
            }
        );
        this._canvasDirty = true;
        this.emit(Skin.Events.WasAltered);
    }
    drawPoint (penAttributes, x, y) {
        // Canvas renders a zero-length line as two end-caps back-to-back, which is what we want.
        this.drawLine(penAttributes, x, y, x, y);
    }

    /**
     * Draw a line on the pen layer.
     * @param {PenAttributes} penAttributes - how the line should be drawn.
     * @param {number} x0 - the X coordinate of the beginning of the line.
     * @param {number} y0 - the Y coordinate of the beginning of the line.
     * @param {number} x1 - the X coordinate of the end of the line.
     * @param {number} y1 - the Y coordinate of the end of the line.
     */
    drawLine (penAttributes, x0, y0, x1, y1) {
        const ctx = this._canvas.getContext('2d');
        this._setAttributes(ctx, penAttributes);
        ctx.beginPath();
        ctx.moveTo(this._rotationCenter[0] + x0, this._rotationCenter[1] - y0);
        ctx.lineTo(this._rotationCenter[0] + x1, this._rotationCenter[1] - y1);
        ctx.stroke();
        this._canvasDirty = true;
    }
    draw(){
        this.drawPoint({
            diameter: 24,
            color4f: [1, 1, 1, 0.8]
        }, 0, 0);
        this.drawPoint({
            diameter: 14,
            color4f: [0, 0, 0, 0.6]
        }, 0, 0);
    }

    _setAttributes (context, penAttributes) {

        const color4f = penAttributes.color4f;
        const diameter = penAttributes.diameter;

        const r = Math.round(color4f[0] * 255);
        const g = Math.round(color4f[1] * 255);
        const b = Math.round(color4f[2] * 255);
        const a = color4f[3];   // Alpha is 0 to 1 (not 0 to 255 like r,g,b)

        context.strokeStyle = `rgba(${r},${g},${b},${a})`;
        context.lineCap = 'round';
        context.lineWidth = diameter;
    }
}

module.exports = EditTargetCenterPointSkin;
