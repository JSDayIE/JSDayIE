import { getGalleryData, GalleryPage } from "@jsdayie/pages";
import { GalleryProps } from "@jsdayie/components";


export async function getServerSideProps(): Promise<GalleryProps | Error> {
  const data = await getGalleryData();
  if (data instanceof Error) {
    return data;
  } else {
    return {
      urls: data
    };
  }
}


export default (props => {
  if (props.urls instanceof Error) {
    return <>Error</>;
  } else {
    return <GalleryPage urls={props.urls} />;
  }
}) as React.FC<GalleryProps>;
