"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.get('/', async () => {
    return { hello: 'world' };
});
Route_1.default.post('login', 'AuthController.login');
Route_1.default.delete('logout', 'AuthController.logout').middleware(['auth:api']);
Route_1.default.post('register', 'UsersController.store');
Route_1.default.group(() => {
    Route_1.default.resource('users', 'UsersController');
    Route_1.default.get('user', 'UsersController.getUser');
    Route_1.default.resource('docs', 'DocumentsController');
    Route_1.default.post('update-doc', 'DocumentsController.updateStatus');
    Route_1.default.resource('requests', 'RequestsController');
    Route_1.default.post('update-req', 'RequestsController.updateStatus');
})
    .prefix('api/v1')
    .middleware(['auth:api']);
//# sourceMappingURL=routes.js.map