import { getGalleryData, GalleryPage } from "@jsdayie/pages";
import { GalleryProps } from "@jsdayie/components";


export async function getServerSideProps() {
    return {
        data: await getGalleryData()
    }
  }


export default (props => <GalleryPage  />) as React.FC<GalleryProps>;