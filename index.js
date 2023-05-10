
const addItemBtn = document.getElementById('add-item-btn')
const itemInput = document.getElementById('item-input')
const list = document.getElementById('list')

const shoppingList = []
    
addItemBtn.addEventListener('click', function(){
    if(!shoppingList.includes(itemInput.value) &&  !itemInput.value == false){
        shoppingList.push(itemInput.value)      
    }
    itemInput.value = ''
        render()   
})

function render(){    
    let html = ''
    for (let item of shoppingList){
        html+= `<li class="list-item">${item}</li>`
    }
    list.innerHTML = html
}