// buttons
var elemArray = document.querySelectorAll(".button-block-dep a");

//blocks
var blocksArray = document.querySelectorAll(".elem-structure");

//preventDefault
for (var i = 0; i < elemArray.length; i ++) {
    elemArray[i].addEventListener('click', function(event) {
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
    button.onclick = function() {
        for (var i = 0; i < elemArray.length; i ++) {
            if ( button != elemArray[i] ) {
                elemArray[i].classList.remove("active");
            } else if ( button == elemArray[i] && button.classList.contains("active") ) {
                elemArray[i].classList.remove("active");
            } else {
                elemArray[i].classList.remove("active");
            }
        };        
        hideBlocks(showBlock, blocksArray);
    };
};

//begin
for (var i = 0; i < elemArray.length; i++) {
    clickButton(elemArray[i], blocksArray[i]);
}
