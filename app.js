import  express  from "express";
import mongoose from "mongoose";
import router from "./backend/routes/user.routes";
import blogRouter from "./backend/routes/blog-routes";

const app = express();

app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);
mongoose
.connect(
    "mongodb+srv://satyaAdmin:dTI3dZjVg1YW5zfV@cluster0.sua69lm.mongodb.net/Blog?retryWrites=true&w=majority"
    )
    .then(() => app.listen(7000))
    .then(() => 
    console.log("Connected to the database and listening to ocalhost 7000")
    )
    .catch((err) => console.log(err));



//dTI3dZjVg1YW5zfV        dbpaas 