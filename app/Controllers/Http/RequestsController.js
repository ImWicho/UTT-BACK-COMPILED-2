"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Request_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Request"));
const Database_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Database"));
const CreateRequestValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/CreateRequestValidator"));
const Document_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Document"));
class RequestsController {
    async index({ response }) {
        const requests = await Request_1.default.all();
        return response.ok(requests);
    }
    async store({ response, request }) {
        await request.validate(CreateRequestValidator_1.default);
        const trx = await Database_1.default.transaction();
        try {
            const data = request.body();
            await Request_1.default.create(data, trx);
            await trx.commit();
            return response.created({
                status: true,
                message: 'Request was created successfully',
            });
        }
        catch (error) {
            await trx.rollback();
            return response.internalServerError({
                status: false,
                message: 'Something went wrong',
            });
        }
    }
    async updateStatus({ response, request }) {
        const docId = request.input('docId');
        const requestId = request.input('requestId');
        const status = request.input('status');
        try {
            const doc = await Document_1.default.findOrFail(docId);
            const req = await Request_1.default.findOrFail(requestId);
            console.log('HOLAAAAAAAAAAAAAAAAAAA');
            if (status === 'approved') {
                req.status = status;
                doc.version = req.version;
                await doc.save();
            }
            await req.save();
            return response.created({
                status: true,
                message: 'Request was updated successfully',
            });
        }
        catch (error) {
            return response.internalServerError({
                status: false,
                message: 'Something went wrong',
            });
        }
    }
}
exports.default = RequestsController;
//# sourceMappingURL=RequestsController.js.map