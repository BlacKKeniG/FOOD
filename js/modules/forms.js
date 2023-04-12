import {openModal, closeModal} from './modal';

export default function forms() {
    //forms

    const postData = async (url, data) => {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: data,
        });

        return await response.json();
    };

    function bindPostData(form){
        form.addEventListener('submit', event => {
            event.preventDefault();

            const loadingImg = document.createElement('img');
            loadingImg.src = message.loading;
            loadingImg.classList.add('spinner');
            form.insertAdjacentElement('afterend', loadingImg);

            const formData = new FormData(form);

            /* const object = {};
            formData.forEach((value, key) => {
                object[key] = value;
            }); */

            //оптимизация перевода в json обьект
            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            postData('http://localhost:3000/requests', json)
            .then(data => {
                modalShowRequestStatusMessege(message.success);
            })
            .catch((data) => {
                modalShowRequestStatusMessege(message.error);
            })
            .finally(() => {
                loadingImg.remove();
                form.reset();
            });
        });
    }

    //request message
    function modalShowRequestStatusMessege(strMessage) {
        const modalForm = document.querySelector('form');
        const modalTitel = document.querySelector('.modal__title');
        const tempBuffTitel = modalTitel.textContent;
        
        modalForm.remove();
        modalTitel.textContent = strMessage;

        if(!document.querySelector('.modal').classList.contains('modal_active')){
            openModal();
        }

        const resetTimerID = setTimeout(close, 5000);
        
        function close() {
            closeModal();
            document.querySelector('.modal__content').append(modalForm);
            modalTitel.textContent = tempBuffTitel;
            clearInterval(resetTimerID);
        }
    } 

    const forms = document.querySelectorAll('form');
    const message = {
        loading: 'img/spinner/spinner.svg',
        success: 'Спасибо, за заявку!',
        error: 'Ошибка! Писмо не отправленно! Вы можете связаться с нами по телефону: +7(000)-000-00-00',
    };

    forms.forEach((form) => {
        bindPostData(form);
    });

}

 /* //формат FormData (заголовок не нужен)
    function postData(form) {
        form.addEventListener('submit', (event)=>{
            event.preventDefault();

            const statusMessange = document.createElement('div');
            statusMessange.textContent = message.loading;
            form.append(statusMessange);

            const request = new XMLHttpRequest();
            request.open('POST', 'server.php');

            const formData = new FormData(form);

            request.send(formData);

            request.addEventListener('load', () => {
                if(request.status === 200) {
                    console.log(request.response);
                    statusMessange.textContent = message.success;
                    form.reset();
                    setTimeout(() => {
                        statusMessange.remove();
                    }, 3000);
                } else {
                    statusMessange.textContent = message.error;
                }
            });
        });
    }

    // Fetch API //form Data

    function postData(form) {
        form.addEventListener('submit', (event)=>{
            event.preventDefault();

            const statusMessange = document.createElement('div');
            statusMessange.textContent = message.loading;
            form.append(statusMessange);

            const formData = new FormData(form);

            fetch('server.php', {
                method: "POST",
                body: formData,
            }).then(data => {
                console.log(data.text());
            })
            .then(data => {
                console.log(data);
                statusMessange.textContent = message.success;
                setTimeout(() => {
                    statusMessange.remove();
                }, 3000);
            })
            .catch(() => {
                statusMessange.textContent = message.error;
            })
            .finally(() => {
                form.reset();
            });

        });
    }

    //формат JSON (заголовок нужен) /request message

    function postData(form) {
        form.addEventListener('submit', (event)=>{
            event.preventDefault();

            const loadingImg = document.createElement('img');
            loadingImg.src = message.loading;
            loadingImg.classList.add('spinner');
            form.insertAdjacentElement('afterend', loadingImg);

            const request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            request.setRequestHeader('Content-type', 'application/json charset="utf-8"');

            const formData = new FormData(form);

            const object = {};
            formData.forEach(function(value, key){
                object[key] = value;
            });

            request.send(JSON.stringify(object));

            request.addEventListener('load', () => {
                if(request.status === 200) {
                    console.log(request.response); //!!!!!!
                    modalShowRequestStatusMessege(message.success);
                    loadingImg.remove();
                    form.reset();
                } else {
                    modalShowRequestStatusMessege(message.error);
                    loadingImg.remove();
                    form.reset();
                }
            });
        });
    }

    //fetch //формат JSON (заголовок нужен) /request message

    function postData(form){
        form.addEventListener('submit', event => {
            event.preventDefault();

            const loadingImg = document.createElement('img');
            loadingImg.src = message.loading;
            loadingImg.classList.add('spinner');
            form.insertAdjacentElement('afterend', loadingImg);

            const formData = new FormData(form);

            const object = {};
            formData.forEach((value, key) => {
                object[key] = value;
            });

            fetch('server.php', {
                method: 'POST',
                headers: {
                    "Content-type": 'application/json'
                },
                body: JSON.stringify(object),
            })
            .then(data => {
                console.log(data.text());
                modalShowRequestStatusMessege(message.success);
            })
            .catch(() => {
                modalShowRequestStatusMessege(message.error);
            })
            .finally(() => {
                loadingImg.remove();
                form.reset();
            });
        });
    } */