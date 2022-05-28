import * as React from "react";
import { MarkDown, Container } from "@jsdayie/components";

export function Accessibility() {
    const url="/info/accessibility.md";
    return (
        <Container>
            <MarkDown url={url} />
        </Container>
    );
}
