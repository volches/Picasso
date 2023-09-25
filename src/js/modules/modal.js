function modal(){
  const modalButtons = document.querySelectorAll('[data-modal-button]');
  const modalClosebuttons = document.querySelectorAll('[data-modal-close]');
  const allModals = document.querySelectorAll('[data-modal]');
  
  
  
  // Кнопки - Открыть Модалку
  modalButtons.forEach(function (item) {
  item.addEventListener('click', function () {
  const modalId = this.dataset.modalButton;
  const modal = document.querySelector('#' + modalId);
  const page = document.querySelector('body');
  // const modalParent = modal.offsetParent;
  // console.log(modalParent);
  modal.classList.remove('none');
  page.classList.add('noscroll');
  // modalParent.style.position = 'fixed';
  // modalParent.style.top = `-${window.scrollY}px`;      
  
  // Находим внутри открываемой модалки блок .modal-window и запрещаем ему передавать клики "наверх"
  modal.querySelector('.modal-window').addEventListener('click', function (e) {
    e.stopPropagation();
      });
    })
  });
  
  // Кнопки - Закрыть Модалку
  modalClosebuttons.forEach(function (item) {
    item.addEventListener('click', function () {
      const modal = this.closest('[data-modal]');
      modal.classList.add('none');
      const page = document.querySelector('body');
      page.classList.remove('noscroll');
      // modalParent.style.position = '';
      // modalParent.style.top = '';
    })
  });
  
  // Закрытие модалок по фейду
  allModals.forEach(function (item) {
    item.addEventListener('click', function () {
      this.classList.add('none');
    });
  });


  

}

export default modal;
