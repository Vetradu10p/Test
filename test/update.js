const assert = require('assert');
const Book = require('../src/books');

describe('Test de update', () => {
    let book1;
    let newTitle = 'Game of Thrones';
    beforeEach( (done) => {
        book1 = new Book({title:'Moby Dick'});
        book1.save().then( () => {
            done();
        })
    })

    function assertTitle(promise,done) {
        promise.then( () => {
            Book.find({}).then( (books) => {
                assert(books[0].title===newTitle);
                done();
            })
        })
    }
    it('Update depuis une instance', (done) => {
        book1.set('title', newTitle);
        assertTitle(book1.save(),done);
    })

    it('Update depuis le modele', (done) => {
        assertTitle( Book.update({title:'Moby Dick'}, {title:newTitle}),done);
    })


})