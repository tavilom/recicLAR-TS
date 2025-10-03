import { Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { PrismaClient as PrismaClientReciclar } from "prisma/generated/reciclar";

@Injectable()
export class PrismaServiceReciclar extends PrismaClientReciclar implements OnModuleInit, OnModuleDestroy {

    async onModuleInit() {
        await this.$connect();
    }

    async onModuleDestroy() {
        await this.$disconnect();
    }

}
