import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const tableNameStyle = {
    paddingTop: '40px',
    paddingBottom: '10px',
    textAlign: 'left',
    fontFamily: 'Georgia, serif',
    fontWeight: 550,
    fontSize: '22px',
};
const thStyle = {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    paddingLeft: '5px',
    paddingRight: '5px',
};
const thNameStyle = {
    fontWeight: 700,
    fontSize: '18px',
};
const tdMidStyle = {
    textAlign: 'center',
};
const tdStyle = {
    textAlign: 'center',
    borderBottom: '3px solid #DEDEDE',
};
const MiniTopDescriptionStyle = {
    fontSize: '13px',
};
export default function AudioSpecTable({ tableName, theadMetaArray, tableAudio, audioWidth, }) {
    return (_jsxs("div", { style: { margin: 'auto' }, children: [_jsx("div", { style: tableNameStyle, children: tableName }), _jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { style: thStyle, children: _jsx("div", { style: thNameStyle, children: "index" }) }), theadMetaArray.map((theadMeta) => {
                            return (_jsxs("th", { style: { ...thStyle, ...{ color: theadMeta.color } }, children: [_jsx("div", { style: thNameStyle, children: theadMeta.name }), _jsx("div", { style: MiniTopDescriptionStyle, children: theadMeta.miniTopDescription }), _jsx("div", { children: theadMeta.description })] }));
                        })] }) }), _jsx("tbody", { children: tableAudio.map((rowAudio, index) => {
                    return index % 2 === 0 ? (_jsxs("tr", { children: [_jsx("td", { style: tdMidStyle, children: index / 2 }), rowAudio.map((tableData) => {
                                return (_jsx("td", { style: tdMidStyle, children: _jsx("audio", { controls: true, style: { width: audioWidth }, children: _jsx("source", { src: tableData, type: 'audio/wav' }) }) }));
                            })] })) : (_jsxs("tr", { children: [_jsx("td", { style: tdStyle, children: '' }), rowAudio.map((tableData) => {
                                return (_jsx("td", { style: tdStyle, children: _jsx("img", { src: tableData, style: { width: audioWidth }, alt: 'spectrogram' }) }));
                            })] }));
                }) })] }));
}
