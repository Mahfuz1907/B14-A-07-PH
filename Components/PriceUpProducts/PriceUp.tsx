import { TbTriangleFilled } from 'react-icons/tb';
import UpProducts from './UpProducts';


const PriceUp = () => {
    return (
        <div className='mx-5 lg:mx-40 flex flex-col justify-between items-start gap-3 mb-8'>
            <h1 className='text-[#1d271f] text-xl font-bold flex flex-row justify-start items-center gap-2'>
                <TbTriangleFilled className='text-red-600 text-sm' /> আজ দাম বেড়েছে
            </h1>
            <UpProducts />
        </div>
    );
};

export default PriceUp;