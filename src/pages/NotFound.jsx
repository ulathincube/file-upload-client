import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router";

function NotFound() {
  return (
    <>
      <Header />
      <section>
        <h1>This resource could not be found! Try Again</h1>
        <Link to="/">Go to Homepage</Link>
      </section>
      <Footer />
    </>
  );
}

export default NotFound;
