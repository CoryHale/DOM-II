// 1. Change color on nav Items on hover
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

// 2. Change background color on keydown
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

// 3. Move text block onto image with Drag and Drop
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

// 4. Get rid of boat image on double click
const boatImg = document.querySelector('.boat-img');
boatImg.addEventListener('dblclick', function(event) {
    event.target.style.display = 'none';
})

// 5. Changes color of logo on click stops Propagation to header
const logo = document.querySelector('.logo-heading');
logo.addEventListener('click', function(event) {
    event.stopPropagation();
    event.target.style.color = '#00FF00';
})

// 6. Changes background color of header on click
const header = document.querySelector('header');
header.addEventListener('click', function(event) {
    event.target.style.background = 'BlueViolet';
})

// 7. Fun Bus image disappears on mouseover.
const funBus = document.querySelector('.fun-bus-img');
funBus.addEventListener('mouseenter', function(event) {
    event.target.style.opacity = 0;
})

funBus.addEventListener('mouseleave', function(event) {
    event.target.style.opacity = '';
})

// 8. Buttons grow on hover
const signUpBtns = document.querySelectorAll('.btn')
signUpBtns.forEach(element => {
    element.addEventListener('mouseenter', function(event) {
        event.target.style.transform = 'scale(1.5)';
        event.target.style.transition = '1s';
    })

    element.addEventListener('mouseleave', function(event) {
        event.target.style.transform = 'scale(1.0)';
        event.target.style.transition = '1s';
    })
})

// 9. Deletes footer on click
const footer = document.querySelector('.footer');
footer.addEventListener('dblclick', function(event) {
    event.target.style.display = 'none';
})

// 10. Changes the background color through all the colors of the rainbow on click
let counter = 0;
const destination = document.querySelector('.content-destination');
destination.addEventListener('click', function(event) {
    counter++;
    if (counter % 8 === 1) {
        event.target.style.background = 'purple';
    } else if (counter % 8 === 2) {
        event.target.style.background = 'blue';
    } else if (counter % 8 === 3) {
        event.target.style.background = 'lightblue';
    } else if (counter % 8 === 4) {
        event.target.style.background = 'green';
    } else if (counter % 8 === 5) {
        event.target.style.background = 'yellow';
    } else if (counter % 8 === 6) {
        event.target.style.background = 'orange';
    } else if (counter % 8 === 7) {
        event.target.style.background = 'red';
    } else {
        event.target.style.background = '';
    }
})