import { ReadingProgressDTO } from './dto';
import { ClientProxy } from '@nestjs/microservices';
export declare class ReadingProgressService {
    private readonly readingClient;
    constructor(readingClient: ClientProxy);
    private send;
    create(dto: ReadingProgressDTO): Promise<any>;
    findOne(id: string): Promise<any>;
    update(id: string, dto: ReadingProgressDTO): Promise<any>;
}
