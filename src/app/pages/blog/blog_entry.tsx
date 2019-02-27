import React from "react";
import * as showdown from "showdown";
import { withRouter, RouteProps } from "react-router-dom";
import { Spinner, Container } from "../../../lib/components";

interface MarkDownProps {
  text: string;
}

function MarkDown(props: MarkDownProps) {
  const converter = new showdown.Converter();
  const htmlString = converter.makeHtml(props.text);
  return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
}

interface BlogEntryInternalProps extends RouteProps {}

interface BlogEntryInternalState {
  markdown: string | null;
}

export class BlogEntryInternal extends React.Component<BlogEntryInternalProps, BlogEntryInternalState> {
  public constructor(props: BlogEntryInternalProps) {
    super(props);
    this.state = {
      markdown: null
    };
  }
  public componentWillMount() {
    (async () => {
      const id = (this.props as any).match.params.id;
      const url = `/posts/${id}.md`;
      const markdown = await this._fetchPost(url);
      this.setState({ markdown: markdown });
    })();
  }
  public render() {
    if (this.state.markdown === null) {
      return <Container>
        <Spinner size={100}/>
      </Container>;
    } else {
      return <Container>
        <div className="markdown">
          <MarkDown text={this.state.markdown}/>
        </div>
      </Container>;
    }
  }
  private async _fetchPost(url: string) {
    const response = await fetch(url);
    const markdown = await response.text();
    return markdown;
  }
}

export const BlogEntry = withRouter(props => <BlogEntryInternal {...props}/>)
