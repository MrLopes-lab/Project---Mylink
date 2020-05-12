import { Router } from 'express';
import { getRepository } from 'typeorm';

import Link from '../models/Link';

import CreateLinkService from '../services/CreateLinkService';

const linksRouter = Router();

linksRouter.get('/', async (request, response) => {
  const linksRepository = getRepository(Link);
  const links = await linksRepository.find();

  return response.json(links);
});

linksRouter.post('/', async (request, response) => {
  try {
    const { name, url } = request.body;

    const createLink = new CreateLinkService();

    const link = await createLink.execute({
      name,
      url,
    });

    return response.json(link);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default linksRouter;
