import { Router } from "express";
import SuggestionsController from "../controllers/Suggestions.controller";


const suggestionRoutes = Router()

    suggestionRoutes
              .get('/suggestions', SuggestionsController.GET)
              .get('/suggestions', SuggestionsController.GET_BY_ID)
              .post('/suggestions', SuggestionsController.POST)
              .put('/suggestions', SuggestionsController.PUT)
              .delete('/suggestions', SuggestionsController.DELETE)


export default suggestionRoutes