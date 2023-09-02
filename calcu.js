var cal1 = document.getElementById("cal1")

function turnOff(){
    cal1.style.visibility = "hidden"
}

function turnOn(){
    cal1.style.visibility = "visible"
}

function getValues(num){
    cal1.value +=num
    console.log(cal1.value);
}

function clearOneChar(){
    cal1.value = cal1.value.slice(0,-1)
}

function clearAllChar(){
    cal1.value=""
}

function calculate(){
    cal1.value = eval(cal1.value)
}