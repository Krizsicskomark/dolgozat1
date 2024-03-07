//File: index.html
//Author  Krizsicskó Márk
//Copyright: 2024, Krizsicskó Márk
//Group: Szoft I-1-N
//Date: 2024-03-07
//Github: https://github.com/krizsicskomark/
//Licenc: GNU GPL



const aInput = document.querySelector("#a")
const bInput = document.querySelector("#b")
const cInput = document.querySelector("#c")
const dInput = document.querySelector("#d")
const resultInput = document.querySelector("#area")
const calcButton = document.querySelector("#calcButton")

calcButton.addEventListener('click', (e) => {
    startcalc();
})

function startcalc(){
    const a = Number(aInput.value)
    const b = Number(bInput.value)
    const c = Number(cInput.value)
    const d = Number(dInput.value)
    const result = calcArea(a,b,c,d)
    
    resultInput.value = result
}

function calcArea(a,b,c,d){
    const felkerulet = (a+b+c+d) / 2 
    return Math.sqrt ((felkerulet-a)*(felkerulet-b)*(felkerulet-c)*(felkerulet-d))
}