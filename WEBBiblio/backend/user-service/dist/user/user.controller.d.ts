import { UserService } from './user.service';
import { UserDTO } from './dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(dto: UserDTO): Promise<import("../auth/dto").Tokens>;
    login(dto: {
        email: string;
        password: string;
    }): Promise<import("../auth/dto").Tokens>;
}
