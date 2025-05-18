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
exports.ReadingProgressService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const uuid_1 = require("uuid");
const reading_progress_entity_1 = require("./entities/reading-progress.entity");
const microservices_1 = require("@nestjs/microservices");
let ReadingProgressService = class ReadingProgressService {
    readingProgressRepository;
    constructor(readingProgressRepository) {
        this.readingProgressRepository = readingProgressRepository;
    }
    async create(dto) {
        if (!(0, uuid_1.validate)(dto.user_id) || !(0, uuid_1.validate)(dto.book_id)) {
            throw new microservices_1.RpcException({ statusCode: 400, message: 'Invalid request' });
        }
        const progress = this.readingProgressRepository.create(dto);
        await this.readingProgressRepository.save(progress);
        return { message: 'Operation completed successfull', progress };
    }
    async findOne(id) {
        if (!(0, uuid_1.validate)(id)) {
            throw new microservices_1.RpcException({ statusCode: 400, message: 'Invalid request' });
        }
        const progress = await this.readingProgressRepository.findOne({ where: { id } });
        if (!progress) {
            throw new microservices_1.RpcException({ statusCode: 404, message: 'Not found' });
        }
        return { message: 'Operation completed successfull', progress };
    }
    async update(id, dto) {
        const result = await this.findOne(id);
        const $result = { ...result.progress, ...dto };
        return { message: 'Operation completed successfull', readingProgress: await this.readingProgressRepository.save($result) };
    }
};
exports.ReadingProgressService = ReadingProgressService;
exports.ReadingProgressService = ReadingProgressService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(reading_progress_entity_1.ReadingProgress)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], ReadingProgressService);
//# sourceMappingURL=reading-progress.service.js.map