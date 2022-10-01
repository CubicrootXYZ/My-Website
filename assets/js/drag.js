const dragable1 = document.querySelector('.dragable1');
let dragable1MouseDown = false;
let startX, scrollLeft;

let dragable1StartDragging = function (e) {
    dragable1MouseDown = true;
    startX = e.pageX - dragable1.offsetLeft;
    scrollLeft = dragable1.scrollLeft;
};
let dragable1StopDragging = function (event) {
    dragable1MouseDown = false;
};

dragable1.addEventListener('mousemove', (e) => {
    e.preventDefault();
    if (!dragable1MouseDown) { return; }
    const x = e.pageX - dragable1.offsetLeft;
    const scroll = x - startX;
    dragable1.scrollLeft = scrollLeft - scroll;
});

// Add the event listeners
dragable1.addEventListener('mousedown', dragable1StartDragging, false);
dragable1.addEventListener('mouseup', dragable1StopDragging, false);
dragable1.addEventListener('mouseleave', dragable1StopDragging, false);


const dragable2 = document.querySelector('.dragable2');
let dragable2MouseDown = false;

let dragable2StartDragging = function (e) {
    dragable2MouseDown = true;
    startX = e.pageX - dragable2.offsetLeft;
    scrollLeft = dragable2.scrollLeft;
};
let dragable2StopDragging = function (event) {
    dragable2MouseDown = false;
};

dragable2.addEventListener('mousemove', (e) => {
    e.preventDefault();
    if (!dragable2MouseDown) { return; }
    const x = e.pageX - dragable2.offsetLeft;
    const scroll = x - startX;
    dragable2.scrollLeft = scrollLeft - scroll;
});

// Add the event listeners
dragable2.addEventListener('mousedown', dragable2StartDragging, false);
dragable2.addEventListener('mouseup', dragable2StopDragging, false);
dragable2.addEventListener('mouseleave', dragable2StopDragging, false);

const dragable3 = document.querySelector('.dragable3');
let dragable3MouseDown = false;

let dragable3StartDragging = function (e) {
    dragable3MouseDown = true;
    startX = e.pageX - dragable3.offsetLeft;
    scrollLeft = dragable3.scrollLeft;
};
let dragable3StopDragging = function (event) {
    dragable3MouseDown = false;
};

dragable3.addEventListener('mousemove', (e) => {
    e.preventDefault();
    if (!dragable3MouseDown) { return; }
    const x = e.pageX - dragable3.offsetLeft;
    const scroll = x - startX;
    dragable3.scrollLeft = scrollLeft - scroll;
});

// Add the event listeners
dragable3.addEventListener('mousedown', dragable3StartDragging, false);
dragable3.addEventListener('mouseup', dragable3StopDragging, false);
dragable3.addEventListener('mouseleave', dragable3StopDragging, false);

const dragable4 = document.querySelector('.dragable4');
let dragable4MouseDown = false;

let dragable4StartDragging = function (e) {
    dragable4MouseDown = true;
    startX = e.pageX - dragable4.offsetLeft;
    scrollLeft = dragable4.scrollLeft;
};
let dragable4StopDragging = function (event) {
    dragable4MouseDown = false;
};

dragable4.addEventListener('mousemove', (e) => {
    e.preventDefault();
    if (!dragable4MouseDown) { return; }
    const x = e.pageX - dragable4.offsetLeft;
    const scroll = x - startX;
    dragable4.scrollLeft = scrollLeft - scroll;
});

// Add the event listeners
dragable4.addEventListener('mousedown', dragable4StartDragging, false);
dragable4.addEventListener('mouseup', dragable4StopDragging, false);
dragable4.addEventListener('mouseleave', dragable4StopDragging, false);