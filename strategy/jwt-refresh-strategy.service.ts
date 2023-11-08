import { Injectable } from '@nestjs/common';
import { Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';
import { AuthService } from '../src/auth/auth.service';

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(Strategy, 'refresh') {
  constructor(
    private readonly authService: AuthService,
    private readonly configService: ConfigService,
  ) {
    super({
      jwtFromRequest: (req) => {
        return req.cookies['refreshToken'];
      },
      ignoreExpiration: true, // 일단은 무한하게 해둠
      secretOrKey: configService.get<string>('JWT_SECRET'),
    });
  }

  async validate() {
    //   payload정의하고, 다른 것들 정의해야함.
  }
}
