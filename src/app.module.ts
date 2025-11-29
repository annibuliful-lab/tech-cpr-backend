import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WebhookController } from './modules/webhook/webhook.controller';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [AppController, WebhookController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
