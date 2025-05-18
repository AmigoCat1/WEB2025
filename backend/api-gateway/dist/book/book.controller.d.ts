import { BookService } from './book.service';
import { BookDTO } from './dto';
export declare class BookController {
    private readonly bookService;
    constructor(bookService: BookService);
    create(dto: BookDTO): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: string): Promise<any>;
    update(id: string, dto: BookDTO): Promise<any>;
}
