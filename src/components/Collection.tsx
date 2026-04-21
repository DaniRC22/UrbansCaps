import cap1 from '../assets/WhatsApp Image 2026-04-06 at 1.26.28 PM.jpeg'
import cap2 from '../assets/imagen 3.jpeg'
import cap3 from '../assets/WhatsApp Image 2026-04-06 .jpeg'

const WA_LINK = 'https://wa.me/5491126037910?text=Hola%20Urbans%20Caps!%20Me%20interesa%20ver%20la%20colecci%C3%B3n'

const products = [
  {
    img: cap1,
    tag: 'Nueva colección',
    name: 'Nike Snapback Pack',
    desc: 'Bordo y celeste. Snapback ajustable, talla única.',
  },
  {
    img: cap2,
    tag: 'Destacado',
    name: 'Nike SB Triangle Pink',
    desc: 'Cap premium con parche triangular bordado. Edición limitada.',
  },
  {
    img: cap3,
    tag: 'Más vendido',
    name: 'Nike SB Street Pack',
    desc: 'Verde oliva y negro. Clásico urbano para el día a día.',
  },
]

export default function Collection() {
  return (
    <section id="coleccion" className="w-full py-20 px-5 sm:px-8 md:px-[5%]" style={{ background: '#141414' }}>

      <div className="mb-10">
        <p className="text-xs font-bold tracking-[4px] uppercase mb-3" style={{ color: '#D4A017' }}>Productos</p>
        <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl leading-none text-white mb-3">
          LO MÁS NUEVO
        </h2>
        <p className="text-sm max-w-md" style={{ color: '#A0A0A0' }}>
          Selección de gorras premium con el estilo urbano que buscás. 100% originales.
        </p>
        <div className="mt-4 rounded-full" style={{ width: '44px', height: '3px', background: '#D4A017' }} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((p) => (
          <a
            key={p.name}
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-lg overflow-hidden block transition-all duration-300"
            style={{ background: '#1C1C1C', border: '1px solid #2E2E2E' }}
          >
            <div className="overflow-hidden" style={{ height: '280px' }}>
              <img
                src={p.img}
                alt={p.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                decoding="async"
                width={400}
                height={280}
              />
            </div>
            <div className="p-5 flex flex-col gap-1.5">
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#D4A017' }}>{p.tag}</span>
              <h3 className="font-extrabold text-base text-white">{p.name}</h3>
              <p className="text-xs leading-relaxed" style={{ color: '#A0A0A0' }}>{p.desc}</p>
              <div className="mt-3">
                <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#D4A017' }}>
                  Consultar precio →
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-10 text-center">
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-xs font-black tracking-widest uppercase px-10 py-4 rounded transition-all"
          style={{ border: '1px solid #D4A017', color: '#D4A017' }}
        >
          Ver toda la colección
        </a>
      </div>
    </section>
  )
}
