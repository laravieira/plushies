import { Router } from 'express';
import CreateController from '../Controllers/Create.controller';
import DeleteController from '../Controllers/Delete.controller';
import GetController from '../Controllers/Get.controller';
import UpdateController from '../Controllers/Update.controller';
import AmountController from '../Controllers/Amount.controller';
import SearchController from '../Controllers/Search.controller';

const routes = Router();

routes.get('/amount/', AmountController);
routes.get('/search/:query', SearchController);

routes.put('/', CreateController);
routes.delete('/:id', DeleteController);
routes.get('/:id?', GetController);
routes.post('/:id', UpdateController);

export default routes;