import { Request, Response } from 'express';
import Plushie, { PlushieType } from '../Models/Plushie.model';

function CreateController(request: Request<{}, {}, {
  name: string|undefined,
  image: string|undefined,
  color: string|undefined,
  height: string|undefined
}>, response: Response) {
  console.log(request.body);
  if(!request.body.name || !request.body.color || !request.body.height)
    return response.status(400).json(request.body);

  const plushie = {
    name: request.body.name.length > 2 ? request.body.name : null,
    image: request.body.image ? (request.body.image.length > 1 ? request.body.image : null) : null,
    color: request.body.color.length === 7 ? request.body.color : null,
    height: parseInt(request.body.height) > 0 ? parseInt(request.body.height) : 0
  } as PlushieType;

  if(!plushie.name || !plushie.color || !plushie.height)
    return response.status(400).json(request.body);

  Plushie.findOrCreate({
    where: {
      name: plushie.name,
      image: plushie.image,
      color: plushie.color,
      height: plushie.height
    }
  }).then(([plushie, created]) => {
    if(created)
      response.status(201).json(plushie);
    else
      response.status(409).json(plushie);
  }).catch((e) => {
    console.error(e);
    response.sendStatus(500);
  });
}

export default CreateController;