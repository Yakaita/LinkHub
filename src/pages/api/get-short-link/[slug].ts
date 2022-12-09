import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../server/db/client";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const slug = req.query['slug'];

    if (!slug || typeof slug !== 'string') {
        res.status(404).json({message: "Please provide a slug"});
        return;
    }

    const result = await prisma.shortLink.findFirst({
        where: {
            slug: {
                equals: slug
            }
        }
    });

    if (!result) {
        res.status(404).json({message: "Could not find that slug"});
        return;
    }

    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Cache-Control",
        "s-maxage=1000000000, stale-while-revalidate"
    );
  
    return res.json(result);
};

export default handler;