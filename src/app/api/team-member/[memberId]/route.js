import axios from "axios";
import { NextResponse } from "next/server";

const getATeamMember = async (req) => {
  try {
    const {data} = prisma.teamMember.findUnique({
      where: {
        id: req.query.memberId
      }
    });

    return new NextResponse.json(data);
  } catch (error) {
    return new NextResponse.
      json({
        error: error,
        status: 404
      });
  }
};

export { getATeamMember as GET };
