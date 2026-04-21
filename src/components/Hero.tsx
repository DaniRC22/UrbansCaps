import heroImg from '../assets/WhatsApp Image 2026-04-06 .jpeg'

const WA_LINK = 'https://wa.me/5491126037910?text=Hola%20Urbans%20Caps!%20Me%20interesa%20ver%20la%20colecci%C3%B3n'

export default function Hero() {
  return (
    <section
      id="hero"
      style={{ paddingTop: '72px' }}
      className="relative w-full overflow-hidden bg-[#0A0A0A]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 right-0 w-64 h-64 md:w-[500px] md:h-[500px] rounded-full blur-[100px]"
        style={{ background: 'rgba(212,160,23,0.12)' }}
      />

      <div className="relative z-10 flex flex-col md:grid md:grid-cols-2 items-center gap-8 md:gap-12 px-5 sm:px-8 md:px-[5%] py-12 md:py-0 md:min-h-screen">

        <div className="flex flex-col gap-6 w-full">

          <span className="inline-flex items-center gap-2 w-fit border text-[10px] font-bold tracking-[3px] uppercase px-3 py-1.5 rounded-sm"
            style={{ background: 'rgba(212,160,23,0.08)', borderColor: 'rgba(212,160,23,0.35)', color: '#D4A017' }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#D4A017' }} />
            Nueva colección 2026
          </span>

          <h1 className="font-bebas text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-none text-white">
            CAPS QUE<br />
            <span style={{ color: '#D4A017' }}>HABLAN</span><br />
            POR VOS.
          </h1>

          <p className="text-sm sm:text-base leading-relaxed max-w-sm" style={{ color: '#A0A0A0' }}>
            Gorras urbanas con identidad propia. Calidad real, estilo auténtico.
            Las piezas que hacen la diferencia en la calle.
          </p>

          <div className="flex flex-wrap gap-3 items-center">
            <a
              href="#coleccion"
              className="text-xs font-black tracking-widest uppercase px-7 py-3.5 rounded transition-all"
              style={{ background: '#D4A017', color: '#000' }}
            >
              Ver colección
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold tracking-widest uppercase px-7 py-3.5 rounded border transition-all text-white"
              style={{ borderColor: '#2E2E2E' }}
            >
              Consultar stock
            </a>
          </div>

          <div className="flex gap-6 sm:gap-10 pt-4 mt-2" style={{ borderTop: '1px solid #2E2E2E' }}>
            {[
              { n: '100%', l: 'Originales' },
              { n: '24hs', l: 'Envío' },
              { n: '+50', l: 'Modelos' },
            ].map(({ n, l }) => (
              <div key={l} className="flex flex-col gap-0.5">
                <span className="font-bebas text-3xl sm:text-4xl" style={{ color: '#D4A017' }}>{n}</span>
                <span className="text-[10px] font-semibold tracking-widest uppercase" style={{ color: '#A0A0A0' }}>{l}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full flex justify-center md:justify-end">
          <div
            className="relative rounded-lg overflow-hidden w-full max-w-sm md:max-w-md"
            style={{ border: '1px solid rgba(212,160,23,0.2)' }}
          >
            <img
              src={heroImg}
              alt="Gorras urbanas Urbans Caps"
              className="w-full object-cover"
              style={{ height: 'clamp(260px, 50vw, 580px)' }}
              fetchPriority="high"
              decoding="async"
              width={600}
              height={580}
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 50%)' }}
            />
          </div>
        </div>

      </div>
    </section>
  )
}
