// buttons
var elem1 = document.getElementsByClassName("elem1");
var elem2 = document.getElementsByClassName("elem2");
var elem3 = document.getElementsByClassName("elem3");
var elem4 = document.getElementsByClassName("elem4");
var elem5 = document.getElementsByClassName("elem5");
var elem6 = document.getElementsByClassName("elem6");
var elem7 = document.getElementsByClassName("elem7");
var elem8 = document.getElementsByClassName("elem8");
var elem9 = document.getElementsByClassName("elem9");
var elem10 = document.getElementsByClassName("elem10");
var elem11 = document.getElementsByClassName("elem11");
var elemArray = [elem1, elem2, elem3, elem4, elem5,	elem6, elem7, elem8, elem9,	elem10,	elem11];

//blocks
var blockElem1 = document.getElementById("elem1");
var blockElem2 = document.getElementById("elem2");
var blockElem3 = document.getElementById("elem3");
var blockElem4 = document.getElementById("elem4");
var blockElem5 = document.getElementById("elem5");
var blockElem6 = document.getElementById("elem6");
var blockElem7 = document.getElementById("elem7");
var blockElem8 = document.getElementById("elem8");
var blockElem9 = document.getElementById("elem9");
var blockElem10 = document.getElementById("elem10");
var blockElem11 = document.getElementById("elem11");
var blocksArray = [blockElem1, blockElem2, blockElem3, blockElem4, blockElem5, blockElem6, blockElem7, blockElem8, blockElem9, blockElem10, blockElem11];

//preventDefault
for (var i = 0; i < elemArray.length; i ++) {
    elemArray[i][0].addEventListener('click', function(event) {
        event.preventDefault();
    });
};

//hide blocks
function hideBlocks(showElem, array) {
    for (var i = 0; i < array.length; i ++) {
        if (array[i] != showElem) {
            array[i].style.display = "none";
        } else {
            array[i].style.display = "block";
        };
    };
};

//click button function and add class button
function clickButton(button, showBlock) {
    button[0].onclick = function() {
        for (var i = 0; i < elemArray.length; i ++) {
            if ( button[0] != elemArray[i][0] ) {
                elemArray[i][0].classList.remove("active");
            } else if ( button[0] == elemArray[i][0] && button[0].classList.contains("active") ) {
                elemArray[i][0].classList.remove("active");
            } else {
                elemArray[i][0].classList.remove("active");
            }
        };        
        hideBlocks(showBlock, blocksArray);
    };
};

//begin
for (var i = 0; i < elemArray.length; i++) {
    clickButton(elemArray[i], blocksArray[i]);
}
