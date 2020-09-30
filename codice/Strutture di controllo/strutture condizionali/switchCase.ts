/**
 * 
 * ISTRUZIONE CONDIZIONALE SWITCH-CASE
 * 
 */

let scelta = 1;

switch (scelta) {
    case 1:
        console.log("Ritiro denaro");
        break;
    case 2:
        console.log("Deposito denaro");
        break;
    case 3:
        console.log("Estratto conto");
        break;
    default:
        console.log("Operazione non consentita");
        break;
}

console.log("Altre operazioni bancarie");