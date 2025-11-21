import { useEffect } from "react";
import { useParams } from "react-router-dom";

const CetegoryProducts = () => {
    const params = useParams();
    const category = params.category;
    // scrooltotop -->
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-11/12 mx-auto border py-20">
            {category}
        </div>
    );
};

export default CetegoryProducts;