/**
 * 
 * L'operatore in viene usato quando si voglio effettuare delle valutazioni su una variabile che implementa un'interfaccia
 *
 */

interface Iinterfaccia1 {
    id: number,
    nome: string
};
interface Iinterfaccia2 {
    descrizione: string,
    valore: number
};

const stampaNomeODescrizione = (parametro: Iinterfaccia1 | Iinterfaccia2) => {
    if ('id' in parametro) {
        console.log(`Trovato id ! | nome : ${parametro.nome}`);
    }
    if ('valore' in parametro) {
        console.log(`Trovato valore ! | descrizione : ${parametro.descrizione}`);
    }
};

let variabile1: Iinterfaccia1 = { id: 3, nome: 'prova' };
let variabile2: Iinterfaccia2 = { descrizione: 'prova', valore: 9 };
stampaNomeODescrizione(variabile1);
stampaNomeODescrizione(variabile2);