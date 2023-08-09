import { Content } from "@/components/Content";
import { Header } from "@/components/Header";
import React from "react";

const Favourite = () => {
  return (
    <div className=" bg-gray-100 h-screen">
      <Header />
      <Content title={"Favourite"} />
    </div>
  );
};

export default Favourite;
