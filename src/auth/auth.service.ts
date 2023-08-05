import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
    constructor(private prisma:PrismaService){}
    signup(){
        return {msg:"Account has been created"}
    }

    signin(){
        return {msg:"Account has been authenticated"}

    }
}
