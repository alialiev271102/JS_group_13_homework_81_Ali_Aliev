const express = require('express');
const { nanoid } = require('nanoid');
const Links = require('../model/Links');

const router = express.Router();

router.get('/:shortUrl', async (req, res, next) => {
    try {
        const links = await Links.find({"shortUrl": `${req.params.shortUrl}`});
        console.log(links);

        if (!links) {
            return res.status(404).send({message: 'Not Found'});
        }
        return res.status(301).redirect(req.params.Url);
    } catch (e) {
        next(e);
    }
});

router.post('/', async (req, res, next) => {
    try {
        if(!req.body.Url) {
            return res.status(400).send({message:'No Url'});
        }

        const linksData = {
            Url: req.body.Url,
            shortUrl: nanoid(6),
        };

        const link = new Links(linksData);

        await link.save();
        console.log(link);
        return res.send(link);
    }catch (e) {
        next(e);
    }
});

module.exports = router;