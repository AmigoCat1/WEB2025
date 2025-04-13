import { BookService } from './book.service';
import { BookDTO } from './dto';
export declare class BookController {
    private readonly bookService;
    constructor(bookService: BookService);
    create(book: BookDTO): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: string): Promise<any>;
    update(id: string, book: BookDTO): Promise<any>;
}
