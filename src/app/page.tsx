'use client'

import HomePageView from "@/components/HomePageView/HomePageView";
import Login from "@/components/Login/Login";
import MoviesView from "@/components/Movies/MoviesView/MovieViews";
import ShowAll from "@/components/Movies/Shows/ShowsAll";
import OrderFoodPage from "@/components/OrderFood/OrderFood";
import OrderMovieTicket from "@/components/OrderPage/OrderMovieTicket";
import OrderResult from "@/components/OrderResult/OrderResult";
import Image from "next/image";

export default function Home() {
  return (
    // <div>
    //   WELCOME TO ALOHA CINEMA
    // </div>
    <HomePageView/>
    // <OrderResult />
    // <Login></Login>
    // <Login />
    // <MoviesView />
    // <ShowAll/>
    // < OrderMovieTicket />
    // <OrderFoodPage/>
  );
}
