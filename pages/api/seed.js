import data from "@/lib/mongo/data";
import db from "@/lib/mongo/db";
import { resHandler } from "@/lib/utils/resHandler";
import Space from "@/models/SpaceModel";

const handler = async (req, res) => {
  await db.connect();
  await Space.deleteMany();
  await Space.insertMany(data.sampleSpaces);

  resHandler(res, true, 200, "Data updated successfully", null);
};

export default handler;
