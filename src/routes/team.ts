import { Router } from "express";

import { TeamController } from "../controllers";
const routes = Router();

routes.get("/", TeamController.getAllTeams)
routes.get("/:termo", TeamController.getTermoTeams)
routes.post("/", TeamController.postTeams)
routes.put("/", TeamController.putTeams)
routes.delete("/", TeamController.deleteTeams)

export default routes;