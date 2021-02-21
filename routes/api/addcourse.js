const express = require('express');
const router = express.Router();
const Course = require('../../models/Course')
const auth = require('../../middleware/auth');
const Assignment = require('../../models/Assignment');

router.post('/', auth, async (req, res) => {


    const course = new Course({
        ...req.body,
        user: req.user.id
    })

    try{
        await course.save();
        res.status(201).send(course);
    }catch(error){
        res.status(400).send(error);
    }
});

//get all the courses
router.get('/', auth, async (req, res) => {
    try{
        const courses = await Course.find();
        res.json(courses);
    }catch(error){
        console.error(error.message);
        res.status(500).send('Server error');
    }
})

//delete a course provided with id
router.delete('/:id', auth, async (req, res) => {
    try{
        await Course.findOneAndRemove({_id: req.params.id});

        res.json({msg: 'Course deleted'});
    }catch(error){
        res.status(400).json({msg: 'Course not found'});
    }
})

module.exports = router;