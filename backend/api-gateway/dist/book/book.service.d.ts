import { ClientProxy } from '@nestjs/microservices';
import { BookDTO } from './dto';
export declare class BookService {
    private readonly bookClient;
    constructor(bookClient: ClientProxy);
    private send;
    create(dto: BookDTO): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: string): Promise<any>;
    update(id: string, dto: BookDTO): Promise<any>;
}
