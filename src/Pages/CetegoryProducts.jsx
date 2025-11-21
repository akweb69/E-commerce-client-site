import { useParams } from "react-router-dom";
import Category from './../Sections/Category';

const CetegoryProducts = () => {
    const params = useParams();
    const category = params.category;

    return (
        <div className="w-11/12 mx-auto border py-20">
            {category}
        </div>
    );
};

export default CetegoryProducts;