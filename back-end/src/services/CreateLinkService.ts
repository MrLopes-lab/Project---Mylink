import { getRepository } from 'typeorm';

import Link from '../models/Link';

interface RequestDTO {
  user_id: string;
  name: string;
  url: string;
}

class CreateLinkService {
  public async execute({ user_id, name, url }: RequestDTO): Promise<Link> {
    const linkRepository = getRepository(Link);

    const link = linkRepository.create({
      user_id,
      name,
      url,
    });

    await linkRepository.save(link);

    return link;
  }
}

export default CreateLinkService;
