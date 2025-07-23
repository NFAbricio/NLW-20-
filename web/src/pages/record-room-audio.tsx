/** biome-ignore-all lint/suspicious/noConsole: <explanation> */
import { useState } from 'react'
import { Button } from '@/components/ui/button'

const isRecordingSupported =
  !!navigator.mediaDevices &&
  typeof navigator.mediaDevices.getUserMedia === 'function' &&
  typeof window.MediaRecorder === 'function'

export function RecordRoomAudio() {
  const [isRecording, setIsRecording] = useState(false)

  async function startRecording() {
    if (!isRecordingSupported) {
      alert('O seu navegador não suporta gravação')
      return
    }

    setIsRecording(true)

    const audio = await navigator.mediaDevices.getUserMedia({
      audio: {
        echoCancellation: true,
        noiseSuppression: true,
        sampleRate: 44_100,
      },
    })

    const recorder = new MediaRecorder(audio, {
      mimeType: 'audio/webm',
      audioBitsPerSecond: 64_000,
    })

    recorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        // biome-ignore lint/suspicious/noConsole: <explanation>
        console.log(event.data)
      }
    }

    recorder.onstart = () => {
      // biome-ignore lint/suspicious/noConsole: <explanation>
      console.log('Gravação iniciada!')
    }

    recorder.onstop = () => {
      console.log('Gravação encerrada')
    }
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-3">
      <Button onClick={startRecording}>Gravar áudio</Button>
      {isRecording ? <p>Gravando...</p> : <p>Pausado</p>}
    </div>
  )
}
