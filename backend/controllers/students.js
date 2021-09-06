const Student = require('../models/students');

exports.students = (req, res) => {
    const student = new Student(req.body)
    console.log("req.body", req.body)

    student.save((error, student) => {
        if (error) {
            return res.status(400).json({ error })
        }
        res.json({ student })
    })
}