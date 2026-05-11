import React, { useState } from "react";

import gobletSquat from "./images/goblet-squat.jpg";
import oneArmRow from "./images/one-arm-row.jpg";
import bulgarianSplitSquat from "./images/bulgarian-split-squat.jpg";
import deadBug from "./images/dead-bug.jpg";
import hipThrust from "./images/hip-thrust.jpg";
import suitcaseCarry from "./images/suitcase-carry.jpg";

import kbSwings from "./images/kb-swings.jpg";
import floorPress from "./images/floor-press.jpg";
import reverseLunge from "./images/reverse-lunge.jpg";
import plankShoulderTap from "./images/plank-shoulder-tap.jpg";
import tricepExtension from "./images/tricep-extension.jpg";
import hammerCurl from "./images/hammer-curl.jpg";

import romanianDeadlift from "./images/romanian-deadlift.jpg";
import halfKneelingPress from "./images/half-kneeling-press.jpg";
import stepUps from "./images/step-ups.jpg";
import birdDog from "./images/bird-dog.jpg";
import russianTwist from "./images/russian-twist.jpg";
import frogPumps from "./images/frog-pumps.jpg";

import cleanSquatPress from "./images/clean-squat-press.jpg";
import singleLegDeadlift from "./images/single-leg-deadlift.jpg";
import walkingLunges from "./images/walking-lunges.jpg";
import gluteBridgeMarch from "./images/glute-bridge-march.jpg";
import heavySwings from "./images/heavy-swings.jpg";
import mountainClimbers from "./images/mountain-climbers.jpg";

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
          {
            name: "KB Goblet Squat",
            sets: 4,
            reps: "10–12",
            weight: "16 kg",
            image: gobletSquat,
            note: "Langsam runter, explosiv hoch. Po oben aktiv anspannen.",
          },
          {
            name: "KB One Arm Row",
            sets: 4,
            reps: "10 je Seite",
            weight: "16 kg",
            image: oneArmRow,
            note: "Rücken stabil, Ellbogen eng am Körper ziehen.",
          },
        ],
      },
      {
        name: "Supersatz B — Glute Focus",
        exercises: [
          {
            name: "Bulgarian Split Squat",
            sets: 3,
            reps: "10 je Bein",
            weight: "8–16 kg",
            image: bulgarianSplitSquat,
            note: "Vorderes Bein arbeitet, Oberkörper leicht nach vorne.",
          },
          {
            name: "Dead Bug mit Beckenboden-Spannung",
            sets: 3,
            reps: "12 je Seite",
            weight: "Bodyweight",
            image: "🧘‍♀️",
            note: "Ausatmen, Bauch flach halten, Beckenboden sanft aktivieren.",
          },
        ],
      },
      {
        name: "Supersatz C — Booty Burn",
        exercises: [
          {
            name: "KB Hip Thrust",
            sets: 4,
            reps: "15",
            weight: "16 kg",
            image: "🔥",
            note: "Oben 1–2 Sekunden halten. Kein Hohlkreuz.",
          },
          {
            name: "Suitcase Carry",
            sets: 3,
            reps: "40 Sek je Seite",
            weight: "16 kg",
            image: "🚶‍♀️",
            note: "Aufrecht gehen, Taille stabil, nicht zur Seite kippen.",
          },
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
          {
            name: "KB Swings",
            sets: 5,
            reps: "20",
            weight: "16 kg",
            image: "⚡",
            note: "Hüfte schnappen lassen, nicht aus den Armen heben.",
          },
          {
            name: "Push-Up oder KB Floor Press",
            sets: 4,
            reps: "10–12",
            weight: "8 kg oder Bodyweight",
            image: "🤍",
            note: "Nur moderat für Oberkörper, sauber und kontrolliert.",
          },
        ],
      },
      {
        name: "Supersatz B — Legs & Core",
        exercises: [
          {
            name: "Front Rack Reverse Lunge",
            sets: 4,
            reps: "10 je Bein",
            weight: "8–16 kg",
            image: bulgarianSplitSquat,
            note: "Ruhig zurücksteigen, vorderes Bein kontrolliert drücken.",
          },
          {
            name: "Plank Shoulder Tap",
            sets: 4,
            reps: "20",
            weight: "Bodyweight",
            image: "🧱",
            note: "Hüfte ruhig halten, Bauch fest.",
          },
        ],
      },
      {
        name: "Supersatz C — Winkearme",
        exercises: [
          {
            name: "Overhead Tricep Extension",
            sets: 3,
            reps: "15",
            weight: "8 kg",
            image: oneArmRow,
            note: "Ellbogen eng, volle Streckung oben.",
          },
          {
            name: "KB Hammer Curl",
            sets: 3,
            reps: "15",
            weight: "8 kg",
            image: "✨",
            note: "Ohne Schwung, langsam ablassen.",
          },
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
          {
            name: "KB Romanian Deadlift",
            sets: 4,
            reps: "12–15",
            weight: "16 kg",
            image: gobletSquat,
            note: "Hüfte nach hinten, Spannung in Hamstrings und Po.",
          },
          {
            name: "Half-Kneeling Press",
            sets: 3,
            reps: "10 je Seite",
            weight: "8 kg",
            image: "🏋️‍♀️",
            note: "Bauch fest, Rippen unten, sauber über Kopf drücken.",
          },
        ],
      },
      {
        name: "Supersatz B — Upper Glutes",
        exercises: [
          {
            name: "Step-Ups",
            sets: 4,
            reps: "12 je Bein",
            weight: "8–16 kg",
            image: "⬆️",
            note: "Über die Ferse drücken, oben Po anspannen.",
          },
          {
            name: "Bird Dog mit Pause",
            sets: 3,
            reps: "12 je Seite",
            weight: "Bodyweight",
            image: "🧘‍♀️",
            note: "2 Sekunden halten, Becken gerade lassen.",
          },
        ],
      },
      {
        name: "Supersatz C — Core & Burn",
        exercises: [
          {
            name: "Russian Twist",
            sets: 4,
            reps: "20",
            weight: "8 kg",
            image: "🔥",
            note: "Kontrolliert drehen, Bauchspannung halten.",
          },
          {
            name: "Frog Pumps",
            sets: 3,
            reps: "40",
            weight: "Bodyweight oder 8 kg",
            image: gobletSquat,
            note: "Kurze, harte Po-Kontraktion oben.",
          },
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
          {
            name: "KB Clean + Squat + Press",
            sets: 4,
            reps: "8 je Seite",
            weight: "8 kg",
            image: "⚡",
            note: "Flüssiger Complex, nicht hetzen.",
          },
          {
            name: "Single Leg Deadlift",
            sets: 4,
            reps: "10 je Bein",
            weight: "8–16 kg",
            image: bulgarianSplitSquat,
            note: "Hüfte gerade, Balance kontrollieren.",
          },
        ],
      },
      {
        name: "Supersatz B — Glute Stability",
        exercises: [
          {
            name: "Walking Lunges",
            sets: 3,
            reps: "12 je Bein",
            weight: "8–16 kg",
            image: "🚶‍♀️",
            note: "Große Schritte, Po und Oberschenkel aktiv.",
          },
          {
            name: "Glute Bridge March",
            sets: 3,
            reps: "20",
            weight: "Bodyweight",
            image: "🧘‍♀️",
            note: "Becken stabil halten, Beckenboden sanft aktiv.",
          },
        ],
      },
      {
        name: "Supersatz C — Finisher",
        exercises: [
          {
            name: "Heavy Swings",
            sets: 5,
            reps: "20",
            weight: "16 kg",
            image: "🔥",
            note: "Explosiv, Po hart anspannen.",
          },
          {
            name: "Mountain Climbers",
            sets: 5,
            reps: "30 Sek",
            weight: "Bodyweight",
            image: "💦",
            note: "Bauch fest, Tempo sauber halten.",
          },
        ],
      },
    ],
  },
];

