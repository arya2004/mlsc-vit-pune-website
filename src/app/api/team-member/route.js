import axios from "axios";
import { NextResponse } from "next/server";
import { PrismaClient as prisma } from "@prisma/client";

const healthCheck = async (req, res) => {
  return NextResponse.json({ status: "ok" });
};

const getTeamAllMembers = async (req, res) => {
  try {

    const { data } = prisma.teamMember.findMany();
    return new NextResponse.json(data);

  } catch (error) {

    return new NextResponse.error(error);

  }
};

const addTeamMember = async (req, res) => {
  try {

    const { data } = NextResponse.json(req.body);
    prisma.teamMember.create({ data });
    
  } catch (error) {

    console.log(error);
    return new NextResponse.error(error);
    
  }
};

export { healthCheck as GET, getTeamAllMembers as GET, addTeamMember as POST };
