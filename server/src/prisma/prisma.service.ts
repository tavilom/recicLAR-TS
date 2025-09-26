import { Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { PrismaClient as PrismaClientTermometro } from "prisma/generated/termometro_humor";

@Injectable()
export class PrismaServiceTermometro extends PrismaClientTermometro implements OnModuleInit, OnModuleDestroy {

    async onModuleInit() {
        await this.$connect();
    }

    async onModuleDestroy() {
        await this.$disconnect();
    }

}
