import React from "react";
import {
  InfoEntryProps,
  getInfoData,
  getInfoEntryData,
  InfoEntry,
  Team,
} from "@jsdayie/pages";
import { GetStaticProps, GetStaticPaths } from "next";

export interface InfoEntryPageProps {
  props: InfoEntryProps;
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
    if (context.params.id !== "team") {
      const markdown = await getInfoEntryData(context.params.id as string);
      if (markdown instanceof Error) {
        throw new Error(markdown.message);
      } else {
        return {
          props: {
            markdown,
          },
        };
      }
    } else {
      return {
        props: {
          markdown: "",
        },
      };
    }
  } else {
    throw new Error("Missing id");
  }
};

const InfoEntryPage: React.FC<InfoEntryProps> = (props) => {
  const { markdown } = props;
  if (markdown === "") {
    return <Team />;
  }
  return <InfoEntry markdown={markdown} />;
};

export default InfoEntryPage;
