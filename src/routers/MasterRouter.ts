import { Router } from 'express';
import CreateRoomRouter from './createRoom/CreateRoomRouter';

class MasterRouter {
    private _router = Router();
    private _subrouterCreateRoom = CreateRoomRouter;

     get router() {
        return this._router;
    }

    constructor() {
        this._configure();
    }

    /**
     * Connect routes to their matching routers.
     */
    private _configure() {
        this._router.use('/createRoom', this._subrouterCreateRoom);  // match path to router
    }
}

export = new MasterRouter().router;
