import { getServerSession } from "next-auth/next"
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


export async function getSession() {
  return await getServerSession()
}

export default async function getCurrentUser() {
  try {
    const session = await getSession();

    if (!session?.user?.email) {
      return null;
    }

    const currentUser = await prisma.user.findUnique({
      where: {
        email: session.user.email ,
      }
    });

    if (!currentUser) {
      return null;
    }

    return {
      ...currentUser,
        createdAt: currentUser.createdAt.toISOString(),
        updatedAt: currentUser.updatedAt.toISOString(),
        emailVerified:currentUser.emailVerified?.toISOString() || null,
    };
  } catch (error) {
    return null;
  }
}
