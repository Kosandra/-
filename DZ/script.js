let but1 = document.querySelector(".button1")
let but2 = document.querySelector(".button2")
but1.addEventListener("click", bt1)
function bt1(){ 
    ssilka = ["https://www.youtube.com/?hl=RU","http://seasonvar.ru/serial-8297-Moi_malen_kie_poni_Druzhba_-_eto_chudo-4-season.html", "https://vk.com/kosobutskaya2004"]
    window.location.href = ssilka[getRandom(0,3)]
}
function getRandom(n,m){
    return Math.floor(Math.random() * (m - n) + n)
}
but2.addEventListener("mouseup", color)
function color(){
    var v = prompt('Введите цвет, который хотите(Eng)\nЖелательно green :)', '');
    document.body.style.backgroundColor =  v
    if (v == "green"){
        document.body.style.backgroundImage = 'url("Shrek1.jpg")'
    }
    else {
        prompt("Я же говорила, что лучше ввести 'green'")
    }
}