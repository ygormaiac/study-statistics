"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Record = {
  subject: string;
  topic: string;
  time: number;
};

interface StudyContextProps {
  records: Record[];
  addRecord: (newRecord: Record) => void;
}

interface StudyProviderProps {
  children: ReactNode;
}

const StudyContext = createContext<StudyContextProps | undefined>(undefined);

export const useStudy = () => {
  const context = useContext(StudyContext);
  if (!context) {
    throw new Error("useStudy must be used within a StudyProvider");
  }
  return context;
};

export const StudyProvider: React.FC<StudyProviderProps> = ({ children }) => {
  const [records, setRecords] = useState<Record[]>([]);

  useEffect(() => {
    const savedRecords = JSON.parse(localStorage.getItem('studyRecords') || '[]') as Record[];
    setRecords(savedRecords);
  }, []);

  useEffect(() => {
    if (records.length > 0) {
      localStorage.setItem('studyRecords', JSON.stringify(records));
    }
  }, [records]);

  const addRecord = (newRecord: Record) => {
    setRecords((prevRecords) => [...prevRecords, newRecord]);
  };

  return (
    <StudyContext.Provider value={{ records, addRecord }}>
      {children}
    </StudyContext.Provider>
  );
};
