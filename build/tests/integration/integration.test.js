"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("./config/helpers");
describe('Testes de integração', function () {
    describe('GET /api/users/all', function () {
        it('Deve retornar um json com todos usuários', function (done) {
            helpers_1.request(helpers_1.app)
                .get('/api/users/all')
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(200);
                done(error);
            });
        });
    });
    describe('POST /api/users/create', function () {
        it('Deve criar um novo usuário', function (done) {
            var user = {
                name: 'Teste',
                email: 'teste@teste.com.br',
                password: '123456'
            };
            helpers_1.request(helpers_1.app)
                .post('/api/users/create')
                .send(user)
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(200);
                done(error);
            });
        });
    });
    describe('GET /api/users/:id', function () {
        it('Deve retornar um json com apenas um usuário', function (done) {
            helpers_1.request(helpers_1.app)
                .get("/api/users/" + 1)
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(200);
                done(error);
            });
        });
    });
    describe('PUT /api/users/:id/update', function () {
        it('Deve atualizar um usuário', function (done) {
            var user = {
                name: 'TesteUpDate'
            };
            helpers_1.request(helpers_1.app)
                .put("/api/users/" + 1 + "/update")
                .send(user)
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(200);
                done(error);
            });
        });
    });
    describe('DELETE /api/users/:id/destroy', function () {
        it('Deve EXCLUIR um usuário', function (done) {
            helpers_1.request(helpers_1.app)
                .delete("/api/users/" + 1 + "/destroy")
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(200);
                done(error);
            });
        });
    });
});
