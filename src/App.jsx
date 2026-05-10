import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-md mx-auto bg-white rounded-3xl shadow-xl p-6">
        <h1 className="text-3xl font-bold mb-4">
          4-Tage Trainingsplan
        </h1>

        <div className="space-y-4">
          <div className="bg-gray-50 rounded-2xl p-4 shadow">
            <h2 className="font-bold text-xl">Montag</h2>
            <p>Kraft & Spannung</p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-4 shadow">
            <h2 className="font-bold text-xl">Dienstag</h2>
            <p>Explosivität & Athletik</p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-4 shadow">
            <h2 className="font-bold text-xl">Donnerstag</h2>
            <p>Volumen & Stabilität</p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-4 shadow">
            <h2 className="font-bold text-xl">Freitag</h2>
            <p>Power Endurance</p>
          </div>
        </div>
      </div>
    </div>
  );
}
