const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true,'Please enter product name: '],
        trim: true,
        maxLength: [100,'Product name cannot exceed 100']
    },
    price : {
        type: Number,
        required: [true,'Please enter product price: '],
        maxLength: [5,'Product name cannot exceed 5'],
        default: 0.0
    },
    description : {
        type: String,
        required: [true,'Please enter product description: ']
    },
    ratings : {
        type: Number,
        default: 0
    },
    images: [{
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
    }],
    category: {
        type: String,
        required: [true,'Please enter category of this product'],
        enum: {
            values: [
                'Electronics',
                'Cameras',
                'Laptops',
                'Accessories'
            ],
            message: 'Please select correct category'
        }
    },
    seller: {
        type: String,
        required: [true,'Please enter product seller'],
    },
    stock: {
        type: Number,
        required: [true,'Please enter the stock available'],
        maxLength: [5,'Lenght cannot exceed 5'],
        default: 0
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            name: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                required: true
            },
            comment: {
                type: String,
                required: true
            }
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Products',productSchema);