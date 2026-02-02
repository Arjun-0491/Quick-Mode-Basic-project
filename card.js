let billperson=document.querySelector(".billsection")

let carditem=[
    {
        image:"image/chikkan fry.jpg",
        h3:"Spicy Chicken",
        p:"Hot & crispy spicy chicken",
        amount:200,
        option1:"500g",
        option2:"1kg"
        
    },
    {
         image:"image/noodles.jpg",
        h3:"spl Noodles",
        p:"Hot noodles with red chilli",
        amount:250,
        option1:"500g",
        option2:"1kg"
    },{
          image:"image/burgar.jpg",
        h3:"Spicy Burger",
        p:"Loaded with spicy sauce",
        amount:240,
        option1:"500g",
        option2:"1kg"
    },{
         image:"https://images.unsplash.com/photo-1578985545062-69928b1d9587",
        h3:"Chocolate Cak",
        p:"Rich chocolate cream cake",
        amount:500
    },{
         image:"image/Strawberry Cake.png",
        h3:"Strawberry Cake",
        p:"Fresh strawberry flavor cake",
        amount:450
    },{
         image:"image/black-forest-cake.jpg" ,
        h3:"Black Forest",
        p:"Chocolate & cherry layered cake",
        amount:450,
        option1:"500g",
        option2:"1kg"
    },{
         image:"image/noodles.jpg",
        h3:"Spicy Noodles",
        p:"Hot noodles with red chilli",
        amount:180
    },{
         image:"image/noodles.jpg",
        h3:"Spicy Noodles",
        p:"Hot noodles with red chilli",
        amount:180

    }

    
    
]

let  cakecont=document.querySelector(".cake-container")
   function name(){
    for(let i=0; i<carditem.length; i++){
    const card=document.createElement("div")
    card.className="food-card"
     const image=document.createElement('img')
    image.src=carditem[i].image
      const h3=document.createElement("h3")
      h3.innerText=carditem[i].h3
    const paragrap=document.createElement("p") 
      paragrap.innerText=carditem[i].p
      const span=document.createElement('span')
        span.innerText=carditem[i].amount
        let divquty=document.createElement("div")
       divquty.className="div-quty"
       let inbutn=document.createElement("button")//increment
       inbutn.innerText="+"
      let divcount=document.createElement("div")
      divcount.innerText=0
      let decbutn=document.createElement("button")//decrement
       decbutn.innerText="-"
         let select=document.createElement("select")//select pending logic
         let option1=document.createElement("option")
         option1.innerText=carditem[i].option1
         let option2=document.createElement("option")
           option2.innerText=carditem[i].option2//select end
           let add=document.createElement("button")
             add.innerText="add"



        inbutn.onclick=()=>{
            divcount.innerText++
            span.innerText=span.innerText*divcount.innerText
        }
        decbutn.onclick=()=>{
            if (divcount.innerText>0) {
                divcount.innerText--
                span.innerText=span.innerText-carditem[i].amount

            }
        }

        
        add.onclick=()=>{
          let inside_billitem=document.createElement('div')  
               document.body.appendChild(inside_billitem)
               inside_billitem.className="bill"
               let h4=document.createElement("h4")
                    h4.innerText=carditem[i].p
                    let countfood=document.createElement("h4")
                    countfood.innerText=divcount.innerText
                    let amount=document.createElement("h4")
                        amount.innerText=span.innerText

               inside_billitem.appendChild(h4)
               inside_billitem.appendChild(countfood)
                inside_billitem.appendChild(amount)

        }
      cakecont.appendChild(card)
      card.append(image)
      card.appendChild(h3)
      card.appendChild(paragrap)
      card.appendChild(span)
      card.appendChild(divquty)
      divquty.appendChild(inbutn)////count qutity
      divquty.appendChild(divcount)
      divquty.appendChild(decbutn)///count qutity end
      divquty.appendChild(select)//selection tag
       select.appendChild(option1)
       select.appendChild(option2)//selection end
       divquty.appendChild(add)
     


    }
   }

   name()
 