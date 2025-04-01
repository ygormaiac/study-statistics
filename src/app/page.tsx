"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Select } from '@/components/ui/select';
import { Modal } from '@/components/ui/modal';
import { useStudy } from "@/app/context/StudyContext";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import Link from 'next/link';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { formatTime } from './utils/formatTime';


type Record = {
  subject: string;
  topic: string;
  time: number;
};

const subjects: string[] = ['Direito', 'Português', 'Informática'];
const topics: { [key: string]: string[] } = {
  Direito: ['Direito Penal', 'Direito Constitucional', 'Direito da Família'],
  Português: ['Gramática', 'Interpretação Textual'],
  Informática: ['Hardware', 'Inteligência Artificial'],
};

export default function StudyTimer() {
  const { records, addRecord } = useStudy();
  const [selectedSubject, setSelectedSubject] = useState<string>('');
  const [selectedTopic, setSelectedTopic] = useState<string>('');
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const data = records.reduce<{ label: string; total: number }[]>((acc, record) => {
    const label = `${record.subject} - ${record.topic}`;
    const index = acc.findIndex((item) => item.label === label);
    if (index !== -1) {
      acc[index].total += record.time;
    } else {
      acc.push({ label, total: record.time });
    }
    return acc;
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => setTime((prev) => prev + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const saveTime = () => {
    if (!selectedSubject || !selectedTopic) return;
    setIsModalOpen(true);
  };

  const confirmSave = () => {
    const newRecord: Record = { subject: selectedSubject, topic: selectedTopic, time };
    addRecord(newRecord);
    setTime(0);
    setIsModalOpen(false);
  };

  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="p-6 bg-gradient-to-br from-zinc-900 to-zinc-850 flex flex-col justify-center items-center rounded-xl border border-gray-600">
        <h1 className="text-2xl font-bold mb-4 text-white">Cronômetro de Estudos</h1>
        <div className="flex flex-col gap-3 w-full">
          <Select value={selectedSubject} onChange={(e) => setSelectedSubject(e.target.value)}>
            <option value="">Selecione uma disciplina</option>
            {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
          </Select>
          <Select value={selectedTopic} onChange={(e) => setSelectedTopic(e.target.value)}>
            <option value="">Selecione um tema</option>
            {topics[selectedSubject]?.map((t) => <option key={t} value={t}>{t}</option>)}
          </Select>
        </div>
        <div className="my-4 text-xl text-white font-semibold">Tempo: {formatTime(time)}</div>
        <div className="flex gap-3">
          <Button onClick={() => setIsRunning(!isRunning)}>
            {isRunning ? 'Pausar' : 'Iniciar'}
          </Button>
          <Button onClick={() => setTime(0)}>Resetar</Button>
          <Button onClick={saveTime}>Salvar tempo</Button>
        </div>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <h2 className="text-lg font-bold">Confirmar salvamento?</h2>
          <p>Você deseja salvar {time}s para {selectedSubject} - {selectedTopic}?</p>
          <Button onClick={confirmSave}>Confirmar</Button>
          <Button onClick={() => setIsModalOpen(false)}>Cancelar</Button>
        </Modal>
        <div className="flex flex-col gap-3 mt-14">
          <Button>
            <Link href={'/records'}>Últimos Estudos</Link>
          </Button>
          <Drawer>
            <DrawerTrigger>
              <Button variant="outline">
                Estatísticas de Estudos
                <span className="bg-zinc-500 text-white text-xs font-bold rounded-full px-2 py-1 ml-2">NOVO</span>
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Estatísticas de Estudos</DrawerTitle>
                <DrawerDescription>Gráfico para acompanhamento do seu desempenho de estudos</DrawerDescription>
              </DrawerHeader>
              <div className="p-4">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={data}>
                    <XAxis dataKey="label" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="total" fill="#71717A" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <DrawerFooter>
                <DrawerClose>
                  <Button variant="outline">Fechar</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </div>
  );
}
