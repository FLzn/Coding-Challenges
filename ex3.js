const mark = {
    fullname: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height).toFixed(2)
        return this.bmi
    }
}

const john = {
    fullname: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height).toFixed(2)
        return this.bmi
    }
}

console.log(john.calcBMI().toFixed(2));
console.log(mark.calcBMI().toFixed(2));

const resp = mark.calcBMI() > john.calcBMI() ? console.log(`Mark's BMI (${mark.calcBMI().toFixed(2)}) is higher than Jonh's (${john.calcBMI().toFixed(2)}) `) : console.log(`John's BMI (${john.calcBMI().toFixed(2)}) is higher than John's (${mark.calcBMI().toFixed(2)}) `)

// console.log(resp);