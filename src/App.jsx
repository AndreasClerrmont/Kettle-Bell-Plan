import React, { useMemo, useState } from "react";

const trainingDays = [
  {
    day: "Tag 1",
    title: "Kraft & Spannung",
    schedule: "Montag",
    focus: "Ganzkörper • schwere Spannung • Arme schwer",
    warmup: ["Halos", "Hip Openers", "leichte Swings", "Shoulder CARs"],
    blocks: [
      {
        name: "Supersatz A",
        rest: "90 Sek Pause",
        exercises: [
          { name: "Double Kettlebell Front Squat", sets: "4", reps: "6–8", note: "schwer, aufrechte Haltung" },
          { name: "Weighted Pull-Up oder Renegade Row", sets: "4", reps: "6–8", note: "Rücken hart kontrahieren" },
        ],
      },
      {
        name: "Supersatz B",
        rest: "90 Sek Pause",
        exercises: [
          { name: "Single Arm Clean & Push Press", sets: "4", reps: "6 pro Seite", note: "explosiv, stabiler Lockout" },
          { name: "Turkish Get-Up", sets: "3", reps: "1–2 pro Seite", note: "Technik vor Gewicht" },
        ],
      },
      {
        name: "Arm-Supersatz",
        rest: "45–60 Sek Pause",
        exercises: [
          { name: "Kettlebell Hammer Curl", sets: "3", reps: "10", note: "kontrolliert, kein Schwung" },
          { name: "Overhead Tricep Extension", sets: "3", reps: "10", note: "voller Stretch" },
        ],
      },
    ],
    finisher: "5 Min EMOM: 15 Heavy Swings",
  },
  {
    day: "Tag 2",
    title: "Explosivität & Athletik",
    schedule: "Dienstag",
    focus: "Ganzkörper • Snatch • Schulter-Finisher",
    warmup: ["Jump Squats", "Mobility", "leichte Snatches"],
    blocks: [
      {
        name: "Supersatz A",
        rest: "75 Sek Pause",
        exercises: [
          { name: "Kettlebell Snatch", sets: "4", reps: "8 pro Seite", note: "explosiv, sauberer Pfad" },
          { name: "Front Rack Reverse Lunge", sets: "4", reps: "8 pro Bein", note: "stabiler Rumpf" },
        ],
      },
      {
        name: "Supersatz B",
        rest: "75 Sek Pause",
        exercises: [
          { name: "Bottom-Up Press", sets: "3", reps: "8", note: "Schulterstabilität" },
          { name: "Single Leg Romanian Deadlift", sets: "3", reps: "8", note: "Balance + hintere Kette" },
        ],
      },
      {
        name: "Schulter-Finisher",
        rest: "30–45 Sek Pause",
        exercises: [
          { name: "Kettlebell Lateral Raise", sets: "3", reps: "12–15", note: "langsam, seitliche Schulter" },
        ],
      },
    ],
    finisher: "5 Min AMRAP: 5 Burpees, 10 Swings, 15 Mountain Climbers",
  },
  {
    day: "Tag 3",
    title: "Volumen & Stabilität",
    schedule: "Donnerstag",
    focus: "Ganzkörper • Hypertrophie • Arm-Pump",
    warmup: ["Windmills", "Halos", "leichte Rows"],
    blocks: [
      {
        name: "Supersatz A",
}
