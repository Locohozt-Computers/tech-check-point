import React, { CSSProperties, FC } from 'react'
import styled from 'styled-components'

type Props = {
    type?: "button" | "submit" | "reset" | undefined;
    background?: string;
    label: string;
    onClick: (e: any) => void;
    style?: CSSProperties;
    width?: string;
}

const CustomButton: FC<Props> = ({
    label,
    background,
    onClick,
    type = 'button',
    style,
    width
}) => {
    return (
        <div style={style}>
            <Button onClick={onClick} width={width} background={background} type={type}>
                {label}
            </Button>
        </div>
    )
}

const Button = styled.button<{background?: string, width?: string}>`
    background: ${({background}) => background ? background : 'white'};
    outline: none;
    border: none;
    padding: 10px;
    width: ${({width}) => width ? width : '100%'};
    border-radius: 4px;
    color: ${({background}) => background ? 'white' : ''};
`

export default CustomButton
