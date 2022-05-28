import React from "react";
import { useRouter } from 'next/router';
import { MarkDown, Container } from "@jsdayie/components";

interface BlogEntryProps {
  id: string;
}

export const BlogEntry: React.FC<BlogEntryProps> = () => {
  const router = useRouter();
  const { id } = router.query;
  const url = `/posts/${id}.md`;
  return (
    <Container>
      <MarkDown url={url} />
    </Container>
  );
}