const numberAndIndexIsEven = arr => arr.filter((num, idx) => num % 2 === 0 && idx % 2 === 0)

arrNums = [10, 70, 22, 43]

console.log(numberAndIndexIsEven(arrNums))