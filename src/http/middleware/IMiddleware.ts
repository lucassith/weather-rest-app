import { Request, Response} from 'express'

export interface IMiddleware {
    handle(req: Request, res: Response, next: Function)
}
