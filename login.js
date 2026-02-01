
let countp=document.getElementById("count-numeber")

let foodamout=document.getElementById("amount-food")
let carditemname=document.getElementById("item-name").innerText
let count=0
let amount=document.getElementById("amount-food").innerText
let Qutity=document.getElementById("qutity").value
let a=Number(amount)


function increment(){
   
count++

foodamout.innerText=a*count



countp.innerHTML=count

 


}


function decrement(){
    
        count--
   


if (count==0) {
    foodamout.innerText=a
}
else{
foodamout.innerText=foodamout.innerText-a
}
countp.innerHTML=count

}


function amountaddbar(){
    count=0
const amount_div=document.createElement("div")
let frstdiv=document.createElement("div")
frstdiv.innerText=carditemname
let seconddiv=document.createElement("div")
seconddiv.innerText=Qutity
let threediv=document.createElement("div")
threediv.innerText=foodamout.innerText

amount_div.appendChild(frstdiv)
amount_div.appendChild(seconddiv)
amount_div.appendChild(threediv)
document.body.appendChild(amount_div)
amount_div.style.display="flex"
amount_div.style.marginLeft="300px"
amount_div.style.width="500px"
amount_div.style.justifyContent="space-between"
}


