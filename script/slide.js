const main_img_area = document.getElementById('main_img');
const slide_list = document.querySelector('#slide_list');

main_img_area.onmousemove = function (e) {
    // if (e.offsetX > main_img_area.offsetWidth / 2) {
    //     slide_list.style.cursor = `url('../asset/arrow_right.png') 0 0, auto`;
    // } else {
    //     slide_list.style.cursor = `url('../asset/arrow_left.png') 0 0, auto`;
    // }

    const res = e.offsetX < (main_img_area.offsetWidth / 2) ? 'left' : 'right';

    slide_list.style.cursor = `url('../asset/arrow_${res}.png') 0 0, auto`;
}

main_img_area.onclick = function (e) {
    if (e.offsetX > main_img_area.offsetWidth / 2) {
        slide_list.style.left = '-100vw';
    } else {
        slide_list.style.left = 0;
    }
}