const services = [
  { icon: "⚡", name: "Electrician" },
  { icon: "🌀", name: "Fan / Cooler" },
  { icon: "❄️", name: "AC Technician" },
  { icon: "🧊", name: "Refrigerator" },
  { icon: "🔧", name: "Washing Machine" },
  { icon: "🔌", name: "Electrical Repair" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="text-2xl font-bold text-blue-600">
            ⚡ TechnicianHub
          </div>

          <div className="flex gap-3">
            <button className="rounded-lg px-4 py-2 text-slate-700 hover:bg-slate-100">
              Login
            </button>

            <button className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700">
              Register
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-blue-600">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center text-white">
          <h1 className="text-4xl font-bold md:text-5xl">
            अपने शहर में Technician खोजें
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-blue-100">
            Electrician, AC, Fridge, Cooler, Fan और दूसरे technicians
            आसानी से खोजें और service request भेजें।
          </p>

          <div className="mx-auto mt-8 flex max-w-2xl flex-col gap-3 rounded-xl bg-white p-3 shadow-lg md:flex-row">
            <input
              type="text"
              placeholder="📍 अपना शहर लिखें"
              className="flex-1 rounded-lg border px-4 py-3 text-slate-800 outline-none focus:border-blue-500"
            />

            <button className="rounded-lg bg-blue-600 px-7 py-3 font-semibold text-white hover:bg-blue-700">
              Technician खोजें
            </button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900">
            आपको किसकी जरूरत है?
          </h2>

          <p className="mt-3 text-slate-600">
            अपनी जरूरत के अनुसार service चुनें
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <button
              key={service.name}
              className="rounded-2xl border bg-white p-7 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="text-4xl">{service.icon}</div>

              <h3 className="mt-4 text-xl font-semibold text-slate-900">
                {service.name}
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                अपने आसपास available technician खोजें
              </p>
            </button>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl font-bold text-slate-900">
            कैसे काम करता है?
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-2xl">
                📍
              </div>
              <h3 className="mt-4 text-xl font-semibold">1. City चुनें</h3>
              <p className="mt-2 text-slate-600">
                जिस शहर में आपको service चाहिए उसे चुनें।
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-2xl">
                🔧
              </div>
              <h3 className="mt-4 text-xl font-semibold">2. Technician चुनें</h3>
              <p className="mt-2 text-slate-600">
                अपनी जरूरत के अनुसार technician खोजें।
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-2xl">
                ✅
              </div>
              <h3 className="mt-4 text-xl font-semibold">3. Service Request</h3>
              <p className="mt-2 text-slate-600">
                Technician को service request भेजें।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-8 text-center text-slate-300">
        <p>© 2026 TechnicianHub — Technician Service Platform</p>
      </footer>
    </main>
  );
}