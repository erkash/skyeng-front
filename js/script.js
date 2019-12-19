const $ = selector => document.querySelector(selector)
const $$ = selector => document.createElement(selector)

let mobile = $('#mobile'),
    desktop = $('#desktop'),
    tv = $('#tv'),
    modal = $('.modal'),
    close = $('.close'),
    body = document.getElementsByTagName('body');


function openModal(id, modal) {
    id.addEventListener('click', () => {
        body[0].style = 'background-color: rgba(0, 0, 0, 0.7)';
        let div = $$('div'),
            h5 = $$('h5'),
            h3 = $$('h3'),
            p = $$('p'),
            span = $$('span'),
            i = $$('i'),
            b = $$('b'),
            button = $$('button')
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