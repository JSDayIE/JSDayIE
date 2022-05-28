import React from "react";
import { MarkDown } from "@jsdayie/components"; 

interface InfoEntry {
    markdown: string;
}

export const InfoEntry: React.FC<InfoEntry> = props => {
    return <MarkDown markdown={props.markdown} />;
}
