const app = require("./app")
const connectDatabase = require("./config/database")
const mongoose = require("mongoose")
const ProductSchema = require("./models/ProductSchema")

//connecting database
connectDatabase();

//creating ProductSchema
const Product = new mongoose.model("Product",ProductSchema);


// creating new products
app.post("/api/v1/product/new",async (req,res)=>{
    const product = await Product.create(req.body);
    res.status(201)
    .json({
        success: true,
        product
    })
})

//getting all products
app.get("/api/v1/products",async(req,res)=>{
    const product = await Product.find();

    res.status(201).json({
        success:true,
        product
    })
});

//updating id



app.listen(process.env.PORT,()=>{
    console.log(`Server running ${process.env.PORT}`);
})