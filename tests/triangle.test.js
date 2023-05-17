const Triangle = require('../lib/triangle')
describe('Triangle',()=>{
    describe('render',()=>{
        const shape = new Triangle("SVG");
        shape.setColor("blue");
        it('should return svg',()=>{
            expect(shape.render()).toEqual(`<svg viewBox="0 0 200 100">
    <polygon points="20,0 40,20 0,20" fill="blue"/>
    <text x="15" y="15" fill="white" font-size="6">SVG</text>
    </svg>`)
        })
    })
})