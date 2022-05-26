import React from "react";
import { Card, CardHeader, CardBody, CardFooter, ButtonLink } from "@jsdayie/components";

interface InfoEntryProps {
    title: string;
    summary: string;
    path: string;
    thumbnail: string;
}

export function InfoEntry(props: InfoEntryProps) {
    return (
        <Card>
            <CardHeader>
                <h3 className="blog_entry_preview_title">{props.title}</h3>
            </CardHeader>
            <CardBody>
                <img className="infoIcon" src={props.thumbnail}/>
                <br/>
                <br/>
                <p>{props.summary}</p>
            </CardBody>
            <CardFooter>
                <ButtonLink to={props.path}>Read more</ButtonLink>
            </CardFooter>
        </Card>
    );
}
