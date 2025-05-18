import { ReadingProgressService } from './reading-progress.service';
import { ReadingProgressDTO } from './dto';
export declare class ReadingProgressController {
    private readonly readingProgressService;
    constructor(readingProgressService: ReadingProgressService);
    create(dto: ReadingProgressDTO): Promise<{
        message: string;
        progress: import("./entities/reading-progress.entity").ReadingProgress;
    }>;
    findOne(id: string): Promise<{
        message: string;
        progress: import("./entities/reading-progress.entity").ReadingProgress;
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
        } & import("./entities/reading-progress.entity").ReadingProgress;
    }>;
}
