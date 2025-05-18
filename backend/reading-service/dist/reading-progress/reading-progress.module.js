"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadingProgressModule = void 0;
const common_1 = require("@nestjs/common");
const reading_progress_entity_1 = require("./entities/reading-progress.entity");
const reading_progress_controller_1 = require("./reading-progress.controller");
const reading_progress_service_1 = require("./reading-progress.service");
const typeorm_1 = require("@nestjs/typeorm");
let ReadingProgressModule = class ReadingProgressModule {
};
exports.ReadingProgressModule = ReadingProgressModule;
exports.ReadingProgressModule = ReadingProgressModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([reading_progress_entity_1.ReadingProgress])],
        controllers: [reading_progress_controller_1.ReadingProgressController],
        providers: [reading_progress_service_1.ReadingProgressService],
    })
], ReadingProgressModule);
//# sourceMappingURL=reading-progress.module.js.map