import React from "react";

// Import InstagramEmbed library
import { InstagramEmbed } from "react-social-media-embed";

const Instagram = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <InstagramEmbed
        url={
          "https://www.instagram.com/hairdaywithsar/?utm_source=ig_embed&amp;utm_campaign=loading"
        }
        width={550}
      />
    </div>
  );
};

export default Instagram;
