"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Views extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'views';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.bigIncrements('id');
            table.string('name', 50).notNullable();
            table.string('path', 50).notNullable();
            table.string('icon', 50).notNullable();
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true });
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Views;
//# sourceMappingURL=1639279166243_views.js.map