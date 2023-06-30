const mod01 = document.querySelector('.op-01');
const mod02 = document.querySelector('.op-02');




function setLinks(type) {

const links = {

  link01: ["uDG63MEOxmI"],
  link02: ["4o5BMp3SY-g"],

}

mod01.setAttribute('src', `https://www.youtube.com/embed/${links[type][0]}`);
mod02.setAttribute('src', `https://www.youtube.com/embed/${links[type][1]}`);




}





/*=============== SHOW MODAL ===============*/
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