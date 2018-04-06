//mongoose schema  notes associated with article 
//mongoose schema headline and link
var mongoose =require("mongoose");
var Schema = mongoose.Schema;

var noteSchema = new Schema({
    _headline: {
        type: Schema.Types.ObjectId,
      ref:"Headline"
    },
    date: String,
     noteText: String
    
});
var Headline = mongoose.model("Headline",headlineSchema);

module.exports = Note;
