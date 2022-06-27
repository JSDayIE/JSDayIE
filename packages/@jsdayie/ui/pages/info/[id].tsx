import React from "react";
import {
  InfoEntryProps,
  getInfoData,
  getInfoEntryData,
  InfoEntry,
  Team,
} from "@jsdayie/pages";
import { GetStaticProps, GetStaticPaths } from "next";
import { Seo } from "@jsdayie/components";
import { PATHS, seoValues } from "@jsdayie/config";

interface ExtendedProps extends InfoEntryProps {
  id: string;
}

export interface InfoEntryPageProps {
  props: ExtendedProps;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getInfoData();
  if (data instanceof Error) {
    throw new Error(data.message);
  } else {
    return {
      paths: data.map((d) => ({
        params: {
          id: d.id,
        },
      })),
      fallback: false,
    };
  }
};

export const getStaticProps: GetStaticProps = async (
  context
): Promise<InfoEntryPageProps> => {
  if (context.params && context.params.id) {
    const id = context.params.id as string;
    if (id !== "team") {
      const markdown = await getInfoEntryData(id);
      if (markdown instanceof Error) {
        throw new Error(markdown.message);
      } else {
        return {
          props: {
            id,
            markdown,
          },
        };
      }
    } else {
      return {
        props: {
          id: "",
          markdown: "",
        },
      };
    }
  } else {
    throw new Error("Missing id");
  }
};

const InfoEntryPage: React.FC<ExtendedProps> = (props) => {
  const { markdown, id } = props;
  const lines = markdown.split(/\r?\n/);
  const header = lines.find((l) => {
    const clean = l.trim();
    return clean[0] === "#" && clean[1] !== "#";
  });
  const title = header
    ? header.split("#").join("").trim()
    : id.split("-").join(" ");
  if (markdown === "") {
    return (
      <>
        <Seo
          title={seoValues.title("Our team")}
          description={seoValues.description}
          mainColorHex={seoValues.mainColorHex}
          author={seoValues.author}
          keywords={seoValues.keywords}
          url={seoValues.url(`${PATHS.info}/${id}`)}
          facebookThumbnailUrl={seoValues.facebookThumbnailUrl}
          twitterThumbnailUrl={seoValues.twitterThumbnailUrl}
          twitterUserName={seoValues.twitterUserName}
          GA_MEASUREMENT_ID={seoValues.GA_MEASUREMENT_ID}
        />
        <Team />
      </>
    );
  }
  return (
    <>
      <Seo
        title={seoValues.title(title)}
        description={seoValues.description}
        mainColorHex={seoValues.mainColorHex}
        author={seoValues.author}
        keywords={seoValues.keywords}
        url={seoValues.url(`${PATHS.info}/${id}`)}
        facebookThumbnailUrl={seoValues.facebookThumbnailUrl}
        twitterThumbnailUrl={seoValues.twitterThumbnailUrl}
        twitterUserName={seoValues.twitterUserName}
        GA_MEASUREMENT_ID={seoValues.GA_MEASUREMENT_ID}
      />
      <InfoEntry markdown={markdown} />
    </>
  );
};

export default InfoEntryPage;
