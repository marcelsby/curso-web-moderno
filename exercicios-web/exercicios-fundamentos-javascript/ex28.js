const getArrayFilteredByElementDigitQtd = (numbers, digits) => {
    filtered = numbers.map(n => n.toString())
                      .filter(n => n.length === digits)
                      .map(n => parseInt(n))
    
    return filtered 
}

console.log(getArrayFilteredByElementDigitQtd([ 11, 113, 14, 1110, 999 ], 2))
console.log(getArrayFilteredByElementDigitQtd([ 11, 113, 14, 1110, 999 ], 4))