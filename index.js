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
document.addEventListener("DOMContentLoaded", function () {
    const typingEffect = document.getElementById("typing-effect");
    const textElements = Array.from(typingEffect.children); // h2와 p 태그 목록
    const totalDuration = 10; // 전체 애니메이션 지속 시간 (초)
    const delayPerElement = totalDuration / textElements.length; // 각 텍스트에 할당된 시간

    textElements.forEach((element, index) => {
        element.style.animation = `typing ${delayPerElement}s steps(${element.textContent.length}, end) forwards, blink 0.5s step-end infinite`;
        element.style.animationDelay = `${index * delayPerElement}s`; // 순차적 딜레이
    });
});