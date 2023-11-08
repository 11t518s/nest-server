import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtAccessStrategy } from '../../strategy/jwt-access-strategy.service';
import { JwtRefreshStrategy } from '../../strategy/jwt-refresh-strategy.service';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt', session: false }),
  ],
  providers: [AuthService, JwtAccessStrategy, JwtRefreshStrategy],
  exports: [AuthService, JwtAccessStrategy, JwtRefreshStrategy],
})
export class AuthModule {}
