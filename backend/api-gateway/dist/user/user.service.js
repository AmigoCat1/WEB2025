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
const microservices_1 = require("@nestjs/microservices");
const rxjs_1 = require("rxjs");
let UserService = class UserService {
    userClient;
    constructor(userClient) {
        this.userClient = userClient;
    }
    async send(pattern, data) {
        return (0, rxjs_1.firstValueFrom)(this.userClient.send(pattern, data).pipe((0, rxjs_1.timeout)(30000), (0, rxjs_1.catchError)((e) => {
            if (e.statusCode && e.message) {
                throw new common_1.HttpException(e.message, e.statusCode);
            }
            throw new common_1.HttpException('Internal server error', 500);
        })));
    }
    registration(dto) {
        return this.send('create', dto);
    }
    login(dto) {
        return this.send('login', dto);
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('USER_SERVICE')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], UserService);
//# sourceMappingURL=user.service.js.map