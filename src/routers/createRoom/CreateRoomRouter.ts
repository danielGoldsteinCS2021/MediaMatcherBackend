
import { NextFunction, Request, Response, Router } from 'express';
import RoomController from '../../controllers/rooms/RoomController';

class CreateRoomRouter {
    private _router: Router = Router();
    private _controller = RoomController;

    get router() {
        return this._router;
    }

    constructor() {
        this._configure(); // called as apart of object instantiation
    }

    /**
     * Connect routes to their matching controller endpoints.
     */
    // this._router.get == get http request
    private _configure(): void {
        this._router.get('/', (req: Request, res: Response, next: NextFunction) => {
            console.log('END POINT CREATE ROOM HIT')
            res.status(200).json({text: 'hello, world!'})});
        }
}

export = new CreateRoomRouter().router;  // export just the router, not the entire class
