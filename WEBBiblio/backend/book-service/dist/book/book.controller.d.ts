import { BookService } from './book.service';
import { BookDTO } from './dto';
export declare class BookController {
    private readonly bookService;
    constructor(bookService: BookService);
    create(book: BookDTO): Promise<{
        message: string;
        book: import("./entities/book.entity").Book;
    }>;
    findAll(): Promise<{
        message: string;
        books: import("./entities/book.entity").Book[];
    }>;
    findOne(id: string): Promise<{
        message: string;
        book: import("./entities/book.entity").Book;
    }>;
    update(id: string, book: BookDTO): Promise<{
        message: string;
        book: import("./entities/book.entity").Book & BookDTO;
    }>;
}
