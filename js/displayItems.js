
import data from '.././products.json' with {type: "json"};


    

function displayItems(items) {
    let content = document.getElementById('content')
    let item;

    let title = document.getElementById('title')
    title.classList.add('title')
    
    let titleDelivery= document.createElement('p')
    titleDelivery.classList.add('titleDelivery')
    titleDelivery.textContent="משלוחים חינם בפסגות אפק"

    let titleType= document.createElement('h1')
    titleType.classList.add('titleType')
    titleType.textContent="כלי כתיבה"


    let titleImg = document.createElement('img')
    titleImg.classList.add('titleImg')
    titleImg.src = "../imgs/pic1.png"

    title.appendChild(titleDelivery)
    title.appendChild(titleType)
    title.appendChild(titleImg)
   
    for (let i = 0; i < items.length; i++) {
        item = document.createElement('div')
        item.classList.add('item')

        let imgDiv = document.createElement('div')
        imgDiv.classList.add('imgDiv')
        let img = document.createElement('img');
        img.src = items[i].image;
        img.alt = items[i].title;
        img.classList.add('img')
        imgDiv.appendChild(img)

        let txtDiv = document.createElement('div');
        txtDiv.classList.add('txtDiv')
        let txt = document.createElement('p');
        txt.innerText = items[i].title;
        txtDiv.appendChild(txt)

        let buyDiv = document.createElement('div');
        buyDiv.classList.add('buyDiv')

        let price = document.createElement('p')
        price.innerText = "₪ " + " " + items[i].price;
        price.classList.add('price')

        let cart = document.createElement('button')
        cart.classList.add('cartBtn')
        cart.innerText = "הוספה לסל"

        buyDiv.appendChild(cart)
        buyDiv.appendChild(price)


        item.appendChild(txtDiv)
        item.appendChild(imgDiv)
        item.appendChild(buyDiv)
        content.appendChild(item)
    }
}
displayItems(data.craft)
