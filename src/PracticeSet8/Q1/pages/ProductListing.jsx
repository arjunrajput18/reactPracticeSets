
import { ProductCard } from "../component/ProductCard";
// import { Cart2Context } from "../context/Cart2Context";

// import { WishlistProvider } from "../context/WishListContext";

export const ProductListing = ({ productData }) => {
    // const {clickHandler}=useContext(Cart2Context)

  return (
    <>
      <ul>
        {productData.map((data, i) => (
            <>
          <ProductCard {...data} key={i}  hideDetails />

        <hr/>
        </>))}

      </ul>

    </>
  );
};
