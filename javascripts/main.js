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
    Blogging.getAndDisplay();

}


var addBTN = document.getElementById("add-BTN").addEventListener("click", function(event){
    Blogging.getAndDisplay();
})


var Blogging = (function(origBlog){

        origBlog.getAndDisplay = function(event) {

            var inout1 = inputfield1.value;
            var inout2 = inputfield2.value;
            var inout3 = inputfield3.value;
            var inout4 = inputfield4.value;

            holdBlogMsg.innerHTML +=
                    `<article>
                    <h3>${inout1.value}</h3>
                    <p>${inout4.value}</p>
                    <footer>${inout2.value}${inout3.value}<footer>
                    </article>
                    `

            console.log("did my iffe work? line 64", inout1);
        }
    return origBlog;
})(Blogging || {});




















