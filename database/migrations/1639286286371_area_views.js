"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class AreaViews extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'area_views';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.bigIncrements('id');
            table.bigInteger('area_id').unsigned().references('areas.id').notNullable();
            table.bigInteger('view_id').unsigned().references('views.id').notNullable();
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true });
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = AreaViews;
//# sourceMappingURL=1639286286371_area_views.js.map