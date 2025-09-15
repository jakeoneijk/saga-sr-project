import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { paperContent } from '../Config/PaperContent';
import arxiv from '../Source/image/ArXiv.png';
import github from '../Source/image/GitHub.png';
import Button from './Button';
const titleContainerStyle = {
    marginTop: '60px',
    marginLeft: '65px',
    marginRight: '65px',
};
const paperInfoStyle = {
    marginBottom: '15px',
    fontFamily: 'Trebuchet MS, sans-serif',
    fontWeight: 400,
    fontSize: '15px',
    color: '#5f6368',
};
const titleStyle = {
    textAlign: 'center',
    fontFamily: 'Trebuchet MS, sans-serif',
    fontWeight: 600,
    fontSize: '35px',
};
const authorStyle = {
    paddingTop: '30px',
    textAlign: 'center',
    fontFamily: 'Georgia, serif',
    fontWeight: 500,
    fontSize: '25px',
};
const affiliationStyle = {
    paddingTop: '30px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    fontWeight: 100,
    fontSize: '21px',
};
const linkContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
    marginLeft: '5px',
    marginRight: '5px',
};
const linkBankStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};
const hrStyle = {
    marginTop: '20px',
    marginLeft: '30px',
    marginRight: '30px',
};
const linkListStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};
function openLink(link) {
    window.open(link, '_blank');
}
export default function Title() {
    return (_jsxs("div", { children: [_jsxs("div", { style: titleContainerStyle, children: [_jsxs("div", { style: paperInfoStyle, children: [" ", paperContent.paperInfo, " "] }), _jsxs("div", { style: titleStyle, children: [" ", paperContent.title, " "] })] }), _jsx("div", { style: authorStyle, children: paperContent.author }), _jsx("div", { style: affiliationStyle, children: paperContent.affiliation }), _jsxs("div", { style: linkBankStyle, children: [_jsx("div", { style: linkContainerStyle, children: _jsx(Button, { onClick: () => openLink(paperContent.contactLink), children: "Contact" }) }), _jsx("div", { style: linkContainerStyle, children: _jsxs(Button, { onClick: paperContent.paperLink !== ''
                                ? () => openLink(paperContent.paperLink)
                                : () => {
                                    alert('coming soon!');
                                }, children: [_jsx("img", { style: { width: '30px', marginRight: '5px' }, src: arxiv }), "Paper"] }) }), _jsx("div", { style: linkContainerStyle, children: _jsxs(Button, { onClick: paperContent.codeLink !== ''
                                ? () => openLink(paperContent.codeLink)
                                : () => {
                                    alert('coming soon!');
                                }, children: [_jsx("img", { style: { width: '30px', marginRight: '5px' }, src: github }), "Code"] }) })] }), _jsx("hr", { style: hrStyle })] }));
}
