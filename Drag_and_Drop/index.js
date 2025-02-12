const draggableElements= document.querySelectorAll(".draggableElement")
const wrappers = document.querySelectorAll(".wrapper")

draggableElements.forEach((draggableElement) => {
    draggableElement.addEventListener('dragstart', () =>{
        draggableElement.classList.add('drag')
    })

    draggableElement.addEventListener('dragend', () =>{
        draggableElement.classList.remove('drag')
    })
})

wrappers.forEach(wrapper => {
    wrapper.addEventListener('dragover', (e) => {
        e.preventDefault();
        const afterElement = getAfterElement(wrapper,e.clientY)
        const dragElement = document.querySelector('.drag')
        if(afterElement == null){
            wrapper.appendChild(dragElement)
        }else {
            wrapper.insertBefore(dragElement , afterElement)
        }
    })
})

function getAfterElement (wrapper , y){
     
    const draggableElements = [...wrapper.querySelectorAll('.draggableElement:not(.drag)')]

    return draggableElements.reduce(( closest , child ) => {
        const box = child.getBoundingClientRect()
        const offset = y - box.top - box.height /2
        if (offset < 0 && offset > closest.offset){
            return { offset: offset , element: child }
        }else {
            return closest
        }
    }, { offset : Number.NEGATIVE_INFINITY }).element
}



