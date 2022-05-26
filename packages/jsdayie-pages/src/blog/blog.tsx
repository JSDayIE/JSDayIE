import React from "react";
import { Spinner, Section, Card, CardHeader, CardBody, CardFooter, Container, ButtonLink, Fetchable } from "@jsdayie/components";
import { blogEntryArrayValidator, BlogEntryArray, IBlogEntry } from "@jsdayie/domain";
import { PATHS } from "@jsdayie/config";

interface BlogEntryPreviewProps {
  details: IBlogEntry;
}

function BlogEntryPreview(props: BlogEntryPreviewProps) {
  return (
    <Card>
      <CardHeader>
        <h3 className="blog_entry_preview_title">{props.details.title}</h3>
        <span>{new Date(Date.parse(props.details.date)).toDateString()}</span>
      </CardHeader>
      <CardBody>
        <img src={props.details.thumbnail}/>
        <br/>
        <br/>
        <p>{props.details.summary}</p>
      </CardBody>
      <CardFooter>
        <ButtonLink to={PATHS.blogEntry.replace(":id", props.details.id)}>Read more</ButtonLink>
      </CardFooter>
    </Card>
  );
}

interface BlogPostsProps {
  limit?: number;
}

export function BlogPosts(props: BlogPostsProps) {
  return (
    <Section title="Blog" size={1}>
      <p>Here you will find the latest news about JSDayIE</p>
      <Fetchable
          url="/data/blog_entries.json"
          validator={blogEntryArrayValidator}
          loading={() => <Spinner size={100}/>}
          error={(e: Error) => <div>Error: {e.message}</div>}
          success={(blogEntries: BlogEntryArray) => {

            const sortedEntries = blogEntries.filter(p => p.visible === true)
              .sort((a, b) => new Date(Date.parse(b.date)).getTime() - new Date(Date.parse(a.date)).getTime());

            const entries = props.limit !== undefined && sortedEntries.length > props.limit ?
              sortedEntries.slice(0, props.limit) : sortedEntries;

            return (
              <div className="row">
                {
                  entries.map((blogEntry, blogEntryIndex) => (
                    <div key={blogEntryIndex} className="col-md-6">
                      <BlogEntryPreview details={blogEntry} />
                    </div>
                  ))
                }
              </div>
            );
          }}
      />
    </Section>
  );
}

export function BlogPreview() {
  return (
    <Container>
      <BlogPosts limit={2} />
      <div className="center">
        <ButtonLink to={PATHS.blog}>Visit our blog</ButtonLink>
      </div>
    </Container>
  );
}

export class Blog extends React.Component {
  render() {
    return (
      <Container>
        <BlogPosts/>
      </Container>
    );
  }
}
