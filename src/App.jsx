import React, { useState } from "react";

const trainingDays = [
  {
    day: "Montag",
    title: "Kraft & Spannung",
    focus: "Ganzkörper • Arme schwer",
    blocks: [
      {
        name: "Supersatz A",
        exercises: [
          "Double Kettlebell Front Squat — 4×6–8",
          "Weighted Pull-Up oder Renegade Row — 4×6–8",
        ],
      },
      {
        name: "Supersatz B",
        exercises: [
          "Single Arm Clean & Push Press — 4×6 je Seite",
          "Turkish Get-Up — 3×1–2 je Seite",
        ],
      },
      {
        name: "Arm-Finisher",
        exercises: [
          "Hammer Curl — 3×10",
          "Overhead Tricep Extension — 3×10",
        ],
      },
    ],
  },

  {
    day: "Dienstag",
    title: "Explosivität & Athletik",
    focus: "Snatch • Schulter-Finisher",
    blocks: [
      {
        name: "Power Block",
        exercises: [
          "Kettlebell Snatch — 4×8",
          "Front Rack Reverse Lunge — 4×8",
        ],
      },
      {
        name: "Stabilität",
        exercises: [
          "Bottom-Up Press — 3×8",
          "Single Leg Romanian Deadlift — 3×8",
        ],
      },
      {
        name: "Shoulder Burn",
        exercises: [
          "Kettlebell Lateral Raise — 3×15",
          "Band Pull Apart — 3×20",
        ],
      },
    ],
  },

  {
    day: "Donnerstag",
    title: "Volumen & Stabilität",
    focus: "Hypertrophie • Arm-Pump",
    blocks: [
      {
        name: "Supersatz A",
        exercises: [
          "Kettlebell Thruster — 4×10",
          "Gorilla Row — 4×10",
        ],
      },
      {
        name: "Supersatz B",
        exercises: [
          "Floor Press — 4×10",
          "Windmill — 3×8",
        ],
      },
      {
        name: "Arm-Fokus",
        exercises: [
          "Alternating Curl — 3×12",
          "Close-Grip Push-Up — 3×15",
        ],
      },
    ],
  },

  {
    day: "Freitag",
    title: "Power Endurance",
    focus: "Carry • Conditioning",
    blocks: [
      {
        name: "Complex Block",
        exercises: [
          "Double KB Clean Complex — 4×6",
          "Pull-Up oder High Pull — 4×8",
        ],
      },
      {
        name: "Core + Stabilität",
        exercises: [
          "Walking Lunges — 3×10",
          "Plank Drag — 3×10",
        ],
      },
      {
        name: "Carry Finisher",
        exercises: [
          "Bottom-Up Carry — 3×40 Sek",
          "Heavy Swings — 5 Min EMOM",
        ],
      },
    ],
  },
];

function storageKey(week, path) {
  return `kb-${week}-${path}`;
}

export default function App() {
  const [week, setWeek] = useState(1);
  const [openDay, setOpenDay] = useState(null);
  const [, refresh] = useState(0);

  function save(key, value) {
    localStorage.setItem(key, value);
    refresh((v) => v + 1);
  }

  function load(key) {
    return localStorage.getItem(key) || "";
  }

  function clearLogs() {
    if (!confirm("Alle Logs löschen?")) return;

    Object.keys(localStorage)
      .filter((k) => k.startsWith("kb-"))
      .forEach((k) => localStorage.removeItem(k));

    refresh((v) => v + 1);
  }

  return (
    <main className="min-h-screen bg-slate-100 p-3 text-slate-950">
      <div className="mx-auto max-w-3xl">

        <header className="rounded-3xl bg-slate-950 p-5 text-white shadow-xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
            Elite Kettlebell Hypertrophy
          </p>

          <h1 className="mt-2 text-3xl font-black leading-tight">
            4-Tage Trainingsplan
          </h1>

          <p className="mt-3 text-sm text-slate-300">
            Ganzkörper • Muskelaufbau • Arme • Schultern • Conditioning
          </p>
        </header>

        <section className="sticky top-0 z-10 mt-4 rounded-3xl bg-white p-4 shadow-lg">
          <div className="flex gap-2 overflow-x-auto">
            {[1, 2, 3, 4, 5].map((w) => (
              <button
                key={w}
                onClick={() => setWeek(w)}
                className={`rounded-2xl px-5 py-3 text-base font-black whitespace-nowrap ${
                  week === w
                    ? "bg-slate-950 text-white"
                    : "bg-slate-100 text-slate-700"
                }`}
              >
                Woche {w}
              </button>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-black">
                Tracking • Woche {week}
              </h2>

              <p className="text-sm text-slate-500">
                Gewicht & Reps speichern
              </p>
            </div>

            <button
              onClick={clearLogs}
              className="rounded-2xl bg-slate-100 px-4 py-3 text-sm font-bold"
            >
              Log löschen
            </button>
          </div>
        </section>

        <section className="mt-4 grid gap-4">
          {trainingDays.map((day, dayIndex) => (
            <article
              key={day.day}
              className="overflow-hidden rounded-3xl bg-white shadow-lg"
            >
              <button
                onClick={() =>
                  setOpenDay(openDay === dayIndex ? null : dayIndex)
                }
                className="w-full p-5 text-left"
              >
                <div className="mb-2 flex gap-2">
                  <span className="rounded-full bg-slate-950 px-3 py-1 text-sm font-bold text-white">
                    {day.day}
                  </span>

                  <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-bold text-slate-700">
                    40 Min
                  </span>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h2 className="text-2xl font-black">
                      {day.title}
                    </h2>

                    <p className="mt-1 text-slate-600">
                      {day.focus}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-100 px-4 py-3 text-xl font-black">
                    {openDay === dayIndex ? "⌃" : "⌄"}
                  </div>
                </div>
              </button>

              {openDay === dayIndex && (
                <div className="space-y-4 border-t bg-slate-50 p-4">

                  {day.blocks.map((block, blockIndex) => (
                    <div
                      key={block.name}
                      className="rounded-3xl bg-white p-4 shadow-sm"
                    >
                      <h3 className="text-xl font-black">
                        {block.name}
                      </h3>

                      <div className="mt-4 space-y-5">
                        {block.exercises.map((exercise, exIndex) => (
                          <div
                            key={exercise}
                            className="rounded-2xl bg-slate-100 p-4"
                          >
                            <h4 className="text-lg font-black">
                              {exercise}
                            </h4>

                            <div className="mt-4 grid gap-3">
                              {[1, 2, 3, 4].map((set) => {
                                const weightKey = storageKey(
                                  week,
                                  `${dayIndex}-${blockIndex}-${exIndex}-${set}-weight`
                                );

                                const repsKey = storageKey(
                                  week,
                                  `${dayIndex}-${blockIndex}-${exIndex}-${set}-reps`
                                );

                                return (
                                  <div
                                    key={set}
                                    className="rounded-2xl bg-white p-3"
                                  >
                                    <div className="mb-2 text-base font-black">
                                      Satz {set}
                                    </div>

                                    <div className="grid grid-cols-2 gap-3">
                                      <input
                                        value={load(weightKey)}
                                        onChange={(e) =>
                                          save(weightKey, e.target.value)
                                        }
                                        placeholder="kg"
                                        className="h-12 rounded-2xl border px-4 text-lg"
                                      />

                                      <input
                                        value={load(repsKey)}
                                        onChange={(e) =>
                                          save(repsKey, e.target.value)
                                        }
                                        placeholder="Reps"
                                        className="h-12 rounded-2xl border px-4 text-lg"
                                      />
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
