import { Request, Response } from 'express';
import Plushie from '../Models/Plushie.model';

async function UpdateController(request: Request<{
  id: number
}, {}, {
  name: string|undefined,
  image: string|undefined,
  color: string|undefined,
  height: number|undefined
}>, response: Response) {
  Plushie.findByPk(request.params.id)
    .then(plushie => plushie ? plushie : Promise.reject(404))
    .then(plushie => plushie.update(request.body))
    .then(plushie => response.json(plushie))
    .catch((e) => {
      if(e === 404)
        return response.sendStatus(404);
      console.error(e);
      response.sendStatus(500);
    });
}

export default UpdateController;