import * as React from "react";
import { MarkDown, Container } from "@jsdayie/components";

export function WhyEmployee() {
    const url="/info/why_employee.md";
    return (
        <Container>
            <MarkDown url={url} />
        </Container>
    );
}
