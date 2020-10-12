function sommaNumeri(num1: number, num2: number): number;
function sommaNumeri(num1: string, num2: string): string;
function sommaNumeri(num1: any, num2: any): any {
	return num1 + num2;
};

function sommaNumeriERitornaStringa(num1: number, num2: number): string {
	return (num1 + num2).toString();
}

function generaArrayDiPari(numElementi: number): number[] {
	let arrayDiPari: number[] = [];

	for (let i: number = 0, j: number = 0; i < numElementi; i++) {
		if (i % 2 === 0) {
			arrayDiPari[j] = i;
			j++;
		}
	}

	return arrayDiPari;
}

console.log(sommaNumeri(2, 3));
console.log(sommaNumeri('2', '2'));
console.log('\n\n\n=================\n\n\n');
console.log(sommaNumeriERitornaStringa(2, 3));
console.log("\n\n ================= \n\n");
console.log(generaArrayDiPari(20));

function stampaCiao(): void {
	console.log("Ciao!");
}

stampaCiao();

function miaConcat(string1: string, string2: string, string3?: string): string {
	let returnString: string = string1 + string2 + string3;

	return returnString;
}

console.log(miaConcat("", ""));

function miaConcat2(
	string1: string,
	string2: string,
	string3: string = "pippo"
): string {
	let returnString: string = string1 + string2 + string3;

	return returnString;
}

console.log(miaConcat2("3", "4"));


console.log("\n\n=========================\n\n");

function miaCallback(miaStringa: string): void {
	console.log(`Parametro in ingresso: ${miaStringa}`);
};

function chiamaCallback(altraStringa: string, callbackFunc: (altraStringa: string) => void): void {
	console.log(`funziona chiamaCallback: ${altraStringa}`);
	callbackFunc(altraStringa);
};

chiamaCallback("pippo", miaCallback);

let arrayReturn = ["a", "b", "c", "d"].filter((arrayItem) => { return arrayItem === "a" ? arrayItem : null });
console.log(arrayReturn);

console.log("\n\n\n ============================ \n\n\n");
try {
	console.log("Ciao, sono nel blocco try...");
	JSON.parse(`abcd=1224`);
	console.log("pippo");
} catch (error) {
	console.log(`Ho generato il seguente errore: ${error}`);
	for (let i: number = 0; i < 1000; i++) {
		console.log(i);
	}
	//....eventuale altro codice.....
} finally {
	console.log('Sono il blocco finally e vengo sicuramente eseguito');
}

console.log("\n\n\n ============================ \n\n\n");
console.log(`Number.MAX_SAFE_INTEGER: ${Number.MAX_SAFE_INTEGER}`);

let bigInt = 9_007_199_254_740_991n;

for (let i = 0; i < 10; i++) {
	console.log(`${i} :  ${bigInt + BigInt(i)}`);
}