function ChangeMoney() {
    let Amount = document.getElementById("Amount").value;
    let FromC = document.getElementById("From").value;
    let To = document.getElementById("To").value;
    let Result;


    if (FromC == "USD" && To == "VND") {
        Result = "Result: " + (Amount * 23414) + " Đ";
    }
    else if (FromC == "VND"&& To =="USD"){
        Result = "Result: "+ (Amount / 23414) + " $";
    }
    else if (FromC == "VND") {
        Result = "Result: " + Amount + " Đ"
    } else {
        Result = "Result: " + Amount + " $"
    }
        
    document.getElementById("Result").innerHTML = Result;
}