import { ProductCard } from "../component/ProductCard";

export const ProductListing = ({ productData }) => {
  return (
    <>
      <ul>
        {productData.map((data, i) => (
          <ProductCard {...data} key={i}  hideDetails />
        ))}
      </ul>
    </>
  );
};
