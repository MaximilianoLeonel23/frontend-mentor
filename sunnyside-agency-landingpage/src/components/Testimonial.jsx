import React from "react";

const Testimonial = ({ img, person, job, description }) => {
  return (
    <article className="flex flex-col items-center justif sm:p-4 gap-8 sm:gap-16 text-center">
      <div className="h-16 w-16">
        <img src={img} className="rounded-full" />
      </div>
      <p className="font-barlow font-semibold text-neutral-dgblue leading-8">
        {description}
      </p>
      <div>
        <h4 className="font-fraunces font-extrabold text-neutral-ddblue mb-2">
          {person}
        </h4>
        <p className="font-barlow text-sm text-neutral-dblue">{job}</p>
      </div>
    </article>
  );
};

export default Testimonial;
