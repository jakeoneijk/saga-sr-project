// src/Music.tsx
import AudioSpecTable from '../Component/AudioSpecTable'
import type { TheadMetaType } from '../Component/Type'

type Props = {
  audioType: 'Speech' | 'Music' | 'Sound Effect'
}

const theadMetaArray: TheadMetaType[] = [
  { name: '8 kHz (Input)', miniTopDescription: '', description: '', color: '#4D97EF' },
  { name: 'AudioSR [1]', miniTopDescription: '', description: '', color: '#C00909' },
  { name: 'FlashSR [2]', miniTopDescription: '', description: '', color: '#C00909' },
  { name: 'SAGA-SR', miniTopDescription: '', description: '(proposed)', color: '#EF7E4D' },
  { name: 'Ground-Truth', miniTopDescription: '', description: '', color: '#449948' },
]

const typeAbbrevMap = {
  'Speech': 's',
  'Music': 'm',
  'Sound Effect': 'f',
}
const totalWavFiles = import.meta.glob(`./audio/*.wav`, { eager: true, as: 'url' })
const totalImgFiles = import.meta.glob('./spec/*.png', { eager: true, as: 'url' })

function getFiles(audioType: 'Speech' | 'Music' | 'Sound Effect', fileType: 'wav' | 'png') {
  const prefix = `/${fileType === 'wav' ? 'audio' : 'spec'}/${typeAbbrevMap[audioType]}`;
  const files = fileType === 'wav' ? totalWavFiles : totalImgFiles;
  return Object.entries(files).filter(([path]) => path.includes(prefix))
    .sort(([aPath], [bPath]) => aPath.localeCompare(bPath, undefined, { numeric: true }))
    .map(([_, url]) => url)
}

function checkPrefix(urls: string[]): boolean {
  if (urls.length === 0) return false;

  const firstName = urls[0].split("/").pop() ?? "";
  const prefix = firstName.slice(0, 4);

  // check every file has the same prefix
  return urls.every(url => {
    const name = url.split("/").pop() ?? "";
    return name.startsWith(prefix);
  });
}

function checkGroup(urls: string[]): boolean {
  const EXPECTED_SUFFIXES = ['0_lr', '1_audiosr', '2_flashsr', '3_saga_sr', '4_hr'];

  if (urls.length !== EXPECTED_SUFFIXES.length) {
    return false;
  }

  return urls.every((url, i) => url.includes(EXPECTED_SUFFIXES[i]));
}

export default function AudioTable({ audioType }: Props) {
  const wavFiles = getFiles(audioType, 'wav')
  const imgFiles = getFiles(audioType, 'png')

  const tableAudio: string[][] = []
  for (let i = 0; i < wavFiles.length; i += 5) {
    const wavFilesGroup = wavFiles.slice(i, i + 5);
    const imgFilesGroup = imgFiles.slice(i, i + 5);
    if (!checkPrefix(wavFilesGroup) || !checkPrefix(imgFilesGroup)) throw new Error(`File naming prefix mismatch in ${audioType} files.`)
    if (!checkGroup(wavFilesGroup) || !checkGroup(imgFilesGroup)) throw new Error(`File naming group mismatch in ${audioType} files.`)
    tableAudio.push(wavFilesGroup, imgFilesGroup)
  }
  return (
    <AudioSpecTable
      tableName={`${audioType} (8 kHz to 44.1 kHz)`}
      theadMetaArray={theadMetaArray}
      tableAudio={tableAudio}
      audioWidth="180px"
    />
  )
}
