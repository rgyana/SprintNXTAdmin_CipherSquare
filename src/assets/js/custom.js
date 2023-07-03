// only for css class reference. no need to add in angular.json

const $button = document.querySelector('#sidebar-toggle');
const $wrapper = document.querySelector('#wrapper');

if ($button && $wrapper) {
  $button.addEventListener('click', (e) => {
    e.preventDefault();
    $wrapper.classList.toggle('toggled');
  });
}
