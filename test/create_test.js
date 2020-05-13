const assert = require('assert');
const Book = require('../src/books');
const mongoose = require ('mongoose');

    describe('Test de create', () => {
        it('Sauvegarde d un livre', () => {
            const book1 = new Book({title: "Harry Potter"});
            book1.save().then( () => {
                assert(!book1.isNew);
            });
        })
    });