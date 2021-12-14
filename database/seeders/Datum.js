"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const Area_1 = __importDefault(require("./Area"));
const AreaView_1 = __importDefault(require("./AreaView"));
const Role_1 = __importDefault(require("./Role"));
const User_1 = __importDefault(require("./User"));
const View_1 = __importDefault(require("./View"));
class DatumSeeder extends Seeder_1.default {
    async run() {
        await Area_1.default.run();
        await Role_1.default.run();
        await View_1.default.run();
        await AreaView_1.default.run();
        await User_1.default.run();
    }
}
exports.default = DatumSeeder;
//# sourceMappingURL=Datum.js.map