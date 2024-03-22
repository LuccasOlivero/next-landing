import { NextResponse } from "next/server";
import { prisma } from "../../../../libs/prisma";

export async function GET(request, { params }) {
  const task = await prisma.task.findUnique({
    where: {
      id: +params.id,
    },
  });
  return NextResponse.json(task);
}

export async function PUT(request, { params }) {
  const { title, description } = await request.json();
  const taskUpdated = await prisma.task.update({
    where: {
      id: +params.id,
    },
    data: {
      title,
      description,
    },
  });
  //   ------------------------ keep it in mind ------------------------
  // otra forma de actulizar solo la informacion del usuario, en vez de actualizar por separado como arriba, actualizamos el objeto completo. Ambos hacen lo mismo
  //   const data = await request.json();
  //   const taskUpdated = await prisma.task.update({
  //     where: {
  //       id: +params.id,
  //     },
  //     data: data,
  //   });
  //   ------------------------ keep it in mind ------------------------

  return NextResponse.json(taskUpdated);
}

export async function DELETE(request, { params }) {
  try {
    const taskRemoved = await prisma.task.delete({
      where: {
        id: +params.id,
      },
    });
    return NextResponse.json(taskRemoved);
  } catch (error) {
    return NextResponse.json(error.message);
  }
}
