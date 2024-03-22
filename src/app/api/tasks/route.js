import { NextResponse } from "next/server";
import { prisma } from "../../../libs/prisma";

export async function GET() {
  const tasks = await prisma.task.findMany();
  return NextResponse.json(tasks);
}

export async function POST(request) {
  const { title, description } = await request.json();
  const newTask = await prisma.task.create({
    data: {
      title: title,
      description: description,
    },
  });
  console.log(newTask);
  return NextResponse.json(newTask);
}
