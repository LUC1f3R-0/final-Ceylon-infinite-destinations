import app from "./src/app.js";
import connectioDB from "./src/configs/database.connection.config.js";

connectioDB()
app.listen(2000, () => { console.log(`server running on http://localhost:2000`) })