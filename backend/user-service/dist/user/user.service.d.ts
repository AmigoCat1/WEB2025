import { Repository } from 'typeorm';
import { AuthService } from '../auth/auth.service';
import { UserDTO } from './dto';
import { User } from './entities/user.entity';
export declare class UserService {
    private readonly authService;
    private readonly userRepository;
    private saltRounds;
    constructor(authService: AuthService, userRepository: Repository<User>);
    create(dto: UserDTO): Promise<{
        id: string;
        jwt: import("../auth/dto").Tokens;
    }>;
    login(dto: {
        email: string;
        password: string;
    }): Promise<{
        id: string;
        jwt: import("../auth/dto").Tokens;
    }>;
}
