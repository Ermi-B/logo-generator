const Square = require('../lib/square')
describe('Square',()=>{
    describe('render',()=>{
        const shape = new Square("SVG");
        shape.setColor("blue");
        it('should return svg',()=>{
            expect(shape.render()).toEqual(`<svg viewBox="0 0 200 100">
        <polygon points="0,0 0,20 20,20 20,0" fill="blue"/> 
        <text x="5" y="11" font-size="7" fill="white">SVG</text>
            </svg>`)
        })
    })
})