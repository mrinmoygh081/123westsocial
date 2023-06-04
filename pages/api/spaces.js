const { getSpaces } = require("@/lib/mongo/spaces");

const handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      const { spaces, error } = await getSpaces();
      //   console.log(spaces, error);
      if (error) throw new Error(error);

      return res.status(200).json({ spaces });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  res.setHeader("Allow", "GET");
  res.status(425).end(`Method ${req.method} is not allowed`);
};

export default handler;
