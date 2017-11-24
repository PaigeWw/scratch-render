/**
 * Created by Wyp on 2017/7/24.
 */
const twgl = require('twgl.js');

const RenderConstants = require('./RenderConstants');
const PenSkin = require('./PenSkin');

class EditTargetBoxSkin extends PenSkin {
    /**
     * Create a Skin which implements a Scratch pen layer.
     * @param {int} id - The unique ID for this Skin.
     * @param {RenderWebGL} renderer - The renderer which will use this Skin.
     * @extends PenSkin
     */
    constructor (id, renderer, editTarget,targetDrawable) {
        super(id, renderer);
        this.target = editTarget;
        this.points = [];
    }
    drawBox(){
        // var xLeft = this._xLeft;
        // var  xRight = this._xRight;
        // var yBottom = this._yBottom ;
        // var  yTop = this._yTop;
        //
        // var mainAxis = {
        //     coordinates: [{ x0: xLeft, y0: 0, x1: xRight, y1: 0 }, { x0: 0, y0: yBottom, x1: 0, y1: yTop }],
        //     penAttributes: {
        //         diameter: 2,
        //         color4f: [0.6, 0.6, 0.6, 0.3]
        //     }
        // };

    }
}

module.exports = EditTargetBoxSkin;




