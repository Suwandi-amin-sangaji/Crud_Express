// import express js
import express from "express";
// import body parser
import bodyParser from "body-parser";
// import cors
import cors from "cors";

// import userRoute yang ada di routes/users.js
import userRoutes from "./routes/users.js";


// buat app yang menampung express()
const app = express();
// membuat port dengan port 5000
const port = 5000;

// set cors
app.use(bodyParser.json());
app.use(cors());

// set routes
app.use("/", userRoutes);

// test server
app.get('/', (req, res) => res.send("Hello From Express"));
app.all("*", (req, res) => res.send("that route doesn't exist"));


app.listen(port, () => {
    console.log(`Server started on port: http://localhost:${port}`);
})
