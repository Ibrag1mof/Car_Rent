import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

@Injectable()
export class SelfGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    try {
      const req = context.switchToHttp().getRequest();
      const authHeader = req.headers.authorization;
      const bearer = authHeader.split(' ')[0];
      const token = authHeader.split(' ')[1];
      if (bearer != 'Bearer' || !token) {
        throw new UnauthorizedException({
          message: 'Unauthorized (Self guard)',
        });
      }
      const admin = this.jwtService.verify(token, {
        secret: process.env.ACCESS_TOKEN_KEY,
      });
      console.log(req.params.id, admin.sub);
      if (admin.sub !== Number(req.params.id)) {
        throw new UnauthorizedException({
          message: 'Unauthorized (Self guard1)',
        });
      }
      return true;
    } catch (error) {
      throw new UnauthorizedException({
        message: 'Unauthorized (Self guard)',
      });
    }
  }
}
