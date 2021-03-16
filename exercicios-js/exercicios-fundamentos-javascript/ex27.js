const inverter = objeto => {
    newObj = {}

    for (prop in objeto) 
        newObj[objeto[prop]] = prop

    return newObj
}

console.log(inverter({ a: 1, b: 2, c: 3}))