import React from "react";
import { Helmet } from "react-helmet-async";
import { SEOProps, SEOService } from "../../../services/seoService";

const SEO: React.FC<SEOProps> = (props) => {
  const metaTags = SEOService.getMetaTags(props);
  const structuredDataScript = SEOService.getStructuredDataScript(props.structuredData);

  return (
    <Helmet>
      <title>{props.title}</title>

      {metaTags.map((tag, index) => {
        if (tag.name) return <meta key={index} name={tag.name} content={tag.content} />;
        if (tag.property) return <meta key={index} property={tag.property} content={tag.content} />;
        return null;
      })}

      {structuredDataScript && (
        <script type="application/ld+json">{structuredDataScript}</script>
      )}
    </Helmet>
  );
};

export default SEO;
