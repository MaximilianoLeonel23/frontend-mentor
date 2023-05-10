import React from "react";
import transformImg from "../../images/desktop/image-transform.jpg";
import standoutImg from "../../images/desktop/image-stand-out.jpg";
import transformImgMobile from "../../images/mobile/image-transform.jpg";
import standoutImgMobile from "../../images/mobile/image-stand-out.jpg";
import Testimonials from "./Testimonials";
import Gallery from "./Gallery";

const Main = () => {
  return (
    <main>
      <div className="columns-1 sm:columns-2 gap-0 flex flex-col-reverse sm:block">
        <section className="flex flex-col text-center sm:text-left py-24 px-8 sm:p-32 gap-8">
          <h2 className="text-5xl font-fraunces font-black text-neutral-ddblue">
            Transform your brand
          </h2>
          <p className="font-barlow font-semibold text-neutral-dblue leading-8">
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <div>
            <a
              href="/"
              className="relative font-fraunces text-neutral-ddblue font-black uppercase tracking-wide underlining-yellow"
            >
              Learn more
            </a>
          </div>
        </section>
        <section>
          <img src={transformImg} className="hidden sm:block" />
          <img src={transformImgMobile} className="sm:hidden" />
        </section>
      </div>
      <div className="columns-1 sm:columns-2 gap-0">
        <section>
          <img src={standoutImg} className="hidden sm:block" />
          <img src={standoutImgMobile} className="sm:hidden" />
        </section>
        <section className="flex flex-col text-center sm:text-left py-24 px-8 sm:p-32 gap-8">
          <h2 className="text-5xl font-fraunces font-black text-neutral-ddblue">
            Stand out to the right audience
          </h2>
          <p className="font-barlow font-semibold text-neutral-dblue leading-8">
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we'll build and
            extend your brand in digital places.
          </p>
          <div>
            <a
              href="/"
              className="relative font-fraunces text-neutral-ddblue font-black uppercase tracking-wide underlining-red"
            >
              Learn more
            </a>
          </div>
        </section>
      </div>
      <div className="columns-1 sm:columns-2 gap-0">
        <section className="bg-graphic-design-mobile sm:bg-graphic-design bg-center h-screen sm:h-[80vh] bg-cover bg-no-repeat flex items-end">
          <div className="text-center sm:w-1/2 mx-auto py-16 px-8 sm:px-0">
            <h3 className="font-fraunces font-black text-primary-cyan text-2xl mb-4">
              Graphic Design
            </h3>
            <p className="font-barlow font-semibold text-primary-cyan leading-relaxed">
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients'
              attention
            </p>
          </div>
        </section>
        <section className="bg-photography-mobile sm:bg-photography bg-center h-screen sm:h-[80vh] bg-cover bg-no-repeat flex items-end">
          <div className="text-center sm:w-1/2 mx-auto py-16 px-8 sm:px-0">
            <h3 className="font-fraunces font-black text-primary-blue text-2xl mb-4">
              Photograhpy
            </h3>
            <p className="font-barlow font-semibold text-primary-blue leading-relaxed">
              Increase your credibility by getting the most stunning
              high-quality photos that improve your business image
            </p>
          </div>
        </section>
      </div>
      <Testimonials />
      <Gallery />
    </main>
  );
};

export default Main;
