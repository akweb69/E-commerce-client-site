import React from 'react';
import ProductCard from '../Components/ProductCard';

const ProductSection = () => {
    const productsData = [
        // ১. টি-শার্ট
        {
            _id: "1",
            name: "Premium Cotton Polo T-Shirt",
            image: "https://i.ibb.co/5cB8sKp/polo-navy.jpg",
            colors: ["Navy Blue", "Black", "White", "Red", "Grey"],
            rating: 4.6,
            reviewCount: 892,
            isNew: true,
            freeDelivery: true,
            inStock: true,
            isSizeAvailable: true,
            sizes: [
                { size: "S", price: 999, oldPrice: 1790, discount: "-44%", stock: 56, sold: 412 },
                { size: "M", price: 1099, oldPrice: 1790, discount: "-39%", stock: 123, sold: 789 },
                { size: "L", price: 1199, oldPrice: 1990, discount: "-40%", stock: 189, sold: 956 },
                { size: "XL", price: 1299, oldPrice: 2190, discount: "-41%", stock: 78, sold: 623 },
                { size: "XXL", price: 1499, oldPrice: 2490, discount: "-40%", stock: 34, sold: 298 }
            ],
            description: "১০০% কটন, প্রিমিয়াম কোয়ালিটি, কালার গ্যারান্টি।"
        },

        // ২. জুতা
        {
            _id: "2",
            name: "Men's Premium Leather Sneakers",
            image: "https://i.ibb.co/4pJ7Y9K/sneakers-black.jpg",
            colors: ["Black", "White", "Brown"],
            rating: 4.7,
            reviewCount: 567,
            isNew: true,
            freeDelivery: true,
            inStock: true,
            isSizeAvailable: true,
            sizes: [
                { size: "39", price: 2790, oldPrice: 4590, discount: "-39%", stock: 12, sold: 167 },
                { size: "40", price: 2890, oldPrice: 4590, discount: "-37%", stock: 45, sold: 289 },
                { size: "41", price: 2890, oldPrice: 4590, discount: "-37%", stock: 78, sold: 412 },
                { size: "42", price: 2990, oldPrice: 4990, discount: "-40%", stock: 98, sold: 623 },
                { size: "43", price: 3190, oldPrice: 5290, discount: "-40%", stock: 56, sold: 456 },
                { size: "44", price: 3390, oldPrice: 5590, discount: "-39%", stock: 23, sold: 234 },
                { size: "45", price: 3590, oldPrice: 5990, discount: "-40%", stock: 8, sold: 98 }
            ],
            description: "জেনুইন লেদার, কুশন ইনসোল, ১ বছর সোল গ্যারান্টি।"
        },

        // ৩. মোবাইল
        {
            _id: "3",
            name: "Samsung Galaxy A55 5G (8/128GB)",
            image: "https://i.ibb.co/0j7K7Y0/samsung-a55.jpg",
            price: 45999,
            oldPrice: 52999,
            discount: "-13%",
            rating: 4.8,
            reviewCount: 428,
            isNew: true,
            freeDelivery: true,
            inStock: true,
            isSizeAvailable: false,
            sizes: [],
            colors: ["Awesome Navy", "Awesome Lilac"],
            stock: 87,
            sold: 612,
            description: "Exynos 1480, 50MP OIS ক্যামেরা, IP67, 5000mAh"
        },

        // ৪. হুডি
        {
            _id: "4",
            name: "Winter Oversized Hoodie",
            image: "https://i.ibb.co/7zP5KcM/hoodie-black.jpg",
            colors: ["Black", "Grey", "Navy"],
            rating: 4.5,
            reviewCount: 1240,
            isNew: false,
            freeDelivery: true,
            inStock: true,
            isSizeAvailable: true,
            sizes: [
                { size: "M", price: 1490, oldPrice: 2590, discount: "-42%", stock: 89, sold: 987 },
                { size: "L", price: 1590, oldPrice: 2790, discount: "-43%", stock: 156, sold: 1201 },
                { size: "XL", price: 1690, oldPrice: 2990, discount: "-43%", stock: 78, sold: 834 },
                { size: "XXL", price: 1890, oldPrice: 3290, discount: "-43%", stock: 34, sold: 456 }
            ],
            description: "ফ্লিস ভিতরে, ওভারসাইজড ফিট, শীতের জন্য পারফেক্ট।"
        },

        // ৫. শার্ট
        {
            _id: "5",
            name: "Formal Cotton Shirt - Slim Fit",
            image: "https://i.ibb.co/3T1kJ7M/formal-shirt.jpg",
            colors: ["White", "Sky Blue", "Black"],
            rating: 4.7,
            reviewCount: 678,
            isNew: true,
            freeDelivery: true,
            inStock: true,
            isSizeAvailable: true,
            sizes: [
                { size: "38", price: 1290, oldPrice: 2290, discount: "-44%", stock: 67, sold: 543 },
                { size: "39", price: 1290, oldPrice: 2290, discount: "-44%", stock: 123, sold: 789 },
                { size: "40", price: 1390, oldPrice: 2490, discount: "-44%", stock: 189, sold: 1023 },
                { size: "42", price: 1490, oldPrice: 2690, discount: "-45%", stock: 78, sold: 678 },
                { size: "44", price: 1590, oldPrice: 2890, discount: "-45%", stock: 23, sold: 321 }
            ],
            description: "১০০% কটন, স্লিম ফিট, অফিস + পার্টি উভয়ের জন্য।"
        },

        // ৬. ওয়াচ
        {
            _id: "6",
            name: "Naviforce NF9216 Chronograph Watch",
            image: "https://i.ibb.co/9tY6Y6Y/naviforce-watch.jpg",
            price: 2890,
            oldPrice: 4990,
            discount: "-42%",
            rating: 4.8,
            reviewCount: 1892,
            isNew: false,
            freeDelivery: true,
            inStock: true,
            isSizeAvailable: false,
            sizes: [],
            colors: ["Black", "Silver", "Gold"],
            stock: 145,
            sold: 3421,
            description: "জাপানি মুভমেন্ট, ওয়াটারপ্রুফ, ক্রোনোগ্রাফ।"
        },

        // ৭. ব্যাকপ্যাক
        {
            _id: "7",
            name: "Swiss Gear 35L Laptop Backpack",
            image: "https://i.ibb.co/6B1nN8K/swissgear-bag.jpg",
            price: 3490,
            oldPrice: 5990,
            discount: "-42%",
            rating: 4.9,
            reviewCount: 2341,
            isNew: true,
            freeDelivery: true,
            inStock: true,
            isSizeAvailable: false,
            sizes: [],
            colors: ["Black", "Grey"],
            stock: 67,
            sold: 5123,
            description: "১৭ ইঞ্চি ল্যাপটপ কম্পার্টমেন্ট, ওয়াটার রেজিস্ট্যান্ট।"
        },

        // ৮. ইয়ারফোন
        {
            _id: "8",
            name: "Anker Soundcore Life P3 TWS",
            image: "https://i.ibb.co/0s3tM2f/anker-p3.jpg",
            price: 5490,
            oldPrice: 7990,
            discount: "-31%",
            rating: 4.7,
            reviewCount: 1876,
            isNew: false,
            freeDelivery: true,
            inStock: true,
            isSizeAvailable: false,
            sizes: [],
            colors: ["Black", "Navy", "Coral"],
            stock: 234,
            sold: 3987,
            description: "ANC, ৩৫ ঘণ্টা ব্যাটারি, ওয়্যারলেস চার্জিং।"
        },

        // ৯. পাঞ্জাবি
        {
            _id: "9",
            name: "Eid Special Cotton Panjabi",
            image: "https://i.ibb.co/5YgX6Yk/panjabi-white.jpg",
            colors: ["White", "Cream", "Sky"],
            rating: 4.8,
            reviewCount: 987,
            isNew: true,
            freeDelivery: true,
            inStock: true,
            isSizeAvailable: true,
            sizes: [
                { size: "38", price: 1890, oldPrice: 3290, discount: "-43%", stock: 89, sold: 1234 },
                { size: "40", price: 1990, oldPrice: 3490, discount: "-43%", stock: 156, sold: 1890 },
                { size: "42", price: 2090, oldPrice: 3690, discount: "-43%", stock: 234, sold: 2456 },
                { size: "44", price: 2290, oldPrice: 3990, discount: "-43%", stock: 78, sold: 987 }
            ],
            description: "হ্যান্ড ওয়ার্ক, প্রিমিয়াম কটন, ঈদ স্পেশাল।"
        },

        // ১০-১৮. আরো প্রোডাক্ট (সংক্ষেপে)
        { _id: "10", name: "Realme 12 Pro+ 12/256GB", price: 48999, oldPrice: 55999, discount: "-13%", rating: 4.8, reviewCount: 567, isNew: true, freeDelivery: true, inStock: true, isSizeAvailable: false, sizes: [], colors: ["Blue", "Beige"], stock: 56, sold: 789, description: "200MP ক্যামেরা, 120W চার্জিং" },
        { _id: "11", name: "Xiaomi Smart Band 8 Pro", price: 5990, oldPrice: 7990, discount: "-25%", rating: 4.7, reviewCount: 1234, isNew: true, freeDelivery: true, inStock: true, isSizeAvailable: false, sizes: [], stock: 234, sold: 3456, description: "AMOLED ডিসপ্লে, ১৪ দিন ব্যাটারি" },
        { _id: "12", name: "Winter Jacket for Men", image: "https://i.ibb.co/7zP5KcM/jacket.jpg", colors: ["Black"], rating: 4.6, reviewCount: 890, isNew: false, freeDelivery: true, inStock: true, isSizeAvailable: true, sizes: [{ size: "M", price: 3590, oldPrice: 5990, discount: "-40%", stock: 45, sold: 987 }, { size: "L", price: 3690, oldPrice: 6190, discount: "-40%", stock: 78, sold: 1234 }, { size: "XL", price: 3890, oldPrice: 6490, discount: "-40%", stock: 34, sold: 678 }], description: "ওয়াটারপ্রুফ, উইন্ডপ্রুফ" },
        { _id: "13", name: "iPhone 15 Pro Max 256GB", price: 184999, oldPrice: 209999, discount: "-12%", rating: 4.9, reviewCount: 2341, isNew: true, freeDelivery: true, inStock: true, isSizeAvailable: false, sizes: [], colors: ["Natural Titanium"], stock: 23, sold: 567, description: "A17 Pro, টাইটেনিয়াম বডি" },
        { _id: "14", name: "Gaming RGB Mouse Pad XXL", price: 1290, oldPrice: 2490, discount: "-48%", rating: 4.8, reviewCount: 3456, isNew: false, freeDelivery: true, inStock: true, isSizeAvailable: false, sizes: [], stock: 456, sold: 7890, description: "ওয়াটারপ্রুফ, নন-স্লিপ" },
        { _id: "15", name: "Bluetooth Speaker JBL Style", price: 2490, oldPrice: 4490, discount: "-45%", rating: 4.6, reviewCount: 1876, isNew: true, freeDelivery: true, inStock: true, isSizeAvailable: false, sizes: [], stock: 178, sold: 2987, description: "২০ ঘণ্টা প্লেব্যাক, IPX7" },
        { _id: "16", name: "Formal Leather Belt", price: 890, oldPrice: 1690, discount: "-47%", rating: 4.7, reviewCount: 987, isNew: false, freeDelivery: true, inStock: true, isSizeAvailable: true, sizes: [{ size: "30-32", price: 890, oldPrice: 1690, discount: "-47%" }, { size: "34-36", price: 990, oldPrice: 1790, discount: "-45%" }, { size: "38-40", price: 1090, oldPrice: 1990, discount: "-45%" }], description: "জেনুইন লেদার" },
        { _id: "17", name: "Women's Handbag", image: "https://i.ibb.co/3T1kJ7M/handbag.jpg", price: 2190, oldPrice: 3990, discount: "-45%", rating: 4.8, reviewCount: 1567, isNew: true, freeDelivery: true, inStock: true, isSizeAvailable: false, sizes: [], colors: ["Brown", "Black"], stock: 89, sold: 2341, description: "পিইউ লেদার, মাল্টি কম্পার্টমেন্ট" },
        { _id: "18", name: "OnePlus Nord N30 SE", price: 18999, oldPrice: 22999, discount: "-17%", rating: 4.5, reviewCount: 678, isNew: true, freeDelivery: true, inStock: true, isSizeAvailable: false, sizes: [], colors: ["Black", "Blue"], stock: 123, sold: 890, description: "50MP ক্যামেরা, 5000mAh" }
    ];

    return (
        <section className="w-full py-8 ">
            <div className="w-full">
                {/* Section Title */}
                <div className="mb-8 text-center">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
                        সর্বশেষ প্রোডাক্টসমূহ
                    </h2>
                    <p className="text-gray-600 mt-2">আজকের সেরা ডিল ও নতুন আগমন</p>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
                    {productsData.map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))}
                </div>

                {/* View More Button (Optional) */}
                <div className="text-center mt-10">
                    <button className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-lg transition transform hover:scale-105">
                        আরো দেখুন
                    </button>
                </div>
            </div>
        </section>

    );
};

export default ProductSection;