import React from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

const colorStyles = css`
        ${({ theme, color }) => {
        const selected = theme.palette[color];
        return css`
                background: ${selected};
                &:hover {
                    background: ${lighten(0.1, selected)};
                }
                &:active {
                    background: ${darken(0.1, selected)};
                }
                ${props =>
                props.outline &&
                css`
                                color: ${selected};
                                background: none;
                                border: 1px solid ${selected};
                                &:hover {
                                    background: ${selected};
                                    color: white;
                                }
                            `}
                        `;
    }}
`;
const sizes = {
    large: {
        height: '3rem',
        fontSize: '1.25rem',
    },
    medium: {
        height: '2.25rem',
        fontSize: '1rem'
    },
    small: {
        height: '1.75rem',
        fontSize: '0.875rem'
    }
}
const sizeStyles = css`
        ${({ size }) => css`
            height: ${sizes[size].height};
            font-size: ${sizes[size].fontSize};
        `}
`;
const fullWidthStyle = css`
    ${props => {
        // console.log(props.fullWidth)
        return (
            props.fullWidth &&
            css`
                                width: 100%;
                                justify-content: center;
                                // margin-top: 1rem;
                                // margin-left: 0;
                                display: block;
                                & + & {
                                    margin-top: 1rem;
                                    // margin-left: 0;
                                }
                            `);
    }
    }
`;

const StyledButton = styled.button`
    
    /* 공통 스타일 */
    display: inline-flex;
    outline: none;
    border: none;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    padding-left: 1rem;
    padding-right: 1rem;
    align-items: center;

    /* 크기 */
    /* height: 2.25rem;
    font-size: 1rem; */
    ${sizeStyles};

    /* 색상 */
    ${colorStyles};

    /* 기타 */
    & + & {
        margin-left: 1rem;
    }
    ${fullWidthStyle}
`;

function Button({ children, ...rest }) {
    return (
        <StyledButton {...rest}>
            {children}
        </StyledButton>);
}
Button.defaultProps = {
    color: 'blue',
    size: 'medium'
};
export default Button;




/* import classNames from 'classnames';
import './Button.scss';

function Button({ children, size, color, outline, fullWidth, ...rest }) {
    return (
        <button
            className={classNames('Button', size, color, { outline, fullWidth })}
            {...rest}
        >
            {children}
        </button>
    );
}

export default Button;

Button.defaultProps = {
    size: 'medium',
    color: 'blue',
} */