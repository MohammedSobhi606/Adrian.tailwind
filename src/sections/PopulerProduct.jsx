import { products } from "../constants";
import PopulerProductCard from "../myComponents/PopulerProductCard";

const PopulerProduct = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12 ">
      <div className="flex flex-col justify-start gap-5">
        <h1 className="text-4xl text-black font-palanquin font-bold ">
          Our <span className="text-coral-red">Populer</span> Products
        </h1>
        <p className="lg:max-w-lg font-montserrat text-gray-400 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          sequi incidunt ad eligendi sed dolore.
        </p>
      </div>
      <div className="mt-4 sm:gap-4 lg:gap-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <PopulerProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopulerProduct;
