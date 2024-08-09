import React, { useEffect, useState } from "react";
import { IoMusicalNotesOutline } from "react-icons/io5";
import { BsClockHistory, BsCardChecklist } from "react-icons/bs";
import { AiOutlineSave } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [places, setPlaces] = useState([]);
  const [place, setPlace] = useState("");
  const [error, setError] = useState("");
  let place_Arr = [];

  const setPlaceLocal = () => {
    place_Arr = localStorage.getItem("places");
    if (place_Arr) {
      place_Arr = JSON.parse(place_Arr);
      if (place_Arr.includes(place)) {
        setError("Place already exists in your list");
        return;
      }
      place_Arr.push(place);
      localStorage.setItem("places", JSON.stringify(place_Arr));
    } else {
      localStorage.setItem("places", JSON.stringify([place]));
    }
    setPlaces(JSON.parse(localStorage.getItem("places")));
    navigate(`/${place}`);
  };

  const handleDeletePlace = (place) => {
    const todo = JSON.parse(localStorage.getItem(place + "/todos"));
    if (todo) {
      localStorage.removeItem(place + "/todos");
    }
    const time = JSON.parse(localStorage.getItem(place));
    if (time) {
      localStorage.removeItem(place);
    }
    const places = JSON.parse(localStorage.getItem("places"));
    const newPlaces = places.filter((p) => p !== place);
    localStorage.setItem("places", JSON.stringify(newPlaces));
    setPlaces(newPlaces);
  };

  const RenderPlaces = (places) => {
    return (
      <div className="flex gap-2 mt-5">
        <p className="text-gray-500 text-xs">Your Places :</p>
        {places.map((place, index) => {
          return (
            <div className="flex gap-2" key={index}>
              <Link
                to={`/${place}`}
                className="text-xs text-gray-500 hover:text-teal-500 cursor-pointer"
              >
                {place}
              </Link>
              <button
                id={place}
                className="text-red-500 text-xs"
                onClick={() => handleDeletePlace(place)}
              >
                <RxCross2 />
              </button>
            </div>
          );
        })}
      </div>
    );
  };

  useEffect(() => {
    localStorage.getItem("places")
      ? setPlaces(JSON.parse(localStorage.getItem("places")))
      : setPlaces([]);
  }, []);
  return (
    <div className=" mt-auto mb-auto">
      <div>
        <h1 className="text-4xl font-bold text-teal-500 ">Daily Tasks</h1>
        <p className="text-gray-500 mt-2">
          Create your perfect space to focus on your daily tasks.
        </p>
        <div className="flex gap-2 mt-5 items-center">
          <input
            type="text"
            onChange={(e) => setPlace(e.target.value, setError(""))}
            className=" p-2 pr-8 border border-gray-400 rounded focus:outline-none focus:border-teal-500 text-xs"
            placeholder="Enter your place name..."
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                setPlaceLocal();
              }
            }}
          />
          <button
            className="bg-teal-500 pl-5 pr-5 text-white p-2 rounded text-sm text-center"
            onClick={setPlaceLocal}
          >
            create
          </button>
        </div>
        <span className="text-red-500 text-xs">{error}</span>
        {places.length > 0 && RenderPlaces(places)}
        <div className="flex gap-2 mt-5 flex-col">
          <div className="flex gap-3 ">
            <IoMusicalNotesOutline className="text-teal-500" />
            <p className="text-xs text-gray-500">
              +5 different <span className=" font-bold">ambient sounds</span> +
              lofi + vaporwave
            </p>
          </div>
          <div className="flex gap-3 ">
            <BsClockHistory className="text-teal-500" />
            <p className="text-xs text-gray-500">
              Set up your perfect <span className=" font-bold">pomodoro </span>
              timer
            </p>
          </div>
          <div className="flex gap-3 ">
            <BsCardChecklist className="text-teal-500" />
            <p className="text-xs text-gray-500">
              Create, edit and delete an entire{" "}
              <span className=" font-bold"> to-do list </span>
            </p>
          </div>
          <div className="flex gap-3 ">
            <AiOutlineSave className="text-teal-500" />
            <p className="text-xs text-gray-500">
              All <span className=" font-bold">saved </span> under your place
              name for future use
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
