import { useState } from 'react'

const WA_NUMBER = '5491126037910'
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=Hola%20Urbans%20Caps!%20Me%20interesa%20ver%20la%20colecci%C3%B3n`

interface FormData {
  nombre: string
  queBusca: string
}

export default function NewsletterCTA() {
  const [form, setForm] = useState<FormData>({ nombre: '', queBusca: ''})
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!form.nombre.trim()) { setError('Ingresá tu nombre.'); return }
    if (!form.queBusca.trim()) { setError('Contanos qué buscás.'); return }
    setError('')

    const msg = encodeURIComponent(
      `Hola Urbans Caps! 👋\nNombre: ${form.nombre}\nQué busco: ${form.queBusca}`
    )
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank')

    setSubmitted(true)
    setForm({ nombre: '', queBusca: ''})
  }

  const inputStyle = { background: '#141414', border: '1px solid #2E2E2E' }
  const inputClass = 'w-full text-sm px-5 py-4 rounded text-white outline-none transition-colors'

  function focusBorder(e: React.FocusEvent<HTMLInputElement>) {
    e.currentTarget.style.borderColor = '#D4A017'
  }
  function blurBorder(e: React.FocusEvent<HTMLInputElement>) {
    e.currentTarget.style.borderColor = '#2E2E2E'
  }

  return (
    <section
      id="contacto"
      className="w-full py-20 px-5 sm:px-8 md:px-[5%] overflow-hidden text-center relative"
      style={{ background: '#0A0A0A' }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 rounded-full blur-[80px]"
        style={{
          width: 'min(600px, 90vw)',
          height: '300px',
          background: 'rgba(212,160,23,0.09)',
          transform: 'translate(-50%, -50%)',
        }}
      />

      <div className="relative max-w-xl mx-auto flex flex-col items-center gap-6">

        <p className="text-xs font-bold tracking-[4px] uppercase" style={{ color: '#D4A017' }}>Contacto</p>

        <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl leading-none text-white">
          SÉ EL PRIMERO<br />
          EN <span style={{ color: '#D4A017' }}>ENTERARTE.</span>
        </h2>

        <p className="text-sm leading-relaxed max-w-sm" style={{ color: '#A0A0A0' }}>
          Nuevos lanzamientos, drops exclusivos y ofertas antes que nadie. Sin spam. Solo lo que vale.
        </p>

        {submitted ? (
          <div
            className="rounded-lg px-8 py-6 font-bold text-base tracking-wide"
            style={{ background: 'rgba(212,160,23,0.1)', border: '1px solid rgba(212,160,23,0.4)', color: '#D4A017' }}
          >
            En breve serás contactado.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4 text-left">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold tracking-widest uppercase" style={{ color: '#A0A0A0' }}>
                Nombre
              </label>
              <input
                type="text"
                name="nombre"
                placeholder="Tu nombre"
                value={form.nombre}
                onChange={handleChange}
                className={inputClass}
                style={inputStyle}
                onFocus={focusBorder}
                onBlur={blurBorder}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold tracking-widest uppercase" style={{ color: '#A0A0A0' }}>
                Qué buscás
              </label>
              <input
                type="text"
                name="queBusca"
                placeholder="Ej: gorras snapback negras"
                value={form.queBusca}
                onChange={handleChange}
                className={inputClass}
                style={inputStyle}
                onFocus={focusBorder}
                onBlur={blurBorder}
              />
            </div>

            {error && <p className="text-xs pl-1" style={{ color: '#f87171' }}>{error}</p>}

            <button
              type="submit"
              className="w-full text-xs font-black tracking-widest uppercase px-7 py-4 rounded transition-all"
              style={{ background: '#D4A017', color: '#000' }}
            >
              Enviar
            </button>
          </form>
        )}

        <div className="w-full pt-6 mt-2 flex flex-col items-center gap-4" style={{ borderTop: '1px solid #2E2E2E' }}>
          <p className="text-sm" style={{ color: '#A0A0A0' }}>¿Preferís hablar directo?</p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-xs font-black tracking-widest uppercase px-8 py-4 rounded text-white transition-all"
            style={{ background: '#25D366' }}
          >
            <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Escribir por WhatsApp
          </a>
          <p className="text-xs" style={{ color: '#3A3A3A' }}>Respondemos en menos de 1 hora</p>
        </div>
      </div>
    </section>
  )
}
