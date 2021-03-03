import { ConfigModule, ConfigService } from '@nestjs/config';

export const mongoConfig = {
  imports: [ConfigModule],
  useFactory: async (configService: ConfigService) => ({
    uri: configService.get<string>('MONGO_CONNECTION'),
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  }),
  inject: [ConfigService],
};
