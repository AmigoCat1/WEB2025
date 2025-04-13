import { UserDTO } from './dto';
import { ClientProxy } from '@nestjs/microservices';
export declare class UserService {
    private readonly userClient;
    constructor(userClient: ClientProxy);
    private send;
    registration(dto: UserDTO): Promise<any>;
    login(dto: {
        email: string;
        password: string;
    }): Promise<any>;
}
