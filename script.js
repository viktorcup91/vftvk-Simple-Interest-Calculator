
function compute()
{
    //retrieve all the input
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    var result =   document.getElementById("result");
    var intPrincipal = parseInt(principal) ;
    // test the value
    if(intPrincipal == 0 || intPrincipal < 0 )
    {
        alert("the amount shall be greater than zero");
        document.getElementById("principal").focus();
        return false;
    }
    else{
        result.innerHTML = "If you deposit <mark>" + principal + "</mark><br/>" 
        + "at an interest rate of <mark>" + rate + "</mark>%<br/>" 
        + "You will receive an amount of <mark>" + interest + "</mark><br/>"
        + "in the year <mark>" + year +"</mark><br/>";
        return true;
    }

}

//this function update the rate in the html
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

