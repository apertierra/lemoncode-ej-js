
const aA = ['Luis', 'Pedro', 'Jaime', 'Mateo', 'Ignacio'];
console.log(aA);

const aB = ['Bea', 'Laura', 'Carmen', 'Maria', 'Covadonga'];
console.log(aB);

// El primer elemento
const head = (arr) => {
    const [first] = arr; 
    console.log(first);
};
head(aA);

// Todos menos el primero
const tail = (arr) => {
    const [first, ...rest] = arr;  
    console.log(rest); 
};
tail(aA);

// Todos menos el último
const init = (arr) => {
    const elements = Array.prototype.slice.call(arr, 0, arr.length - 1);
    console.log(elements);
};
init(aA);

// El último elemento
const last = (arr) => {
    const last = arr.pop(); 
    console.log(last);
};
last(aA);

// Concat
const concat = (a, b) => {
    const c = [...a, ...b];
    console.log(c);
}
concat(aA, aB);

const concat2 = (...args) => {
    const c = args.reduce((acc, val) => [...acc, ...val]);
    console.log(c);
}
concat2(aA, aB, [1, 2, 3, 4, 5, 6], ['chica', 'chico']);

// Clone
const a = {name: "Maria", surname: "Ibañez", country: "SPA"};
const b = {name: "Luisa", age: 31, married: true};

function clone(source) {
    var c = JSON.parse(JSON.stringify(source));
    return c;
}
console.log( clone(a) );

// Merge
const merge = (source, target) => {
    const s = clone(source);
    const t = clone(target);
    console.log( Object.assign(t, s) );
}
merge(a, b);

// Read Books
const books = [
    {title: "Harry Potter y la piedra filosofal", isRead: true},
    {title: "Cancion de hielo y fuego", isRead: false},
    {title: "Devastacion", isRead: true},
];

function isBookRead(books, titleToSearch) {
      
    const myBook = books.filter(book => book.title == titleToSearch);
    
    if (myBook.length > 0){
        const myBookIsRead = myBook[0].isRead;    
        if(myBookIsRead) return 'Han leido el libro.';
            else return 'Todavia no lo ha leido nadie.';
    } else {
        return 'El libro no esta en la lista.';
    }

}

console.log(isBookRead(books, "Devastacion")); // true
console.log(isBookRead(books, "Cancion de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false

// Slot Machine
class SlothMachine {
    constructor() {
        this.numMonedas = 0;
    }

    play() {

        ++this.numMonedas;
        
        const roulette_1 = this.getBoolean();
        const roulette_2 = this.getBoolean();
        const roulette_3 = this.getBoolean();

        // console.log(this.numMonedas);
        // console.log(roulette_1 + ' - ' + roulette_2 +' - '+ roulette_3);
        
        if ( roulette_1 && roulette_2 && roulette_3 ) {
            console.log("Congratulations!!!. You won "+ this.numMonedas +" coins!!");
            this.numMonedas = 0;
        } else {
            console.log("Good luck next time!!");
            console.log("In pot there are "+ this.numMonedas +" coins.");
        }

    }

    getBoolean() {
        const randomBool = () => Boolean(Math.round(Math.random()));
        return randomBool() ;
    }
}

const machine1 = new SlothMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
