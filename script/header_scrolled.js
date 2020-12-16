// header
const header = document.getElementById('header');
console.dir(header);    // 속성을 볼수 있음
console.log(header.style.color);

window.onscroll = function () {
    // if(window.scrollY != 0) {
    //     header.style.color = '#666';
    //     header.style.background = '#fff';
    //     header.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.5)';
    // } else {
    //     header.style.color = null;
    //     header.style.background = null;
    //     header.style.boxShadow = null;
    // }

    if (window.scrollY != 0) {
        header.classList.add('act');
    } else {
        header.classList.remove('act');
    }
}