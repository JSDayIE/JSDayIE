import * as React from "react";
import { MarkDown, Container } from "@jsdayie/components";

export function Services() {
    const url="/info/services.md";
    return (
        <Container>
            <MarkDown url={url} />
        </Container>
    );
}