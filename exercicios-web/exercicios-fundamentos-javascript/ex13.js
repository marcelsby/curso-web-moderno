const filtrarNumeros = arr => {
    const newArray = []

    for (i of arr) {
        if (typeof i === 'number')
            newArray.push(i)
    }

    return newArray
}

sample = ["Javascript", 1, "3", "Web", 20]
console.log(filtrarNumeros(sample))