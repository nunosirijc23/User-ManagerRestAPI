var express = require('express');
var router = express.Router();
var restify = require('restify-clients') // importar o restify-clients
var assert = require('assert') // importando assert

/* configurando restify para definindo RestAPI que ele vai consumir*/
var client = restify.createJSONClient({
  url: 'http://localhost:4000' // passando o endenço da RestAPI
}) 


/* GET users listing. */
router.get('/', function(req, res, next) {

  /* client consumindo os dados dos users da api */
  client.get('/users', function (err, request, response, obj) {

    assert.ifError(err)

    res.json(obj) // respondendo response do express

  })

});

/* GET user by id listing. */
router.get('/:id', function(req, res, next) {

  /* client consumindo os dados dos users da api */
  client.get(`/users/${req.params.id}`, function (err, request, response, obj) {

    assert.ifError(err)

    res.json(obj) // respondendo response do express

  })

});

/* PUT user listing. */
router.put('/:id', function(req, res, next) {

  /* client consumindo os dados dos users da api */
  client.put(`/users/${req.params.id}`, req.body, function (err, request, response, obj) {

    assert.ifError(err)

    res.json(obj) // respondendo response do express

  })

});

/* DELETE user by id listing. */
router.delete('/:id', function(req, res, next) {

  /* client consumindo os dados dos users da api */
  client.del(`/users/${req.params.id}`, function (err, request, response, obj) {

    assert.ifError(err)

    res.json(obj) // respondendo response do express

  })

});

/* POST user by id listing. */
router.post('/', function(req, res, next) {

  /* client consumindo os dados dos users da api */
  client.post(`/users`, req.body, function (err, request, response, obj) {

    assert.ifError(err)

    res.json(obj) // respondendo response do express

  })

});


module.exports = router;
