import { Request, Response } from 'express';
import Plushie from '../Models/Plushie.model';
import { Op } from 'sequelize';

function SearchController(request: Request<{
  query: string | undefined
}, {}, {}, {
  page: number|undefined,
  amount: number|undefined,
}>, response: Response) {
  if(!request.params.query || request.params.query.length < 1)
    return response.sendStatus(400);

  // Returns a list of plugies
  const page = request.query.page || 1;
  const amount = request.query.amount || 15;

  Plushie.findAll({
    where: {
      name: {
        [Op.like]: `%${request.params.query}%`
      }
    },
    offset: page === 1 ? 0 : page * amount - 1,
    limit: amount
  })
    .then(plushies => response.json(plushies))
    .catch((e) => {
      console.error(e);
      response.sendStatus(500);
    });
}

export default SearchController;