"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AuthController {
    async login({ request, response, auth }) {
        const email = request.input('email');
        const password = request.input('password');
        try {
            const token = await auth.use('api').attempt(email, password, {
                expiresIn: '7days',
            });
            return token.toJSON();
        }
        catch {
            return response.badRequest('Invalid credentials');
        }
    }
    async logout({ response, auth }) {
        await auth.use('api').revoke();
        return response.noContent();
    }
}
exports.default = AuthController;
//# sourceMappingURL=AuthController.js.map