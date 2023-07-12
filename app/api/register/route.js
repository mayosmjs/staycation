import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { PrismaClient } from '@prisma/client'


export async function POST(request) {
  const body = await request.json();
  const prisma = new PrismaClient()
  const hashedPassword = await bcrypt.hash(body.password, 12);
  const user = await prisma.user.create({
        data: {
          email:body.email,
          name: body.name,
          hashedPassword:hashedPassword,
        }
      });

    return NextResponse.json(user);

}

