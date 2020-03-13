const leftSidebar = document.querySelector('.left-sidebar');
const sidebarToggleLink = document.querySelector('.sidebar-toggle');

document.addEventListener('load', function() {
  console.log(`App is loaded...`);
});

if (sidebarToggleLink) {
  sidebarToggleLink.addEventListener('click', function(e) {
    e.stopPropagation();
    if (leftSidebar) {
      leftSidebar.classList.toggle('minimize-menu');
    }
  });
}

document.body.addEventListener('click', function() {
  if (sidebarToggleLink) {
    leftSidebar.classList.toggle('minimize-menu');
  }
});
