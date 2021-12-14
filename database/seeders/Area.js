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
                id: 1,
                name: 'Desarrollo',
                email: 'desarrollo@gmail.com',
            },
            {
                id: 2,
                name: 'Area 2',
                email: 'area2@gmail.com',
            },
            {
                id: 3,
                name: 'Area 3',
                email: 'area3@gmail.com',
            },
            {
                id: 4,
                name: 'Area 4',
                email: 'area4@gmail.com',
            },
        ]);
    }
}
exports.default = AreaSeeder;
//# sourceMappingURL=Area.js.map