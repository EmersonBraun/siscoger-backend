import { Injectable, NestMiddleware, Logger } from '@nestjs/common';

import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AppLoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP');

  use(request: Request, response: Response, next: NextFunction): void {
    const { ip, method, path: url, body } = request;

    request.on('close', () => {
      this.logger.debug(`Request: ${method} ${url}`);
      console.table(body)
    })

    response.on('close', () => {
      const { statusCode } = response;
      const contentLength = response.get('content-length');

      this.logger.debug(`Response: ${method} ${url}`);
      console.table({
        method, url, statusCode, contentLength, ip
      })

    });

    next();
  }
}