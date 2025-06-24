const mongoose =require("mongoose");

mongoose.set('strictQuery', true);
const connectionurl=`mongodb+srv://rajguptackt22:${process.env.DB_USERPASSWORD}@cluster1.nzygu8y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1`;
mongoose.connect(connectionurl).then((status)=>{
    console.log("mongodb connected successfully");
}).catch((err)=>{
 console.log("Error connecting to mongodb"+err.message);
});

const d=new Date();
const FeedbackSchema=mongoose.Schema({
     Name :String,
     Email:String,
     Feedback: String,
     Feedback_DT :{
        type:String,
        default:d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear()
     }
});

const Colls_Feedback=mongoose.model("Colls_Feedback",FeedbackSchema);
module.exports=Colls_Feedback;
