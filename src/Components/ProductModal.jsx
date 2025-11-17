import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";

const ProductModal = ({ product, onClose, onAddToCart }) => {
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);

    useEffect(() => {
        // Default size & color
        if (product?.sizes?.length > 0) {
            setSelectedSize(product.sizes[0]);
        }
        if (product?.colors?.length > 0) {
            setSelectedColor(product.colors[0]);
        }
    }, [product]);

    if (!product) return null;

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4">
            <div className="bg-white w-full max-w-md rounded-xl shadow-xl p-5 relative">

                {/* Close Button */}
                <button onClick={onClose} className="absolute top-3 right-3 text-gray-600 hover:text-red-500">
                    <FaTimes size={20} />
                </button>

                {/* Product Info */}
                <img src={product.image} alt={product.name} className="w-40 mx-auto mb-4 rounded" />

                <h2 className="text-xl font-bold text-gray-800 text-center">{product.name}</h2>

                {/* Price */}
                <p className="text-lg text-orange-600 font-bold mt-2 text-center">
                    ৳{selectedSize?.price || product.price}
                </p>

                {/* Sizes */}
                {product.isSizeAvailable && (
                    <div className="mt-4">
                        <p className="font-semibold mb-2 text-gray-700">Size নির্বাচন করুন:</p>
                        <div className="flex flex-wrap gap-2">
                            {product.sizes.map((sz) => (
                                <button
                                    key={sz.size}
                                    onClick={() => setSelectedSize(sz)}
                                    className={`px-3 py-1 rounded border 
                    ${selectedSize?.size === sz.size ? "bg-orange-500 text-white" : "bg-gray-100"}`}
                                >
                                    {sz.size}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Colors */}
                {product.colors && (
                    <div className="mt-4">
                        <p className="font-semibold mb-2 text-gray-700">Color নির্বাচন করুন:</p>
                        <div className="flex flex-wrap gap-2">
                            {product.colors.map((clr) => (
                                <button
                                    key={clr}
                                    onClick={() => setSelectedColor(clr)}
                                    className={`px-3 py-1 rounded border 
                    ${selectedColor === clr ? "bg-orange-500 text-white" : "bg-gray-100"}`}
                                >
                                    {clr}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Add to Cart */}
                <button
                    onClick={() =>
                        onAddToCart({
                            ...product,
                            selectedSize,
                            selectedColor,
                        })
                    }
                    className="w-full mt-5 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductModal;
