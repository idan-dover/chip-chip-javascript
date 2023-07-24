import { Link } from "react-router-dom";
import Header from "../ui/Header";
import Footer from "../ui/Footer";

function Home() {
  return (
    <div className="grid h-screen w-screen overflow-scroll grid-rows-[auto_1fr_auto] dark:bg-gray-800 ">
      <Header />
      <section>
        <div className="flex flex-col items-center py-5 m-5">
          <h3 className="inline-block px-3 pb-8 text-2xl text-transparent bg-gradient-to-r from-amber-600 via-lime-500 to-amber-600 bg-clip-text">
            Everything is cheaper with chip chip
          </h3>
          <h1 className="flex flex-col items-center px-3 py-2 font-sans text-5xl font-bold ">
            <span className="px-3 py-2 text-gray-800 dark:text-gray-50">
              Get The Best{" "}
              <span className="px-1 uppercase transition-all duration-300 transform border-b-4 rounded-lg bg-amber-200 border-amber-400 hover:bg-lime-200 dark:text-gray-800 ">
                Coupons
              </span>
            </span>
            <span className="px-3 py-2 text-gray-800 dark:text-gray-50 ">
              Right{" "}
              <Link
                to="/login"
                className="pb-0 mb-0 uppercase transition-all duration-300 transform border-b-4 border-dashed border-amber-400 text-amber-500 hover:text-lime-500 hover:border-lime-400 "
              >
                Here
              </Link>
            </span>
          </h1>
        </div>

        <div className="flex items-center justify-around py-5 m-5 ">
          <img
            className="max-w-[30vw] h-auto max-h-[30vh]  px-6 transition-all duration-300  filter blur hover:blur-0"
            src="https://makewebbetter.com/wp-content/uploads/2020/07/eCommerce-digital-coupons-1024x647.jpg"
            alt="coupon image"
          />
          <img
            className="max-w-[30vw] h-auto max-h-[30vh]  px-6 transition-all duration-300  filter blur hover:blur-0"
            src="https://boostiny.com/wp-content/uploads/2022/07/Frame-24.jpg"
            alt="coupon image"
          />
          <img
            className="max-w-[30vw] h-auto max-h-[30vh]  px-6 transition-all duration-300  filter blur hover:blur-0"
            src="https://img.freepik.com/premium-vector/yellow-discount-coupon-set-half-price-10-20-50-70-80-off-offers-template-premium-special-price-coupons-best-promo-retail-pricing-vouchers_153791-510.jpg"
            alt="coupon image"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
