let currentvalue = '';
document.querySelector('#display').value=currentvalue;

function btnAC(){
    currentvalue='';
    document.querySelector('#display').value=currentvalue;
}

function btn(value){
    
        var display = document.getElementById("display");
        display.value += value;
    }
    function btnc() {
       
        var display = document.getElementById("display");
        display.value = display.value.slice(0, -1);
    }
    function btneq() {
        var display = document.getElementById("display");
        var result = eval(display.value); // Using eval to evaluate the expression
        display.value = result;
    }