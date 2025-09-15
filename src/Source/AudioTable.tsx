// src/Music.tsx
import AudioSpecTable from '../Component/AudioSpecTable'
import type { TheadMetaType } from '../Component/Type'

type MethodKey = 'lr' | 'NVSR' | 'AudioSR' | 'FlashSR' | 'hr'
type Kind = 'audio' | 'spec'

type SampleBucket = {
  audio: Partial<Record<MethodKey, string>>
  spec: Partial<Record<MethodKey, string>>
}

type Props = {
  audioType: 'Speech' | 'Music' | 'Sound Effect'
}

const theadMetaArray: TheadMetaType[] = [
  { name: '8 kHz (Input)', miniTopDescription: '', description: '', color: '#4D97EF' },
  { name: 'NVSR-ResUNet [1]', miniTopDescription: '', description: '', color: '#C00909' },
  { name: 'AudioSR [2]', miniTopDescription: '100 NFEs', description: '', color: '#C00909' },
  { name: 'FlashSR', miniTopDescription: '1 NFE', description: '(proposed)', color: '#EF7E4D' },
  { name: 'Ground-Truth', miniTopDescription: '', description: '', color: '#449948' },
]

const METHOD_ORDER: MethodKey[] = ['lr', 'NVSR', 'AudioSR', 'FlashSR', 'hr']

// Import all assets as URLs (Vite)
const wavFiles = import.meta.glob('./wav/music/*.wav', { eager: true, as: 'url' })
const imgFiles = import.meta.glob('./wav/music/*.png', { eager: true, as: 'url' })

function parseFileName(path: string): { idx: string; method: MethodKey | null; kind: Kind } {
  const file = path.split('/').pop()! // e.g. "07_3_AudioSR.wav"
  const [idx, /* variant */, ...rest] = file.split('_') // tolerate extra underscores in label
  const last = rest[rest.length - 1] // e.g. "AudioSR.wav" or "audio.png"
  const ext = last.split('.').pop()!.toLowerCase()

  const label = rest.join('_').toLowerCase() // e.g. "audiosr.wav" or "lr_audio.png"

  let method: MethodKey | null = null
  if (label.includes('lr')) method = 'lr'
  else if (label.includes('nvsr')) method = 'NVSR'
  else if (label.includes('audiosr')) method = 'AudioSR'
  else if (label.includes('flashsr')) method = 'FlashSR'
  else if (label.includes('hr')) method = 'hr'

  const kind: Kind = ext === 'png' ? 'spec' : 'audio' // <- literal union
  return { idx, method, kind }
}

const samples: Record<string, SampleBucket> = {}

function addEntry(path: string, url: string) {
  const { idx, method, kind } = parseFileName(path)
  if (!method) return
  const bucket = (samples[idx] ??= { audio: {}, spec: {} })
  // TS now knows 'kind' is 'audio' | 'spec'
  bucket[kind][method] = url
}

Object.entries(wavFiles).forEach(([path, url]) => addEntry(path, url as string))
Object.entries(imgFiles).forEach(([path, url]) => addEntry(path, url as string))

// Build rows [audioRow, specRow] per sample index
const sortedIdx = Object.keys(samples).sort((a, b) => Number(a) - Number(b))
const tableAudio: string[][] = []
for (const idx of sortedIdx) {
  const bucket = samples[idx]
  const audioRow = METHOD_ORDER.map((m) => bucket.audio[m] ?? '')
  const specRow  = METHOD_ORDER.map((m) => bucket.spec[m] ?? '')
  tableAudio.push(audioRow, specRow)
}

export default function AudioTable({ audioType }: Props) {
  return (
    <AudioSpecTable
      tableName={`${audioType} (8 kHz to 44.1 kHz)`}
      theadMetaArray={theadMetaArray}
      tableAudio={tableAudio}
      audioWidth="180px"
    />
  )
}
