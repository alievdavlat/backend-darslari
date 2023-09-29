import { Router } from "express";
import authRouter from "./auth.routes";
import suggestionRoutes from "./suggestions.routes";
import commentsRouters from "./comments.Routes";



const Routes = Router() 



export default Routes.use([
  authRouter,
  suggestionRoutes,
  commentsRouters
])