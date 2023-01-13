import { Request, Response } from 'express';
import Plushie from '../Models/Plushie.model';

function GetController(request: Request<{
  id: number | undefined
}, {}, {}, {
  page: number|undefined,
  amount: number|undefined,
}>, response: Response) {
  // Returns 1 plushie by given id
  if(request.params.id)
    return Plushie.findByPk(request.params.id)
      .then(plushie => plushie ? plushie : Promise.reject(404))
      .then(plushie => response.json(plushie))
      .catch(() => response.sendStatus(404));

  // Returns a list of plugies
  const page = request.query.page || 1;
  const amount = request.query.amount || 15;

  Plushie.findAll({
    offset: page === 1 ? 0 : page * amount - 1,
    limit: amount
  })
    .then(plushies => response.json(plushies))
    .catch((e) => {
      console.error(e);
      response.sendStatus(500);
    });
}

export default GetController;