import * as React from "react";
import { MarkDown, Container } from "@jsdayie/components";

export function WhyAttend() {
    const url="/info/why_attend.md";
    return (
        <Container>
            <MarkDown url={url} />
        </Container>
    );
}
