function scrollFunction() {
    console.log('descendo')
}

const div = document.querySelector('.img')

const img = document.querySelector('.img img')

let porcentagemMargens = (20 * window.innerWidth) / 100;

window.addEventListener('scroll' , function(event) {
    // console.log(this.window.scrollY)

    console.log(this.window.innerWidth)

    if(this.window.scrollY <=428 ){
        img.style.transform = 'rotate(-4e-05deg) rotateY(15deg) rotateX(9.99994deg)'
    }

    if(this.window.scrollY > 390){
        div.style.top = `${this.window.scrollY + 10}px`
    }

    if(this.window.scrollY >= 500){
        img.style.transform = `translateX(${this.window.innerWidth - 650 - porcentagemMargens}px) rotate(-4e-05deg) rotateY(345deg) rotateX(9.99994deg)`
    }

    if(this.window.scrollY >= 1300){
        img.style.transform = 'rotate(-4e-05deg) rotateY(15deg) rotateX(9.99994deg)'
    }

    // if(this.window.scrollY < 300){
    //     img.style.transform = 'rotate(-4e-05deg) rotateY(15deg) rotateX(9.99994deg)'
    //     div.style.top = `${300}px`;
    // }

    // if(this.window.scrollY >=300 ){
    //     img.style.transform = 'translateX(80%) rotate(-4e-05deg) rotateY(345deg) rotateX(9.99994deg)'
    //     div.style.top = `${this.window.scrollY + 300}px`;
    // }
})