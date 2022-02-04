import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  googleLogin(req) {
    if (!req.user) {
      return {
        status: 'error',
        message: 'User not found',
      };
    }
    return {
      status: 'success',
      user: req.user,
    };
  }
}
