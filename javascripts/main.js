console.log("blogging?");

var firstLiEl = document.getElementById("first-li-item");
var secondLiEl = document.getElementById("second-li-item");

var holdMessageClass = document.getElementsByClassName("addNew");
console.log("testing add", holdMessageClass);

var holdBlogMsg = document.getElementById("hold-blogs");

//hold inputfields id

//listen for nav li elements to be clicked
firstLiEl.addEventListener("click", addNewMessage);
secondLiEl.addEventListener("click", showBlog);

//this listens for buttons that hide and display add message field and blog posts

var inputfield1 = document.getElementById("input1");
inputfield1.value = "";
var inputfield2 = document.getElementById("input2");
var inputfield3 = document.getElementById("input3");
var inputfield4 = document.getElementById("input4");

function addNewMessage (event) {
    for (var i = 0; i < holdMessageClass.length; i++){
        var newMSGCount = holdMessageClass[i];
        newMSGCount.classList.remove("hideNew");

        holdBlogMsg.classList.add("testing");
        inputfield1.focus();
        inputfield1.tabIndex= "1";
        inputfield2.tabIndex = "2";
        inputfield3.tabIndex = "3";
        inputfield4.tabIndex = "4";
//        var testingStuff = holdBlogMsg.getElementsByTagName("article");
//        for (var a = 0; a < testingStuff.length; a++) {
//            articleLooper = testingStuff[a];
//            articleLooper.classList.add("hideNew");
//        }
    }
}

function showBlog (event) {
    console.log("hello second event show blog");
    holdBlogMsg.classList.remove("testing");
    holdMessageClass[0].classList.add("hideNew");


}


var addBTN = document.getElementById("add-BTN").addEventListener("click", function(event){
    Blogging.getAndDisplay();
    inputfield1.value = "";
    inputfield2.value = "";
    inputfield3.value = "";
    inputfield4.value = "";
    inputfield1.focus();
})

inputfield4.addEventListener("keyup", function(event){
    if (inputfield4.value != "" && event.keyCode === 13) {
        console.log(event);
        console.log("testing keycode");
        Blogging.getAndDisplay();
        inputfield1.value = "";
        inputfield2.value = "";
        inputfield3.value = "";
        inputfield4.value = "";
        inputfield1.focus();
    }
})


var Blogging = (function(origBlog){

        origBlog.getAndDisplay = function(event) {
            holdBlogMsg.classList.remove("testing");
//            var inout2 = inputfield2.value;
//            var inout3 = inputfield3.value;

            var rest =
                    `<article>
                    <h3>${inputfield1.value}</h3>
                    <p>${inputfield4.value}</p>
                    <footer>${inputfield3.value}  ${inputfield2.value}</footer>
                    </article>
                    `;
            holdBlogMsg.innerHTML += rest;
        }

        origBlog.enterPress = function(event) {
            console.log(event.target);
        }
    return origBlog;
})(Blogging || {});




