function makeKey(week, dayIndex, blockIndex, exerciseIndex, setIndex, field) {
  return `female-kb-${week}-${dayIndex}-${blockIndex}-${exerciseIndex}-${setIndex}-${field}`;
}

export default function FemalePlan() {
  const [week, setWeek] = useState(1);
  const [screen, setScreen] = useState("home");
  const [activeDay, setActiveDay] = useState(null);
  const [openExercise, setOpenExercise] = useState(null);
  const [, rerender] = useState(0);

  const workout = activeDay !== null ? workouts[activeDay] : null;

  function save(key, value) {
    localStorage.setItem(key, value);
    rerender((v) => v + 1);
  }

  function load(key) {
    return localStorage.getItem(key) || "";
  }

  function clearLogs() {
    if (!window.confirm("Alle Einträge für den Frauenplan löschen?")) return;
    Object.keys(localStorage)
      .filter((key) => key.startsWith("female-kb-"))
      .forEach((key) => localStorage.removeItem(key));
    rerender((v) => v + 1);
  }

  function openWorkout(index) {
    setActiveDay(index);
    setOpenExercise(null);
    setScreen("workout");
  }

  if (screen === "workout" && workout) {
    return (
      <main className="min-h-screen bg-[#f3f0ea] px-4 py-5 text-stone-950">
        <div className="mx-auto max-w-md">
          <button
            onClick={() => setScreen("home")}
            className="mb-4 rounded-full bg-white px-5 py-3 text-sm font-black shadow-sm"
          >
            ← Zurück
          </button>

          <section className="mb-5 overflow-hidden rounded-[2rem] bg-gradient-to-br from-stone-950 to-stone-800 p-6 text-white shadow-xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-rose-200">
              {workout.day} • {workout.duration}
            </p>
            <h1 className="mt-3 text-4xl font-black leading-none">{workout.title}</h1>
            <p className="mt-3 text-base text-stone-300">{workout.focus}</p>
          </section>

          <section className="sticky top-0 z-20 mb-5 rounded-[1.75rem] bg-white/95 p-3 shadow-lg backdrop-blur">
            <div className="flex gap-2 overflow-x-auto pb-1">
              {[1, 2, 3, 4, 5].map((item) => (
                <button
                  key={item}
                  onClick={() => setWeek(item)}
                  className={`shrink-0 rounded-2xl px-5 py-3 text-base font-black ${
                    week === item ? "bg-rose-500 text-white" : "bg-stone-100 text-stone-700"
                  }`}
                >
                  W{item}
                </button>
              ))}
            </div>
          </section>

          <section className="space-y-5">
            {workout.blocks.map((block, blockIndex) => (
              <div key={block.name} className="rounded-[2rem] bg-white p-5 shadow-lg">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <h2 className="text-2xl font-black leading-tight">{block.name}</h2>
                  <span className="rounded-full bg-rose-100 px-3 py-1 text-xs font-black text-rose-700">
                    Supersatz
                  </span>
                </div>

                <div className="space-y-4">
                  {block.exercises.map((exercise, exerciseIndex) => {
                    const exerciseId = `${blockIndex}-${exerciseIndex}`;
                    const isOpen = openExercise === exerciseId;

                    return (
                      <article key={exercise.name} className="rounded-[1.75rem] bg-stone-50 p-4 shadow-sm">
                        <button
                          onClick={() => setOpenExercise(isOpen ? null : exerciseId)}
                          className="w-full text-left"
                        >
                          <div className="mb-3 flex items-start gap-3">
                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-3xl shadow-sm">
                              <img
                              src={exercise.image}
                              alt={exercise.name}
                              className="h-16 w-16 rounded-2xl object-cover"
                            />
                            </div>
                            <div className="min-w-0 flex-1">
                              <h3 className="text-xl font-black leading-tight">{exercise.name}</h3>
                              <p className="mt-1 text-sm font-bold text-stone-500">
                                {exercise.sets}× {exercise.reps} • {exercise.weight}
                              </p>
                            </div>
                          </div>
                          <p className="rounded-2xl bg-white p-3 text-sm text-stone-600 shadow-sm">
                            {exercise.note}
                          </p>
                          <div className="mt-3 rounded-2xl bg-stone-900 px-4 py-3 text-center text-sm font-black text-white">
                            {isOpen ? "Sätze schließen" : "Sätze eintragen"}
                          </div>
                        </button>

                        {isOpen && (
                          <div className="mt-4 space-y-3">
                            {Array.from({ length: exercise.sets }).map((_, setIndex) => {
                              const weightKey = makeKey(week, activeDay, blockIndex, exerciseIndex, setIndex, "weight");
                              const repsKey = makeKey(week, activeDay, blockIndex, exerciseIndex, setIndex, "reps");
                              const doneKey = makeKey(week, activeDay, blockIndex, exerciseIndex, setIndex, "done");
                              const done = load(doneKey) === "yes";

                              return (
                                <div
                                  key={setIndex}
                                  className={`rounded-2xl p-3 shadow-sm ${done ? "bg-emerald-50" : "bg-white"}`}
                                >
                                  <div className="mb-2 flex items-center justify-between">
                                    <span className="text-base font-black">Satz {setIndex + 1}</span>
                                    <button
                                      onClick={() => save(doneKey, done ? "" : "yes")}
                                      className={`rounded-xl px-3 py-2 text-xs font-black ${
                                        done ? "bg-emerald-600 text-white" : "bg-stone-900 text-white"
                                      }`}
                                    >
                                      {done ? "✓ Fertig" : "Check"}
                                    </button>
                                  </div>

                                  <div className="grid grid-cols-2 gap-3">
                                    <label className="grid gap-1 text-xs font-black uppercase tracking-wide text-stone-500">
                                      Gewicht
                                      <input
                                        value={load(weightKey)}
                                        onChange={(e) => save(weightKey, e.target.value)}
                                        placeholder="kg"
                                        inputMode="decimal"
                                        className="h-12 rounded-2xl border border-stone-200 bg-white px-4 text-lg font-black outline-none focus:ring-2 focus:ring-rose-400"
                                      />
                                    </label>
                                    <label className="grid gap-1 text-xs font-black uppercase tracking-wide text-stone-500">
                                      Reps
                                      <input
                                        value={load(repsKey)}
                                        onChange={(e) => save(repsKey, e.target.value)}
                                        placeholder={exercise.reps}
                                        inputMode="numeric"
                                        className="h-12 rounded-2xl border border-stone-200 bg-white px-4 text-lg font-black outline-none focus:ring-2 focus:ring-rose-400"
                                      />
                                    </label>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </article>
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
    <main className="min-h-screen bg-[#f3f0ea] px-4 py-5 text-stone-950">
      <div className="mx-auto max-w-md">
        <header className="mb-5 rounded-[2rem] bg-gradient-to-br from-stone-950 to-stone-800 p-6 text-white shadow-xl">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-rose-200">
            Kettlebell Shape Plan
          </p>
          <h1 className="mt-3 text-4xl font-black leading-none">Booty & Core</h1>
          <p className="mt-3 text-base text-stone-300">
            4 Tage • Ganzkörper • Po-Fokus • Bauch • Beckenboden
          </p>
        </header>

        <section className="mb-5 rounded-[2rem] bg-white p-5 shadow-lg">
          <div className="mb-4 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-black uppercase tracking-wide text-stone-400">Aktuelle Woche</p>
              <h2 className="text-3xl font-black">Woche {week}</h2>
            </div>
            <button
              onClick={clearLogs}
              className="rounded-2xl bg-stone-100 px-4 py-3 text-sm font-black text-stone-700"
            >
              Log löschen
            </button>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1">
            {[1, 2, 3, 4, 5].map((item) => (
              <button
                key={item}
                onClick={() => setWeek(item)}
                className={`shrink-0 rounded-2xl px-5 py-3 text-base font-black ${
                  week === item ? "bg-rose-500 text-white" : "bg-stone-100 text-stone-700"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          {workouts.map((workout, index) => (
            <button
              key={workout.day}
              onClick={() => openWorkout(index)}
              className="w-full overflow-hidden rounded-[2rem] bg-white text-left shadow-lg"
            >
              <div className="p-5">
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-full bg-stone-950 px-4 py-2 text-sm font-black text-white">
                    {workout.day}
                  </span>
                  <span className="rounded-full bg-rose-100 px-4 py-2 text-sm font-black text-rose-700">
                    {workout.duration}
                  </span>
                </div>
                <h2 className="text-2xl font-black leading-tight">{workout.title}</h2>
                <p className="mt-2 text-base text-stone-600">{workout.focus}</p>
                <div className="mt-5 rounded-2xl bg-stone-950 px-4 py-4 text-center text-base font-black text-white">
                  Training öffnen →
                </div>
              </div>
            </button>
          ))}
        </section>

        <section className="mt-5 rounded-[2rem] bg-white p-5 shadow-lg">
          <h2 className="text-2xl font-black">Progression</h2>
          <ul className="mt-3 space-y-2 text-base text-stone-700">
            <li>✅ Wenn alle Sätze sauber: mehr Wiederholungen oder schwerere KB.</li>
            <li>✅ Po-Übungen oben bewusst 1–2 Sekunden halten.</li>
            <li>✅ Bauch flach halten, Beckenboden sanft aktivieren.</li>
            <li>✅ Qualität vor Tempo — besonders bei einbeinigen Übungen.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
