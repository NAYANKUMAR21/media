// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { client } from '@/redis/redis.utils';

export default async function handler(req, res) {
  const { number } = req.body;
  try {
    await client.connect();
    const x = await client.get('number');

    if (x) {
      await client.disconnect();
      return res.status(200).send({ number_choosed: x });
    }
    await client.set('number', number);
    await client.disconnect();
    return res.status(200).send({ message: `Number stored is ${number}` });
  } catch (er) {
    return res.status(400).send({ message: er.message });
  }
}
