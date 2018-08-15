const romanConverter = () => {
    var numStr = $("#ipText").val();
    var num = parseInt(numStr);

    let decimalArray = [1000, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    let romanArray = ["M", "CM", "DCCC", "DCC", "DC", "D", "CD", "CCC", "CC", "C", "XC", "LXXX", "LXX", "LX", "L", "XL", "XXX", "XX", "X", "IX", "VIII", "VII", "VI", "V", "IV", "III", "II", "I"];
    let a, b, c, d, indexA, indexB, indexC;
    let output;
    let ar = num.toString().split("");

    let len = ar.length;
    let index = decimalArray.indexOf(num);

    if(index !== -1){
        output = romanArray[index];
    }
    else{
        if(len >= 5){
            $("#opText").text("Number should be less than 10K");
        }
        else{
            if(len > 3){
                d = parseInt(ar[0]);
                a = parseInt(ar[1]) * 100;
                b = parseInt(ar[2]) * 10;
                c = parseInt(ar[3]);
        
                let str = "";
                for(let i=0; i<d; i++){
                    str = str + "M";
                }
                
                if(a > 0){
                    indexA = decimalArray.indexOf(a);
                }
        
                if(b > 0){
                    indexB = decimalArray.indexOf(b);
                }
                
                indexA = decimalArray.indexOf(a);
                indexB = decimalArray.indexOf(b);
                indexC = decimalArray.indexOf(c);
        
                if(indexA === -1 && indexB === -1){
                    output = str+romanArray[indexC];
                } 
                else if(indexA === -1 && indexB != -1){
                    output = str+romanArray[indexB]+romanArray[indexC];
                } 
                else if(indexB === -1 && indexA !== -1){
                    output = str+romanArray[indexA]+romanArray[indexC];
                }
                else if (indexB !== -1 && indexA !== -1){
                    output = str+romanArray[indexA]+romanArray[indexB]+romanArray[indexC];
                }
            }
            else if(len <= 3 && len > 2) {
                a = parseInt(ar[0]) * 100;
                b = parseInt(ar[1]) * 10;
                c = parseInt(ar[2]);
        
                indexA = decimalArray.indexOf(a);
        
                if(b > 0){
                    indexB = decimalArray.indexOf(b);
                }
        
                if(c > 0){
                    indexC = decimalArray.indexOf(c);
                }
        
                if(indexB === undefined){
                    output = romanArray[indexA]+romanArray[indexC];
                } 
                else if(indexC === undefined){
                    output = romanArray[indexA]+romanArray[indexB];
                }
                else{
                    output = romanArray[indexA]+romanArray[indexB]+romanArray[indexC];
                }
        
            }
            else if(len <= 2 && len > 1) {
                a = parseInt(ar[0]) * 10;
                b = parseInt(ar[1]);
        
                indexA = decimalArray.indexOf(a);
                indexB = decimalArray.indexOf(b);
                output = romanArray[indexA]+romanArray[indexB];
            }
        }
        
    }    
    console.log(output);
    $("#opText").text(output);
}

function clearFields(){
    document.getElementById('ipText').value = "";
    document.getElementById('opText').innerHTML = "";
}

// romanConverter(8999);
// romanConverter(891);
// romanConverter(1004);
// romanConverter(1054);
// romanConverter(1504);
// romanConverter(1534);
// romanConverter(2034);
// romanConverter(3999);
// romanConverter(3);
// romanConverter(30);
// romanConverter(90);
// romanConverter(300);
// romanConverter(310);
// romanConverter(309);