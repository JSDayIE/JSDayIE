import React from "react";
import { withRouter, RouteProps } from "react-router-dom";
import { MarkDown } from "../../../lib/components";

interface BlogEntryInternalProps extends RouteProps {}

interface BlogEntryInternalState {}

export class BlogEntryInternal extends React.Component<BlogEntryInternalProps, BlogEntryInternalState> {
  public render() {
    const id = (this.props as any).match.params.id;
    const url = `/posts/${id}.md`;
    return <MarkDown url={url} />;
  }
}

export const BlogEntry = withRouter(props => <BlogEntryInternal {...props}/>)
