/**
 * Le interfacce sono dei particolari costrutti in TypeScript che non generano codice Javascript dopo la compilazione.
 * Esse vengono utilizzate unicamente dal compilatore nel momento in cui si deve effettuare un controllo
 * sui tipi.
 * 
 * Per dichiarare un'interfaccia viene utilizzata la parola chiave riservata interface
 * Il nome di un interfaccia per convenzione viene sempre preceduto da una I maiuscola e la prima lettera del nome è maiuscola.
 */
interface ItipoComplesso {
    id: number,  // proprietà 1
    nome: string // proprietà 2 ecc...
};

//Dichiarazione di una variabile di tipo tipoComplesso
let variabileComplessa: ItipoComplesso = { id: 1, nome: 'variabile_1' };
//Se proviamo a dichiarare una seconda variabile senza specificare il campo due riceviamo un errore in compilazione
let variabileComplessa2: ItipoComplesso = { id: 2 };

//Come per le funzioni le interfacce possono prevedere delle proprietà che siano opzionali
interface ItipoComplesso2 {
    nome: string,
    cognome?: string,
    eta: number,
    indirizzo?: string
};
//La dichiarazione della variabile di tipo tipoComplesso2 non dà errori se omettiamo le proprietà definite opzionali
let variabileComplessa3: ItipoComplesso2 = { nome: "Gianmarco", eta: 32 };

//Per accedere alle proprietà di una variabile complessa utilizziamo l'operatore .
//L'intellisense del nostro editor ci proporrà i campi obbligatori della variabile ai quali possiamo accedere
console.log(variabileComplessa3.nome);

//E' possibile trovare interfacce con sole proprietà opzionali: in questo caso di parla di tipizzazione debole
interface ItipoDebole {
    id?: number,
    nome?: string
};

//Se proviamo però a specificare una proprietà non prevista nell'interfaccia, riceviamo un errore in fase di compilazione
let varDebole: ItipoDebole = {
    descrizione: 'ciao io sono la descrizione'
};