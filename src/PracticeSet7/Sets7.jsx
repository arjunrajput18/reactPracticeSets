import React, { useEffect, useState } from "react";
import {
  fakeFetch,
  fakeFetch10,
  fakeFetch2,
  fakeFetch3,
  fakeFetch4,
  fakeFetch5,
  fakeFetch6,
  fakeFetch7,
  fakeFetch8,
  fakeFetch9,
} from "./Data";
import { ShowWeatherInfo } from "./Component/WeatherApp";
import { UserDetails } from "./Component/UserDetails2";
import MovieApp from "./Component/MovieApp";
import { UserList } from "./Component/UserList";
import { RandomQuotes } from "./Component/RandomQuotes";
import { MovieApp2Q } from "./Component/MovieApp2Q";
import { ShowProduct } from "./Component/ShowProduct";
import { ButtonComponent } from "./Component/ButtonComponent";
import { ShowProduct3 } from "./Component/ShowProduct3";

export const Question1 = () => {
  const [weatherData, setWeatherData] = useState({});
  const [loading, setLoading] = useState(true)
  const getWeatherData = async (url) => {
    try {
      const { status, data } = await fakeFetch(url);
      status === 200 && setWeatherData(data)
    } catch (err) {
      console.log(err);
    }finally{
      setLoading(false)
    }
  }

  useEffect(() => {
    getWeatherData("https://example.com/api/weather")
  }, [])
  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {!loading && <ShowWeatherInfo weatherData={weatherData} />}

    </div>
  )
}

export const Question2 = () => {
  // Create a React component that fetches user data from an API endpoint using useEffect hook and displays the user's name, email, and phone number on the screen using the useState hook. Add a button which toggles the display of the user's address (street, suite, city, zipcode).
  const [showData, setShowData] = useState({});
  const fakeData = async (url) => {
    try {
      const { status, data } = await fakeFetch2(url);
      status === 200 && setShowData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fakeData("https://example.com/api/user");
  }, []);

  return (
    <>
      <UserDetails showData={showData} />
    </>
  );
};

export const Question3 = () => {
  // Create a React component that fetches a list of movies from an API endpoint using useEffect hook and displays the title, year, and rating of each movie on the screen using the useState hook. Add a dropdown which filters the movies by year. You can keep 5 dropdown values - 2005 to 2010.
  const [showMovies, setShowMovies] = useState([]);
  const [loading, setLoadind] = useState(true);
  const [errorData,setErrorData]=useState()

  const fakeData = async (url) => {
    try {
      const { status, data } = await fakeFetch3(url);
      if (status === 200) {
        setShowMovies(data);

      }
    } catch (error) {
      setErrorData(error);
    }finally{
      setLoadind(false);
    }
  };

  useEffect(() => {
    fakeData("https://example.com/api/movies");
  }, []);

  return <div>{loading ?<p>loading...</p>:errorData?<p>{errorData.message}</p> :<MovieApp showMovies={showMovies} /> } </div>;
};

