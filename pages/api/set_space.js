// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDB from "@/lib/mongo/db";
import { resHandler } from "@/lib/utils/resHandler";
import Space from "@/models/SpaceModel";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    resHandler(res, false, 405, "Only POST requests are allowed", null);
    return;
  }

  const { name, description, location } = req.body;

  try {
    await connectDB();
    Space.create({
      name,
      description,
      location,
    }).then((data) => {
      console.log(data);
      resHandler(res, true, 201, "Space created", data);
    });
  } catch (error) {
    resHandler(res, false, 500, "Error creating space", error);
  }
}
