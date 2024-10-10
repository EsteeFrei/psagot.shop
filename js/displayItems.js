
import  data  from '.././products.json' with {type: "json"};
console.log("gyjfcjxzytshxy");

console.log(data.notebooks);


function displayItems() {
    let content = document.getElementById('content')
    let item;
    for (let i = 0; i < data.notebooks.length; i++) {
        item = document.createElement('div')
        item.classList.add('item')
        let img = document.createElement('img');
        img.src = data.notebooks[i].image; 
        img.alt = data.notebooks[i].title; 
        img.classList.add('img')
        let txt = document.createElement('h3'); 
        txt.innerText = data.notebooks[i].title; 
        img.classList.add('img')
        item.appendChild(txt)
        item.appendChild(img)
        content.appendChild(item)
        console.log(i);
        
    }
    // for (let j = 0; j < data.craft.length; j++) {
    //     item = document.createElement('div')
    //     item.classList.add('item')
    //     let img = document.createElement('img');
    //                 img.src = data.craft[j].image; 
    //                 img.alt = data.craft[j].title; 
    //     item.appendChild(img)
    //     content.appendChild(item)
    //     console.log(j);
        
    // }
}

displayItems()
