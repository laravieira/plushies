import { Request, Response } from 'express';
import Plushie from '../Models/Plushie.model';

function AmountController(request: Request, response: Response) {
  Plushie.count()
    .then(amount => response.json(amount))
    .catch((e) => {
      console.error(e);
      response.sendStatus(500);
    });
}

export default AmountController;