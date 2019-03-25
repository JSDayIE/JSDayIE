import React from "react";
import * as showdown from "showdown";
import { Spinner } from "../spinner/spinner";
import { Container } from "../container/container";

interface MarkDownToHTMLProps {
  text: string;
}

export function MarkDownToHTML(props: MarkDownToHTMLProps) {
  const converter = new showdown.Converter();
  const htmlString = converter.makeHtml(props.text);
  return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
}

interface MarkDownProps {
    url: string;
}

interface MarkDownState {
  markdown: string | null;
}

export class MarkDown extends React.Component<MarkDownProps, MarkDownState> {
  public constructor(props: MarkDownProps) {
    super(props);
    this.state = {
      markdown: null
    };
  }
  public componentWillMount() {
    (async () => {
      const url = this.props.url;
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
          <MarkDownToHTML text={this.state.markdown}/>
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
