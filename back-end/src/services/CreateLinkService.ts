import { getRepository } from 'typeorm';

import Link from '../models/Link';

interface RequestDTO {
  name: string;
  url: string;
}

class CreateLinkService {
  public async execute({ name, url }: RequestDTO): Promise<Link> {
    const linkRepository = getRepository(Link);

    const link = linkRepository.create({
      name,
      url,
    });

    await linkRepository.save(link);

    return link;
  }
}

export default CreateLinkService;
