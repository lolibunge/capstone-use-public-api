import express from 'express';
import axios from 'axios';

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get("/", async (req,res) => {
    try{
        const result = await axios.get("https://cat-fact.herokuapp.com/facts/random?animal_type=dog");
        res.render("index.ejs", {
            text: result.data.text,
            type: result.data.type,
        });

    }catch (error){
        console.log(error.response.data);
        res.status(500);
    }
});

app.listen(port, () =>{
    console.log(`Server running on port: ${port}.`);
});