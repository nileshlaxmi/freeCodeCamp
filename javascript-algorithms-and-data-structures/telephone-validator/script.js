const numberValidator = () => {
    let value = document.getElementById('user-input')?.value
    const regX = /^1?\s?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/
    if (!!value) {
        if (regX.test(value)) {
            document.getElementById('results-div').innerText = `Valid US number: ${value}`
        } else {
            document.getElementById('results-div').innerText = `Invalid US number: ${value}`
        }
    } else {
        alert('Please provide a phone number')
    }
}

const clearFields = () => {
    document.getElementById('user-input').value = "";
    document.getElementById('results-div').innerText = "";
}