export const Question4 = () => {
  // Create a React component that fetches a list of users from an API endpoint using useEffect hook and displays the name, email, and website of each user on the screen using the useState hook. Add a dropdown which filters the users by company name.
  const [showUsers, setShowUsers] = useState();
  const [loading, setLoadind] = useState(false);

  const fakeData = async (url) => {
    try {
      const { status, data } = await fakeFetch4(url);
      if (status === 200) {
        setLoadind(true);
        setShowUsers(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fakeData("https://example.com/api/users");
  }, []);

  return <>{loading ? <UserList showUsers={showUsers} /> : "loading..."}</>;
};

export const Question5 = () => {
  // Create a component that displays a random quote from an API using the useEffect and useState hooks. The component should fetch a new quote when the user clicks a button.
  const [showQuotes, setShowQuotes] = useState({});
  const [loading, setLoading] = useState(false);
  // const [changeHandler,setChangeHandler]=useState(true)
  const fakeData = async () => {
    try {
 
      setLoading(true);
        console.log(6);
      const randomQuote = await fakeFetch5();
        console.log("r",randomQuote)
      setShowQuotes(randomQuote);
        console.log("3")
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  console.log("4")
  useEffect(() => {
    console.log("7");
    fakeData();
  }, []);

  const changeHandler = () => {
    fakeData();
  };

  return (
    <>
      {loading ? (
        "loading..."
      ) : (
        <RandomQuotes showQuotes={showQuotes} changeHandler={changeHandler} />
      )}
      {console.log("1")}
    </>
  );
};

export const Question6 = () => {
  const [showMovie, setShowMovie] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState([]);
  const [loading, setLoading] = useState(false);

  const fakeData = async (url) => {
    try {
      const { status, data } = await fakeFetch6(url);
      if (status === 200) {
        setLoading(true);
        setShowMovie(data);
        setSelectedMovie(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fakeData("https://example.com/api/movies");
  }, []);

  const changeHandler = (e) => {
    const selectedVal = e.target.value;
    const filterData =
      selectedVal === "All"
        ? showMovie
        : showMovie.filter(({ genre }) => genre === selectedVal);
    setSelectedMovie(filterData);
  };

  return (
    <>
      <select onChange={changeHandler}>
        {["All", "Action", "Crime", "Drama", "Comedy", "Science Fiction"].map(
          (data) => (
            <option key={data}>{data}</option>
          )
        )}
      </select>
      <ul>
        {loading
          ? selectedMovie.map((movie, i) => <MovieApp2Q {...movie} key={i} />)
          : "loading..."}
      </ul>

      {/* {loading? <MovieApp2Q showMovie={showMovie} />:"loading..."} */}
    </>
  );
};

export const Question7 = () => {
  const [product, setProduct] = useState([]);
  const [sortPrice, setSortPrice] = useState([]);
  const fakeData = async (url) => {
    try {
      const {
        status,
        data: { products },
      } = await fakeFetch7(url);
      if (status === 200) {
        setProduct(products);
        setSortPrice(products);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fakeData("https://example.com/api/products");
  }, []);

  const handlerClick = () => {
    const a = [1, 2, 3].sort((a, b) => b - a);
    console.log(a);
    // sort  will change original array data{19,25,35} and sort filter value store{19,25,35} then both are equal it will not render.

    const newArrayOfProduct = [...product];
    const sortFilter = newArrayOfProduct.sort((a, b) => a.price - b.price);

    setSortPrice(sortFilter);
  };

  return (
    <>
      <h1>Products</h1>
      <button onClick={handlerClick}>Sort by Price</button>
      <ul>
        {sortPrice.map((data, i) => (
          <ShowProduct {...data} key={i} />
        ))}
      </ul>
    </>
  );
};

export const Question8 = () => {
  const [product, setProduct] = useState([]);
  const [sortedProduct, setSortedProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const fakeData = async (url) => {
    try {
      const {
        status,
        data: { products },
      } = await fakeFetch8(url);
      if (status === 200) {
        setProduct(products);
        setSortedProduct(products);
        setLoading(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fakeData("https://example.com/api/products");
  }, []);

  return (
    <>
      <ButtonComponent product={product} setSortedProduct={setSortedProduct} />

      <ul>
        {loading
          ? sortedProduct.map((data, i) => <ShowProduct {...data} key={i} />)
          : "loading..."}
      </ul>
    </>
  );
};

export const Question9 = () => {
  // const [productData,setProductData]=useState([])
  const [sortedRating, setSortedRating] = useState([]);

  const fakeData = async (url) => {
    try {
      const {
        status,
        data: { products },
      } = await fakeFetch9(url);
      if (status === 200) {
        // setProductData(products)
        setSortedRating([...products].sort((a, b) => b.rating - a.rating));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fakeData("https://example.com/api/products");
  }, []);

  return (
    <>
      <h1>Product</h1>
      <ul>
        {sortedRating.map((data, i) => (
          <ShowProduct3 {...data} key={i} />
        ))}
      </ul>
    </>
  );
};

export const Question10 = () => {
  const [productData, setProductData] = useState([]);
  const [inputData,setInputData]=useState()
  const fakeData = async (url) => {
    try {
      const {
        status,
        data: { products },
      } = await fakeFetch10(url);
      if (status === 200) {
        setProductData(products);
       
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fakeData("https://example.com/api/products");
  }, []);


  const HandlerChange=(e)=>{
    setInputData(e.target.value)
  }

  const filterSearchData=inputData?productData.filter(({name})=>name.toLowerCase().includes(inputData.toLowerCase())) :productData

  return (
    <>
      <h1>Products</h1>
      <input
        style={{ marginBottom: "2rem" }}
        placeholder="Search here...."
        onChange={HandlerChange}
        value={inputData}
      />
      <ul>
        {filterSearchData.map((data, i) => (
          <ShowProduct3 {...data} key={i} />
        ))}
      </ul>
    </>
  );
};
