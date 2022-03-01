window.addEventListener('DOMContentLoaded', () => {

    const tabs = document.querySelectorAll('.tabheader__item'), // ссылка таб
          tabsContent = document.querySelectorAll('.tabcontent'), // Табы блок
          tabsParent = document.querySelector('.tabheader__items'); // блок ссылок на таб

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.style.display = 'none';  // Скрытие блоков табов
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active'); // Удаление класса ссылок
        });
    }      

    function showTabContent(i = 0) {
        tabsContent[i].style.display = 'block'; // Показываем первый элемент
        tabs[i].classList.add('tabheader__item_active'); // Первую ссылку делаем активной 
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target; // регистрируем нажатие
        if (target && target.classList.contains('tabheader__item')) { // если на элементе, на который мы нажали, есть класс 
            tabs.forEach((item, i) => { // перебираем ссылки
                if (target == item) { 
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
});