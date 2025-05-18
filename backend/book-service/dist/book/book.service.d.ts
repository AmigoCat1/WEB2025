import { BookDTO } from './dto';
import { Book } from './entities/book.entity';
import { Repository } from 'typeorm';
export declare class BookService {
    private readonly bookRepository;
    constructor(bookRepository: Repository<Book>);
    create(dto: BookDTO): Promise<{
        message: string;
        book: Book;
    }>;
    findAll(): Promise<{
        message: string;
        books: Book[];
    }>;
    findOne(id: string): Promise<{
        message: string;
        book: Book;
    }>;
    update(id: string, dto: BookDTO): Promise<{
        message: string;
        book: Book & BookDTO;
    }>;
}
