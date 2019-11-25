let mobile = document.querySelector('#mobile'),
    desktop = document.querySelector('#desktop'),
    tv = document.querySelector('#tv'),
    modal = document.querySelector('.modal'),
    close = document.querySelector('.close'),
    body = document.getElementsByTagName('body');


function openModal(id, modal) {
    id.addEventListener('click', () => {
        body[0].style = 'background-color: rgba(0, 0, 0, 0.7)';
        let div = document.createElement('div'),
            h5 = document.createElement('h5'),
            h3 = document.createElement('h3'),
            p = document.createElement('p'),
            span = document.createElement('span'),
            i = document.createElement('i'),
            b = document.createElement('b'),
            button = document.createElement('button')
        h3.textContent = 'Confirmation'
        button.textContent = 'Confirm and pay'
        div.classList.add('modal-content')
        span.textContent = '/month'
        i.classList.add('currency')
        i.textContent = '$'
        b.textContent = id.children[2].children[1].textContent
        b.classList.add('price')
        span.prepend(b)
        span.prepend(i)
        h5.classList.add(id.getAttribute('id'))
        h5.innerHTML = id.children[0].textContent
        p.innerHTML = id.children[1].textContent
        b.classList.add('price')

        div.append(h5)
        div.append(p)
        div.append(span)
        div.append(button)
        div.prepend(h3)

        modal.append(div)
        console.log(modal)
        modal.style.display = 'flex';
    })
}

close.addEventListener('click', () => {
    let modalContent = document.querySelector('.modal-content')
    body[0].style = 'background-color: #85A5D4';
    modal.removeChild(modalContent)
    modal.style.display = 'none'

})

openModal(mobile, modal)
openModal(desktop, modal)
openModal(tv, modal)