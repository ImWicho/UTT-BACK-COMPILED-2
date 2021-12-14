"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class CreateDocumentValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            tipo: Validator_1.schema.string({ trim: true }, [Validator_1.rules.required(), Validator_1.rules.maxLength(100)]),
            nombre: Validator_1.schema.string({ trim: true }, [Validator_1.rules.required(), Validator_1.rules.maxLength(100)]),
            version: Validator_1.schema.string({ trim: true }, [Validator_1.rules.required(), Validator_1.rules.maxLength(100)]),
            responsable: Validator_1.schema.string({ trim: true }, [Validator_1.rules.required(), Validator_1.rules.maxLength(100)]),
            areas: Validator_1.schema.string({ trim: true }, [Validator_1.rules.required(), Validator_1.rules.maxLength(100)]),
            documentosRelacionados: Validator_1.schema.string({ trim: true }, [Validator_1.rules.required(), Validator_1.rules.maxLength(100)]),
            sustituye: Validator_1.schema.boolean([Validator_1.rules.required()]),
            codigo: Validator_1.schema.string.optional({}, [Validator_1.rules.requiredWhen('sustituye', '=', true)]),
            conservacion: Validator_1.schema.date({ format: 'yyyy-MM-dd' }, [Validator_1.rules.required()]),
            tipoResguardo: Validator_1.schema.string({ trim: true }, [Validator_1.rules.required(), Validator_1.rules.maxLength(100)]),
            disposicionFinal: Validator_1.schema.string({ trim: true }, [Validator_1.rules.required(), Validator_1.rules.maxLength(100)]),
        });
        this.messages = {};
    }
}
exports.default = CreateDocumentValidator;
//# sourceMappingURL=CreateDocumentValidator.js.map