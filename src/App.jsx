import React, { useMemo, useState } from "react";
  );
}

export default function KettlebellTrainingApp() {
  const [query, setQuery] = useState("");
  const [activeWeek, setActiveWeek] = useState(1);

  function clearWorkoutLog() {
    if (!window.confirm("Alle Logs löschen?")) return;
    Object.keys(localStorage).filter((key) => key.startsWith("kb-log-")).forEach((key) => localStorage.removeItem(key));
    window.location.reload();
  }

  const filteredDays = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return trainingDays;
    return trainingDays.filter((day) => [
      day.title, day.schedule, day.focus, ...day.warmup, day.finisher,
      ...day.blocks.flatMap((b) => [b.name, ...b.exercises.map((e) => e.name)])
    ].join(" ").toLowerCase().includes(q));
  }, [query]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-200 px-3 py-4 text-slate-950 sm:p-8">
      <div className="mx-auto max-w-5xl">
        <header className="mb-5 rounded-3xl bg-slate-950 p-5 text-white shadow-xl sm:mb-8 sm:p-8">
          <div className="mb-3 flex items-center gap-3">
            <div className="rounded-2xl bg-white/10 p-3 text-3xl">🏋️</div>
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-slate-300 sm:text-sm">Elite Kettlebell Hypertrophy</p>
              <h1 className="text-4xl font-black leading-none tracking-tight sm:text-5xl">4-Tage Trainingsplan</h1>
            </div>
          </div>
          <p className="text-base leading-relaxed text-slate-300 sm:max-w-3xl">40 Minuten pro Einheit. Ganzkörpertraining, komplexe Übungen, Arm- und Schulterfokus, Muskelaufbau, Athletik und Conditioning.</p>
        </header>

        <div className="sticky top-0 z-10 mb-4 rounded-3xl border border-slate-200 bg-white/95 p-3 shadow-lg backdrop-blur sm:static sm:mb-6 sm:p-4">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="🔎 Übung oder Tag suchen..."
            className="mb-3 h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-base font-bold outline-none focus:ring-2 focus:ring-slate-900"
          />
          <div className="flex gap-2 overflow-x-auto pb-1">
            {[1, 2, 3, 4, 5].map((week) => (
              <button key={week} onClick={() => setActiveWeek(week)} className={`shrink-0 rounded-2xl px-5 py-3 text-base font-black ${activeWeek === week ? "bg-slate-950 text-white" : "bg-slate-100 text-slate-700"}`}>
                Woche {week}
              </button>
            ))}
          </div>
        </div>

        <section className="mb-5 rounded-3xl bg-white p-5 shadow-lg">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-wide text-slate-500">🎯 Ziel</p>
              <h2 className="text-2xl font-black text-slate-950">Trainings-Tracking • Woche {activeWeek}</h2>
              <p className="mt-1 text-base text-slate-600">Pro Satz Gewicht, Wiederholungen und Notizen eintragen.</p>
            </div>
            <button onClick={clearWorkoutLog} className="rounded-2xl bg-slate-100 px-5 py-3 text-base font-black text-slate-800">Log löschen</button>
          </div>
        </section>

        <section className="grid gap-4">
          {filteredDays.map((day) => <TrainingDayCard key={day.day} item={day} activeWeek={activeWeek} />)}
        </section>

        <section className="mt-5 grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl bg-white p-5 shadow-lg">
            <h2 className="mb-3 text-2xl font-black">Progression</h2>
            <ul className="grid gap-3 text-base text-slate-700">
              {progressRules.map((rule) => <li key={rule}>✅ {rule}</li>)}
            </ul>
          </div>
          <div className="rounded-3xl bg-white p-5 shadow-lg">
            <h2 className="mb-3 text-2xl font-black">Kettlebells</h2>
            <p className="text-base text-slate-700">Leicht, mittel, schwer. Beispiel: 12 kg, 16 kg, 20–24 kg. Optional 28–32 kg für Swings und schwere Squats.</p>
          </div>
        </section>
      </div>
    </main>
  );
}
