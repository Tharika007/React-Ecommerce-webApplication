const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/lobbzy-ecommerce")
.then(()=> {
    console.log("mongodb connected");
})
.catch(()=> {
    console.log('failed');
  })
  
  //database connection
  const newSchema=new mongoose.newSchema({
    email: {
      type:String,
      required:true
    },
    password:{
      type:String,
      required:true
    }
  })

  const collection = mongoose.model("collection",newSchema)

  module.exports=collection