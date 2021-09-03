var header = document.getElementsByTagName('header');

var img_01 = document.getElementById('img-01');
var img_02 = document.getElementById('img-02');
var img_03 = document.getElementById('img-03');

img_02.style.opacity = '0';
img_03.style.opacity = '0';

var pimg_1 = document.getElementById('pimg-1');
function afterClick1() {
    header[0].style.background = '#0165ba';
    header[0].style.transition = '.5s';
    img_02.style.opacity = '0';
    img_01.style.transition = '1s';
    img_01.style.opacity = '1';
    img_03.style.opacity = '0';
}

var pimg_2 = document.getElementById('pimg-2');
function afterClick2() {
    header[0].style.background = '#d3002d';
    header[0].style.transition = '.5s';
    img_02.style.opacity = '1';
    img_02.style.transition = '1s';
    img_01.style.opacity = '0';
    img_03.style.opacity = '0';
}
var pimg_3 = document.getElementById('pimg-3');
function afterClick3() {
    header[0].style.background = '#1f1f1f';
    header[0].style.transition = '.5s';
    img_02.style.opacity = '.0';
    img_01.style.opacity = '0';
    img_03.style.opacity = '1';
    img_03.style.transition = '1s';

}