"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadingProgressModule = void 0;
const microservices_1 = require("@nestjs/microservices");
const common_1 = require("@nestjs/common");
const reading_progress_controller_1 = require("./reading-progress.controller");
const reading_progress_service_1 = require("./reading-progress.service");
let ReadingProgressModule = class ReadingProgressModule {
};
exports.ReadingProgressModule = ReadingProgressModule;
exports.ReadingProgressModule = ReadingProgressModule = __decorate([
    (0, common_1.Module)({
        controllers: [reading_progress_controller_1.ReadingProgressController],
        providers: [
            reading_progress_service_1.ReadingProgressService,
            {
                provide: 'READING_SERVICE',
                useFactory: () => microservices_1.ClientProxyFactory.create({
                    transport: microservices_1.Transport.RMQ,
                    options: {
                        urls: ['amqp://localhost:5672'],
                        queue: 'reading-service',
                        queueOptions: { durable: false },
                    },
                }),
            },
        ],
    })
], ReadingProgressModule);
//# sourceMappingURL=reading-progress.module.js.map