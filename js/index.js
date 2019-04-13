// Change color on nav Items on hover
const navItems = document.querySelectorAll('.nav-link');
navItems[0].addEventListener('mouseenter', function(event) {
    event.target.style.color = 'skyblue';
})
navItems[0].addEventListener('mouseleave', function(event) {
    event.target.style.color = '#212529';
})

navItems[1].addEventListener('mouseenter', function(event) {
    event.target.style.color = 'skyblue';
})
navItems[1].addEventListener('mouseleave', function(event) {
    event.target.style.color = '#212529';
})

navItems[2].addEventListener('mouseenter', function(event) {
    event.target.style.color = 'skyblue';
})
navItems[2].addEventListener('mouseleave', function(event) {
    event.target.style.color = '#212529';
})

navItems[3].addEventListener('mouseenter', function(event) {
    event.target.style.color = 'skyblue';
})
navItems[3].addEventListener('mouseleave', function(event) {
    event.target.style.color = '#212529';
})

// Change background color on keydown
let i = 0;
const body = document.querySelector('body')
body.addEventListener('keydown', function(event) {
    i++;
    if (i % 2 === 0) {
        event.target.style.background = 'none';
    } else {
        event.target.style.background = 'aqua';
    }

})

// Move text block onto image with Drag and Drop
var dragged;

document.addEventListener('drag', function(event) {

}, false);

document.addEventListener('dragstart', function(event) {
    dragged = event.target;
    event.target.style.opacity = .5;
}, false);

document.addEventListener('dragend', function(event) {
    event.target.style.opacity = '';
}, false);

document.addEventListener('dragover', function(event) {
    event.preventDefault();
}, false);

document.addEventListener('dragenter', function(event) {
    if (event.target.className === 'dropZone') {
        event.target.style.opacity = .5;
    }
}, false);

document.addEventListener('dragleave', function(event) {
    if (event.target.className === 'dropZone') {
        event.target.style.opacity = '';
    }
}, false);

document.addEventListener('drop', function(event) {
    event.preventDefault();
    if (event.target.className === 'dropZone') {
        dragged.parentNode.removeChild(dragged);
        event.target.appendChild(dragged);
    }
}, false);

// add different background for destination div on key B press
const destinationDiv = document.querySelector('.destination-div');
destinationDiv.addEventListener('keydown', function(event) {
    if (event.code == 'KeyB') {
        event.stopPropagation();
        event.target.style.background = 'crimson';
    }
})


// Get rid of boat image on double click
const boatImg = document.querySelector('.boat-img');
boatImg.addEventListener('dblclick', function(event) {
    event.target.style.display = 'none';
})