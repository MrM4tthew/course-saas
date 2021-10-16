// pages/api/courses.js
import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

module.exports = withApiAuthRequired(async (req, res) => {
  const { user } = getSession(req, res);
  const courses = await prisma.course.findMany({
    include: {
      lessons: true,
    },
  });
  res.send(courses);
});
