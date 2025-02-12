const input = document.querySelector('.input')
const container = document.querySelector('.container')
const addBtn = document.querySelector('#addBtn')





function sendToStorage(todo) {
    let storage ;

    if(localStorage.getItem("Todos") == null){
        storage= []
    }else{
        storage = JSON.parse(localStorage.getItem("Todos"))
    }
    
    let newItem = todo
    if (newItem) {
        storage.push(newItem)
        localStorage.setItem("Todos" , JSON.stringify(storage))    
    }

    return storage
}

function displayToUi(todo) {
    
    const wrapper = document.createElement('div')
    wrapper.classList.add('wrapper')

    const text = document.createElement('p')
    text.classList.add('text')
    text.innerText = todo 

    const btnDelete = document.createElement('button')
    btnDelete.classList.add('btnDelete')
    btnDelete.innerText= 'Delete' 

    

    wrapper.append(text, btnDelete )

    container.appendChild(wrapper)

}


function domContentLoadUi() {
    const todos = sendToStorage();

    todos.forEach( todo => {
       
        displayToUi(todo)         
    });
    
}

document.addEventListener('DOMContentLoaded' , domContentLoadUi() )

addBtn.addEventListener('click' , (e) => {
    e.preventDefault();


   if (!input.value) {
       return alert('please do not send empty field')
   } else {
        sendToStorage(input.value);

        displayToUi(input.value);

        input.value = "";

   }

})



container.addEventListener('click' , (e) => {
    const todos = sendToStorage();
    
    if (e.target.className == 'btnDelete') {
        

        const parent = e.target.parentElement
        console.log(todos);

        const index = todos.indexOf(e.target.previousElementSibling.innerText)

        todos.splice(index , 1)
        setTimeout(() => {
            parent.remove(parent)
        }, 500);

        localStorage.setItem("Todos" , JSON.stringify(todos))    

    }

    if (e.target.className == 'btnEdit') {
        const index = todos.indexOf(e.target.previousElementSibling.innerText)
    }
})