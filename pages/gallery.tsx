import { getGalleryData } from "@jsdayie/pages/data";
import { GalleryPage } from "@jsdayie/pages/gallery";
import { GalleryProps } from "@jsdayie/components";


export async function getServerSideProps() {
    return {
        data: await getGalleryData()
    }
  }


export default (props => <GalleryPage  />) as React.FC<GalleryProps>;