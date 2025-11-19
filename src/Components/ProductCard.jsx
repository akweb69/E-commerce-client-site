import React, { useState } from 'react';
import { FaHeart, FaShoppingCart, FaStar } from 'react-icons/fa';
import ProductModal from "./ProductModal";
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {

    const navigate = useNavigate()
    const [selectedSize, setSelectedSize] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const defaultProduct = { ...product };
    const p = defaultProduct;

    const currentSize = selectedSize || p.sizes?.[0];
    const displayPrice = p.isSizeAvailable ? currentSize?.price : p.price;

    const openDetailsPage = () => {
        navigate(`/product/${product._id}`);
    }

    return (
        <>
            <div className="group relative color-bg-1 rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden ">

                {/* Image + Info */}
                <div className="p-4">
                    <img
                        onClick={openDetailsPage}
                        src={p.image} className="w-full h-48 " />

                    <h3 className="font-semibold mt-2">{p.name}</h3>

                    <div className="flex items-center gap-3 mt-2">
                        <span className="text-xl text-orange-600 font-bold">৳{displayPrice}</span>
                    </div>

                    {/* Open Modal Button */}
                    <button
                        onClick={() => setShowModal(true)}
                        className="w-full mt-3 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg flex items-center justify-center gap-2"
                    >
                        <FaShoppingCart /> কার্টে যোগ করুন
                    </button>
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <ProductModal
                    product={p}
                    onClose={() => setShowModal(false)}
                    onAddToCart={(item) => {
                        console.log("Cart Item:", item);
                        setShowModal(false);
                    }}
                />
            )}
        </>
    );
};

export default ProductCard;
