import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const nameStyle = {
    paddingTop: '50px',
    paddingLeft: '20%',
    textAlign: 'left',
    fontFamily: 'Georgia, serif',
    fontWeight: 550,
    fontSize: '25px',
};
const contentStyle = {
    paddingTop: '10px',
    paddingLeft: '20%',
    paddingRight: '20%',
    textAlign: 'justify',
    lineHeight: '150%',
    fontFamily: 'Arial, sans-serif',
    fontWeight: 100,
    fontSize: '15px',
    whiteSpace: 'pre-line',
};
export default function Section({ name, content }) {
    return (_jsxs("div", { style: { width: '100%' }, children: [_jsx("div", { style: nameStyle, children: name }), _jsx("div", { style: contentStyle, children: content })] }));
}
