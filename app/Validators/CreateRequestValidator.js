"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class CreateRequestValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            documentoId: Validator_1.schema.number([Validator_1.rules.required()]),
            nombre: Validator_1.schema.string({ trim: true }, [Validator_1.rules.required(), Validator_1.rules.maxLength(100)]),
            version: Validator_1.schema.string({ trim: true }, [Validator_1.rules.required(), Validator_1.rules.maxLength(100)]),
            status: Validator_1.schema.string({ trim: true }, [Validator_1.rules.required(), Validator_1.rules.maxLength(100)]),
            puntoCambio: Validator_1.schema.string({ trim: true }, [Validator_1.rules.required(), Validator_1.rules.maxLength(100)]),
            descripcionActual: Validator_1.schema.string({ trim: true }, [Validator_1.rules.required(), Validator_1.rules.maxLength(100)]),
            descripcionCambio: Validator_1.schema.string({ trim: true }, [Validator_1.rules.required(), Validator_1.rules.maxLength(100)])
        });
        this.messages = {};
    }
}
exports.default = CreateRequestValidator;
//# sourceMappingURL=CreateRequestValidator.js.map