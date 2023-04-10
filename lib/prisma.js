import { PrismaClient } from "@prisma/client";

if (!global.prisma) {
	global.prisma = new PrismaClient();
}
prisma = global.prisma;

export default prisma;
