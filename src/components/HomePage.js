import React from "react";

import Footer from "./Footer";
import NavBar from "./NavBar";

import WhiteApple from "../images/apple-white-logo.png";
import BlackApple from "../images/apple-black-logo.png";

function HomePage() {
  return (
    <main className="home-page-container overflow-x-hidden">
      <NavBar />
      <header className="sales-header text-center p-3 text-sm flex items-center justify-center gap-1">
        <p>
          Get $200-$600 in credit toward iPhone 14 or iPhone 14 Pro when you
          trade in iPhone 11 or higher.{" "}
          <a
            href="https://www.apple.com/shop/buy-iphone"
            className="text-link-color hover:underline"
          >
            Shop iPhone
          </a>
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
          className="fill-link-color w-1"
        >
          <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
        </svg>
      </header>
      <section className="home-title">
        <img
          src="https://www.apple.com/v/home/az/images/heroes/iphone-14-pro/hero_iphone14pro_spring__9xo85pm6sbmm_large.jpg"
          alt="iPhone 14 Pro"
          className="max-w-max relative right-title-img"
        />
        <div className="home-title-text text-center text-white absolute left-title-text-left top-title-text-top flex flex-col gap-2">
          <h1 className="text-5xl font-semibold">iPhone 14 Pro</h1>
          <h2 className="text-2xl font-normal">Pro. Beyond.</h2>
        </div>
        <div className="home-title-links flex gap-12 text-xl absolute left-title-links-left top-title-links-top text-link-color">
          <a
            href="https://www.apple.com/iphone-14-pro/"
            className="hover:underline flex items-center gap-1"
          >
            Learn more{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              className="fill-link-color w-2"
            >
              <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
            </svg>
          </a>
          <a
            href="https://www.apple.com/shop/buy-iphone/iphone-14-pro"
            className="hover:underline flex items-center gap-1"
          >
            Buy{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              className="fill-link-color w-2"
            >
              <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
            </svg>
          </a>
        </div>
      </section>
      <section className="home-new-phone-card">
        <img
          src="https://www.apple.com/v/home/az/images/heroes/iphone-14/hero_iphone14_yellow__eun20sn4imi6_large.jpg"
          alt="iPhone 14 color variants"
          className="max-w-max relative right-new-iphone-right"
        />
        <div className="phone-card-text absolute left-new-iphone-text-left top-new-iphone-text-top text-center">
          <h1 className="text-5xl font-semibold">iPhone 14</h1>
          <h2 className="text-2xl">Wonderfull.</h2>
        </div>
        <div className="phone-card-links flex flex-row gap-12 text-xl absolute left-new-iphone-links-left top-new-iphone-links-top text-link-color">
          <a
            href="https://www.apple.com/iphone-14-pro/"
            className="hover:underline flex gap-1 items-center"
          >
            Learn more{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              className="fill-link-color w-2"
            >
              <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
            </svg>
          </a>
          <a
            href="https://www.apple.com/shop/buy-iphone/iphone-14-pro"
            className="hover:underline flex gap-1 items-center"
          >
            Buy{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              className="fill-link-color w-2"
            >
              <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
            </svg>
          </a>
        </div>
      </section>
      <section className="home-new-watch-card">
        <img
          src="https://www.apple.com/v/home/az/images/heroes/apple-watch-series-8/hero_apple_watch_series_8_spring__b1y8wb7xjc9y_large.jpg"
          alt="Apple Watch Series 8"
          className="max-w-max relative left-new-watch-left"
          id="watch-img"
        />
        <div className="watch-card-title-text text-center absolute top-new-watch-text-top left-new-watch-text-left">
          <div className="watch-card-title-header flex items-center justify-center text-white">
            <img
              src={WhiteApple}
              alt="Apple Logo"
              className="w-12 relative top-new-watch-logo"
            />
            <h1 className="font-bold text-5xl uppercase">Watch</h1>
          </div>
          <h3 className="text-watch-red font-medium text-lg uppercase tracking-widest">
            Series 8
          </h3>
          <h2 className="text-white text-2xl">A healthy leap ahead.</h2>
        </div>
        <div className="watch-card-links flex gap-12 absolute top-new-watch-links-top left-new-watch-links-left text-xl">
          <a
            href="https://www.apple.com/apple-watch-series-8/"
            className="text-link-color hover:underline flex gap-1"
          >
            Learn more{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              className="fill-link-color w-2"
            >
              <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
            </svg>
          </a>
          <a
            href="https://www.apple.com/shop/buy-watch/apple-watch"
            className="text-link-color hover:underline flex gap-1"
          >
            Buy{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              className="fill-link-color w-2"
            >
              <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
            </svg>
          </a>
        </div>
      </section>
      <section className="special-offer-card-container flex p-2.5 items-center gap-4">
        <div className="card-left-column flex flex-col gap-5">
          <div className="card">
            <img
              src="https://www.apple.com/v/home/az/images/promos/iphone-tradein/iphone_tradein_promo__d5au3rkw5kuq_large.jpg"
              alt="Trading iPhones"
              className="card-bg-img"
            />
            <div className="text-center card-text-light" id="trading-iphones">
              <div className="card-text-header flex items-center justify-center">
                <img src={BlackApple} alt="Apple Logo" className="w-6" />
                <h2 className="text-4xl font-semibold">Trade In</h2>
              </div>
              <p className="text-xl">Upgrade and save. It's that easy.</p>
            </div>
            <a
              href="https://www.apple.com/shop/trade-in"
              className="text-link-color flex gap-1 hover:underline"
              id="trading-link"
            >
              See what your device is worth{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="fill-link-color w-2"
              >
                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
              </svg>
            </a>
          </div>
          <div className="card">
            <img
              src="https://www.apple.com/v/home/az/images/promos/ipad/promo_ipad__fioegapg12qi_large.jpg"
              alt="iPad Variants"
              className="card-bg-img"
            />
            <div className="card-text-light text-center" id="ipad-text">
              <h2 className="text-4xl font-semibold">iPad</h2>
              <p className="text-xl">Lovable. Drawable. Magical.</p>
            </div>
            <div
              className="card-links text-link-color flex gap-10 text-lg"
              id="ipad-links"
            >
              <a
                href="https://www.apple.com/ipad-10.9/"
                className="hover:underline flex items-center gap-1"
              >
                Learn more{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  className="fill-link-color w-2"
                >
                  <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                </svg>
              </a>
              <a
                href="https://www.apple.com/shop/buy-ipad/ipad"
                className="hover:underline flex items-center gap-1"
              >
                Buy{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  className="fill-link-color w-2"
                >
                  <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="card">
            <img
              src="https://www.apple.com/v/home/az/images/promos/mothers-day-2023/iphone/promo__sw58lbodkmqq_large.jpg"
              alt="iPhone 14 with Flowers"
              className="card-bg-img"
            />
            <div className="card-text-light text-center" id="mother-text">
              <h2 className="text-4xl font-semibold">
                Take your pick of
                <br /> Mother's Day gifts.
              </h2>
              <p className="text-lg">
                So many ways to thank
                <br /> whoever you call Mom.
              </p>
            </div>
            <a
              href="https://www.apple.com/shop/gifts/mothers-day"
              className="text-link-color hover:underline flex gap-1 items-center"
              id="mother-link"
            >
              Shop the gift guide{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="fill-link-color w-2"
              >
                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="card-right-column flex flex-col gap-5">
          <div className="card">
            <img
              src="https://www.apple.com/v/home/az/images/promos/wwdc23-announce/promo_wwdc23__b68ptht3mro2_large.jpg"
              className="card-bg-img"
              alt="Apple Worldwide developers conference"
            />
            <div
              className="card-text-dark text-center text-white"
              id="dev-conference-text"
            >
              <div className="card-text-header flex items-center justify-center">
                <img src={WhiteApple} alt="Apple Logo" className="w-9" />
                <h2 className="text-4xl font-semibold">WWDC23</h2>
              </div>
              <p className="text-xl">Apple Worldwide Developers Conference.</p>
              <p className="text-xl">Join us online June 5-9</p>
            </div>
            <a
              href="https://developer.apple.com/wwdc23/"
              className="text-link-color flex items-center gap-1 hover:underline"
              id="dev-link"
            >
              Learn more{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="fill-link-color w-2"
              >
                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
              </svg>
            </a>
          </div>
          <div className="card">
            <img
              src="https://www.apple.com/v/home/az/images/promos/apple-small-business/promo__sw58lbodkmqq_large.jpg"
              className="card-bg-img"
              alt="Two people conversing"
            />
            <div
              className="card-text-dark text-center text-white"
              id="small-bus-text"
            >
              <h2 className="text-3xl font-semibold">
                Apple for
                <br /> Small Business
              </h2>
              <p className="text-md font-semibold">
                Easy. Powerful. Ready to run.
              </p>
            </div>
            <a
              href="https://www.apple.com/business/small-business/"
              className="flex gap-1 items-center hover:underline text-link-color"
              id="small-bus-link"
            >
              Learn more{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="fill-link-color w-2"
              >
                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
              </svg>
            </a>
          </div>
          <div className="card">
            <img
              src="https://www.apple.com/v/home/az/images/promos/apple-card/tile__cauwwcyyn9hy_large.jpg"
              className="card-bg-img"
              alt="Apple credit card"
            />
            <div className="card-text-dark text-center" id="apple-card-text">
              <div className="card-text-header flex items-center justify-center">
                <img src={BlackApple} alt="Apple Logo" className="w-6" />
                <h2 className="text-4xl font-semibold">Card</h2>
              </div>
              <p className="text-xl">
                Get up to 3% Daily Cash back
                <br /> with every purchase
              </p>
            </div>
            <div className="card-links text-link-color flex items-center gap-10" id="card-links">
              <a
                href="https://www.apple.com/apple-card/"
                className="hover:underline flex items-center gap-1"
              >
                Learn more{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  className="fill-link-color w-2"
                >
                  <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                </svg>
              </a>
              <a
                href="https://idmsa.apple.com/IDMSWebAuth/signin?appIdKey=c604dd608c66db70f63a3f3229173240bcf3c9bf815233bc0b50821cf9467e40&mandateSecurityUpgrade=true&path=%2Fapply%2Fapplication%3Fstart%3Dfalse&view=2&rv=5"
                className="hover:underline flex items-center gap-1"
              >
                Apply now{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  className="fill-link-color w-2"
                >
                  <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="home-carousel"></section>
      <Footer />
    </main>
  );
}

export default HomePage;
