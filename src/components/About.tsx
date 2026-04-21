import cap1 from '../assets/WhatsApp Image 2026-04-06 at 1.26.28 PM.jpeg'
import cap2 from '../assets/imagen 3.jpeg'

const values = [
  { icon: '🎯', title: 'Calidad real', text: 'Solo productos originales. Sin réplicas.' },
  { icon: '🔥', title: 'Estilo urbano', text: 'Seleccionadas para los que viven la calle.' },
  { icon: '⚡', title: 'Envío en 24hs', text: 'Despachamos rápido a todo el país.' },
  { icon: '💬', title: 'Atención directa', text: 'Hablás con nosotros, no con un bot.' },
]

export default function About() {
  return (
    <section id="nosotros" className="w-full py-20 px-5 sm:px-8 md:px-[5%]" style={{ background: '#141414' }}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">

        <div className="w-full">
          <p className="text-xs font-bold tracking-[4px] uppercase mb-4" style={{ color: '#D4A017' }}>Quiénes somos</p>
          <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl leading-none text-white mb-5">
            URBANS CAPS
          </h2>
          <p className="text-sm leading-relaxed mb-4" style={{ color: '#A0A0A0' }}>
            Nacimos para los que eligen su estilo sin pedir permiso.
            Cada gorra está pensada para durar, destacar y representar quién sos en la calle.
          </p>
          <p className="text-sm leading-relaxed" style={{ color: '#A0A0A0' }}>
            Somos una PYME argentina que arrancó con una sola convicción: vender solo lo que nosotros
            mismos usaríamos.
          </p>

          <div className="my-8 rounded-full" style={{ width: '44px', height: '3px', background: '#D4A017' }} />

          <div className="grid grid-cols-2 gap-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-lg p-4 transition-colors"
                style={{ background: '#1C1C1C', border: '1px solid #2E2E2E' }}
              >
                <div className="text-2xl mb-2">{v.icon}</div>
                <p className="font-extrabold text-xs mb-1 text-white">{v.title}</p>
                <p className="text-xs leading-relaxed" style={{ color: '#A0A0A0' }}>{v.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block w-full overflow-hidden rounded-lg relative" style={{ maxHeight: '560px' }}>
          <img
            src={cap1}
            alt="Colección Urbans Caps"
            className="w-full object-cover"
            style={{ height: '520px', border: '1px solid rgba(212,160,23,0.2)', borderRadius: '8px' }}
            loading="lazy"
            decoding="async"
            width={600}
            height={520}
          />
          <div
            className="absolute bottom-4 left-4 rounded-lg overflow-hidden"
            style={{
              width: '140px',
              height: '140px',
              border: '3px solid #141414',
              boxShadow: '0 0 0 1px rgba(212,160,23,0.3)',
            }}
          >
            <img src={cap2} alt="Detalle gorra" className="w-full h-full object-cover" loading="lazy" decoding="async" width={140} height={140} />
          </div>
        </div>
      </div>
    </section>
  )
}
