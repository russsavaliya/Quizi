const quesdatabase = require("../model/v-questions");

// insert
exports.insert = async function (req, res, next) {
    try {
        console.log(req.body);
        let quesdata = await quesdatabase.create(req.body)
        res.status(201).json({
            status: 'success',
            message: 'user-create',
            data: quesdata
        })

    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error.message

        })
    }
}

// update
exports.update = async function (req, res, next) {
    try {
        console.log(req.query.upid);
        if (req.query.upid) {
            await quesdatabase.findByIdAndUpdate(req.query.upid, req.body)
        }
        res.status(201).json({
            status: 'success',
            message: 'data updated'
        })
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error.message

        })
    }
}

// delete

exports.delete = async function (req, res, next) {
    try {
        console.log(req.query.deleteid);
        if (req.query.deleteid) {
            await quesdatabase.findByIdAndDelete(req.query.deleteid)
        }
        res.status(204).json({
            status: 'success',
            message: 'data delete'
        })
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error.message

        })
    }
}

exports.find = async function (req, res, next) {
    try {
   let alldata  = await quesdatabase.find()
     
        res.status(201).json({
            status: 'success',
            message: 'all data showed',
            data: alldata
        })

    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error.message

        })
    }
}

// 

// id insert kare ae j id na ques ave
exports.findid = async function (req, res, next) {
    try {
        let id = req.query.qid
   let alldata  = await quesdatabase.find({category:id})
     
        res.status(201).json({
            status: 'success',
            message: 'all data showed',
            data: alldata
        })
 
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error.message

        })
    }
}