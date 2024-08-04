import React from "react";
import Banner from "./Banner";

const BannerContainer = async () => {

  const response = await fetch("http://localhost:8000/banners");
  const banners: Banner[] = await response.json();

  return (
    <div className="banner-container container grid grid-cols-3 gap-4 h-1/4 mt-2">
      {banners.map((banner : Banner) => (
        <Banner
          key={banner.id}
          id={banner.id}
          title={banner.title}
          description={banner.description}
          images={banner.images}
          templateId={banner.templateId}
          buttonText={banner.buttonText}
        />
      ))}
    </div>
  );
};

export default BannerContainer;
