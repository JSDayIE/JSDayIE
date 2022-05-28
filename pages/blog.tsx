import { getBlogData } from "@jsdayie/pages/data";
import { Blog } from "@jsdayie/pages/blog/blog";
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