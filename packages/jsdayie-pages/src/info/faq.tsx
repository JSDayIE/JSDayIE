import * as React from "react";
import { MarkDown, Container } from "@jsdayie/components";

export function Faq() {
    const url="/info/faq.md";
    return (
        <Container>
            <MarkDown url={url} />
        </Container>
    );
}