import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';


@Injectable()
export class AppLoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP');

  use(request: Request, response: Response, next: NextFunction): void {
    const { ip, method, path: url } = request;
    const cleanIp = ip.replace('::ffff:','')

    response.on('close', () => {
      const { statusCode } = response;
      const contentLength = response.get('content-length');

      if (statusCode >= 200 && statusCode < 300) {
        this.logger.debug(`Response: ${method} ${url} Status ${statusCode}`);
        return
      }
     
      this.logger.error(`Response: ${method} ${url}  Status ${statusCode}`);
      console.table({ method, url, contentLength, ip:cleanIp })

    });

    next();
  }
}