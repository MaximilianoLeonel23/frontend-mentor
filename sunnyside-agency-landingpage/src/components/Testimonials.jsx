import React from "react";
import emily from "../../images/image-emily.jpg";
import jennie from "../../images/image-jennie.jpg";
import thomas from "../../images/image-thomas.jpg";
import Testimonial from "./Testimonial";
const Testimonials = () => {
  return (
    <section className="flex flex-col justify-center items-center container mx-auto py-16 sm:py-24 gap-16">
      <h3 className="font-fraunces font-black  text-neutral-blue uppercase tracking-[0.25rem]">
        Client testimonials
      </h3>
      <div className="flex flex-col sm:flex-row px-8 sm:px-20 gap-y-16">
        <Testimonial
          img={emily}
          description="We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit."
          job="Marketing Director"
          person="Emily R."
        />
        <Testimonial
          img={thomas}
          description="Sunnyside's enthusiasm coupled with their keen interest in our
            brand's success made it a satisfying and enjoyable experience."
          job="Chief Operating Officer."
          person="Thomas S."
        />
        <Testimonial
          img={jennie}
          description="Incredible end result! Our sales increased over 400% when we worked
          with Sunnyside. Highly recommended!"
          job="Business Owner"
          person="Jennie F."
        />
      </div>
    </section>
  );
};

export default Testimonials;
