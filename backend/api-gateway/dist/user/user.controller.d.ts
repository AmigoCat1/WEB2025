import { UserService } from './user.service';
import { UserDTO } from './dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    registration(dto: UserDTO): Promise<any>;
    login(dto: UserDTO): Promise<any>;
}
