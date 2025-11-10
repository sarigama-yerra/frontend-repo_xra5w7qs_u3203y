import { useEffect, useRef, useState } from 'react'
import { Calendar, MapPin, Music2, Copy, Volume2, VolumeX } from 'lucide-react'
import Hero from './components/Hero'
import Section from './components/Section'
import Timeline from './components/Timeline'
import Footer from './components/Footer'

function App() {
  const [copied, setCopied] = useState(false)
  const [muted, setMuted] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    const tryPlay = () => {
      audio.volume = 0.5
      if (!muted) audio.play().catch(() => {})
    }
    // attempt autoplay when user interacts
    const onFirstInteraction = () => {
      tryPlay()
      window.removeEventListener('click', onFirstInteraction)
      window.removeEventListener('scroll', onFirstInteraction)
      window.removeEventListener('touchstart', onFirstInteraction)
    }
    window.addEventListener('click', onFirstInteraction, { once: true })
    window.addEventListener('scroll', onFirstInteraction, { once: true })
    window.addEventListener('touchstart', onFirstInteraction, { once: true })
    return () => {
      window.removeEventListener('click', onFirstInteraction)
      window.removeEventListener('scroll', onFirstInteraction)
      window.removeEventListener('touchstart', onFirstInteraction)
    }
  }, [muted])

  const copyRek = async () => {
    await navigator.clipboard.writeText('1234 5678 9012 - Aira Dimas')
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="min-h-screen bg-black text-zinc-100 selection:bg-yellow-500/20 selection:text-yellow-300">
      {/* Hero with Spline cover */}
      <Hero />

      {/* Sticky music control */}
      <button
        onClick={() => {
          const a = audioRef.current
          if (!a) return
          if (muted) {
            a.muted = false
            a.play().catch(() => {})
          } else {
            a.muted = true
            a.pause()
          }
          setMuted(!muted)
        }}
        className="fixed right-4 bottom-4 z-50 grid place-items-center w-12 h-12 rounded-full bg-zinc-900/80 border border-zinc-700/60 backdrop-blur-sm hover:bg-zinc-800/80 transition-colors"
        aria-label="Toggle music"
      >
        {muted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
      </button>

      {/* Hidden/inline audio */}
      <audio ref={audioRef} loop muted={muted} className="hidden">
        <source src="https://cdn.pixabay.com/download/audio/2023/01/31/audio_3f1cde6a12.mp3?filename=romantic-piano-ambient-136809.mp3" type="audio/mpeg" />
      </audio>

      {/* Couple intro */}
      <Section id="details" subtitle="Dengan memohon rahmat Allah SWT" title="Aira & Dimas">
        <p>Dengan segala kerendahan hati, kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri akad dan resepsi pernikahan kami.</p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
          <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-5">
            <h3 className="text-zinc-100 font-medium">Aira Nabila</h3>
            <p className="text-zinc-400 text-sm">Putri dari Bpk. Arman & Ibu Sari</p>
          </div>
          <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-5">
            <h3 className="text-zinc-100 font-medium">Dimas Pratama</h3>
            <p className="text-zinc-400 text-sm">Putra dari Bpk. Budi & Ibu Ratna</p>
          </div>
        </div>
      </Section>

      {/* Date & venue */}
      <Section id="acara" subtitle="Rangkaian Acara" title="Tanggal & Lokasi">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
          <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-5">
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-yellow-400" />
              <h3 className="font-medium">Akad Nikah</h3>
            </div>
            <p className="text-zinc-400 text-sm mt-1">Sabtu, 14 Desember 2025 • 09.00 WIB</p>
          </div>
          <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-5">
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-yellow-400" />
              <h3 className="font-medium">Resepsi</h3>
            </div>
            <p className="text-zinc-400 text-sm mt-1">Sabtu, 14 Desember 2025 • 11.00 - 14.00 WIB</p>
          </div>
          <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-5 sm:col-span-2">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-yellow-400" />
              <h3 className="font-medium">Lokasi</h3>
            </div>
            <p className="text-zinc-400 text-sm mt-1">Aula Sasmita • Jl. Merpati No. 12, Jakarta</p>
            <a
              href="https://maps.google.com?q=Aula%20Sasmita%20Jl.%20Merpati%2012%20Jakarta"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-4 rounded-full bg-zinc-900/70 hover:bg-zinc-800/80 text-zinc-100 border border-zinc-700/50 px-5 py-2 text-sm"
            >
              Buka Maps
            </a>
          </div>
        </div>
      </Section>

      {/* Timeline */}
      <Section id="timeline" subtitle="Susunan Acara" title="Timeline">
        <Timeline
          items={[
            { title: 'Kedatangan Tamu', time: '10.30 WIB' },
            { title: 'Akad Nikah', time: '11.00 WIB' },
            { title: 'Sesi Foto', time: '12.00 WIB' },
            { title: 'Resepsi & Jamuan', time: '12.30 WIB' },
            { title: 'Penutupan', time: '14.00 WIB' },
          ]}
        />
      </Section>

      {/* Gift section */}
      <Section id="gift" subtitle="Ucapan & Amplop Digital" title="Doa & Hadiah">
        <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-5 text-left">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm text-zinc-300">Nomor Rekening</p>
              <p className="font-medium text-zinc-100 mt-1">1234 5678 9012 - Aira Dimas</p>
              <p className="text-xs text-zinc-500 mt-1">Bank Monokrom</p>
            </div>
            <button onClick={copyRek} className="shrink-0 inline-flex items-center gap-2 rounded-full bg-zinc-900/70 hover:bg-zinc-800/80 border border-zinc-700/50 px-4 py-2 text-xs">
              <Copy className="w-4 h-4" /> Salin
            </button>
          </div>
          {copied && <p className="text-xs text-green-400 mt-3">Tersalin!</p>}
        </div>
      </Section>

      {/* Music mention */}
      <div className="px-6 pb-20">
        <div className="max-w-3xl mx-auto rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Music2 className="w-5 h-5 text-yellow-400" />
            <p className="text-sm text-zinc-300">Musik latar untuk suasana sinematik</p>
          </div>
          <span className="text-xs text-zinc-500">{muted ? 'Mati' : 'Hidup'}</span>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default App
