import Products from "./Products";
import ProductCount from "./ProductCount";
import SortingButton from "./SortingButton";


const AllProducts = () => {
    return (
        <div id="products" className='mx-5 lg:mx-40 flex flex-col scroll-mt-30 justify-between items-start gap-3 mb-18'>
            <div className="flex flex-row justify-between items-end w-full">
                {/* title */}
                <div className="flex flex-col justify-between items-start gap-3">
                    <h1 className='text-[#1d271f] text-xl font-bold'>
                        সব পণ্য
                    </h1>
                    {/* paragraph */}
                    <ProductCount />
                </div>
                {/* sorting button */}
                <SortingButton />
            </div>
            <Products />
        </div>
    );
};

export default AllProducts;