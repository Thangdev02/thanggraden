import React from "react";
import "../styles/blog.css"; // Import CSS file for styling

function Blog() {
  return (
    <div className="blog-container">
      <div className="blog-image">
        <img
          src="https://plnts.com/_next/image?url=https%3A%2F%2Fplnts-api.ams3.digitaloceanspaces.com%2Fmain%2FMost_wanted_Anthurium_varieties_banner_afbcf99faf.jpg&w=3840&q=80"
          alt="Blog"
        />
      </div>
      <div className="blog-description">
        <h2>Anthurium: A Guide to the Flamingo Flower</h2>
        <p>
          Sure, here's a description about Anthurium: Anthurium, also known as
          flamingo flower or laceleaf, is a genus of plants native to the
          Americas. These tropical plants are prized for their striking flowers,
          which come in a variety of colors including red, pink, white, and
          orange. Anthurium flowers consist of a colorful, waxy spathe (the
          modified leaf) surrounding a central spike called a spadix. The spadix
          contains many tiny flowers. Anthurium plants are popular as
          houseplants due to their attractive foliage and long-lasting flowers.
          They thrive in warm, humid environments and prefer bright, indirect
          light. Anthuriums require regular watering, but it's important not to
          overwater them as they are susceptible to root rot. Additionally, they
          benefit from occasional fertilization during the growing season. These
          plants are often used as decorative accents in homes, offices, and
          public spaces due to their vibrant colors and unique appearance. In
          addition to their ornamental value, Anthurium plants have also been
          studied for their air-purifying properties, making them a popular
          choice for indoor environments. Overall, Anthuriums are beautiful and
          low-maintenance plants that bring a touch of tropical elegance to any
          space.
        </p>
        <a href="#">Read More</a>
      </div>
    </div>
  );
}

export default Blog;
