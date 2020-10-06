/**
 * 
 * Esercizio 1 - Creare un array contenente i primi 100 numeri naturali
 * Esercizio 2 - Creare un array contenente i primi 50 numeri pari
 * Esercizio 3 - Creare un array contenente i primi 50 numeri dispari
 * Esercizio 4 - Creare un array contenente i 50 pari e i 50 dispari alternati ed invertiti di segno
 *               esempio: array1=[2, 4, 6] array2=[1,3,5] array3 = [-1,-2,-3,-4,-5,-6]
 * Esercizio 5 - Invertire l'ordine degli elementi dell'array dell'Esercizio 1
 * Esercizio 6 - Sommare l'array dell'Esercizio 1 all'array dell'Esercizio 4
 *  
 */
class ArrayExercicesApp {
   //Exercise 1
   private createArrayWith100Nums = ():number[] => Helpers.arrCreate(Helpers.ONE_HUNDRED)
   //Exercise 2
   private createArrayWith50EvenNums = ():number[] => Helpers.arrCreate(Helpers.ONE_HUNDRED).filter(i => i % Helpers.TWO === Helpers.ZERO)
   //Exercise 3
   private createArrayWith50OddNums = ():number[] => Helpers.arrCreate(Helpers.ONE_HUNDRED).filter(i => i % Helpers.TWO !== Helpers.ZERO)
   //Exercise 4
   private interleaveArraysAndInvertNums = ():number[] => {
      const arrayEven: number[] = this.createArrayWith50EvenNums()
      const arrayOdd: number[] = this.createArrayWith50OddNums()
      const length: number = Math.min(arrayEven.length, arrayOdd.length)
      return [].concat(...Array.from({ length }, (_, i) => [arrayEven[i], arrayOdd[i]]), arrayEven.slice(length), arrayOdd.slice(length)).map(i => !i ? i : -Math.abs(i))
   }
   //Exercise 5
   private invertFirstArray = ():number[] => exercises.createArrayWith100Nums().reverse()
   //Exsercise 6
   private sumArraysOneAndFour = ():number[] => {
      const arr1: number[] = this.interleaveArraysAndInvertNums()
      return this.createArrayWith100Nums().map((num, index) => num + arr1[index])
   }
   // The method to run all the exercises.
   public run = (): void => {
      let exerciseNumber: number = 1
      const methods: string[] = Object.getOwnPropertyNames(this) // getting all methods in this class
      const indexOfCurrentMethod = methods.indexOf("run") //to avoid infinite recursion I need to exclude currend method from array
      methods.splice(indexOfCurrentMethod, 1)
      //iterating and running all the methods
      let exerciseNumberToString: string
      for (const method of methods) {
         exerciseNumberToString = `Exercise_${exerciseNumber}`
         Helpers.separator(exerciseNumberToString)
         exerciseNumber++
         console.log(this[method]())
         Helpers.separator()
      }
   }
}

// Class-helper, which simply separates lines and creates arrays
class Helpers {
   static readonly ONE_HUNDRED : number = 100
   static readonly ZERO : number = 0
   static readonly TWO : number = 2
   static separator = (exerciseNumber:string ="=========="): void => console.log("===========================" + exerciseNumber + "===========================")
   static arrCreate = (num: number): number[] => [...Array(num).keys()]
}


// Instance creation and app running
const exercises = new ArrayExercicesApp()
exercises.run()