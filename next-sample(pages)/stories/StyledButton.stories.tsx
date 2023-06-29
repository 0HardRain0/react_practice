import { useState } from 'react';
import { ComponentMeta } from "@storybook/react";
import { StyledButton } from "../components/StyledButton";
import { action } from "@storybook/addon-actions"

export default {
    title: 'StyledButton',
    component: StyledButton,
    argTypes: { onClick: { action: 'clicked '} },
} as ComponentMeta<typeof StyledButton>

export const Primary = (props) => {
    return (
        <StyledButton {...props} variant="primary">
            Primary
        </StyledButton>
    )
}

export const Success = (props) => {
    return (
        <StyledButton {...props} variant="success">
            Primary
        </StyledButton>
    )
}

export const Transparent = (props) => {
    return (
        <StyledButton {...props} variant="transparent">
            Transparent
        </StyledButton>
    )
}

const incrementAction = action('increment')

export const Increment = (props) => {
    const [count, setCount] = useState(0)
    const onClick = (e: React.MouseEvent) => {
        incrementAction(e, count)
        setCount((c) => c + 1)
    }

    return (
        <StyledButton {...props} variant='increment' onClick={onClick}>
            Count: {count}
        </StyledButton> 
    )
}