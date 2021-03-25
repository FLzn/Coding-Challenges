const bills = [22,295,176,440,37,105,10,1100,86,52]
const tips = []
const totals = []

const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2

for (let i = 0; i <= bills.length - 1; i++) {
    let tip = calcTip(bills[i])
    tips.push(tip)
    let total = bills[i] + calcTip(bills[i])
    totals.push(total)
}

function calcAverage(arr) {
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum / arr.length
}

console.log(calcAverage(totals))