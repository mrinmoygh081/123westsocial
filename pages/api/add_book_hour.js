import db from "@/lib/mongo/db";
import { resHandler } from "@/lib/utils/resHandler";
import bookHourModel from "@/models/BookHourModels";

const handler = async (req, res) => {
  if (req.method !== "POST") {
    resHandler(res, false, 405, "Only POST requests are allowed", null);
    return;
  }

  try {
    await db.connect();
    const { date, name, phone, email, address, numOfGuests, hours } = req.body;
    let data = await bookHourModel.create({
      date,
      name,
      phone,
      email,
      address,
      numOfGuests,
      hours,
      price: 120 * hours,
    });
    // res.status(201).json({ status: "created" });

    resHandler(res, true, 201, "Booking updated successfully", data);
  } catch (error) {
    resHandler(res, false, 400, "Booking data not updated", error);
  }
};

export default handler;
