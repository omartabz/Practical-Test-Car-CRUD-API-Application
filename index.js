import express from 'express'
import cors from 'cors'
import { mostPopularCar } from './mostPopularCar.js'
const app = express() 

app.use(cors());
app.use(express.urlencoded({ extended: false }))
app.use(express.json())



app.get('/api/mostPopularCar', function(req, res) {
    const cars = req.query.carCounter.forEach;
    const make = mostPopularCar(cars);

    res.json({ mostPopularCar: make });
})
let PORT = process.env.PORT || 3007;

app.listen(PORT, function () {
    console.log('App starting on port', PORT);
});