// References to DOM Elements
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");

// Event Listener
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);
document.addEventListener("keydown", handleKeyPress); // 방향키 입력 처리 추가

// Business Logic
let currentLocation = 1;
let numOfPapers = 3;
let maxLocation = numOfPapers + 1;

function openBook() {
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-432px)";
    nextBtn.style.transform = "translateX(432px)";
}

function closeBook(isAtBeginning) {
    if (isAtBeginning) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }
    
    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}

function goNextPage() {
    if (currentLocation < maxLocation) {
        switch (currentLocation) {
            case 1:
                openBook();
                paper1.classList.add("flipped");
                paper1.style.zIndex = 1;
                break;
            case 2:
                paper2.classList.add("flipped");
                paper2.style.zIndex = 2;
                break;
            case 3:
                paper3.classList.add("flipped");
                paper3.style.zIndex = 3;
                closeBook(false);
                break;
            default:
                throw new Error("unknown state");
        }
        currentLocation++;
    }
}

function goPrevPage() {
    if (currentLocation > 1) {
        switch (currentLocation) {
            case 2:
                closeBook(true);
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 3;
                break;
            case 3:
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 2;
                break;
            case 4:
                openBook();
                paper3.classList.remove("flipped");
                paper3.style.zIndex = 1;
                break;
            default:
                throw new Error("unknown state");
        }

        currentLocation--;
    }
}

// Handle key press for navigation
function handleKeyPress(event) {
    switch (event.key) {
        case "ArrowRight":
            goNextPage(); // 오른쪽 방향키
            break;
        case "ArrowLeft":
            goPrevPage(); // 왼쪽 방향키
            break;
        default:
            break;
    }
}


// 위로 스크롤 할 때 헤더 보이게 하는 기능

document.addEventListener("DOMContentLoaded", function () {

    const header = document.querySelector("header");

    let lastScrollY = window.scrollY;



    // 페이지를 로드할 때 헤더를 보이게 설정

    header.classList.add("show");



    window.addEventListener("scroll", function () {

        if (window.scrollY > lastScrollY && window.scrollY > 0) {

            // 스크롤 다운

            header.classList.remove("show");

        } else if (window.scrollY < lastScrollY) {

            // 스크롤 업

            header.classList.add("show");

        }

        lastScrollY = window.scrollY;

    });

});