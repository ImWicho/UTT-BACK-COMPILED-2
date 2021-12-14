"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const Area_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Area"));
class AreaSeeder extends Seeder_1.default {
    static async run() {
        await Area_1.default.createMany([
            {
                name: 'Desarrollo',
                email: 'desarrollo@gmail.com',
            },
            {
                name: 'Calidad',
                email: 'desarrollo@gmail.com',
            },
            {
                name: 'Servicios Administrativos',
                email: 'luis.carrilloo.perez@gmail.com',
            },
            {
                name: 'Vinculación',
                email: 'aguscas43630@gmail.com',
            },
        ]);
    }
}
exports.default = AreaSeeder;
//# sourceMappingURL=Area.js.map