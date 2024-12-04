import "./styles.scss"


const items = document.querySelectorAll('.navigation-drawer__item');

items.forEach(item => {
  item.addEventListener('click', () => {
    items.forEach(i => i.classList.remove('navigation-drawer__item--active'));
    

    item.classList.add('navigation-drawer__item--selected');


    items.forEach(i => i.classList.remove('navigation-drawer__item--active'));
    item.classList.add('navigation-drawer__item--active');
  });
});
