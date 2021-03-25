// Se a conta for entre 50 e 300, gorgeta é 15%, fora disso é 20%

const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20

const bills = [125,555,44]
const tips = []
const total = []

const bill1 = calcTip(bills[0])
tips.push(bill1)

const bill2 = calcTip(bills[1])
tips.push(bill2)

const bill3 = calcTip(bills[2])
tips.push(bill3)

const total1 = bills[0] + bill1
total.push(total1)
const total2 = bills[1] + bill2
total.push(total2)
const total3 = bills[2] + bill3
total.push(total3)

console.log(total)