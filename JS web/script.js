
async function getNumber1() {
    return 10;
}

async function getNumber2() {
    return 4;
}

async function getNumber3() {
    return 5 * 5;
}

async function compute() {
    const value1 = await getNumber1();
    const value2 = await getNumber2();
    const value3 = await getNumber3();
    return value1 + value2 + value3;
}

var result = document.getElementById('result')

compute()
    .then(function(data) {
        result.innerHTML = data;
    })