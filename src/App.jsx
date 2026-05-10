import React, { useMemo, useState } from "react";
        <div className="mb-6 grid gap-4 md:grid-cols-[1fr_320px]">
          <div className="relative rounded-2xl sm:rounded-3xl bg-white p-4 shadow-md">
            <span className="pointer-events-none absolute left-8 top-1/2 -translate-y-1/2 text-slate-400">🔎</span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Übung, Muskelgruppe oder Tag suchen..."
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 outline-none focus:ring-2 focus:ring-slate-900"
            />
          </div>

          <Card className="flex items-center gap-3 p-4">
            <span className="text-2xl">🎯</span>
            <div>
              <p className="font-bold">Ziel</p>
              <p className="text-sm text-slate-600">Muskelwachstum + funktionelle Kraft</p>
            </div>
          </Card>
        </div>

        <div className="mb-6 rounded-2xl sm:rounded-3xl bg-white p-4 shadow-md">
          <div className="mb-4 flex flex-wrap gap-2">
            {[1, 2, 3, 4, 5].map((week) => (
              <button
                key={week}
                type="button"
                onClick={() => setActiveWeek(week)}
                className={`rounded-2xl px-4 py-2 text-sm font-bold transition ${activeWeek === week ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`}
              >
                Woche {week}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-bold text-slate-950">Trainings-Tracking • Woche {activeWeek}</h2>
              <p className="text-sm text-slate-600">
                Trage pro Satz Gewicht, Wiederholungen und Notizen ein. Jede Woche wird separat gespeichert und bleibt lokal im Browser erhalten.
              </p>
            </div>
            <button
              type="button"
              onClick={clearWorkoutLog}
              className="rounded-2xl bg-slate-100 px-4 py-2 text-sm font-bold text-slate-800 transition hover:bg-slate-200"
            >
              Log löschen
            </button>
          </div>
        </div>

        {(() => {
          window.__ACTIVE_WEEK__ = activeWeek;
          return null;
        })()}

        <section className="mb-8 grid gap-4">
          {filteredDays.map((day) => (
            <TrainingDayCard key={day.day} item={day} />
          ))}
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          <Card className="p-5">
            <h2 className="mb-3 text-xl font-bold">Progression</h2>
            <ul className="space-y-2 text-sm text-slate-700">
              {progressRules.map((rule) => (
                <li key={rule} className="flex gap-2">
                  <span className="mt-0.5 shrink-0">✅</span>
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-5">
            <h2 className="mb-3 text-xl font-bold">Empfohlene Kettlebells</h2>
            <p className="text-sm text-slate-700">
              Leicht, mittel, schwer. Beispiel: 12 kg, 16 kg, 20–24 kg. Optional 28–32 kg für Swings und schwere Squats.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Technik > Ego", "Core anspannen", "saubere Snatches", "explosiv hoch", "kontrolliert runter"].map((tag) => (
                <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                  {tag}
                </span>
              ))}
            </div>
          </Card>
        </section>
      </div>
    </main>
  );
}
