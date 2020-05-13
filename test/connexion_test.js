const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

before( (done) => {
    mongoose.connect('mongodb://localhost/books_test',{useMongoClient:true});

    mongoose.connection
        .once('open',() =>
            {console.log('La connection est établie'); done()})
        .on('error',(error) => {console.warn('Erreur durant la connection', error)})
})

beforeEach ('Supprime les anciens livres', (done) => {
    const {books} = mongoose.connection.collections;
    books.drop().then( () => {
        done();
    }).catch(error => {console.log(error)})
});