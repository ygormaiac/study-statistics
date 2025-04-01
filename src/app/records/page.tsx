"use client";

import { useStudy } from "@/app/context/StudyContext";
import { Card, CardContent } from "@/components/ui/card";
import { formatTime } from "../utils/formatTime";

export default function StudyStats() {
  const { records } = useStudy();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Estudos Salvos</h1>
      <Card>
        <CardContent>
          {records.length === 0 ? (
            <p className="p-6 text-gray-500">Nenhum estudo salvo ainda.</p>
          ) : (
            <>
              <h2 className="text-lg font-bold mb-2">Registros dos últimos estudos:</h2>
              {records.map((r, index) => (
                <div key={index}>
                  {r.subject} - {r.topic}: {formatTime(r.time)}
                </div>
              ))}
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
