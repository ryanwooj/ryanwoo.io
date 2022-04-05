// Fetch all posts (in /pages/api/posts.ts)
import { prisma } from "../../../lib/prisma"

export default async function handle(req, res) {
    console.log(req.body.newChat)
    const message = await prisma.message.create({
      data: {
        userId: req.body.newChat.userId,
        content: req.body.newChat.content,
      },
    });
    res.json(message)
}