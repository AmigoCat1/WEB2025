"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadingProgressController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const reading_progress_service_1 = require("./reading-progress.service");
let ReadingProgressController = class ReadingProgressController {
    readingProgressService;
    constructor(readingProgressService) {
        this.readingProgressService = readingProgressService;
    }
    async create(dto) {
        const result = await this.readingProgressService.create(dto);
        console.log('Returning response:', result);
        return result;
    }
    findOne(id) {
        return this.readingProgressService.findOne(id);
    }
    update(id, dto) {
        return this.readingProgressService.update(id, dto);
    }
};
exports.ReadingProgressController = ReadingProgressController;
__decorate([
    (0, microservices_1.MessagePattern)('create'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ReadingProgressController.prototype, "create", null);
__decorate([
    (0, microservices_1.MessagePattern)('findOne'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReadingProgressController.prototype, "findOne", null);
__decorate([
    (0, microservices_1.MessagePattern)('update'),
    __param(0, (0, microservices_1.Payload)('id')),
    __param(1, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReadingProgressController.prototype, "update", null);
exports.ReadingProgressController = ReadingProgressController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [reading_progress_service_1.ReadingProgressService])
], ReadingProgressController);
//# sourceMappingURL=reading-progress.controller.js.map