const romanConverter = () => {
    let numStr = document.getElementById('number').value;
    let num = parseInt?.(numStr);
    if (num > 0 && num < 4000) {
        let decimalArray = [1000, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
        let romanArray = ["M", "CM", "DCCC", "DCC", "DC", "D", "CD", "CCC", "CC", "C", "XC", "LXXX", "LXX", "LX", "L", "XL", "XXX", "XX", "X", "IX", "VIII", "VII", "VI", "V", "IV", "III", "II", "I"];
        let a, b, c, d, indexA, indexB, indexC;
        let output;
        let ar = num?.toString()?.split?.("");

        let len = ar?.length;
        let index = decimalArray?.indexOf(num);

        if (index !== -1) {
            output = romanArray?.[index];
        }
        else {
            if (len >= 5) {
                document.getElementById('output').innerText = "Number should be less than 10K"
            }
            else {
                if (len > 3) {
                    d = parseInt(ar[0]);
                    a = parseInt(ar[1]) * 100;
                    b = parseInt(ar[2]) * 10;
                    c = parseInt(ar[3]);

                    let str = "";
                    for (let i = 0; i < d; i++) {
                        str = str + "M";
                    }

                    if (a > 0) {
                        indexA = decimalArray?.indexOf(a);
                    }

                    if (b > 0) {
                        indexB = decimalArray?.indexOf(b);
                    }

                    indexA = decimalArray?.indexOf(a);
                    indexB = decimalArray?.indexOf(b);
                    indexC = decimalArray?.indexOf(c);

                    if (indexA === -1 && indexB === -1) {
                        output = str + romanArray[indexC];
                    }
                    else if (indexA === -1 && indexB != -1) {
                        output = str + romanArray[indexB] + romanArray[indexC];
                    }
                    else if (indexB === -1 && indexA !== -1) {
                        output = str + romanArray[indexA] + romanArray[indexC];
                    }
                    else if (indexB !== -1 && indexA !== -1) {
                        output = str + romanArray[indexA] + romanArray[indexB] + romanArray[indexC];
                    }
                }
                else if (len <= 3 && len > 2) {
                    a = parseInt(ar[0]) * 100;
                    b = parseInt(ar[1]) * 10;
                    c = parseInt(ar[2]);

                    indexA = decimalArray.indexOf(a);

                    if (b > 0) {
                        indexB = decimalArray.indexOf(b);
                    }

                    if (c > 0) {
                        indexC = decimalArray.indexOf(c);
                    }

                    if (indexB === undefined) {
                        output = romanArray[indexA] + romanArray[indexC];
                    }
                    else if (indexC === undefined) {
                        output = romanArray[indexA] + romanArray[indexB];
                    }
                    else {
                        output = romanArray[indexA] + romanArray[indexB] + romanArray[indexC];
                    }

                }
                else if (len <= 2 && len > 1) {
                    a = parseInt(ar[0]) * 10;
                    b = parseInt(ar[1]);

                    indexA = decimalArray.indexOf(a);
                    indexB = decimalArray.indexOf(b);
                    output = romanArray[indexA] + romanArray[indexB];
                }
            }

        }
        document.getElementById('output').innerText = output;
    } else {
        document.getElementById('output').innerText = "Please enter a valid number";
        if (num < 1) document.getElementById('output').innerText = "Please enter a number greater than or equal to 1";
        if (num > 3999) document.getElementById('output').innerText = "Please enter a number less than or equal to 3999";
    }
}

function clearFields() {
    document.getElementById('number').value = "";
    document.getElementById('output').innerText = "";
}
