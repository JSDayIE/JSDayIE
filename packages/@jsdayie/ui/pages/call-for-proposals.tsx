import React from "react";
import type { NextPage } from "next";
import { Cfp } from "@jsdayie/pages";
import { Seo } from "@jsdayie/components";
import { PATHS, seoValues } from "@jsdayie/config";

const CodeOfConduct: NextPage = () => {
  return (
    <>
      <Seo
        title={seoValues.title("Call for proposals")}
        description={seoValues.description}
        mainColorHex={seoValues.mainColorHex}
        author={seoValues.author}
        keywords={seoValues.keywords}
        url={seoValues.url(PATHS.cfp)}
        facebookThumbnailUrl={seoValues.facebookThumbnailUrl}
        twitterThumbnailUrl={seoValues.twitterThumbnailUrl}
        twitterUserName={seoValues.twitterUserName}
        GA_MEASUREMENT_ID={seoValues.GA_MEASUREMENT_ID}
      />
      <Cfp />
    </>
  );
};

export default CodeOfConduct;
