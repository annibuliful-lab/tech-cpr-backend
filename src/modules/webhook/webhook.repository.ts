import { PrismaService } from 'src/prisma.service';

export class WebhookRepository {
  constructor(private prisma: PrismaService) {}

  //   create(input: any) {
  //     return this.prisma.data;
  //   }
}
