let buttons = document.querySelectorAll('li');
const hoverSections = document.querySelectorAll('.hover');
const coloredSections = document.querySelectorAll('#sections');

console.log(coloredSections)

function toggleColor(index) {
  if (coloredSections[index].style.display == 'block') {
    coloredSections[index].style.display = 'none';
  } else {
    coloredSections[index].style.display = 'block'; 
  }
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', () => toggleColor(i));
}

for (let i = 0; i < hoverSections.length; i++) {
  hoverSections[i].addEventListener('mouseenter', () => toggleColor(i));
  hoverSections[i].addEventListener('mouseleave', () => toggleColor(i));
}