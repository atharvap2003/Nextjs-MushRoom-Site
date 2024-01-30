import Product from "../components/Product";
import ProductSlider from "../components/ProductSlider";

const page = () => {
  return (
    <div className="mt-14 flex align-middle justify-center flex-col" >
    
<h1 class="mb-4 text-4xl mt-10 pt-10 text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl ">Discover Our Mushroom Delights</h1>
<p class="mb-6 text-lg text-center font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Indulge your senses with the exquisite selection of mushrooms from Hillrise Mushrooms. From the earthy richness of Oyster mushrooms and Button Mushrooms, our meticulously cultivated varieties promise culinary adventures like no other. Sourced at the peak of freshness, each mushroom embodies our commitment to quality, sustainability, and your gastronomic satisfaction. Explore our range and elevate your dishes with nature's finest.</p>

    <Product/>
    </div>
  );
};

export default page;
