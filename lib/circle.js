
const Shapes = require('./shapes.js')
class Circle extends Shapes{
    constructor(text,color){
        super(text,color)
    }
    
   render(){
    return `<svg viewBox="0 0 200 100">
    <circle cx="10" cy="10" r="10" fill="${this.color}"></circle>
    <text x="6" y="11" font-size="6" fill="white">${this.text}</text>
    </svg>`
   }
}

module.exports = Circle