import { app, request, expect } from './config/helpers';

describe('Testes de integração', () => {

   describe('GET /api/users/all', () => {
      it('Deve retornar um json com todos usuários', done => {
         request(app)
         .get('/api/users/all')
         .end((error: Error, res: Response) => {
            expect(res.status).to.equal(200);
            done(error);
         } )
      })
   });

   describe('POST /api/users/create', () => {
      it('Deve criar um novo usuário', done => {
         const user = {
            name: 'Teste',
            email: 'teste@teste.com.br',
            password: '123456'
         }
         request(app)
         .post('/api/users/create')
         .send(user)
         .end((error: Error, res: Response) => {
            expect(res.status).to.equal(200);
            done(error);
         } )
      })
   });

   describe('GET /api/users/:id', () => {
      it('Deve retornar um json com apenas um usuário', done => {
         request(app)
         .get(`/api/users/${1}`)
         .end((error: Error, res: Response) => {
            expect(res.status).to.equal(200);
            done(error);
         } )
      })
   });

   describe('PUT /api/users/:id/update', () => {
      it('Deve atualizar um usuário', done => {
         const user = {
            name: 'TesteUpDate'
         }
         request(app)
         .put(`/api/users/${1}/update`)
         .send(user)
         .end((error: Error, res: Response) => {
            expect(res.status).to.equal(200);
            done(error);
         } )
      })
   });

   describe('DELETE /api/users/:id/destroy', () => {
      it('Deve EXCLUIR um usuário', done => {
         request(app)
         .delete(`/api/users/${1}/destroy`)
         .end((error: Error, res: Response) => {
            expect(res.status).to.equal(200);
            done(error);
         } )
      })
   });

})
