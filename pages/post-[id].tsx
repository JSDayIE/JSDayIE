import { getBlogPostData, BlogEntry } from "@jsdayie/pages";
import { useRouter } from "next/router";

export interface BlogPageProps {
    markdown: string | Error;
}

export async function getServerSideProps(): Promise<BlogPageProps> {
    const router = useRouter();
    const { id } = router.query;
    if (typeof id === "string") {
        const markdownOrError = await getBlogPostData(id);
        return {
            markdown: markdownOrError
        }
    } else {
        return {
            markdown: new Error('Missing ID')
        }
    }
}

export const BlogPostPage: React.FC<BlogPageProps> = props => {
    if (props.markdown instanceof Error) {
        return <>Error</>;
    } else {
        return <BlogEntry markdown={props.markdown} />;
    }
}

export default BlogPostPage;