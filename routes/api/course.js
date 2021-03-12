const express = require('express');
const router = express.Router();
const Course = require('../../models/Course')
const Assignment = require('../../models/Assignment');
const auth = require('../../middleware/auth');

//add a course
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

//add assignments
router.patch('/assignment/:id', auth, async (req, res) => {
    try{
        const course = await Course.findById(req.params.id);
        course.assignments.unshift(req.body);
       // console.log(course.assignments);
        await course.save();
        return res.status(201).send(course);
    }catch(error){
        console.log(error)
        res.status(400).send('Cannot find course')
        
    }
})

//get all the courses
router.get('/', auth, async (req, res) => {
    try{
        const courses = await Course.find();
        res.json(courses);
    }catch(error){
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

//delete assignment
router.delete('/assignment/:cid/:aid', auth, async (req, res) => {
    try {
        console.log('Reached here!')
        const course = Course.findById(req.params.cid);
        const assignments = course.assignments.filter(i => i._id === aid);
        console.log(assignments);
        course.assignments = assignments;
        course.save();
        res.status(200).json(course);
    } catch (error) {
        res.status(400).json({msg: 'Cannot do this'});
    }
})

//get all the assignments
router.get('/assignments/:id', auth, async(req, res) => {

    try{
        const course = await Course.findById(req.params.id);
        res.json(course.assignments);
    }catch(error){
        res.status(400).json({msg: 'Assignments not found'});
    }
    
})

module.exports = router;