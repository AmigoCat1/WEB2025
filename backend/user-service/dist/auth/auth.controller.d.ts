import { AuthService } from './auth.service';
import { Tokens, TokenPayload } from './dto';
export declare class AuthController {
    private readonly authService;
    private readonly logger;
    constructor(authService: AuthService);
    generateTokens(dto: any): Promise<Tokens>;
    verifyToken(dto: any): Promise<TokenPayload>;
    refreshTokens(dto: any): Promise<Tokens>;
}
