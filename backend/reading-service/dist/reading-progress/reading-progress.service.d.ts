import { Repository } from 'typeorm';
import { ReadingProgressDTO } from './dto';
import { ReadingProgress } from './entities/reading-progress.entity';
export declare class ReadingProgressService {
    private readonly readingProgressRepository;
    constructor(readingProgressRepository: Repository<ReadingProgress>);
    create(dto: ReadingProgressDTO): Promise<{
        message: string;
        progress: ReadingProgress;
    }>;
    findOne(id: string): Promise<{
        message: string;
        progress: ReadingProgress;
    }>;
    update(id: string, dto: ReadingProgressDTO): Promise<{
        message: string;
        readingProgress: {
            user_id: string;
            book_id: string;
            current_page: number;
            percentage_read: number;
            id: string;
            updated_at: Date;
        } & ReadingProgress;
    }>;
}
