import { Application, Request, Response } from 'express';

class Routes {

    constructor(app: Application) {
        this.getRoute(app);
    }

    getRoute(app: Application) {
        app.route('/').get((req: Request, res: Response) => {
            res.send('Hello World!')
        });
        app.route('/ola/:nome').get((req: Request, res: Response) => {
            res.send(`Hello, ${req.params.nome}!`)
        });
    }
}

export default Routes;