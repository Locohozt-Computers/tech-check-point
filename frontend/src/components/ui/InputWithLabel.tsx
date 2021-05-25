import React, { CSSProperties } from 'react'
import styled from 'styled-components'

type Props = {
    type?: string;
    value?: string;
    placeholder: string;
    label: string;
    onChange: (e: any) => void;
    style?: CSSProperties;
}

const InputWithLabel: React.FC<Props> = ({
    type = 'text',
    placeholder,
    label,
    value = '',
    onChange,
    style
}) => {
    return (
        <div style={style}>
            <Label htmlFor="">{label}</Label>
            <Input type={type} value={value} placeholder={placeholder} onChange={onChange} />
        </div>
    )
}

const Label = styled.label`
    display: inline-block;
    font-size: 14px;
    margin-bottom: 5px;
`
const Input = styled.input`
    outline: none;
    border: 1px solid #dddddd;
    padding: 10px;
    width: 100%;
    border-radius: 4px;
`

export default InputWithLabel
