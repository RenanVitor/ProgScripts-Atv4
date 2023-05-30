import { Router } from "express";
import MatchController from "../controllers/MatchController";

const routes = Router();

routes.get('/', MatchController.getAllMatch);
routes.get('/', MatchController.getId);
routes.post('/create', MatchController.postMatch);
routes.put('/', MatchController.putMatch);
routes.delete('/:', MatchController.deleteMatch);

export default routes;