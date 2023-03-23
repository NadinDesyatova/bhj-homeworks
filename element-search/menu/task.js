const arraySubMenu = Array.from(document.querySelectorAll('.menu_sub'));

arraySubMenu.forEach((item, index, array) => {
  let menuItem = item.closest('.menu__item');
  let linkSubMenu = menuItem.querySelector('.menu__link');
  linkSubMenu.onclick = () => {
    array[index].className = 'menu menu_sub menu_active';
    array[(index + 1) % array.length].className = 'menu menu_sub';
    return false;
  }
});


