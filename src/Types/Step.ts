import React from 'react'

export interface Step {
    // reference: React.ElementRef<any>;
    description: string;
    activeStyle?: React.CSSProperties | string;
    setStyle: (style: React.CSSProperties | undefined) => void;
}