
const { Schema, model } = require('mongoose')

const ArticleSchema = new Schema(
  {
    title: {
      type: String,
      minlength: 5,
      maxlength: 100,
      required: true
    },
    description: {
      type: String,
      minlength: 5,
      maxlength: 200,
      required: true
    },
    body: {
      type: String,
      minlength: 5,
      maxlength: 100,
      required: true
    },
    tagList: {
      [
        type: String,
      minlength: 5,
      maxlength: 100,
      required: true,
      type: String,
      minlength: 5,
      maxlength: 100,
      required: true
           ] 
          }
)

module.exports = model('Article', ArticleSchema)
