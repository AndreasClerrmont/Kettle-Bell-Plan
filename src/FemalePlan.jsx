import React, { useState } from "react";

const workouts = [
  {
    day: "Montag",
    title: "Glute Strength",
    focus: "Po • Core • Beckenboden",
    duration: "35–40 Min",
    blocks: [
      {
        name: "Glute Power",
        exercises: [
          "Heavy KB Hip Thrust — 4×15",
          "Bulgarian Split Squat — 4×10 je Bein",
        ],
      },
      {
        name: "Waist & Stability",
        exercises: [
          "Dead Bug — 3×12",
          "Suitcase Carry — 3×40 Sek je Seite",
        ],
      },
      {
        name: "Glute Burn",
        exercises: [
          "Frog Pumps — 3×30",
          "Glute Bridge Hold — 3×45 Sek",
        ],
      },
    ],
  },

  {
    day: "Dienstag",
    title: "Leg Sculpt",
    focus: "Beine • Po • Conditioning",
    duration: "35–40 Min",
    blocks: [
      {
        name: "Leg Builder",
        exercises: [
          "Goblet Squat Tempo — 4×12",
          "Walking Lunges — 4×12 je Bein",
        ],
      },
      {
        name: "Hamstrings + Glutes",
        exercises: [
          "Romanian Deadlift — 4×12",
          "Single Leg Deadlift — 3×10 je Bein",
        ],
      },
      {
        name: "Conditioning",
        exercises: [
          "Heavy Swings — 5×20",
          "Mountain Climbers — 5×30 Sek",
        ],
      },
    ],
  },

  {
    day: "Donnerstag",
    title: "Booty Pump",
    focus: "Runder Po • Taille",
    duration: "35–40 Min",
    blocks: [
      {
        name: "Upper Glutes",
        exercises: [
          "Step-Ups — 4×12 je Bein",
          "Curtsy Lunge — 4×12 je Bein",
        ],
      },
      {
        name: "Waist Line",
        exercises: [
          "Russian Twist — 4×20",
          "Plank Shoulder Tap — 4×20",
        ],
      },
      {
        name: "Glute Finisher",
        exercises: [
          "Swing Burnout — 100 Reps",
          "Frog Pumps — 3×40",
        ],
      },
    ],
  },

  {
    day: "Freitag",
    title: "Athletic Shape",
    focus: "Straff • Athletisch • Arme",
    duration: "35–40 Min",
    blocks: [
      {
        name: "Athletic Block",
        exercises: [
          "Clean & Press — 4×10",
          "Reverse Lunge — 4×10 je Bein",
        ],
      },
      {
        name: "Tight Arms",
        exercises: [
          "Overhead Tricep Extension — 3×15",
          "Hammer Curl — 3×15",
        ],
      },
      {
        name: "Core + Pelvic Floor",
        exercises: [
          "Bird Dog — 3×15",
          "Glute Bridge March — 3×20",
        ],
      },
    ],
  },
];

function keyFor(week, workout, block, exercise, set, type) {
  return `kb-${week}-${workout}-${block}-${exercise}-${set}-${type}`;
}

