
//modalWindow duration open

const modalTimerId = setTimeout(openModal, 60000);

export function openModal() {
    const modalWindow = document.querySelector('.modal');
    modalWindow.classList.add('modal_active');
    document.body.classList.add('overflow-hidden');
    clearInterval(modalTimerId);
    window.removeEventListener('scroll', openModalByScroll); 
}

function openModalByScroll() {
    if(document.documentElement.scrollTop + document.documentElement.clientHeight >= 
        document.documentElement.scrollHeight - 1){
            openModal();
            window.removeEventListener('scroll', openModalByScroll);
        }       
}

export function closeModal() {
    const modalWindow = document.querySelector('.modal');
    modalWindow.classList.remove('modal_active');
    document.body.classList.remove('overflow-hidden');
}    

export default function modal() {
    //modalWindow
    const modalWindow = document.querySelector('.modal');
    const btnsOpenModalList = document.querySelectorAll('[data-modal]');
    const modalClose = document.querySelector('[data-close]');
 
    btnsOpenModalList.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    modalClose.addEventListener('click', closeModal);
    
    modalWindow.addEventListener('click', (event)=>{
        if(event.target === modalWindow){
            closeModal();
        }
    });
    
    document.addEventListener('keydown', (event) => {
        if(event.code === 'Escape' && modalWindow.classList.contains('modal_active')) {
            closeModal();
        }
    });

    //modalWindow scroll

    window.addEventListener('scroll', openModalByScroll);
}

