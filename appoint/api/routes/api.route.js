const {
    PrismaClient
} = require('@prisma/client');
const express = require('express')
const router = require('express').Router();
const prisma = new PrismaClient()
const bcrypt = require('bcrypt')

router.get('/', async (req, res, next) => {
    res.send({
        message: 'Ok api is working 🚀'
    });
});

// router.get(['/user', '/user/:id'])

// Post new User
// TODO Implement mapbox for verifying adress
// api.mapbox.com/geocoding/v5/mapbox.places/


router.post('/users', express.json(), async (req, res, next) => {
    const {
        first_name,
        last_name,
        birth_date,
        email,
        password
    } = req.body;
    bcrypt.hash(data.password, 10, async (err, hash) => {
        const user = await prisma.user.create({
            data: {
                first_name: first_name,
                last_name: last_name,
                birth_date: birth_date,
                Login: {
                    create: {
                        email: email,
                        password: hash
                    }
                }
            }
        });
        res.status(200).json(req.body)
    })
});

router.get('/users', express.json(), async (req, res, next) => {
    let {
        id,
        offset,
        limit
    } = req.query;

    if (id === undefined) {
        limit = limit || 20
        offset = offset || 0
        // get all users
        const users = await prisma.user.findMany({
            take: limit,
            skip: offset,
            select: {
                uid: true,
                first_name: true,
                last_name: true
            }
        })
        users.map((user) => {
            user.url = `https://urhealth-api.herokuapp.com/api/users?=${user.uid}`
        })
        res.json(users)
    } else {
        const user = await prisma.user.findFirst({
            where: {
                uid: parseInt(id)
            },
            select: {
                first_name: true,
                last_name: true,
                Login: {
                    select: {
                        email: true
                    }
                }
            }
        });
        res.status(200).json(req.body)
    }
});


// Post new Adress
router.post('/offices/address', express.json(), async (req, res, next) => {
    const {
        street,
        state,
        zipcode,
        city
    } = req.body;
    // TODO Validate address
    const addr = await prisma.address.create({
        data: {
            city: city,
            street: street,
            zipcode: zipcode,
            state: state

        },
        select: {
            aid: true
        }
    });
    res.status(200).json({
        ...addr,
        ...req.body
    })
});

// Create Post
router.post('/posts', express.json(), async (req, res, next) => {
    const {
        title,
        score,
        author,
        medic,
        office
    } = req.body

    const post = await prisma.post.create({
        data: {
            title: title,
            score: score,
            author: author,
            medicMid: medic,
            officeOid: office
        },
        select: {
            rid: true,
            createdAt: true
        }
    }).catch((error) => {
        res.status(500);
        res.json(error)
    });
    res.status(200).json({
        ...post,
        ...req.body
    });
});

router.post('/posts/:id/comments', express.json(), async (req, res, next) => {
    const {
        text,
        replying_to,
        author,
        post_id
    } = req.body

    const comment = await prisma.comment.create({
        data: {
            text: text,
            replyingToId: replying_to,
            author: author,
            PostRid: post_id,
        },
        select: {
            cid: true,
            data: true
        }
    }).catch((error) => {
        res.status(500);
        res.json(error)
    });
    res.status(200).json({
        ...comment,
        ...req.body
    });
});

// Post new Medic
router.post(['/medics'], async (req, res, next) => {
    const {
        user_id,
        specialty,
        description,
        experience,
        liscense
    } = req.body;

    const medic = await prisma.medic.create({
        data: {
            description: description,
            liscense: liscense,
            specialty: specialty,
            userUid: user_id,
            experience: experience
        },
        select: {
            cid: true,
            data: true
        }
    }).catch((error) => {
        res.status(500);
        res.json(error)
    });
    res.status(200).json({
        ...medic,
        ...req.body
    });
});


// Gets all medics
router.get(['/medics', '/medics/:id'], async (req, res, next) => {
    let {
        id,
        offset,
        limit
    } = req.query;

    if (id == undefined) {
        limit = limit || 20
        offset = offset || 0
    }
    const medic = await prisma.medic.findMany({
        take: limit.at,
        skip: offset,
        select: {
            uid: true,
            first_name: true,
            last_name: true
        }
    });
    medic.map((med) => {
        med.url = `https://urhealth-api.herokuapp.com/api/medics?=${med.uid}`
    });
    res.status(200).json(req.body)
});


router.get('/users', express.json(), async (req, res, next) => {
    let {
        id,
        offset,
        limit
    } = req.query;

    if (id === undefined) {
        limit = limit || 20
        offset = offset || 0
        // get all users
        const users = await prisma.user.findMany({
            take: limit,
            skip: offset,
            select: {
                uid: true,
                first_name: true,
                last_name: true
            }
        })
        users.map((user) => {
            user.url = `https://urhealth-api.herokuapp.com/api/users?=${user.uid}`
        })
        res.json(users)
    } else {
        const user = await prisma.user.findFirst({
            where: {
                uid: parseInt(id)
            },
            select: {
                first_name: true,
                last_name: true,
                Login: {
                    select: {
                        email: true
                    }
                }
            }
        });
        res.status(200).json(req.body)
    }
});


module.exports = router;


// const createError = require('http-errors');

// // use `prisma` in your application to read and write data in your DB
// const prisma = new PrismaClient()
// const app = express()

// app.use(express.json())


// app.listen




// const newUser = await prisma.user.create{(

// )}

// const newUser = await prisma.user.create({
//     data: {
//         name: 'Alice',
//         email: 'alice@prisma.io',
//     },
// })

// const users = await prisma.