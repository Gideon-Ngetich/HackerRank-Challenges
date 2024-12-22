const router = require('express').Router()
const { Departments } = require('../Models/Departments.model')
const { Courses } = require('../Models/course.model')

router.get('/', async (req, res) => {
    try {
        const departments = await Departments.find();
        console.log(departments)
        const result = await Promise.all(
            departments.map(async (department) => {
                const courses = await Courses.find({ departmentID: department._id, category: "short course" });
                return {
                    departmentName: department.departmentName,
                    courses: courses,
                };
            })
        );

        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch department details' });
    }
});
router.get('/', async (req, res) => {
    try {
        const departments = await Departments.find();
        console.log(departments)
        const result = await Promise.all(
            departments.map(async (department) => {
                const courses = await Courses.find({ departmentID: department._id, category: "short course" });
                return {
                    departmentName: department.departmentName,
                    courses: courses,
                };
            })
        );

        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch department details' });
    }
});

router.get('/', async (req, res) => {
    try {
        const departments = await Departments.find();
        console.log(departments)
        const result = await Promise.all(
            departments.map(async (department) => {
                const courses = await Courses.find({ departmentID: department._id, category: "short course" });
                return {
                    departmentName: department.departmentName,
                    courses: courses,
                };
            })
        );

        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch department details' });
    }
});
module.exports = router;