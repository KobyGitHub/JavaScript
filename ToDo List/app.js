document.addEventListener('DOMContentLoaded', function (){
    const ol = document.querySelector('#this')
    const box = document.querySelectorAll('input[type="checkbox"]')
    const form = document.querySelector('form')
    const submitBtn = document.querySelector('form button')
    const input = document.querySelector('form input')
    const li = document.createElement('li')
    const newCheck = document.createElement('input')
    newCheck.setAttribute('type', 'checkbox')
    const btn = document.createElement('button')
    btn.innerHTML = 'Remove' 
    // const theThing = document.querySelectorAll('ul li')

    form.addEventListener('click', function(e){
        e.preventDefault() 
    })
  
    ol.addEventListener('click', function(e){
        if (e.target.localName == 'input'){
            e.target.parentElement.append(btn)
        }
    })
    


    
    btn.addEventListener('click', function(e){
        e.target.parentElement.remove()
    })



    submitBtn.addEventListener('click', function(){
        const li = document.createElement('li')
        const newCheck = document.createElement('input')
        newCheck.setAttribute('type', 'checkbox')
        li.innerText = input.value + ' '
       input.value = ''
       ol.append(li)
    //    newCheck.addEventListener('click', function(e){
    //         if (newCheck.checked == true){
    //          e.target.parentElement.append(btn)
    //         }
    //     }) 
       li.prepend(newCheck)
        // console.log(newCheck)
    })

    // for (let things of theThing){
    //     things.addEventListener('click', function(e){
    //         e.target.value = things.innerText    
    //         // console.log(e.target)
    //     })
    // }
    // for (let things of theThing){
    //     for (let boxes of box){
    //         if (boxes.checked){
    //             localStorage.setItem(t, true)
    //         } else {
    //             localStorage.removeItem ('boxes.tagName')
    //         }

    //     }
    // }    

    
    

});






