//Classe Singleton che definisce il metodo getInstance che permette ai client di accedere ad un'unica istanza istanza della classe 
class Singleton {
    private static instance: Singleton;
    private temperatura: number;

    //Il costruttore deve sempre essere private affinchè non si possa accedere direttemente dall'esterno con l'operatore new
    private constructor() { };

    //Il metodo static che controlla gli accessi all'istanza della classe Singleton
    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
            Singleton.instance.temperatura = 0;
        }

        return Singleton.instance;
    };

    getTemperatura(): number {
        return this.temperatura;
    };
    setTemperatura(_temperatura: number): void {
        this.temperatura = _temperatura;
    };
    aumentaTemperatura(): void {
        this.temperatura++;
    };
    diminuisciTemperatura(): void {
        this.temperatura--;
    }
};

function client() {
    const c1 = Singleton.getInstance();
    const c2 = Singleton.getInstance();

    c2.aumentaTemperatura();
    c1.aumentaTemperatura();

    if (c1 === c2) {
        console.log("\n\nSingleton funziona, entrambi le variabili contengono la stessa identica istanza\n\n")
    } else {
        console.log("Singleton non funziona..........");
    }

    console.log(`Temperatura Attuale: ${c2.getTemperatura()}\n\n`);
};

client();