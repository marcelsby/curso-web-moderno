const secondHigher = numbers => {
    ordered = numbers.sort()
    result =  ordered[ordered.length - 1]

    return result 
}

console.log(secondHigher([ 11, 113, 14, 1110, 999 ])) 