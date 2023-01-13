import { Request, Response } from 'express';
import Plushie from '../Models/Plushie.model';

function DeleteController(request: Request<{ id: number }>, response: Response) {
  Plushie.destroy({
    where: {
      id: request.params.id || 0
    }
  }).then((number) => {
    if(number)
      response.sendStatus(200)
    else
      response.sendStatus(404);
  }).catch((e) => {
    console.error(e);
    response.sendStatus(500);
  });
}

export default DeleteController;