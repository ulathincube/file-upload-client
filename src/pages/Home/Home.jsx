import styles from "./Home.module.css";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import { Link } from "react-router";
import Features from "../../components/Features";

function Home() {
  return (
    <>
      <Header />
      <Navigation />
      <Hero />
      <Features />
      <Footer />
    </>
  );
}

export default Home;
