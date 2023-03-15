import Category from "@models/Category";
import Product, {materialType } from "@models/Product";
import ProductItem, {conditionType, qualityType} from "@models/ProductItem";
export const categories: Category[] = [

    { id: 0, name: "Plates", order: 1, imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Foliated_dish_with_underglaze_blue_design_of_melons%2C_bamboo_and_grapes%2C_Jingdezhen_ware%2C_Yuan%2C_1271-1368%2C_Shanghai_Museum.jpg/220px-Foliated_dish_with_underglaze_blue_design_of_melons%2C_bamboo_and_grapes%2C_Jingdezhen_ware%2C_Yuan%2C_1271-1368%2C_Shanghai_Museum.jpg" },
    { id: 1, name: "Ceramics", order: 2, imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Two_flasks_with_dragons.jpg/800px-Two_flasks_with_dragons.jpg" },
    { id: 2, name: "Glassware", order: 3, imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Pressed_glass.jpg/1200px-Pressed_glass.jpg" },
    { id: 3, name: "Silverware", order: 4, imageUrl: "data:image/jpeg;base64,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" },
    { id: 4, name: "Jewelry", order: 5, imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/A002.jpg/220px-A002.jpg" },
    { id: 5, name: "Sculptures", order: 6, imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Vierge_a_l%27Enfant_debout.jpg/220px-Vierge_a_l%27Enfant_debout.jpg" },
    { id: 6, name: "Manuscripts", order: 7, imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Boucicaut-Meister.jpg" },
    { id: 7, name: "Stamps", order: 8, imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Nicaragua1_1913.jpg" },
    { id: 8, name: "Books", order: 9, imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg" },
    { id: 9, name: "Cutlery", order: 10, imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Cutlery_for_children.jpg/1200px-Cutlery_for_children.jpg" },
    { id: 10, name: "Clocks", order: 11, imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Rew17h09_1977.jpg/220px-Rew17h09_1977.jpg" }
]

export const productItemMockupData: ProductItem[] = [
    {   
        id: 3,
        productId: 1, 
        condition: conditionType["No shards"],
        quality: qualityType["1. Quality"],
        sold: false,  
        weight : null,  
        customText: "This beautiful vase is perfect for any room in your home.",
        imageUrls: [
            "https://via.placeholder.com/160",
            "https://via.placeholder.com/170",
            "https://via.placeholder.com/180",
            "https://via.placeholder.com/190",
        ], 
        purchasePrice  : 2000, 
        currentPrice : 4500, 
        createdDate : new Date(2023, 1, 12), 
        priceHistory : [{id: 8, productItemId : 3, changeDate : new Date(2023, 1, 12), price : 4500}]
    },
    {
        id: 4,
        productId: 2, 
        condition: conditionType["No shards"],
        quality: qualityType["2. Quality"],
        sold: false,  
        weight : null,  
        customText: "Enjoy a warm cup of tea with this exquisite teapot.",
        imageUrls: [
            "https://via.placeholder.com/160",
            "https://via.placeholder.com/170",
            "https://via.placeholder.com/180",
            "https://via.placeholder.com/190",
        ],
        purchasePrice  : 1000, 
        currentPrice : 9000     , 
        createdDate : new Date(2022, 12, 12), 
        priceHistory : [{id: 7, productItemId : 4, changeDate : new Date(2022, 12, 12), price : 9000}]
    },
    {
        id: 5,
        productId: 3, 
        condition: conditionType["Few shards"],
        quality: qualityType["3. Quality"],
        sold: false,  
        weight : null,  
        customText: "This intricately designed bowl is perfect for serving salads or fruit.",
        imageUrls: [
            "https://via.placeholder.com/160",
            "https://via.placeholder.com/170",
            "https://via.placeholder.com/180",
            "https://via.placeholder.com/190",
        ],
        purchasePrice  : 800, 
        currentPrice : 1500, 
        createdDate : new Date(2023, 1, 12), 
        soldDate: new Date(2023, 3, 12), 
        priceHistory : [{id: 6, productItemId : 5, changeDate : new Date(2023, 1, 12), price : 1500}]
    },
    {
        id:6,
        productId: 4, 
        condition: conditionType["Many shards"],
        quality: qualityType["1. Quality"],
        sold: false,  
        weight : null,  
        customText: "This beautiful plate is perfect for special occasions.",
        imageUrls: [
            "https://via.placeholder.com/160",
            "https://via.placeholder.com/170",
            "https://via.placeholder.com/180",
            "https://via.placeholder.com/190",
        ],
        purchasePrice  : 20000, 
        currentPrice : 25000, 
        createdDate : new Date(2023, 1, 12), 
        priceHistory : [{id: 5, productItemId : 6, changeDate : new Date(2023, 1, 12), price : 25000}]    },
    {
        id:7,
        productId: 5, 
        condition: conditionType["No shards"],
        quality: qualityType["2. Quality"],
        sold: false,  
        weight : null,  
        customText: "Enjoy a warm beverage with this delicate cup.",
        imageUrls: [
            "https://via.placeholder.com/160",
            "https://via.placeholder.com/170",
            "https://via.placeholder.com/180",
            "https://via.placeholder.com/190",
        ],
        purchasePrice  : 8000, 
        currentPrice : 8001, 
        createdDate : new Date(), 
        priceHistory : [{id: 4, productItemId : 7, changeDate : new Date(), price : 8001}]
    },
    {
        id:8,
        productId: 6, 
        condition: conditionType["Few shards"],
        quality: qualityType["3. Quality"],
        sold: false,  
        weight : null,  
        customText: "This intricately designed teacup is perfect for a special tea time.",
        imageUrls: [
            "https://via.placeholder.com/160",
            "https://via.placeholder.com/170",
            "https://via.placeholder.com/180",
            "https://via.placeholder.com/190",
        ],
        purchasePrice  : 2000, 
        currentPrice : 8000, 
        createdDate : new Date(2021, 1, 12), 
        priceHistory : [
            {id: 1, productItemId : 8, changeDate : new Date(2021, 1, 12), price : 12000},
            {id: 2, productItemId : 8, changeDate : new Date(2021, 1, 12), price : 10000},
            {id: 3, productItemId : 8, changeDate : new Date(2023, 2, 12), price : 8000}]
    }
]

export const productMockupData: Product[] = [
    {
        id: 1,
        name: "Elegant Vase",
        modelNumber: 101,
        material: materialType.porcelain,
        design: "Flower Pattern",
        dimension: "9 inches x 5 inches",
        imageUrls: [
            "https://via.placeholder.com/160",
            "https://via.placeholder.com/170",
            "https://via.placeholder.com/180",
            "https://via.placeholder.com/190",
            "https://via.placeholder.com/200",
        ],
        subcategoryId: 1,
    },
    {
        id: 2,
        name: "Delicate Teapot",
        modelNumber: 102,
        material: materialType.porcelain,
        design: "Butterfly Pattern",
        dimension: "7 inches x 4 inches",
        imageUrls: [
            "https://via.placeholder.com/160",
            "https://via.placeholder.com/170",
            "https://via.placeholder.com/180",
            "https://via.placeholder.com/190",
            "https://via.placeholder.com/200",
        ],
        subcategoryId: 1,
    },
    {
        id: 3,
        name: "Ornate Bowl",
        modelNumber: 103,
        material: materialType.porcelain,
        design: "Fruit Pattern",
        dimension: "10 inches x 6 inches",
        imageUrls: [
            "https://via.placeholder.com/160",
            "https://via.placeholder.com/170",
            "https://via.placeholder.com/180",
            "https://via.placeholder.com/190",
            "https://via.placeholder.com/200",
        ],
        subcategoryId: 1,
    },

    {
        id: 4,
        name: "Fine Plate",
        modelNumber: 248,
        material: materialType.porcelain,
        design: "Leaf Pattern",
        dimension: "8 inches x 8 inches",
        imageUrls: [
            "https://via.placeholder.com/160",
            "https://via.placeholder.com/170",
            "https://via.placeholder.com/180",
            "https://via.placeholder.com/190",
            "https://via.placeholder.com/200",
        ],
        subcategoryId: 1,
    },
    {
        id: 5,
        name: "Elegant Cup",
        modelNumber: 249,
        material: materialType.porcelain,
        design: "Bird Pattern",
        dimension: "3 inches x 3 inches",
        imageUrls: [
            "https://via.placeholder.com/160",
            "https://via.placeholder.com/170",
            "https://via.placeholder.com/180",
            "https://via.placeholder.com/190",
            "https://via.placeholder.com/200",
        ],
        subcategoryId: 1,
    },
    {
        id: 6,
        name: "Ornate Teacup",
        modelNumber: 250,
        material: materialType.porcelain,
        design: "Rose Pattern",
        dimension: "2 inches x 2 inches",
        imageUrls: [
            "https://via.placeholder.com/160",
            "https://via.placeholder.com/170",
            "https://via.placeholder.com/180",
            "https://via.placeholder.com/190",
            "https://via.placeholder.com/200",
        ],
        subcategoryId: 1,
    }
];
