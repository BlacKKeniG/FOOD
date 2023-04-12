export default function tabs() {
    //tabs
    const tabsParent = document.querySelector('.tabheader__items'),
        headerTabs = tabsParent.querySelectorAll('.tabheader__item'),
        tabContantList = document.querySelectorAll('.tabcontent');
    let currentTab = 0;
        
    headerDisplayTab(currentTab);
    
    tabsParent.addEventListener('click', (event)=> {
        const target = event.target;
        if(target && target.classList.contains('tabheader__item')) {
            headerTabs.forEach((item, i) => {
                if(target == item && i != currentTab) {
                    headerDisplayTab(i);
                }
            });
        }
    });    function headerDisplayTab(i){
       
            headerTabs[currentTab].classList.remove('tabheader__item_active', 'animation-fade');
            headerTabs[i].classList.add('tabheader__item_active', 'animation-fade');
            tabContantList[currentTab].classList.remove('tabcontent_display', 'animation-fade');
            tabContantList[i].classList.add('tabcontent_display', 'animation-fade');
            currentTab = i;
        
    }    
}
