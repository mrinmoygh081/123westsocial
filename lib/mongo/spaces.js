// import clientPromise from "./db";

// let client;
// let db;
// let spaces;

// async function init() {
//   if (db) return;
//   try {
//     client = await clientPromise;
//     db = await client.db();
//     spaces = await db.collection("listings");
//   } catch (error) {
//     throw new Error("Failed to stablish connection to database");
//   }
// }

// (async () => {
//   await init();
// })();

// export async function getSpaces() {
//   try {
//     if (!spaces) await init();
//     const result = await spaces
//       .find({})
//       .limit(20)
//       .map((item) => ({ ...item, _id: item._id.toString() }))
//       .toArray();
//     return { spaces: result };
//   } catch (error) {
//     return { error: "Failed to fetch spaces!" };
//   }
// }
