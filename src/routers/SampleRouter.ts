import { NextFunction, Request, Response, Router } from 'express';
import SampleController from '../controllers/SampleController';
class SampleRouter{
    private _router: Router = Router();
    private _controller = SampleController;

    get router(){
        return this._router;
    }

    constructor() {
        this._configure();
    }

    private _configure(): void{
        this._router.get('/', (req: Request, res: Response, next:NextFunction) => {
            console.log('SAMPLE ROUTE HITTTTT');
            this._controller.printMovieObject();
            res.status(200).json({text: 'sample route success'});
        });
    }

}

export = new SampleRouter().router;
