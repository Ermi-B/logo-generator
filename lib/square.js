const Shapes = require('./shapes')
class Square extends Shapes{
    constructor(text,color){
        super(text,color)
    }

    render(){
        return `<svg viewBox="0 0 200 100">
        <polygon points="0,0 0,20 20,20 20,0" fill="${this.color}"/> 
        <text x="5" y="11" font-size="7" fill="white">${this.text}</text>
            </svg>`
    }
}


module.exports = Square