import db from "@/lib/mongo/db";
import { resHandler } from "@/lib/utils/resHandler";
import bookHourModel from "@/models/BookHourModels";

const handler = async (req, res) => {
  if (req.method !== "GET") {
    resHandler(res, false, 405, "Only GET requests are allowed", null);
    return;
  }

  try {
    await db.connect();
    let data = await bookHourModel.find({});

    resHandler(res, true, 200, "Fetch Booking Data", data);
  } catch (error) {
    resHandler(res, false, 400, "Booking data not updated", error);
  }
};

export default handler;
