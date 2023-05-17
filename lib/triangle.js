
const Shapes = require('./shapes.js')
class Triangle extends Shapes{
    constructor(text,color){
        super(text,color)
    }

   render(){
    return `<svg viewBox="0 0 200 100">
    <polygon points="20,0 40,20 0,20" fill="${this.color}"/>
    <text x="15" y="15" fill="white" font-size="6">${this.text}</text>
    </svg>`
   }
}

module.exports = Triangle