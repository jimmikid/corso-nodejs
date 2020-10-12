const solutionRecoursive = (start: number, stop: number, step:number, showSum: boolean = false, resultString: any = ""): string => {
    if (start >= stop ) {
        return !showSum ? resultString : resultString.toString(); 
    } else {
        return !showSum ? solutionRecoursive(start += step, stop, step, false, resultString += `${Math.abs(start)} `) : 
        solutionRecoursive(start += step, stop, step, true, resultString += start) 
    }
 }
 console.log(`100 natural nums: ${solutionRecoursive(0,100,1)}`)
 console.log(`Sum of 100: ${solutionRecoursive(0,100,1, true, 0)}`)
 console.log(`100 Odd: ${solutionRecoursive(-1,99,2)}`)
 console.log(`100 Even: ${solutionRecoursive(-2,100,2)}`)
 console.log(`100 Inverted: ${solutionRecoursive(-101,-1,1)}`)
 