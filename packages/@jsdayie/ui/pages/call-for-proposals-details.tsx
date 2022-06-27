import React from "react";
import type { NextPage } from "next";
import { CfpDetails } from "@jsdayie/pages";
import { Seo } from "@jsdayie/components";
import { PATHS, seoValues } from "@jsdayie/config";

const CodeOfConduct: NextPage = () => {
  return (
    <>
      <Seo
        title={seoValues.title("Call for proposals details")}
        description={seoValues.description}
        mainColorHex={seoValues.mainColorHex}
        author={seoValues.author}
        keywords={seoValues.keywords}
        url={seoValues.url(PATHS.cfpDetails)}
        facebookThumbnailUrl={seoValues.facebookThumbnailUrl}
        twitterThumbnailUrl={seoValues.twitterThumbnailUrl}
        twitterUserName={seoValues.twitterUserName}
        GA_MEASUREMENT_ID={seoValues.GA_MEASUREMENT_ID}
      />
      <CfpDetails />
    </>
  );
};

export default CodeOfConduct;
