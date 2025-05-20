import app from "./src/app.js";
import connectioDB from "./src/configs/database.connection.config.js";

connectioDB()
app.listen(8080, () => { console.log(`server running on http://localhost:8080`) })