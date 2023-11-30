Esercizio di oggi: Campo Minato
nome repo: js-campominato-dom
Consegna
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git). (Non dovete ricominciare l'esercizio da capo quindi, prendete quello che avete fatto ieri, copiatelo nella repo di oggi e partite da li a lavorare)
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
Attenzione: **nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
BONUS:
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
SUPER-BONUS 1:
Quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle.
SUPER-BONUS 1:
Quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste.
Consigli del giorno: :party_wizard:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio: Di cosa ho bisogno per generare i numeri? Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti. Le validazioni e i controlli possiamo farli anche in un secondo momento.
Buon lavoro, a domani!

SCAFFOLDING

1 - creare funzione che generi 16 numeri casuali e univoci nel range da 1 a 100 ;
2 - inseriamo i numeri generati all'interno di un array;
3 - mettiamo una condizione al click delle caselle;
4 - creiamo una variabile punteggio;
5 - creiamo variabile game-over impostata su false;
6 - ? la variante game-over è falsa controlliamo
    6 - ? il numero della casella non è all'interno dell'array;
        6.1 - la casella diventa azzurra;
        6.2 - il punteggio aumenta;
    7 - : la casella diventa rossa;
        7.1 - la variante game-over diventa vera;
        8 - creiamo alert che mostra la variabile punteggio;
9 - ? il punteggio è uguale a 100 - 16
    9.1 - creiamo alert che mostra il punteggio e si congratula per la vittoria
    9.2 - la variante game-over diventa vera
