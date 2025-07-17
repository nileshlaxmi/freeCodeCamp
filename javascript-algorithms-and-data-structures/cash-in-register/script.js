let price = 19.5;
let cid = [
    ['PENNY', 1.01],
    ['NICKEL', 2.05],
    ['DIME', 3.1],
    ['QUARTER', 4.25],
    ['ONE', 90],
    ['FIVE', 55],
    ['TEN', 20],
    ['TWENTY', 60],
    ['ONE HUNDRED', 100]
];

let denom = [
    { name: 'ONE HUNDRED', val: 100.00 },
    { name: 'TWENTY', val: 20.00 },
    { name: 'TEN', val: 10.00 },
    { name: 'FIVE', val: 5.00 },
    { name: 'ONE', val: 1.00 },
    { name: 'QUARTER', val: 0.25 },
    { name: 'DIME', val: 0.10 },
    { name: 'NICKEL', val: 0.05 },
    { name: 'PENNY', val: 0.01 }
];

const checkCashRegister = () => {
    let cash = parseFloat(document.getElementById('cash')?.value || 0);
    if (cash) {
        if (cash < price) {
            alert("Customer does not have enough money to purchase the item");
            return;
        }
        if (cash === price) {
            document.getElementById('change-due').innerText = "No change due - customer paid with exact cash";
            return;
        }

        let output = {
            status: "",
            change: []
        };

        let change = cash - price;

        let register = cid.reduce(function (acc, curr) {
            acc.total += curr[1];
            acc[curr[0]] = curr[1];
            return acc;
        }, { total: 0 });

        if (register.total.toFixed(2) === change.toFixed(2)) {
    output.status = 'CLOSED';
    output.change = cid;
    
    let resultText = `Status: CLOSED`;
    cid.forEach(([name, val]) => {
        if (val > 0) {
            resultText += ` ${name}: $${val.toFixed(2)}`;
        }
    });

    document.getElementById('change-due').innerText = resultText;
    return;
}

        if (register.total < change) {
            output.status = 'INSUFFICIENT_FUNDS';
            document.getElementById('change-due').innerText = "Status: INSUFFICIENT_FUNDS";
            return;
        }

        let change_arr = denom.reduce(function (acc, curr) {
            let value = 0;

            while (register[curr.name] > 0 && change >= curr.val) {
                change -= curr.val;
                register[curr.name] -= curr.val;
                value += curr.val;

                change = Math.round(change * 100) / 100;
            }

            if (value > 0) {
                acc.push([curr.name, value]);
            }
            return acc;
        }, []);

        if (change_arr.length < 1 || change > 0) {
            output.status = 'INSUFFICIENT_FUNDS';
            document.getElementById('change-due').innerText = "Status: INSUFFICIENT_FUNDS";
            return;
        }

        output.status = 'OPEN';
        output.change = change_arr;

        const changeText = change_arr.map(item => `${item[0]}: $${item[1]}`).join(" ");
        document.getElementById('change-due').innerText = `Status: ${output.status} ${changeText}`;
    } else {
        alert("Please enter cash amount");
        return;
    }
};