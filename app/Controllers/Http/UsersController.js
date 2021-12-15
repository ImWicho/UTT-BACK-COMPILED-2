"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/user"));
class UsersController {
    async index({ response }) {
        const users = await user_1.default.query().preload('area').preload('role');
        return response.ok(users);
    }
    async store({ response, request }) {
        const userData = request.body();
        const user = await user_1.default.create(userData);
        return response.ok(user);
    }
    async getUser({ response, auth }) {
        const userId = auth.user?.id || 0;
        const user = await user_1.default.query()
            .where('id', userId)
            .preload('area', (query) => {
            query.preload('views');
        })
            .preload('role')
            .first();
        return response.ok(user);
    }
}
exports.default = UsersController;
//# sourceMappingURL=UsersController.js.map