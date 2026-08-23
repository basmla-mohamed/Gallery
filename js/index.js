/*--------------- select Elements ----------------*/
//لازم امسك العناصر الاول
let popupKeys = document.querySelectorAll("#Gallery .popupKey"),
    popup = document.querySelector(".popup"),
    popupbox = document.querySelector(".popup .box"),
    popupExitKey = document.querySelector(".popup .close"),
    popupImg = document.querySelector(".popup .box img"),
    galleryImages = document.querySelectorAll("#Gallery img"),
    currentImgIndex,
    popupNextKey = document.querySelector(".popup .next"),
    popupPrevKey = document.querySelector(".popup .previous"),
    popupIndicators = document.querySelectorAll(".popup li");


/*--------------------- Update Indicator -----------------*/

function updateIndicator() {

    popupIndicators.forEach(function(li) {
        li.classList.remove("active");
    });

    popupIndicators[currentImgIndex].classList.add("active");
}


/*--------------------- open popup -----------------*/

popupKeys.forEach(function(popupKey) {

    popupKey.addEventListener("click", function() {

        popup.classList.add("active");

        setTimeout(function() {
            popup.classList.add("show");
        }, 10);

        let currentImg = popupKey.parentElement.previousElementSibling;

        let currentImgSrc = currentImg.getAttribute("src");

        let galleryImagesArr = Array.from(galleryImages);

        currentImgIndex = galleryImagesArr.indexOf(currentImg);

        popupImg.setAttribute("src", currentImgSrc);

        updateIndicator();

    });

});


/*--------------------- close popup -----------------*/

popup.addEventListener("click", function() {

    popup.classList.remove("show");

    setTimeout(function() {
        popup.classList.remove("active");
    }, 1000);

});


/*--------------------- stop propagation -----------------*/

popupbox.addEventListener("click", function(e) {
    e.stopPropagation();
});


/*---------------------- popup Exit Key ----------------*/

popupExitKey.addEventListener("click", function(e) {

    popup.classList.remove("show");

    setTimeout(function() {
        popup.classList.remove("active");
    }, 1000);

});


/*----------------------- popup Next Key ------------------*/

popupNextKey.addEventListener("click", function() {

    currentImgIndex++;

    // لو وصلنا لآخر صورة نرجع لأول صورة
    if (currentImgIndex >= galleryImages.length) {
        currentImgIndex = 0;
    }

    let nextImg = galleryImages[currentImgIndex];

    let nextImgSrc = nextImg.getAttribute("src");

    popupImg.setAttribute("src", nextImgSrc);

    updateIndicator();

});


/*----------------------- popup Previous Key ------------------*/

popupPrevKey.addEventListener("click", function() {

    currentImgIndex--;

    // لو قبل أول صورة نروح لآخر صورة
    if (currentImgIndex < 0) {
        currentImgIndex = galleryImages.length - 1;
    }

    let prevImg = galleryImages[currentImgIndex];

    let prevImgSrc = prevImg.getAttribute("src");

    popupImg.setAttribute("src", prevImgSrc);

    updateIndicator();

});


/*--------------------- chosen Indicator ------------------*/

popupIndicators.forEach(function(li, currentIndicatorIndex) {

    li.addEventListener("click", function() {

        currentImgIndex = currentIndicatorIndex;

        let newImgElement = galleryImages[currentImgIndex];

        let newImgSrc = newImgElement.getAttribute("src");

        popupImg.setAttribute("src", newImgSrc);

        updateIndicator();

    });

});



//e.key=> the user enter ...



/*-------------------Additional Features---------------*/

/*----------------close popup by keybord-----------*/
//دي مسؤلة اني اقفل البوب اب بالكيبورد
document.addEventListener("keydown",function (e) {
    if(e.key === "Escape"){

    popup.classList.remove("show");

    setTimeout(function() {
        popup.classList.remove("active");
    }, 1000);
    }
});


