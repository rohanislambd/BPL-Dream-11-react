import bannerImage from '../assets/banner-main.png'
const Banner = () => {
    return (
        <div className="container mx-auto min-h-100 bg-gradient-to-br from-[#131313] to-[#522f2f] my-7 rounded-xl flex justify-center items-center">
         <img src = {bannerImage} alt="" className='mx-auto w-50' />

        </div>
    );
};

export default Banner;