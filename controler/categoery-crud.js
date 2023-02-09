const catedatabase = require("../model/category");

// insert
exports.insert = async function (req, res, next) {
    try {
        console.log(req.body);
        let catedata = await catedatabase.create(req.body)
        res.status(201).json({
            status: 'success',
            message: 'user-create',
            data: catedata
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
            await catedatabase.findByIdAndUpdate(req.query.upid, req.body)
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
            await catedatabase.findByIdAndDelete(req.query.deleteid)
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


// find data -show data

exports.find = async function (req, res, next) {
    try {
   let alldata  = await catedatabase.find()
     
   
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