"use client"
import React, { useEffect } from "react";
import Banner from "./Banner";

const BannerContainer = () => {
  const [banners, setBanners] = React.useState<Banner[] | null>(null);
  async function fetchBanners(): Promise<Banner[] | null> {
    try {
      const res = await fetch("/banners.json");
      if (!res.ok) {
        throw new Error(`Error Status: ${res.status}`);
      }
      const data = await res.json();
      console.log(data);
      return data.banners;
    } catch (error) {
      console.error("Unable to fetch data:", error);
      return null;
    }
  }
  useEffect(() => {
    const getBanners = async () => {
      const data = await fetchBanners();
      setBanners(data)
    }
    getBanners();
  }, [])

  return (
    <div className="banner-container container grid grid-cols-3 gap-4 h-1/4 mt-2">
      {banners?.map((banner : Banner) => (
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
