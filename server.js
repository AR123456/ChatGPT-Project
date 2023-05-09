// setting up server
// const app = require("./app");
// const dotenv = require("dotenv");
// const PORT = process.env.PORT || 8000;

// // const app = express();
// // app.use(express.json());
// // app.use(express.urlencoded({ extended: false }));
// // app.get("/", (req, res) => {
// //   res.send("Hello World!");
// // });
// app.listen(PORT, () =>
//   console.log(`Server started on port http://localhost:${PORT}`)
// );
const app = require("./app");

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
