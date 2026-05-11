import React, { useState } from "react";

const workouts = [
  {
    day: "Montag",
    title: "Full Body Glute Strength",
    focus: "Po • Beine • Core • Beckenboden",
    duration: "35–40 Min",
    blocks: [
      {
        name: "Supersatz A — Strength",
        exercises: [
          "KB Goblet Squat 16 kg — 4×10–12",
          "KB One Arm Row 16 kg — 4×10 je Seite",
        ],
      },
      {
        name: "Supersatz B — Glute Focus",
        exercises: [
          "Bulgarian Split Squat 8–16 kg — 3×10 je Bein",
          "Dead Bug mit Beckenboden-Spannung — 3×12 je Seite",
        ],
      },
      {
        name: "Supersatz C — Booty Burn",
        exercises: [
          "KB Hip Thrust 16 kg — 4×15",
          "Suitcase Carry 16 kg — 3×40 Sek je Seite",
        ],
      },
    ],
  },

  {
    day: "Dienstag",
    title: "Athletic Full Body",
    focus: "Po • Taille • Kondition • Arme",
    duration: "35–40 Min",
    blocks: [
      {
        name: "Supersatz A — Power",
        exercises: [
          "KB Swings 16 kg — 5×20",
          "Push-Up oder KB Floor Press 8 kg — 4×10–12",
        ],
      },
      {
        name: "Supersatz B — Legs & Core",
        exercises: [
          "Front Rack Reverse Lunge 8–16 kg — 4×10 je Bein",
          "Plank Shoulder Tap — 4×20",
        ],
      },
      {
        name: "Supersatz C — Winkearme",
        exercises: [
          "Overhead Tricep Extension 8 kg — 3×15",
          "KB Hammer Curl 8 kg — 3×15",
        ],
      },
    ],
  },

  {
    day: "Donnerstag",
    title: "Booty Shape & Waist",
    focus: "Runder Po • Bauch • Haltung",
    duration: "35–40 Min",
    blocks: [
      {
        name: "Supersatz A — Shape",
        exercises: [
          "KB Romanian Deadlift 16 kg — 4×12–15",
          "Half-Kneeling Press 8 kg — 3×10 je Seite",
        ],
      },
      {
        name: "Supersatz B — Upper Glutes",
        exercises: [
          "Step-Ups 8–16 kg — 4×12 je Bein",
          "Bird Dog mit Pause — 3×12 je Seite",
        ],
      },
      {
        name: "Supersatz C — Core & Burn",
        exercises: [
          "Russian Twist 8 kg — 4×20",
          "Frog Pumps — 3×40",
        ],
      },
    ],
  },

  {
    day: "Freitag",
    title: "Strength Endurance",
    focus: "Ganzkörper • Po hoch • Bauch fest",
    duration: "35–40 Min",
    blocks: [
      {
        name: "Supersatz A — Complex",
        exercises: [
          "KB Clean + Squat + Press 8 kg — 4×8 je Seite",
          "Single Leg Deadlift 8–16 kg — 4×10 je Bein",
        ],
      },
      {
        name: "Supersatz B — Glute Stability",
        exercises: [
          "Walking Lunges 8–16 kg — 3×12 je Bein",
          "Glute Bridge March — 3×20",
        ],
      },
      {
        name: "Supersatz C — Finisher",
        exercises: [
          "Heavy Swings 16 kg — 5×20",
          "Mountain Climbers — 5×30 Sek",
        ],
      },
    ],
  },
];

function keyFor(week, workout, block, exercise, set, type) {
  return `kb-${week}-${workout}-${block}-${exercise}-${set}-${type}`;
}

export default function App() {
  const [activePlan, setActivePlan] = useState("male");
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
      <div className="flex gap-2 mb-6">
  <button
    onClick={() => setActivePlan("male")}
    className={`px-4 py-2 rounded-xl font-bold ${
      activePlan === "male"
        ? "bg-black text-white"
        : "bg-gray-200"
    }`}
  >
    Männerplan
  </button>

  <button
    onClick={() => setActivePlan("female")}
    className={`px-4 py-2 rounded-xl font-bold ${
      activePlan === "female"
        ? "bg-pink-500 text-white"
        : "bg-gray-200"
    }`}
  >
    Frauenplan
  </button>
</div>
      {activePlan === "female" ? (
  <FemalePlan />
) : (
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
    )}
  );
}
