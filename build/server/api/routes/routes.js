"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var routes_1 = require("../../modules/User/routes");
var Routes = (function () {
    function Routes(app) {
        this.router = new routes_1.default();
        this.getRoute(app);
    }
    Routes.prototype.getRoute = function (app) {
        app.route('/api/users/all').get(this.router.index);
        app.route('/api/users/create').get(this.router.create);
        app.route('/api/users/:id').get(this.router.findOne);
        app.route('/api/users/:id/update').get(this.router.update);
        app.route('/api/users/:id/destroy').get(this.router.destroy);
    };
    return Routes;
}());
exports.default = Routes;
