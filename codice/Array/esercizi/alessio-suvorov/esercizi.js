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
    constructor() {
        //Exercise 1
        this.createArrayWith100Nums = () => Helpers.arrCreate(Helpers.ONE_HUNDRED);
        //Exercise 2
        this.createArrayWith50EvenNums = () => Helpers.arrCreate(Helpers.ONE_HUNDRED).filter(i => i % Helpers.TWO === Helpers.ZERO);
        //Exercise 3
        this.createArrayWith50OddNums = () => Helpers.arrCreate(Helpers.ONE_HUNDRED).filter(i => i % Helpers.TWO !== Helpers.ZERO);
        //Exercise 4
        this.interleave = () => {
            const arrayEven = this.createArrayWith50EvenNums();
            const arrayOdd = this.createArrayWith50OddNums();
            const length = Math.min(arrayEven.length, arrayOdd.length);
            return [].concat(...Array.from({ length }, (_, i) => [arrayEven[i], arrayOdd[i]]), arrayEven.slice(length), arrayOdd.slice(length)).map(i => !i ? i : -Math.abs(i));
        };
        //Exercise 5
        this.invertFirstArray = () => exercises.createArrayWith100Nums().reverse();
        //Exsercise 6
        this.sumArraysOneAndFour = () => {
            const arr1 = this.interleave();
            return this.createArrayWith100Nums().map((num, index) => num + arr1[index]);
        };
        // The method to run all the exercises.
        this.run = () => {
            let exerciseNumber = 1;
            const methods = Object.getOwnPropertyNames(this); // getting all methods in this class
            var index = methods.indexOf("run"); //to avoid infinite recursion I need to exclude currend method from array
            methods.splice(index, 1);
            //iterating and running all the methods
            for (const method of methods) {
                let exerciseNumberToString = `Exercise_${exerciseNumber}`;
                Helpers.separator(exerciseNumberToString);
                exerciseNumber++;
                console.log(this[method]());
                Helpers.separator();
            }
        };
    }
}
// Class-helper, which simply separates lines and creates arrays
class Helpers {
}
Helpers.ONE_HUNDRED = 100;
Helpers.ZERO = 0;
Helpers.TWO = 2;
Helpers.separator = (exerciseNumber = "==========") => console.log("===========================" + exerciseNumber + "===========================");
Helpers.arrCreate = (num) => [...Array(num).keys()];
// Instance creation and app running
const exercises = new ArrayExercicesApp();
exercises.run();
