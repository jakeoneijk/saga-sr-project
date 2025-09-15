import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
const buttonCommonStyle = {
    display: 'flex',
    width: '70px',
};
const buttonStyle = {
    justifyContent: 'center',
    alignItems: 'center',
    padding: '6px 14px',
    backgroundColor: '#fff',
    border: '1px solid #f8f9fa',
    borderRadius: '24px',
    cursor: 'pointer',
    fontFamily: 'Arial, sans-serif',
    fontSize: '13px',
    fontWeight: 550,
    boxShadow: 'rgba(0, 0, 0, .2) 0 3px 5px -1px,rgba(0, 0, 0, .14) 0 6px 10px 0,rgba(0, 0, 0, .12) 0 1px 18px 0',
    color: '#3c4043',
};
const buttonHoverStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '6px 14px',
    backgroundColor: '#3c4043',
    border: '1px solid #f8f9fa',
    borderRadius: '24px',
    cursor: 'pointer',
    fontFamily: 'Arial, sans-serif',
    fontSize: '13px',
    fontWeight: 550,
    boxShadow: 'rgba(0, 0, 0, .2) 0 3px 5px -1px,rgba(0, 0, 0, .14) 0 6px 10px 0,rgba(0, 0, 0, .12) 0 1px 18px 0',
    color: '#fff',
};
export default function Button(props) {
    const [isHovering, setIsHovering] = useState(false);
    return (_jsx("div", { onClick: props.onClick, style: {
            ...buttonCommonStyle,
            ...(isHovering ? buttonHoverStyle : buttonStyle),
        }, onMouseOver: () => setIsHovering(true), onMouseOut: () => setIsHovering(false), children: props.children }));
}
