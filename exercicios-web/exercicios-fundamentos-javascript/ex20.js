const areaDoTriangulo = (base, altura) => {
    area = (base * altura) / 2
    area = area.toFixed(2)

    return area
}

console.log(areaDoTriangulo(10, 15))