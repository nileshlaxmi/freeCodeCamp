const cipher = () => {
    let str = document.getElementById('ipText')?.value;
    let alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let index, newIndex, ar = [], newAr = [];

    str = str.toUpperCase();
    ar = str.split("");

    for (let i = 0; i < ar.length; i++) {
        index = alphabets.indexOf(ar[i]);
        if (index === -1) {
            newAr.push(ar[i]);
        }
        else {
            if (index <= 12) {
                newIndex = index + 13;
                newAr.push(alphabets[newIndex]);
            }
            else {
                let value = 25 - index;
                newIndex = 12 - value;
                newAr.push(alphabets[newIndex]);
            }
        }
    }
    let newStr = newAr.join("");

    document.getElementById('opText').innerText = newStr;
}

function clearFields() {
    document.getElementById('ipText').value = "";
    document.getElementById('opText').innerText = "";
}
