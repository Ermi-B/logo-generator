class Shapes{
    constructor(text,color,shape){
        this.text = text
        this.color = color
        this.shape = shape
    }
    setText(text){

    }

    setColor(color){
        
    }

    render(){
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
    
        <circle cx="150" cy="100" r="80" fill="green"/>
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">aaa</text>
      
      </svg>`
       }
}

module.exports = Shapes