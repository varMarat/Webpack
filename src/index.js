import './css/index.css'
import './scss/index.scss'

class Animals{
    constructor(a){
        this.a = a
    }
    sum(){
        console.log(this.a + 5)
    }
}

const animal = new Animals(5)

animal.sum()