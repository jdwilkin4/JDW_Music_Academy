const Student = require('../models/students');

exports.students = (req, res) => {
    const student = new Student(req.body)
    console.log("req.body", req.body)

    student.save((err, user) => {
        if (err) return console.error(err, 'bad gateway')
        res.json({ user })
    })
}