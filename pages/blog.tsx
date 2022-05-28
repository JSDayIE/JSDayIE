import { getBlogData, Blog } from "@jsdayie/pages";
import { BlogEntryArray } from "@jsdayie/domain";

export interface BlogPageProps {
    data: BlogEntryArray | Error;
}

export async function getServerSideProps() {
    return {
        data: await getBlogData()
    }
  }

export default (props => <Blog data={props.data} />) as React.FC<BlogPageProps>;