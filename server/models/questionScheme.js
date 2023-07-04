import mongoose from "mongoose";
const {Schema} =mongoose
const coverSchema=new Schema({
    questions:{type:Array,default:[]},
    answers:{type:Array,default:[]},
    createdAt:{type:Date,default:Date.now},
    title:{type: String,required: true},
    desc:{type: String,required: true},
    numofquestion:{type: Number,required: true},
    Duration:{type: Number,required: true},
    Mark:{type: Number,required: true},
    })

    
    const questionSchema=new Schema({
        questions:{type:Array,default:[]},
        answers:{type:Array,default:[]},
        createdAt:{type:Date,default:Date.now},
        cover:{ type: Schema.Types.ObjectId, ref: 'Cover' },
        })
        
    const Cover = mongoose.model('Cover', coverSchema);
    const Questions = mongoose.model('Question', questionSchema);    
    export { Cover, Questions };