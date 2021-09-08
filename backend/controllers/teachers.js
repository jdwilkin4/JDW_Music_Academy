const Teacher = require('../models/teachers');

exports.teachers = (req, res) => {
    const teacher = new Teacher(req.body)
    console.log("req.body", req.body)

    teacher.save((error, user) => {
        if (error) {
            res.status(400).json({ error })
        }
        res.json({ user })
    })
}