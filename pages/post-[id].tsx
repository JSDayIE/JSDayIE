import { getBlogData } from "@jsdayie/pages/data";
import { BlogEntry } from "@jsdayie/pages/blog/blog_entry";
import { BlogEntryArray } from "@jsdayie/domain";
import { useRouter } from "next/router";

export interface BlogPageProps {
    data: BlogEntryArray | Error;
}

export async function getServerSideProps() {
    return {
        data: await getBlogData()
    }
  }

export const BlogPostPage: React.FC<BlogPageProps> = props => {
    const router = useRouter()
    const { id } = router.query
    return <BlogEntry id={id}/>;
}

export default BlogPostPage;