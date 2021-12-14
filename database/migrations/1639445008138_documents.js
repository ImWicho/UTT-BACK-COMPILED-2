"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Documents extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'documents';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.string('tipo', 100).notNullable();
            table.string('nombre', 100).notNullable();
            table.string('version', 50).notNullable();
            table.string('status', 50).notNullable().defaultTo('pendient');
            table.string('responsable', 255).notNullable();
            table.string('areas', 255).notNullable();
            table.string('documentos_relacionados', 255).notNullable();
            table.boolean('sustituye').notNullable();
            table.string('codigo', 50);
            table.timestamp('conservacion', { useTz: true }).notNullable();
            table.string('tipo_resguardo', 100).notNullable();
            table.string('disposicion_final', 255).notNullable();
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true });
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Documents;
//# sourceMappingURL=1639445008138_documents.js.map