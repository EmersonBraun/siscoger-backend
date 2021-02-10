import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class RedisCacheService {
  constructor(
    @Inject(CACHE_MANAGER) private readonly cache: Cache,
  ) {}

  async get(key: string) {
    try { 
      return await this.cache.get(key);
    } catch (error) {
      console.error(error)
      return false
    }
  }

  async set(key: string, value: any, ttl = 1000) {
    try { 
      await this.cache.set(key, value, {ttl});
    } catch (error) {
      console.error(error)
      return false
    }
  }
}