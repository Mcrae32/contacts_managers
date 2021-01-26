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
var elem12 = document.getElementsByClassName("elem12");
var elem13 = document.getElementsByClassName("elem13");
var elem14 = document.getElementsByClassName("elem14");
var elem15 = document.getElementsByClassName("elem15");
var elem16 = document.getElementsByClassName("elem16");
var elem17 = document.getElementsByClassName("elem17");
var elem18 = document.getElementsByClassName("elem18");
var elem19 = document.getElementsByClassName("elem19");
var elem20 = document.getElementsByClassName("elem20");
var elem21 = document.getElementsByClassName("elem21");
var elem22 = document.getElementsByClassName("elem22");
var elem23 = document.getElementsByClassName("elem23");
var elem24 = document.getElementsByClassName("elem24");
var elem25 = document.getElementsByClassName("elem25");
var elem26 = document.getElementsByClassName("elem26");
var elem27 = document.getElementsByClassName("elem27");
var elem28 = document.getElementsByClassName("elem28");
var elem29 = document.getElementsByClassName("elem29");
var elem30 = document.getElementsByClassName("elem30");
var elem31 = document.getElementsByClassName("elem31");
var elemArray = [elem1, elem2, elem3, elem4, elem5,	elem6, elem7, elem8, elem9,	elem10,	elem11,	elem12,	elem13,	elem14,	elem15,	elem16,	elem17,	elem18,	elem19,	elem19,	elem20,	elem21,	elem22,	elem23,	elem24,	elem25,	elem26,	elem27,	elem28,	elem29,	elem30,	elem31];

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
var blockElem12 = document.getElementById("elem12");
var blockElem13 = document.getElementById("elem13");
var blockElem14 = document.getElementById("elem14");
var blockElem15 = document.getElementById("elem15");
var blockElem16 = document.getElementById("elem16");
var blockElem17 = document.getElementById("elem17");
var blockElem18 = document.getElementById("elem18");
var blockElem19 = document.getElementById("elem19");
var blockElem20 = document.getElementById("elem20");
var blockElem21 = document.getElementById("elem21");
var blockElem22 = document.getElementById("elem22");
var blockElem23 = document.getElementById("elem23");
var blockElem24 = document.getElementById("elem24");
var blockElem25 = document.getElementById("elem25");
var blockElem26 = document.getElementById("elem26");
var blockElem27 = document.getElementById("elem27");
var blockElem28 = document.getElementById("elem28");
var blockElem29 = document.getElementById("elem29");
var blockElem30 = document.getElementById("elem30");
var blockElem31 = document.getElementById("elem31");
var blocksArray = [blockElem1, 
                    blockElem2, 
                    blockElem3, 
                    blockElem4, 
                    blockElem5, 
                    blockElem6, 
                    blockElem7, 
                    blockElem8, 
                    blockElem9, 
                    blockElem10, 
                    blockElem11, 
                    blockElem12, 
                    blockElem13, 
                    blockElem14, 
                    blockElem15, 
                    blockElem16, 
                    blockElem17, 
                    blockElem18, 
                    blockElem19, 
                    blockElem20, 
                    blockElem21, 
                    blockElem22, 
                    blockElem23, 
                    blockElem24, 
                    blockElem25, 
                    blockElem26, 
                    blockElem27, 
                    blockElem28, 
                    blockElem29, 
                    blockElem30, 
                    blockElem31];

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
            if (button[0] != elemArray[i][0]) {
                elemArray[i][0].classList.remove("active");
            } else {
                elemArray[i][0].classList.add("active");
            };
        };        
        hideBlocks(showBlock, blocksArray);
    };
};

//begin
for (var i = 0; i < elemArray.length; i++) {
    clickButton(elemArray[i], blocksArray[i]);
}
/*
let phoneNumberList = document.querySelectorAll(".PERSONAL_MOBILE");

for (let i = 0; i < phoneNumberList.length; i++) {
    if (phoneNumberList[i].innerHTML == "") {
        phoneNumberList[i].classList.add("hide")
    }

    console.log(phoneNumberList[i].innerHTML)
}*/


