import { UserDTO } from './dto';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
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
