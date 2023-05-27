const menuBtn = document.querySelector(".menuIcon");

function openMenu (element) {
    element.classList.toggle('change');
    const dropDownMenu = document.querySelector('.dropdownMenu');
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');
}
