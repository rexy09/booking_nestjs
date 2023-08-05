import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
    constructor(){
        super({
            datasources:{
                db:{
                    url:"postgresql://postgres:rootadmin@localhost:5432/booking?schema=public"
                }
            }
        })
    }
}
