const points = [
  {
    icon: '😤',
    title: '¿Comprás online y te llega cualquier cosa?',
    desc: 'Foto perfecta, producto mediocre. Réplicas baratas que duran dos salidas. El mercado está lleno de eso.',
  },
  {
    icon: '🔍',
    title: '¿Pasás horas buscando y no encontrás lo que querés?',
    desc: 'Siempre lo mismo en todos lados. Sin variedad, sin identidad. Como si todos llevaran la misma gorra.',
  },
  {
    icon: '📦',
    title: '¿Tardaron 3 semanas y ni valió la pena?',
    desc: 'Envíos eternos, sin seguimiento, sin respuesta. La incertidumbre como parte del "servicio".',
  },
]

export default function PainPoints() {
  return (
    <section className="w-full py-20 px-5 sm:px-8 md:px-[5%]" style={{ background: '#0A0A0A' }}>

      <div className="text-center mb-12">
        <p className="text-xs font-bold tracking-[4px] uppercase mb-4" style={{ color: '#D4A017' }}>El problema</p>
        <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl leading-none text-white">
          YA SABEMOS<br />
          <span style={{ color: '#D4A017' }}>LO QUE TE PASA.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {points.map((p) => (
          <div
            key={p.title}
            className="rounded-lg p-6 transition-colors"
            style={{ background: '#141414', border: '1px solid #2E2E2E' }}
          >
            <div className="text-3xl mb-4">{p.icon}</div>
            <h3 className="font-bold text-sm mb-2 leading-snug text-white">{p.title}</h3>
            <p className="text-xs leading-relaxed" style={{ color: '#A0A0A0' }}>{p.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-sm" style={{ color: '#A0A0A0' }}>
          Por eso existe{' '}
          <span className="font-bold" style={{ color: '#D4A017' }}>Urbans Caps</span>.
        </p>
      </div>
    </section>
  )
}
