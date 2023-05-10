import React from "react";
import cone from "../../images/desktop/image-gallery-cone.jpg";
import milkbottles from "../../images/desktop/image-gallery-milkbottles.jpg";
import orange from "../../images/desktop/image-gallery-orange.jpg";
import sugarcubes from "../../images/desktop/image-gallery-sugarcubes.jpg";
import coneMobile from "../../images/mobile/image-gallery-cone.jpg";
import milkbottlesMobile from "../../images/mobile/image-gallery-milkbottles.jpg";
import orangeMobile from "../../images/mobile/image-gallery-orange.jpg";
import sugarcubesMobile from "../../images/mobile/image-gallery-sugar-cubes.jpg";

const Gallery = () => {
  return (
    <section className="columns-2 sm:columns-4 gap-0">
      <img src={milkbottlesMobile} className="sm:hidden" />
      <img src={orangeMobile} className="sm:hidden" />
      <img src={coneMobile} className="sm:hidden" />
      <img src={sugarcubesMobile} className="sm:hidden" />
      <img src={milkbottles} className="hidden sm:block" />
      <img src={orange} className="hidden sm:block" />
      <img src={cone} className="hidden sm:block" />
      <img src={sugarcubes} className="hidden sm:block" />
    </section>
  );
};

export default Gallery;
