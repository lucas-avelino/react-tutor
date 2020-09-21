import React from 'react'
import { FunctionTypes } from '../Types';

interface CustomProps {
    stepStyle?: React.CSSProperties | string;
    registry: FunctionTypes.RegistryStep;
    description: string;
    position: number;
    // ComponentType: React.ComponentType;
}

export const withTutor = (Component: React.ComponentType) =>
    <P extends React.PropsWithChildren<React.PropsWithChildren<{ style?: React.CSSProperties }>>>(props: P & CustomProps) => {

        const [style, setStyle] = React.useState<React.CSSProperties | undefined>();

        React.useEffect(() => {
            props.registry({
                description: props.description,
                activeStyle: props.stepStyle,
                setStyle
            }, props.position);
        }, [])
        console.log(style)
        return (
            <div

            >
                <Component
                    {...props as P}
                    style={{
                        ...props.style,
                        ...(style || {})
                    }}
                // ref={ref}
                />
            </div>
        )
    }