import { Router } from "express";
import Express  from "express";
import {newUser, userConection} from "../controller/userController";

const router = Router();

router.post('/newUser', newUser);
router.get('/userConection', userConection)


export default router;

