const input = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let string = "";

let array = Array.from(buttons);

array.forEach(button => {
    button.addEventListener("click", (e) => {
       if(e.target.innerHTML ==="="){ //when equal button is clicked//
        string = string.replace(/÷/g,"/").replace(/×/g,"*");
          string = eval(string);
        input.value = string;
       }else if(e.target.innerHTML ==="AC"){ //when AC button is clicked//
        string = "";
        input.value = string;
       }else if(e.target.innerHTML ==="DEL"){
        string = string.substring(0, string.length-1);
        input.value = string;
       }
       else{
        string +=e.target.innerHTML;
        input.value = string;
       }
    });
});


//buttons to change background when clicked//
const changeBackgroundWhenClick =() =>{
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
}