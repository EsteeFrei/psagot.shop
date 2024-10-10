
import  notebooks  from '..products.json/' assert {type: "json"}
import { craft } from './products'


console.log(notebooks);

function displayItems() {
    let content = document.getElementById('content')
    let item;
    for (let i = 0; i < notebooks.length; i++) {
        item = document.createElement('div')
        item.innerText(notebooks[i].image)
        content.appendChild(item)

    }
}
