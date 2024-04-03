const menuItems = document.querySelectorAll('.bottom-menu li');

menuItems.forEach(menuItem => {

  menuItem.addEventListener('click', function(event) {
    event.preventDefault();
    menuItems.forEach(item => item.classList.remove('active'));
    this.classList.toggle('active');
  });
});

