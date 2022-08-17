const db = require('../shared/mongo');

const postApi = require('express').Router();

postApi.post("/", async (req, res) => {
    try {
        console.log("in Post ");
        const post_data = req.body;
        await db.mobile.insertOne(post_data);
        res.status(201).send({ message: "Post Created Successfully" });
    } catch (error) {
        res.status(404).send({
            message: error.message,
            error_message: "Post is not created"
        })
    }
})

