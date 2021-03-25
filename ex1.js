const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3

const dolphins1 = calcAverage(44,23,71)
// console.log(scoreDolphins)

const koalas1 = calcAverage(65,54,49)
// console.log(scoreKoalas)

const checkwinner = (scoreDolphins, scoreKoalas) => scoreDolphins > scoreKoalas ? console.log(`Dolphins won (${scoreDolphins} x ${scoreKoalas})`) : console.log(`Koalas won (${scoreKoalas} x ${scoreDolphins})`)

checkwinner(koalas1, dolphins1)

const dolphins2 = calcAverage(85,54,41)
const koalas2 = calcAverage(23,34,27)

checkwinner(koalas2, dolphins2)