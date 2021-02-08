let country = {
    USA: -5,
    Egypt: 25,
    Brazilia: 23,
    Belarus: -12,
    China: 3,
    Switzerland: 6,
    Russia: -20,
}
let kol = 0;
for (let key in country){
    if ( country[key] <= 0)
        console.log("Температура в странах мира: \n" + key + " " + country[key]);
      else 
            console.log("Температура в странах мира: \n" + key + " +" + country[key]);
    if (key in country){
        kol = kol + 1;
    }
}
let sum = 0;
let sr = 0;
for ( let key in country){
    sum += country[key];
    sr = sum / kol;
    sr = Math.round(sr)
}
if ( sr < 0)
    alert("Средняя температура всех стран около " + sr);
  else
        alert("Средняя температура всех стран около +" + sr);
function maximum(term){
    var max = -100000;
    for (let key in term){
        if ( term[key] > max) 
           max = term[key];
    }
    if(max <= 0)
    alert("Максимальная температура = " + max);
      else
    alert("Максимальная температура = +" + max);
}
maximum(country);