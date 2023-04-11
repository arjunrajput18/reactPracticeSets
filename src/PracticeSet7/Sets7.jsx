import React, { useEffect, useState } from "react";
import {
  fakeFetch,
  fakeFetch2,
  fakeFetch3,
  fakeFetch4,
  fakeFetch5,
} from "./Data";
import { WeatherApp } from "./Component/WeatherApp";
import { UserDetails } from "./Component/UserDetails2";
import MovieApp from "./Component/MovieApp";
import { UserList } from "./Component/UserList";
import { RandomQuotes } from "./Component/RandomQuotes";
export const Question1 = () => {
  // Create a React component that fetches weather data from an API endpoint using useEffect hook and displays the current temperature, humidity, and wind speed on the screen using the useState hook. Add a button which toggles between Celsius and Fahrenheit units for the temperature.
  const [showData, setShowData] = useState({});
  const [loading, setLoadind] = useState(false);
  const fakeData = async (url) => {
    try {
      const { status, data } = await fakeFetch(url);
      if (status === 200) {
        setShowData(data);
        setLoadind(true);
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fakeData("https://example.com/api/weather");
  }, []);

  const handleConversion = (temperature, buttonToggle) => {
    // (0°C × 9/5) + 32

    buttonToggle
      ? setShowData({ ...showData, temperature: (temperature * 9) / 5 + 32 })
      : setShowData({ ...showData, temperature: (5 / 9) * (temperature - 32) });
  };

  return (
    <>
      {loading ? (
        <WeatherApp showData={showData} handleConversion={handleConversion} />
      ) : (
        "loading..."
      )}
    </>
  );
};

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
  const [loading, setLoadind] = useState(false);

  const fakeData = async (url) => {
    try {
      const { status, data } = await fakeFetch3(url);
      if (status === 200) {
        setShowMovies(data);
        setLoadind(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fakeData("https://example.com/api/movies");
  }, []);

  return <>{loading ? <MovieApp showMovies={showMovies} /> : "loading..."}</>;
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
        // console.log("2")
      setLoading(true);
    //   console.log(6);
      const  randomQuote  = await fakeFetch5();
    //   console.log("r",randomQuote)
      setShowQuotes(randomQuote);
    //   console.log("3")
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

// console.log("4")
  useEffect(() => {
    console.log("7");
    fakeData();
  }, []);

  const changeHandler=()=>{
     fakeData();
  }
  
  return (
    <>{loading ?   "loading...":<RandomQuotes showQuotes={showQuotes}  changeHandler={changeHandler} />}
    {console.log("1")}
    </>
  );
};
