class System{
    constructor(){
    

    }
    authenticate(actualCode, enterCode){
textSize(50)
fill("white")
text(enterCode,300,300)
if(enterCode.toUpperCase()===actualCode){
return true
}
else{
    return false
}
    }
}