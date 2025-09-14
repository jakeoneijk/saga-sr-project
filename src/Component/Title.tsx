import { paperContent } from '../Config/PaperContent'
import arxiv from '../Source/image/ArXiv.png'
import github from '../Source/image/GitHub.png'
import Button from './Button'

const titleContainerStyle = {
  marginTop: '60px',
  marginLeft: '65px',
  marginRight: '65px',
}

const paperInfoStyle = {
  marginBottom: '15px',
  fontFamily: 'Trebuchet MS, sans-serif',
  fontWeight: 400,
  fontSize: '15px',
  color: '#5f6368',
}

const titleStyle = {
  textAlign: 'center' as 'center',
  fontFamily: 'Trebuchet MS, sans-serif',
  fontWeight: 600,
  fontSize: '35px',
}

const authorStyle = {
  paddingTop: '30px',
  textAlign: 'center' as 'center',
  fontFamily: 'Georgia, serif',
  fontWeight: 500,
  fontSize: '25px',
}

const affiliationStyle = {
  paddingTop: '30px',
  textAlign: 'center' as 'center',
  fontFamily: 'Arial, sans-serif',
  fontWeight: 100,
  fontSize: '21px',
}

const linkContainerStyle = {
  display: 'flex',
  justifyContent: 'center' as 'center',
  alignItems: 'center' as 'center',
  marginTop: '20px',
  marginLeft: '5px',
  marginRight: '5px',
}

const linkBankStyle = {
  display: 'flex',
  justifyContent: 'center' as 'center',
  alignItems: 'center' as 'center',
}

const hrStyle = {
  marginTop: '20px',
  marginLeft: '30px',
  marginRight: '30px',
}

const linkListStyle = {
  display: 'flex',
  justifyContent: 'center' as 'center',
  alignItems: 'center' as 'center',
}

function openLink(link: string) {
  window.open(link, '_blank')
}

export default function Title() {
  return (
    <div>
      <div style={titleContainerStyle}>
        <div style={paperInfoStyle}> {paperContent.paperInfo} </div>
        <div style={titleStyle}> {paperContent.title} </div>
      </div>
      <div style={authorStyle}>{paperContent.author}</div>
      <div style={affiliationStyle}>{paperContent.affiliation}</div>

      <div style={linkBankStyle}>
        <div style={linkContainerStyle}>
          <Button onClick={() => openLink(paperContent.contactLink)}>
            Contact
          </Button>
        </div>
        <div style={linkContainerStyle}>
          <Button
            onClick={
              paperContent.paperLink !== ''
                ? () => openLink(paperContent.paperLink)
                : () => {
                    alert('coming soon!')
                  }
            }
          >
            <img style={{ width: '30px', marginRight: '5px' }} src={arxiv} />
            Paper
          </Button>
        </div>
        <div style={linkContainerStyle}>
          <Button
            onClick={
              paperContent.codeLink !== ''
                ? () => openLink(paperContent.codeLink)
                : () => {
                    alert('coming soon!')
                  }
            }
          >
            <img style={{ width: '30px', marginRight: '5px' }} src={github} />
            Code
          </Button>
        </div>
      </div>
      <hr style={hrStyle} />
    </div>
  )
}
