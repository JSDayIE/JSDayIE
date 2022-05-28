import * as React from "react";
import { MarkDown, Container } from "@jsdayie/components";

export function Travel() {
    const url="/info/travel.md";
    return (
        <Container>
            <MarkDown url={url} />
        </Container>
    );
}
