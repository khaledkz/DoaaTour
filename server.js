const express = require("express");
const app = express();
app.use(express.static("public"));
const exphbs = require("express-handlebars")

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render("home")
})

app.get('/about-us', (req, res) => {
    res.render("about-us")
})

app.get('/contact-us', (req, res) => {
    res.render("contact-us")
})

app.get('/umrah', (req, res) => {
    res.render("umrah")
})
app.get('/hotel', (req, res) => {
    res.render("hotel")
})
app.get('/haj', (req, res) => {
    res.render("haj")
})
app.listen(process.env.PORT || 3000, function() {
    console.log("Server is listening on port 3000. Ready to accept requests!");
});