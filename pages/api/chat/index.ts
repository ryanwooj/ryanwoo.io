// Fetch all posts (in /pages/api/posts.ts)
import { prisma } from "../../../lib/prisma"
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handle(req:NextApiRequest, res:NextApiResponse) {
    const message = await prisma.message.create({
      data: {
        userId: req.body.newChat.userId,
        content: req.body.newChat.content,
      },
    });
    res.json(message)
}