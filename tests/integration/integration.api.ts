import { app, request, expect } from './config/helpers';

describe('Testes de integração', () => {

   describe('GET /api/users/all', () => {
      it('Deve retornar um json com todos usuários', done => {
         request(app)
         .get('/api/users/all')
         .end((error: Error, res: Response) => {
            expect(res.status).to.equal(200)
         } )
      })
   });

   describe('GET /api/users/:id', () => {
      it('Deve retornar um json com apenas um usuário', done => {
         request(app)
         .get(`/api/users/${1}`)
         .end((error: Error, res: Response) => {
            expect(res.status).to.equal(200)
         } )
      })
   });

   describe('POST /api/users/new', () => {
      it('Deve criar um novo usuário', done => {
         const user = {
            nome: 'Teste'
         }
         request(app)
         .post('/api/users/new')
         .send(user)
         .end((error: Error, res: Response) => {
            expect(res.status).to.equal(200)
         } )
      })
   });

   describe('PUT /api/users/:id/edit', () => {
      it('Deve atualizar um usuário', done => {
         const user = {
            nome: 'TesteUpDate'
         }
         request(app)
         .put(`/api/users/${1}/edit`)
         .send(user)
         .end((error: Error, res: Response) => {
            expect(res.status).to.equal(200)
         } )
      })
   });

   describe('DELETE /api/users/:id', () => {
      it('Deve EXCLUIR um usuário', done => {
         request(app)
         .put(`/api/users/${1}`)
         .end((error: Error, res: Response) => {
            expect(res.status).to.equal(200)
         } )
      })
   });

})
