
function calculate(){

    let tip=parseInt(document.getElementById("tip").value);  
    let amt=parseInt(document.getElementById("amt").value);  
    let tamt=(tip/100)*amt+amt
    document.getElementById('tamt').innerHTML = tamt

    //console.log(amt);
}

