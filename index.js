import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get("/", (req,res)=> {
    res.render("index.ejs")
})

app.post("/submit", async(req,res)=> {
    try{
        const url = req.body.name
        const shortURL = await axios.post(`https://api.shrtco.de/v2/shorten?url=${url}`);
        res.render("index.ejs", {url: url, shortURL: shortURL});
    } catch (error) {
        console.error("API Error:", error);
        res.status(400).render("index.ejs", { error: error });
    }

})
app.listen(port, ()=> {
    console.log(`Sunucunuz ${port} portunda açılmıştır`)
})