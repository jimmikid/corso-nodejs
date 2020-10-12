const iterator = (start: number, end: number, step: number, showSum: boolean = false): string => {
    let sumNum:number = 0, sumStr:string = ""
    for (let i:number = start; i <= end; i += step) {
        !showSum ? sumStr += `${Math.abs(i)} ` : sumNum += i
    }
    return showSum ? sumNum.toString() : sumStr
}
console.log(`First 100 natural nums:\n${iterator(1, 100, 1)}`)
console.log(`Sum of 100 natural nums:\n${iterator(1, 100, 1, true)}`)
console.log(`100 Odd:\n${iterator(1, 100, 2)}`)
console.log(`100 Even:\n${iterator(0, 99, 2)}`)
console.log(`100 inversed:\n${iterator(-100, 0, 1)}`)

