import { Router } from "express";

import { MatchController } from "../controllers";
const routes = Router();


routes.get("/", MatchController.getAllMatches)
routes.get("/:uuid", MatchController.getUuid)
routes.post("/", MatchController.postMatches)
routes.put("/", MatchController.putMatch)
routes.delete("/", MatchController.deleteMatch)

export default routes;