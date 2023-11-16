import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import HomePage from "../components/homePage";

function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <HomePage className="flex-1" />
      <Footer />
    </div>
  );
}

export default Home;
