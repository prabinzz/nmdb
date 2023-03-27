import { PrismaClient } from "@prisma/client";
import { data } from "autoprefixer";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export default async function (req, res) {
	let data = await prisma.user.create({
		data: { email: "prabinparajuli92@gmail.com" },
	});
	res.send(data);
}
