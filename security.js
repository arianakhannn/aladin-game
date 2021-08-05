class Security{
    constructor(){
    this.access1= createInput("code 1")
    this.access1.position(100,100)
    this.button1= createButton("check")
    this.button1.position(100,150)
    this.access2= createInput("code 2")
    this.access2.position(600,200)
    this.button2= createButton("check")
    this.button2.position(600,250)
    this.access3= createInput("code 3")
    this.access3.position(100,400)
    this.button3= createButton("check")
    this.button3.position(100,450)
    }
display(){
this.button1.mousePressed(()=>{
    if(system.authenticate(accessCode1,this.access1.value())){
        this.button1.hide();
        this.access1.hide();
        score++

    }
})

this.button2.mousePressed(()=>{
    if(system.authenticate(accessCode2,this.access2.value())){
        this.button2.hide();
        this.access2.hide();
        score++

    }
})



this.button3.mousePressed(()=>{
    if(system.authenticate(accessCode3,this.access3.value())){
        this.button3.hide();
        this.access3.hide();
        score++

    }
})






}


}