"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Requests extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'requests';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.bigInteger('documento_id').unsigned().references('documents.id').notNullable();
            table.string('nombre', 100).notNullable();
            table.string('version', 50).notNullable();
            table.string('status', 50).notNullable().defaultTo('pendient');
            table.string('punto_cambio', 100).notNullable();
            table.string('descripcion_actual', 255).notNullable();
            table.string('descripcion_cambio').notNullable();
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true });
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Requests;
//# sourceMappingURL=1639445259349_requests.js.map