"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const View_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/View"));
class ViewSeeder extends Seeder_1.default {
    static async run() {
        await View_1.default.createMany([
            {
                name: 'Documentos',
                path: '/main/docs',
                icon: 'account-group',
            },
            {
                name: 'Solicitudes',
                path: '/main/request',
                icon: 'clipboard-file',
            },
        ]);
    }
}
exports.default = ViewSeeder;
//# sourceMappingURL=View.js.map