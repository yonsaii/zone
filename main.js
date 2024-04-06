class Text {
    constructor(obj){
        this.text = document.querySelector(obj.text);
        this.fullText = this.text.innerHTML
        this.text.innerHTML = ''
        this.str()
    }
    str(x = 0){
        this.text.innerHTML += this.fullText[x]
        x++
        if(x < this.fullText.length){
            setTimeout(() => {
                this.str(x)
            }, 65);
        }
    }
}

const text = new Text({
    text: '.main_text'
})

class Parallax {
    constructor(obj){
        this.start   = document.querySelector(obj.start);
        this.end     = document.querySelector(obj.end);
        
        window.addEventListener('scroll', () => { this.moveElements() })
    }
    moveElements(){
        this.start.style.transform = `translateX(${window.scrollY - 1800}px)`
        this.end.style.transform = `translateX(${window.scrollY -2500}px)`
    }
}

const parallax = new Parallax({
    start: '.start',
    end: '.end'
})