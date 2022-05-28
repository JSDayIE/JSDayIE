import * as React from "react";
import { MarkDown, Container } from "@jsdayie/components";

export function WhySponsor() {
    const url="/info/ten_reasons_to_sponsor.md";
    return (
        <Container>
            <MarkDown url={url} />
        </Container>
    );
}
