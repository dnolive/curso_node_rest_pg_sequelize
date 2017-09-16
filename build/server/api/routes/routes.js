"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Routes = /** @class */ (function () {
    function Routes(app) {
        this.getRoute(app);
    }
    Routes.prototype.getRoute = function (app) {
        app.route('/').get(function (req, res) {
            res.send('Hello World!');
        });
        app.route('/ola/:nome').get(function (req, res) {
            res.send("Hello, " + req.params.nome + "!");
        });
    };
    return Routes;
}());
exports.default = Routes;
