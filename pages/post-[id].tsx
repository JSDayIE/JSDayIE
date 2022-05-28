import { getBlogPostDate, BlogEntry } from "@jsdayie/pages";
import { useRouter } from "next/router";

export interface BlogPageProps {
    markdown: string | Error;
}

export async function getServerSideProps() {
    const router = useRouter();
    const { id } = router.query;
    const markdown = await getBlogPostDate(id);
    return {
        markdown: markdown
    }
  }

export const BlogPostPage: React.FC<BlogPageProps> = props => {
    const router = useRouter()
    const { id } = router.query
    return <BlogEntry markdown={props.markdown}/>;
}

export default BlogPostPage;