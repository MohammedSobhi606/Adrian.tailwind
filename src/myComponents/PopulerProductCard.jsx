import { star } from "../assets/icons";

const PopulerProductCard = ({ name, imgURL, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} alt="dafafd" width={280} height={280} />
      <div className="mt-8 flex justify-start gap-2.5 ">
        <img src={star} alt="rate" width={28} height={28} />
        <p className="text-xl font-semibold font-montserrat leading-normal text-slate-gray">
          (4.5)
        </p>
      </div>
      <h3 className="mt-2 text-xl font-palanquin leading-normal font-semibold">
        {name}
      </h3>
      <p className="mt-2 text-xl font-montserrat font-semibold text-coral-red leading-normal ">
        {price}
      </p>
    </div>
  );
};

export default PopulerProductCard;
