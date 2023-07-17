/////////////////////////////////////////////////////////////////////////скачать прайс 
let btn = document.getElementById('btnPriсe');
let popUpWindow = document.getElementById('popUpWindow');
let btnClose = document.getElementById('btnClose');
let scrollWidth = getScrollWidth();


btn.onclick = function () {
    openPricePopup();
}

/////////////////////////////////////////////////////////////////////////скачать прайс header
let btn_header = document.getElementById('btnPriсe_header');

btn_header.onclick = function (event) {
    event.preventDefault();
    openPricePopup();
}
btnClose.onclick = function () {
    closePricePopup();
}
window.onclick = function(event) {
    if (event.target == popUpWindow) {
        closePricePopup();
    }
}

function getScrollWidth() {
    let div = document.createElement('div');
    div.style.overflowY = 'scroll';
    div.style.width = '50px';
    div.style.height = '50px';
    document.body.append(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
}

function openPricePopup() {
    document.body.classList.add('_lock');
    document.body.style.paddingRight = scrollWidth + 'px';
    popUpWindow.style.display = "block";
    setTimeout(function() {
        popUpWindow.classList.add('show');
    }, 100);
}

function closePricePopup() {
    popUpWindow.classList.remove('show');
    setTimeout(function() {
        popUpWindow.style.display = "none";
        document.body.style.paddingRight = '';
        document.body.classList.remove('_lock');
    }, 100);
}

//////////////////////////////////////////////////////////////отправить рассчет
