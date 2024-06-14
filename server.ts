//we will use every connection properties here 
// getting-started.js
import mongoose from "mongoose";
import config from "./src/app/config";
import app from "./src/app";

main().catch(err => console.log(err));

async function main() {
  try{
    await mongoose.connect(config.database_url as string);


    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  
  }
  catch(error){
    console.log(error)
  }
 
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
main()




