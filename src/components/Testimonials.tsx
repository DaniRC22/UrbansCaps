const reviews = [
  {
    name: 'Matías R.',
    location: 'Buenos Aires',
    text: 'Compré una Nike SB y llegó en perfecto estado en 24 horas. Calidad increíble, exactamente lo que se veía en la foto.',
    stars: 5,
  },
  {
    name: 'Sol G.',
    location: 'Córdoba',
    text: 'Buscaba algo diferente y lo encontré acá. La atención fue rápida, me ayudaron a elegir el modelo. 100% recomendable.',
    stars: 5,
  },
  {
    name: 'Lucas M.',
    location: 'Rosario',
    text: 'La gorra es original, se nota la diferencia con las copias. Ya pedí la segunda. Envío rapidísimo.',
    stars: 5,
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4" viewBox="0 0 20 20" style={{ fill: '#D4A017' }}>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonios" className="w-full py-20 px-5 sm:px-8 md:px-[5%]" style={{ background: '#0A0A0A' }}>

      <div className="text-center mb-12">
        <p className="text-xs font-bold tracking-[4px] uppercase mb-4" style={{ color: '#D4A017' }}>Reviews</p>
        <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl leading-none text-white">
          LO QUE DICEN
          <span style={{ color: '#D4A017' }}> LOS CLIENTES</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {reviews.map((r) => (
          <div
            key={r.name}
            className="rounded-lg p-6 flex flex-col gap-4"
            style={{ background: '#141414', border: '1px solid #2E2E2E' }}
          >
            <Stars count={r.stars} />
            <p className="text-sm leading-relaxed text-white flex-1">"{r.text}"</p>
            <div className="pt-4" style={{ borderTop: '1px solid #2E2E2E' }}>
              <p className="font-bold text-sm text-white">{r.name}</p>
              <p className="text-xs tracking-widest uppercase mt-0.5" style={{ color: '#A0A0A0' }}>{r.location}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Trust badges */}
      <div className="mt-12 flex flex-wrap justify-center gap-6 sm:gap-10">
        {[
          { icon: '✅', label: 'Productos 100% originales' },
          { icon: '🚚', label: 'Envío a todo el país' },
          { icon: '💬', label: 'Soporte por WhatsApp' },
          { icon: '🔒', label: 'Compra segura' },
        ].map(({ icon, label }) => (
          <div key={label} className="flex items-center gap-2 text-xs font-medium" style={{ color: '#A0A0A0' }}>
            <span className="text-lg">{icon}</span>
            {label}
          </div>
        ))}
      </div>
    </section>
  )
}
