import { Injectable } from '@nestjs/common';
import { Prisma } from 'src/generated/prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class DataSourceConfigurationService {
  constructor(private prisma: PrismaService) {}

  create(input: Prisma.dataSourceConfigurationCreateInput) {
    return this.prisma.dataSourceConfiguration.create({
      data: input,
    });
  }

  findOne(where: Prisma.dataSourceConfigurationWhereInput) {
    return this.prisma.dataSourceConfiguration.findFirst({
      where,
    });
  }

  findMany(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.dataSourceConfigurationWhereUniqueInput;
    where?: Prisma.dataSourceConfigurationWhereInput;
    orderBy?: Prisma.dataSourceConfigurationOrderByWithRelationInput;
  }) {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.dataSourceConfiguration.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  update(
    where: Prisma.dataSourceConfigurationWhereUniqueInput,
    input: Prisma.dataSourceConfigurationUpdateInput,
  ) {
    return this.prisma.dataSourceConfiguration.update({
      where,
      data: input,
    });
  }

  delete(id: string) {
    return this.prisma.dataSourceConfiguration.delete({
      where: {
        id,
      },
    });
  }
}
