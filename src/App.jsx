import React, { useState } from "react";

const days = [
  {
    day: "Montag",
    title: "Kraft & Spannung",
    exercises: [
      "Double Kettlebell Front Squat — 4×6–8",
      "Weighted Pull-Up oder Renegade Row — 4×6–8",
      "Single Arm Clean & Push Press — 4×6 je Seite",
      "Turkish Get-Up — 3×1–2 je Seite",
      "Hammer Curl — 3×10",
      "Overhead Tricep Extension — 3×10",
      "Finisher: 5 Min EMOM — 15 Heavy Swings",
    ],
  },
  {
    day: "Dienstag",
    title: "Explosivität & Athletik",
    exercises: [
      "Kettlebell Snatch — 4×8 je Seite",
      "Front Rack Reverse Lunge — 4×8 je Bein",
      "Bottom-Up Press — 3×8",
      "Single Leg Romanian Deadlift — 3×8",
      "Kettlebell Lateral Raise — 3×12–15",
      "Finisher: 5 Min AMRAP — Burpees, Swings, Mountain Climbers",
    ],
  },
  {
    day: "Donnerstag",
    title: "Volumen & Stabilität",
    exercises: [
      "Kettlebell Thruster — 4×10",
      "Gorilla Row — 4×10",
      "Floor Press — 4×10",
      "Windmill — 3×8 je Seite",
      "Alternating Curl — 3×12",
      "Close-Grip Push-Up — 3×12–15",
      "Finisher: 5 Min — Push-ups + Swings",
    ],
  },
  {
    day: "Freitag",
    title: "Power Endurance",
    exercises: [
      "Double Kettlebell Clean Complex — 4×6",
      "Pull-Up oder High Pull — 4×8",
      "Walking Lunges — 3×10 je Bein",
      "Plank Drag — 3×10 je Seite",
      "Bottom-Up Carry oder Overhead Carry — 3×30–40 Sek",
      "Finisher: 5 Min — Swings + Burpees",
    ],
  },
];

function getLogKey(week, day, exercise, set) {
  return `kb-${week}-${day}-${exercise}-${set}`;
}

export default function App() {
  const [week, setWeek] = useState(1);
  const [openDay, setOpenDay] = useState(null);
  const [refresh, setRefresh] = useState(0);

  function saveValue(key, value) {
    localStorage.setItem(key, value);
    setRefresh(refresh + 1);
  }

  function getValue(key) {
    return localStorage.getItem(key) || "";
  }

  function clearLogs() {
    if (!confirm("Alle Einträge löschen?")) return;
    Object.keys(localStorage)
      .filter((key) => key.startsWith("kb-"))
      .forEach((key) => localStorage.removeItem(key));
    setRefresh(refresh + 1);
  }

  return (
    <main className="min-h-screen bg-slate-100 px-3 py-4 text-slate-950">
      <div className="mx-auto max-w-3xl">
        <header className="mb-4 rounded-3xl bg-slate-950 p-5 text-white shadow-xl">
          <p className="text-sm font-bold uppercase tracking-widest text-slate-300">
            Elite Kettlebell Hypertrophy
          </p>
          <h1 className="mt-2 text-4xl font-black leading-tight">
            4-Tage Trainingsplan
          </h1>
          <p className="mt-3 text-base text-slate-300">
            40 Minuten pro Einheit. Ganzkörper, Muskelaufbau, Arme, Schultern und Conditioning.
          </p>
        </header>

        <section className="sticky top-0 z-10 mb-4 rounded-3xl bg-white p-3 shadow-lg">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                onClick={() => setWeek(n)}
                className={`shrink-0 rounded-2xl px-5 py-3 text-base font-black ${
                  week === n ? "bg-slate-950 text-white" : "bg-slate-100 text-slate-700"
                }`}
              >
                Woche {n}
              </button>
            ))}
          </div>

          <div className="mt-3 flex items-center justify-between gap-3">
            <div>
              <h2 className="text-xl font-black">Tracking • Woche {week}</h2>
              <p className="text-sm text-slate-600">Gewicht & Reps pro Satz</p>
            </div>
            <button
              onClick={clearLogs}
              className="rounded-2xl bg-slate-100 px-4 py-3 text-sm font-bold"
            >
              Log löschen
            </button>
          </div>
        </section>

        <section className="grid gap-4">
          {days.map((d, dayIndex) => (
            <article key={d.day} className="overflow-hidden rounded-3xl bg-white shadow-lg">
              <button
                onClick={() => setOpenDay(openDay === dayIndex ? null : dayIndex)}
                className="w-full p-5 text-left"
              >
                <div className="mb-2 flex gap-2">
                  <span className="rounded-full bg-slate-950 px-3 py-1 text-sm font-bold text-white">
                    {d.day}
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-bold text-slate-700">
                    40 Min
                  </span>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-black">{d.title}</h2>
                    <p className="mt-1 text-slate-600">Ganzkörpertraining</p>
                  </div>
                  <span className="rounded-2xl bg-slate-100 px-4 py-3 text-xl font-black">
                    {openDay === dayIndex ? "⌃" : "⌄"}
                  </span>
                </div>
              </button>

              {openDay === dayIndex && (
                <div className="space-y-4 border-t bg-slate-50 p-4">
                  {d.exercises.map((exercise, exerciseIndex) => (
                    <div key={exercise} className="rounded-3xl bg-white p-4 shadow-sm">
                      <h3 className="text-xl font-black">{exercise}</h3>

                      <div className="mt-4 grid gap-3">
                        {[1, 2, 3, 4].map((set) => {
                          const weightKey = getLogKey(week, d.day, exerciseIndex, `${set}-weight`);
                          const repsKey = getLogKey(week, d.day, exerciseIndex, `${set}-reps`);

                          return (
                            <div key={set} className="rounded-2xl bg-slate-100 p-3">
                              <div className="mb-2 text-lg font-black">Satz {set}</div>

                              <div className="grid grid-cols-2 gap-3">
                                <input
                                  value={getValue(weightKey)}
                                  onChange={(e) => saveValue(weightKey, e.target.value)}
                                  placeholder="kg"
                                  inputMode="decimal"
                                  className="h-12 rounded-2xl border px-4 text-lg font-bold"
                                />

                                <input
                                  value={getValue(repsKey)}
                                  onChange={(e) => saveValue(repsKey, e.target.value)}
                                  placeholder="Reps"
                                  inputMode="numeric"
                                  className="h-12 rounded-2xl border px-4 text-lg font-bold"
                                />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </article>
          ))}
        </section>

        <section className="mt-5 rounded-3xl bg-white p-5 shadow-lg">
          <h2 className="text-2xl font-black">Progression</h2>
          <ul className="mt-3 grid gap-2 text-base text-slate-700">
            <li>✅ Kraft: 6–8 Wiederholungen</li>
            <li>✅ Volumen: 8–12 Wiederholungen</li>
            <li>✅ Wenn alle Sätze sauber sind: Gewicht erhöhen</li>
            <li>✅ Woche 6: Deload mit ca. 70 % Volumen</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
