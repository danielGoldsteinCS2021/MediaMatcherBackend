import { Router } from 'express';
import CreateRoomRouter from './createRoom/CreateRoomRouter';
import SampleRouter from './SampleRouter';

class MasterRouter {
    private _router = Router();
    private _subrouterCreateRoom = CreateRoomRouter;
    private _subrouterSampleRouter = SampleRouter;

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
        this._router.use('/sampleRoute', this._subrouterSampleRouter);
    }
}

export = new MasterRouter().router;
