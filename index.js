class User {
    constructor (name, surname, books, pets) {
        this.name = name;
        this.surname = surname;
        this.books = books;
        this.pets = pets;
    }


getFullName() {
    return `Hola, bienvenido ${this.name} ${this.surname}.`;
}

addMascota() {
    this.pets.push();
    void this.pets;
    return this.pets
}

countMascotas() {
    return this.pets.length;
}

addBook(title, author) {
    this.books.push( {title : title, author : author} );
    void this.books;
}

getBooksNames() {
    let bookNames = [];
    this.books.forEach( book => bookNames.push(book.title) );
    return bookNames
}

}

const user1 = new User('Rick', 'Blaine', [{title: 'The Grapes of Wrath', author: 'John Steinbeck'}], ['Perro', 'Gato']);
const user2 = new User('Light', 'Yagami', [{title: 'Death Note', author: 'Ryuk'}], ['Araña', 'Abeja', 'Iguana'] );


console.log(user1.getFullName());
console.log(user1.addMascota());
console.log(user1.countMascotas());
console.log(user1.getBooksNames());

console.log(user2.getFullName());
console.log(user2.addMascota());
console.log(user2.countMascotas());
console.log(user2.getBooksNames());