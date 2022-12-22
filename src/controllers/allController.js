const AuthorModel= require("../models/authorModel")
const PublisherModel= require("../models/publisherModel")
const BookModel = require("../models/bookModel")
const ObjectId=require('mongoose').Types.ObjectId

//=============================================================================================================//

const createAuthor= async function (req, res) {
    let author = req.body
    let authorCreated = await AuthorModel.create(author)
    res.send({data: authorCreated})
}
//=============================================================================================================//

const createPublisher= async function (req, res) {
    let publisher = req.body
    let publisherCreated = await PublisherModel.create(publisher)
    res.send({data: publisherCreated})
}
//=============================================================================================================//

const createBook= async function (req, res) {
    if(!(req.body.author && req.body.publisher)){
        res.send("author/publisher is required")
    }else if(!(ObjectId.isValid(req.body.author) && ObjectId.isValid(req.body.publisher))){
        res.send("author/publisher is not present");
    }else{
        let bookCreated = await BookModel.create(req.body)
        res.send({data: bookCreated})
    }
}
//=============================================================================================================//

const getBooksWithAuthorDetails= async function (req, res) {
    let books = await BookModel.find().populate('publisher').populate('author')
    res.send({data: books})
}
//=============================================================================================================//

const updateCover = async function(req, res){
    let updateBook = await BookModel.updateMany(
        {"publisher": {$in:["63a36b3fd05293da764ccfb7","63a36aa2d05293da764ccfb1"] } },
        {isHardCover: true},
        {new: true}
    )
res.send({msg:updateBook})
}
//=============================================================================================================//

const getAuthor = async function(req, res){
    let x = await AuthorModel.find({ratings:{$gt:3.5}})
    let y = []
    for(let i = 0; i<x.length;i++){
        let z = await BookModel.updateMany({author: x[i]._id},{$inc: {price:10}}, {new: true})
        y.push(z)
    }
    res.send(y)
}
//=============================================================================================================//

module.exports.createAuthor= createAuthor
module.exports.createPublisher= createPublisher
module.exports.createBook= createBook
module.exports.getBooksWithAuthorDetails= getBooksWithAuthorDetails
module.exports.updateCover= updateCover
module.exports.getAuthor= getAuthor






