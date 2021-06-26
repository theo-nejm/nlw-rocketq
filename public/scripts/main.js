import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

const checkButtons = document.querySelectorAll('a.check')
const deleteButtons = document.querySelectorAll('a.delete')

checkButtons.forEach(button => {button.addEventListener('click', handleClick)})
    
deleteButtons.forEach(button => {button.addEventListener('click', event => handleClick(event, false))})

function handleClick(event, check = true) {
    event.preventDefault()
    
    const questionId = event.target.dataset.id
    console.log(event.target)
    const roomId = document.querySelector('#room-id').dataset.id
    const slug = check ? 'check' : 'delete'

    const form = document.querySelector('.modal form')
    form.setAttribute('action', `/question/${roomId}/${questionId}/${slug}`)

    modalTitle.innerHTML = check ? "Marcar como lida" : "Excluir pergunta"
    modalDescription.innerHTML = check ? "Tem certeza que deseja marcar a pergunta como lida?" : "Tem certeza que deseja excluir esta pergunta?"
    modalButton.innerHTML = check ? "Marcar como lida" : "Sim, excluir"
    modalButton.style.background = check ? "var(--blue)" : "var(--red)"
    
    modal.open()
}