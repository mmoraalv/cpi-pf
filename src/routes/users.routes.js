import { Router } from 'express';
import passport from 'passport';
import usersController from '../controllers/users.controller.js';
import { upload } from "../config/config.js";

const userRouter = Router();

userRouter.post('/', passport.authenticate('register'), usersController.postUser);

userRouter.get('/', usersController.getUser);

userRouter.post('/recovery', usersController.recoveryPassword);

userRouter.post('/resetpassword/:token', usersController.resetPassword);

userRouter.post('/:id/documents', passport.authenticate('jwt', { session: false }), authorization(['user']), upload.fields([{ name: 'documents' }]), uploadDocuments);

export default userRouter;