
const Circle = require('../lib/circle')
describe('Circle', () => {
    describe('render', () => {
      const shape = new Circle("svg");
      shape.setColor("blue")
      it('should return svg', () => {
        expect(shape.render()).toEqual(`<svg viewBox="0 0 200 100">
    <circle cx="10" cy="10" r="10" fill="blue"></circle>
    <text x="6" y="11" font-size="6" fill="white">svg</text>
    </svg>`);
      });
    });
  });