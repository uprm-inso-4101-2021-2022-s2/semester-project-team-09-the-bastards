import { PrismaClient } from '@prisma/client';
import express, {Request, Response} from 'express'

const app = express()
const prisma = new PrismaClient()

app.use(express.json());




// const main = async (): Promise<void> => {
//     app.post('/user'), async (req: Request, res: Response) => {
//         const  {ok} = req.body;
//         console.dir(ok, {depth: null})
//         const newUser = await prisma.user.findMany()
//         return ok;
//     }

// }




// main()
//   .catch((e) => {
//     throw e
//   })
//   .finally(async () => {
//     await prisma.$disconnect()
//   })

// A `main` function so that you can use async/await



/**
 * Main function, contains the routes and controllers in a single place.
 * Only exists temporarily because I still don't fully understand typescript
 */
async function main() {

    // Only select the `uid`
    const userWithUidOnly = await prisma.user.findMany({ select: { uid: true } })

    /**
     * Post a new User along with his Login  
     */
    app.post('/user', async (req: Request, res: Response) => {
        const {first_name, last_name, birth_date, email, password} = req.body;

        const user =  await prisma.user.create({
            data: { 
                first_name : first_name,
                last_name : last_name,
                birth_date: birth_date,
                Login: {
                    create: {
                        email: email,
                        password: password
                    }
                }
            }
        });
        res.json(user);
    });

    /**
     * 
     */
    app.get('/user', async (req: Request, res: Response) => {
        // TODO convert this get all into something that take optional query
        // parameters
        // const user = await prisma.user.
    });

    /**
     * 
     */
    app.patch('/user', async (req: Request, res: Response) => {})

    /**
     * 
     */
    app.get('/medic', async (req: Request, res: Response) => {})

    /**
     * 
     */
    app.get('/login', async (req: Request, res: Response) => {})

    /**
     * 
     */
    app.get('/medic_availability', async (req: Request, res: Response) => {})

    /**
     * 
     */
    app.get('/appointments', async (req: Request, res: Response) => {})

    /**
     * 
     */
    app.get('/offices', async (req: Request, res: Response) => {})

    /**
     * 
     */
    app.get('/patients', async (req: Request, res: Response) => {})

    /**
     * 
     */
    app.get('/reviews', async (req: Request, res: Response) => {})

    /**
     * 
     */
    app.get('/schedules', async (req: Request, res: Response) => {})


    console.dir(userWithUidOnly, { depth: null })
  
}
  
  
main()
.then(() => {
    app.listen(4000, () => {
        console.log("Yo! Heaven is running 👍")
    })
})

.catch((e) => {

    throw e
})
.finally(async () => {

    await prisma.$disconnect()
})
    

