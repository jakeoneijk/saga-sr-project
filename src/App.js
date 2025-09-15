import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { paperContent } from './Config/PaperContent';
import fig from './Source/image/Fig1.png';
import Title from './Component/Title';
import AudioTable from './Source/AudioTable';
import Section from './Component/Section';
const style = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
};
const iframeContainerStyle = {
    paddingTop: '50px',
};
function App() {
    return (_jsxs("div", { className: 'App', style: style, children: [_jsx(Title, {}), _jsx(Section, { name: 'Abstract', content: paperContent.abstract }), _jsx("div", { style: { margin: 'auto' }, children: _jsx("img", { style: { width: '400px', padding: '40px' }, src: fig }) }), _jsx(AudioTable, {}), _jsx(Section, { name: 'References', content: paperContent.reference
                    .map((item, index) => `[${index + 1}] ${item}`)
                    .join(' \n ') })] }));
}
export default App;
