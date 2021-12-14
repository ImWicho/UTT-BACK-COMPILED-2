"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Database_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Database"));
const Document_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Document"));
const CreateDocumentValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/CreateDocumentValidator"));
class DocumentsController {
    async index({ response }) {
        const documents = await Document_1.default.all();
        return response.ok(documents);
    }
    async store({ response, request }) {
        await request.validate(CreateDocumentValidator_1.default);
        const trx = await Database_1.default.transaction();
        try {
            const data = request.body();
            await Document_1.default.create(data, trx);
            await trx.commit();
            return response.created({
                status: true,
                message: 'Document was created successfully',
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
    async update({ response, request, params }) {
        const doc = await Document_1.default.findOrFail(params.id);
        doc.merge(request.body());
        await doc.save();
        return response.ok({
            status: true,
            message: 'Document was updated successfully',
        });
    }
    async updateStatus({ response, request }) {
        const docId = request.input('docId');
        const status = request.input('status');
        const trx = await Database_1.default.transaction();
        try {
            const doc = await Document_1.default.findOrFail(docId);
            doc.status = status;
            await doc.save();
            return response.created({
                status: true,
                message: 'Document was updated successfully',
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
}
exports.default = DocumentsController;
//# sourceMappingURL=DocumentsController.js.map