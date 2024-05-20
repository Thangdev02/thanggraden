import React from "react";
import ReactImageGallery from "react-image-gallery";

const images = [
  {
    original:
      "https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2FMost_wanted_Anthurium_varieties_banner_afbcf99faf.jpg&w=3840&q=80",
    thumbnail:
      "https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2FMost_wanted_Anthurium_varieties_banner_afbcf99faf.jpg&w=3840&q=80",
    originalHeight: 400,
  },
  {
    original:
      "https://wallpapers.com/images/featured/monstera-aola49qc1eaprvfx.jpg",
    thumbnail:
      "https://wallpapers.com/images/featured/monstera-aola49qc1eaprvfx.jpg",
    originalHeight: 400,
  },

  {
    original:
      "https://thietkecanhquan.com.vn/wp-content/uploads/2022/06/Vuon-nhiet-doi-S-Construction-1.jpg",
    thumbnail:
      "https://thietkecanhquan.com.vn/wp-content/uploads/2022/06/Vuon-nhiet-doi-S-Construction-1.jpg",
    originalHeight: 400,
  },
];

class MyImageGallery extends React.Component {
  render() {
    return <ReactImageGallery autoPlay='true' items={images} />;
  }
}

export default MyImageGallery;
