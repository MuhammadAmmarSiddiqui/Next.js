import { GrFacebook, GrTwitter } from "react-icons/gr";
import React from "react"
import Header1 from "./components/header1";
import AboutUs from "./components/aboutUs";
import Category from "./components/category";
import WhyUs from "./components/whyUs";
import Clients from "./components/clients";

export default function Home() {
  return (
    <div className="bg-black">
      <Header1 />
      <AboutUs />
      <Category />
      <WhyUs />
      <Clients />
    </div>
  );
}