export default function App() {
  const [week, setWeek] = useState(1);
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [, refresh] = useState(0);

  const activeWorkout =
    selectedWorkout !== null ? workouts[selectedWorkout] : null;

  function save(key, value) {
    localStorage.setItem(key, value);
    refresh((v) => v + 1);
  }

  function load(key) {
    return localStorage.getItem(key) || "";
  }

  function clearLogs() {
    if (!confirm("Alle Einträge löschen?")) return;
    Object.keys(localStorage)
      .filter((k) => k.startsWith("kb-"))
      .forEach((k) => localStorage.removeItem(k));
    refresh((v) => v + 1);
  }

  if (activeWorkout) {
    return (
      <main className="min-h-screen bg-slate-100 p-4 text-slate-950">
        <div className="mx-auto max-w-md">
          <button
            onClick={() => {
              setSelectedWorkout(null);
              setSelectedExercise(null);
            }}
            className="mb-4 rounded-2xl bg-white px-4 py-3 font-black shadow"
          >
            ← Zurück
          </button>

          <section className="mb-4 rounded-3xl bg-slate-950 p-6 text-white shadow-xl">
            <p className="text-sm font-bold text-slate-400">
              {activeWorkout.day} • {activeWorkout.duration}
            </p>
            <h1 className="mt-2 text-3xl font-black">{activeWorkout.title}</h1>
            <p className="mt-2 text-slate-300">{activeWorkout.focus}</p>
          </section>

          <section className="mb-4 rounded-3xl bg-white p-4 shadow">
            <div className="flex gap-2 overflow-x-auto">
              {[1, 2, 3, 4, 5].map((w) => (
                <button
                  key={w}
                  onClick={() => setWeek(w)}
                  className={`rounded-2xl px-4 py-3 font-black ${
                    week === w
                      ? "bg-slate-950 text-white"
                      : "bg-slate-100 text-slate-700"
                  }`}
                >
                  W{w}
                </button>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            {activeWorkout.blocks.map((block, blockIndex) => (
              <div key={block.name} className="rounded-3xl bg-white p-4 shadow">
                <h2 className="mb-3 text-xl font-black">{block.name}</h2>

                <div className="space-y-3">
                  {block.exercises.map((exercise, exerciseIndex) => {
                    const isOpen =
                      selectedExercise === `${blockIndex}-${exerciseIndex}`;

                    return (
                      <div
                        key={exercise}
                        className="rounded-3xl bg-slate-50 p-4"
                      >
                        <button
                          onClick={() =>
                            setSelectedExercise(
                              isOpen ? null : `${blockIndex}-${exerciseIndex}`
                            )
                          }
                          className="w-full text-left"
                        >
                          <h3 className="text-lg font-black">{exercise}</h3>
                          <p className="mt-1 text-sm text-slate-500">
                            Tippen zum Eintragen
                          </p>
                        </button>

                        {isOpen && (
                          <div className="mt-4 space-y-3">
                            {[1, 2, 3, 4].map((set) => {
                              const weightKey = keyFor(
                                week,
                                selectedWorkout,
                                blockIndex,
                                exerciseIndex,
                                set,
                                "weight"
                              );

                              const repsKey = keyFor(
                                week,
                                selectedWorkout,
                                blockIndex,
                                exerciseIndex,
                                set,
                                "reps"
                              );

                              return (
                                <div
                                  key={set}
                                  className="rounded-2xl bg-white p-3 shadow-sm"
                                >
                                  <div className="mb-2 font-black">
                                    Satz {set}
                                  </div>

                                  <div className="grid grid-cols-2 gap-3">
                                    <input
                                      value={load(weightKey)}
                                      onChange={(e) =>
                                        save(weightKey, e.target.value)
                                      }
                                      placeholder="kg"
                                      className="h-12 rounded-2xl border px-4 text-lg font-bold"
                                    />

                                    <input
                                      value={load(repsKey)}
                                      onChange={(e) =>
                                        save(repsKey, e.target.value)
                                      }
                                      placeholder="Reps"
                                      className="h-12 rounded-2xl border px-4 text-lg font-bold"
                                    />
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </section>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100 p-4 text-slate-950">
      <div className="mx-auto max-w-md">
        <header className="mb-5 rounded-3xl bg-slate-950 p-6 text-white shadow-xl">
          <p className="text-xs font-black uppercase tracking-widest text-slate-400">
            Elite Kettlebell
          </p>
          <h1 className="mt-2 text-4xl font-black leading-tight">
            Trainingsplan
          </h1>
          <p className="mt-3 text-slate-300">
            4 Tage • Supersätze • Muskelaufbau
          </p>
        </header>

        <section className="mb-5 rounded-3xl bg-white p-4 shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-bold text-slate-500">
                Aktuelle Woche
              </p>
              <h2 className="text-2xl font-black">Woche {week}</h2>
            </div>

            <button
              onClick={clearLogs}
              className="rounded-2xl bg-slate-100 px-4 py-3 font-black"
            >
              Log löschen
            </button>
          </div>

          <div className="mt-4 flex gap-2 overflow-x-auto">
            {[1, 2, 3, 4, 5].map((w) => (
              <button
                key={w}
                onClick={() => setWeek(w)}
                className={`rounded-2xl px-5 py-3 font-black ${
                  week === w
                    ? "bg-slate-950 text-white"
                    : "bg-slate-100 text-slate-700"
                }`}
              >
                {w}
              </button>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          {workouts.map((workout, index) => (
            <button
              key={workout.day}
              onClick={() => setSelectedWorkout(index)}
              className="w-full rounded-3xl bg-white p-5 text-left shadow-lg"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-full bg-slate-950 px-3 py-1 text-sm font-black text-white">
                  {workout.day}
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-black text-slate-700">
                  {workout.duration}
                </span>
              </div>

              <h2 className="text-2xl font-black">{workout.title}</h2>
              <p className="mt-1 text-slate-600">{workout.focus}</p>

              <div className="mt-4 rounded-2xl bg-slate-100 px-4 py-3 text-center font-black">
                Training öffnen →
              </div>
            </button>
          ))}
        </section>
      </div>
    </main>
  );
}
