import axios from "axios";
import { NextResponse } from "next/server";

const getATeamMember = async (req, res) => {
  try {
    const {data} = prisma.teamMember.findUnique({
      where: {
        id: req.query.memberId
      }
    });

    return new NextResponse.json(data);
  } catch (error) {
    return new NextResponse.error(error);
  }
};

export { getATeamMember as GET };
