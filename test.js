/**
 *inc - увеличение либо уменьшение
 *shift - на сколько изменяется значение
 **/
var setValue = function(elem, value, inc, shift, speed){
    var interval = false;
    if (inc) {
        interval = setInterval(function(){
            if (elem.innerHTML*1+shift >= value) {
                elem.innerHTML = value;
                clearInterval(interval);
            } else {
                elem.innerHTML = elem.innerHTML*1+shift;
            }
        }, speed);
    } else {
        interval = setInterval(function(){
            if (elem.innerHTML*1-shift <= value) {
                elem.innerHTML = value;
                clearInterval(interval);
            } else {
                elem.innerHTML = elem.innerHTML*1-shift;
            }
        }, speed);
    }

};

document.getElementById('test').onclick = function() {
    var result = document.getElementById("result");
    setValue(result, 0, false, 10, 1);
}