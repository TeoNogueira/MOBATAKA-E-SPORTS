

// MODAL 1
const showModal1 = (openButton, modalContent) =>{
    const openBtn = document.getElementById(openButton),
    modalContainer = document.getElementById(modalContent)

    if(openBtn && modalContainer){
     
        openBtn.addEventListener('click', (e)=>{
            e.preventDefault();
            modalContainer.classList.add('show-modal')
        })
    }   
}
showModal1('open-modal-1','modal-container-1')

/*=============== CLOSE MODAL ===============*/
const closeBtn1 = document.querySelectorAll('.close-modal')

function closeModal1(){
    const modalContainer = document.getElementById('modal-container-1')
    modalContainer.classList.remove('show-modal')
}
closeBtn1.forEach(c => c.addEventListener('click', closeModal1))


/*=============== SHOW MODAL 2 ===============*/
const showModal = (openButton, modalContent) =>{
    const openBtn = document.getElementById(openButton),
    modalContainer = document.getElementById(modalContent)

    if(openBtn && modalContainer){
     
        openBtn.addEventListener('click', (e)=>{
            e.preventDefault();
            modalContainer.classList.add('show-modal')
        })
    }
}
showModal('open-modal','modal-container')

/*=============== CLOSE MODAL ===============*/
const closeBtn = document.querySelectorAll('.close-modal')

function closeModal(){
    const modalContainer = document.getElementById('modal-container')
    modalContainer.classList.remove('show-modal')
}
closeBtn.forEach(c => c.addEventListener('click', closeModal))


/*=============== SHOW MODAL 3 ===============*/
const showModal3 = (openButton, modalContent) =>{
    const openBtn = document.getElementById(openButton),
    modalContainer = document.getElementById(modalContent)

    if(openBtn && modalContainer){
     
        openBtn.addEventListener('click', (e)=>{
            e.preventDefault();
            modalContainer.classList.add('show-modal')
        })
    }
}
showModal3('open-modal-3','modal-container-3')

/* CLOSE MODAL 3 */
const closeBtn3 = document.querySelectorAll('.close-modal')

function closeModal3(){
    const modalContainer = document.getElementById('modal-container-3')
    modalContainer.classList.remove('show-modal')
}
closeBtn3.forEach(c => c.addEventListener('click', closeModal3))

/*=============== SHOW MODAL 4 ===============*/
const showModal4 = (openButton, modalContent) =>{
    const openBtn = document.getElementById(openButton),
    modalContainer = document.getElementById(modalContent)

    if(openBtn && modalContainer){
     
        openBtn.addEventListener('click', (e)=>{
            e.preventDefault();
            modalContainer.classList.add('show-modal')
        })
    }
}
showModal4('open-modal-4','modal-container-4')

/* CLOSE MODAL 3 */
const closeBtn4 = document.querySelectorAll('.close-modal')

function closeModal4(){
    const modalContainer = document.getElementById('modal-container-4')
    modalContainer.classList.remove('show-modal')
}
closeBtn4.forEach(c => c.addEventListener('click', closeModal4))








