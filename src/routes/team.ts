import { Router } from "express";
import TeamController from "../controllers/TeamController";

const routes = Router();

routes.get('/', TeamController.getAllTeam);
routes.get('/:termo', TeamController.getTermo);
routes.post('/create', TeamController.postTeam);
routes.put('/update/:', TeamController.putTeam);
routes.delete('/:', TeamController.deleteTeam);

export default routes;