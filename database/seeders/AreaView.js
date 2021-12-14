"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const AreaView_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/AreaView"));
class AreaViewSeeder extends Seeder_1.default {
    static async run() {
        await AreaView_1.default.createMany([
            {
                areaId: 1,
                viewId: 1,
            },
            {
                areaId: 1,
                viewId: 2,
            },
            {
                areaId: 2,
                viewId: 2,
            },
            {
                areaId: 3,
                viewId: 1,
            },
            {
                areaId: 3,
                viewId: 2,
            },
            {
                areaId: 4,
                viewId: 1,
            },
        ]);
    }
}
exports.default = AreaViewSeeder;
//# sourceMappingURL=AreaView.js.map