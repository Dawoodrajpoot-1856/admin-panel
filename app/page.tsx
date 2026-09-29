"use client";
import Footer from "@/components/Home/Footer";
import Header from "@/components/Home/Header";
import React, { useState } from "react";
import { useDebounse } from "./hooks/useDebounce";
import InputData from "@/components/Home/InputData";
import Data from "@/components/Home/Data";
import Drop from "@/components/Home/Drop";
import Pagination from "@/components/Home/Pagination";

const Home = () => {
  const [search, setSearch] = useState("");
  const debounceSearch = useDebounse(search, 1000);
  return (
    <div>
      <Header />
      <main className="p-10">
        <h1 className="text-3xl font-bold">useDebounce Practice</h1>
        <input
          type="text"
          placeholder="Tyoe somthing"
          value={search}
          onChange={function (e) {
            setSearch(e.target.value);
          }}
        />
        <div className="mt-5">
          <p>
            <strong>Normal Value:</strong> {search}
          </p>

          <p className="mt-3">
            <strong>Debounced Value:</strong>
            {debounceSearch}
          </p>
        </div>
      </main>
      <InputData />
      <Data />
      <Drop />
      <Pagination />
      <Footer />
    </div>
  );
};

export default Home;