/*----------------change number of photos by keyboard-----------*/
document.addEventListener("keydown",function(e){
 if (e.key === "1") {
        currentImgIndex = 0;
        let nextImg = galleryImages[currentImgIndex];
        let nextImgSrc = nextImg.getAttribute("src");
        popupImg.setAttribute("src", nextImgSrc);
        updateIndicator();
    }
 if (e.key === "2") {
        currentImgIndex = 1;

        let nextImg = galleryImages[currentImgIndex];
        let nextImgSrc = nextImg.getAttribute("src");

        popupImg.setAttribute("src", nextImgSrc);

        updateIndicator();
    }
 if (e.key === "3") {
        currentImgIndex = 2;

        let nextImg = galleryImages[currentImgIndex];
        let nextImgSrc = nextImg.getAttribute("src");

        popupImg.setAttribute("src", nextImgSrc);

        updateIndicator();
    }
 if (e.key === "4") {
        currentImgIndex = 3;

        let nextImg = galleryImages[currentImgIndex];
        let nextImgSrc = nextImg.getAttribute("src");

        popupImg.setAttribute("src", nextImgSrc);

        updateIndicator();
    }
 if (e.key === "5") {
        currentImgIndex = 4;

        let nextImg = galleryImages[currentImgIndex];
        let nextImgSrc = nextImg.getAttribute("src");

        popupImg.setAttribute("src", nextImgSrc);

        updateIndicator();
    }
 if (e.key === "6") {
        currentImgIndex = 5;

        let nextImg = galleryImages[currentImgIndex];
        let nextImgSrc = nextImg.getAttribute("src");

        popupImg.setAttribute("src", nextImgSrc);

        updateIndicator();
    }
 if (e.key === "7") {
        currentImgIndex = 6;

        let nextImg = galleryImages[currentImgIndex];
        let nextImgSrc = nextImg.getAttribute("src");

        popupImg.setAttribute("src", nextImgSrc);

        updateIndicator();
    }
 if (e.key === "8") {
        currentImgIndex = 7;

        let nextImg = galleryImages[currentImgIndex];
        let nextImgSrc = nextImg.getAttribute("src");

        popupImg.setAttribute("src", nextImgSrc);

        updateIndicator();
    }
 if (e.key === "9") {
        currentImgIndex = 8;

        let nextImg = galleryImages[currentImgIndex];
        let nextImgSrc = nextImg.getAttribute("src");

        popupImg.setAttribute("src", nextImgSrc);

        updateIndicator();
    }
})


/*--------------التنقل بالسهمين----------*/

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight") {
        currentImgIndex++;
        if (currentImgIndex >= galleryImages.length) {
            currentImgIndex = 0;
        }
        let nextImg = galleryImages[currentImgIndex];
        popupImg.setAttribute("src", nextImg.getAttribute("src"));
        updateIndicator();
    }
    if (e.key === "ArrowLeft") {
        currentImgIndex--;
        if (currentImgIndex < 0) {
            currentImgIndex = galleryImages.length - 1;
        }
        let prevImg = galleryImages[currentImgIndex];
        popupImg.setAttribute("src", prevImg.getAttribute("src"));
        updateIndicator();
    }

});

/*-------------لو دوست على حاجة غير esc او رقم لو السهمين اوضح لليوزر ان ده مش من الازرار المسموح بيها------*/
document.addEventListener("keydown", function(e) {
    if (
        e.key !== "Escape" &&
        e.key !== "ArrowRight" &&
        e.key !== "ArrowLeft" &&
        !(e.key >= "1" && e.key <= "9")             //مش يتساوي
    ) {
        popup.animate(
            [
                { transform: "translateX(0)" },
                { transform: "translateX(-10px)" },
                { transform: "translateX(10px)" },
                { transform: "translateX(-10px)" },
                { transform: "translateX(0)" }
            ],
            {
                duration: 500,
                iterations: 1
            }
        );

    }

});