import { BookService } from './book.service';
import { BookDTO } from './dto';
export declare class BookController {
    private readonly bookService;
    constructor(bookService: BookService);
    create(dto: BookDTO): Promise<{
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
    update(id: string, dto: BookDTO): Promise<{
        message: string;
        book: {
            title: string;
            author: string;
            genre: string;
            description: string;
            publication_year: number;
            file_url: string;
            cover_url: string;
            id: string;
            created_at: Date;
        } & import("./entities/book.entity").Book;
    }>;
}
