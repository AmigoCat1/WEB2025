import { ReadingProgressService } from './reading-progress.service';
import { ReadingProgressDTO } from './dto';
export declare class ReadingProgressController {
    private readonly readingProgressService;
    constructor(readingProgressService: ReadingProgressService);
    create(dto: ReadingProgressDTO): Promise<any>;
    findOne(id: string): Promise<any>;
    update(id: string, dto: ReadingProgressDTO): Promise<any>;
}
