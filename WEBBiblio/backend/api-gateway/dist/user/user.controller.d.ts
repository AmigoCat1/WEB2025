import { UserService } from './user.service';
import { UserDTO } from './dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    registration(user: UserDTO): Promise<any>;
    login(user: UserDTO): Promise<any>;
}
