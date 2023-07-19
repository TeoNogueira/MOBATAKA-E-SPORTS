// Modal

const showModal = (openButtonId, modalContentId) => {
  
    const openBtn = document.getElementById(openButtonId);
    const modalContainer = document.getElementById(modalContentId);
  
    if (openBtn && modalContainer) {
      openBtn.addEventListener('click', (e) => {
        e.preventDefault();
        modalContainer.classList.add('show-modal');
      });
    }
  
    const closeBtn = modalContainer.querySelectorAll('.close-modal');
    closeBtn.forEach((c) => c.addEventListener('click', () => closeModal(modalContentId)));
  };
  
  // Função genérica para fechar um modal
  const closeModal = (modalContentId) => {
    const modalContainer = document.getElementById(modalContentId);
    modalContainer.classList.remove('show-modal');
  };
  
  // Chamar a função showModal para cada modal
  

  showModal('open-modal-1', 'modal-container-1');
  showModal('open-modal', 'modal-container');
  showModal('open-modal-3', 'modal-container-3');
  showModal('open-modal-4', 'modal-container-4');
  showModal('open-modal-5', 'modal-container-5');
  showModal('open-modal-6', 'modal-container-6');



// mouseOver

const adminClan = document.querySelector('.cd:nth-child(1)')

adminClan.addEventListener('mouseover', (e) => {

    e.preventDefault();
    document.querySelector('.cd button').style.color = '#F7A518';
    // document.querySelector('.cd button').style.transition = 'transform 2.5s';

    adminClan.addEventListener('mouseout', (e) => {

        e.preventDefault();
        document.querySelector('.cd button').style.color = '#eee';
       
    })
})

 function mediaQr(e) {

const aboutMe = document.querySelector('a#open-modal-6.button');
const buttonFilter1 = document.querySelector('button[data-target="#skills"]');
const buttonFilter2 = document.querySelector('button[data-target="#projects"]');


let mdp = document.querySelector('.md-p-6');
if(buttonFilter1 && window.matchMedia("(max-width: 768px)").matches) {


aboutMe.addEventListener('click', (e) => {
  e.preventDefault();
 
  mdp.style.bottom = '1200px';

  if(buttonFilter2 && window.matchMedia("(max-width: 768px)").matches) {

    aboutMe.addEventListener('click', (e) => {
      e.preventDefault();
    
      mdp.style.bottom = '20px';
       
    }) 
  } 
});
} 
} 


mediaQr()









