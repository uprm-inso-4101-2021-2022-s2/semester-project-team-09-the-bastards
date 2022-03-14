import { Request, Response } from 'express'

class ResourceController {

    constructor() {
        this.get = this.get.bind(this)
    }
    
    async get(req: Request, res: Response) {
        try { 
            const result = await 3
            res.status(200).send({
                data: result
            })
        } catch (e) {
            
        }
    }
}
