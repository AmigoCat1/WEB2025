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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcrypt");
const auth_service_1 = require("../auth/auth.service");
const user_entity_1 = require("./entities/user.entity");
const microservices_1 = require("@nestjs/microservices");
let UserService = class UserService {
    authService;
    userRepository;
    saltRounds = 10;
    constructor(authService, userRepository) {
        this.authService = authService;
        this.userRepository = userRepository;
    }
    async create(dto) {
        const userPassword = await bcrypt.hash(dto.password, this.saltRounds);
        const existingEmail = await this.findByEmail(dto.email);
        const existingUsername = await this.findByName(dto.username);
        if (existingEmail || existingUsername) {
            throw new microservices_1.RpcException({ statusCode: 400, message: 'User already exists' });
        }
        const $user = this.userRepository.create({
            ...dto,
            password: userPassword,
        });
        const user = await this.userRepository.save($user);
        return this.authService.generateTokens({
            member_id: user.id,
            role_id: user.role
        });
    }
    async login(dto) {
        let user = await this.findByEmail(dto.email);
        if (!user) {
            throw new microservices_1.RpcException({ statusCode: 401, message: 'Invalid credentials.' });
        }
        let isPasswordValid = await bcrypt.compare(dto.password, user.password);
        ;
        if (!isPasswordValid) {
            throw new microservices_1.RpcException({ statusCode: 401, message: 'Invalid credentials.' });
        }
        return this.authService.generateTokens({
            member_id: user.id,
            role_id: user.role
        });
    }
    async findByName(username) {
        return this.userRepository.findOne({ where: { username } });
    }
    async findByEmail(email) {
        return this.userRepository.findOne({ where: { email } });
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        typeorm_2.Repository])
], UserService);
//# sourceMappingURL=user.service.js.map