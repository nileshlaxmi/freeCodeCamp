function palindrome() {
    var str = $("#ipText").val();
    str = str.toLowerCase();
    str = str.replace(/[\s_,.()|:-]/g, "");
    
    let newStr = str.split("").reverse().join("");
    console.log(newStr);
    if(newStr === str){
        output = true;
        // console.log(true);
        // return true;
    }
    else{
        output = false;
        // console.log(false);
        // return false;
    }
    $("#opText").text(output);
}

function clearFields(){
    document.getElementById('ipText').value = "";
    document.getElementById('opText').innerHTML = "";
}

// palindrome("eye");
// palindrome("_eye");
// palindrome("race car");
// palindrome("not a palindrome");
// palindrome("A man, a plan, a canal. Panama");
// palindrome("never odd or even");
// palindrome("nope");
// palindrome("almostomla");
// palindrome("My age is 0, 0 si ega ym.");
// palindrome("1 eye for of 1 eye.")
// palindrome("0_0 (: /-\ :) 0-0");
// palindrome("five|\_/|four");