import { Questions1 } from '../../Helpers/Chap1Question.ts';
import { Questions2 } from '../../Helpers/Chap2Question.ts';
import { Questions3 } from '../../Helpers/Chap3Question.ts';
import { Questions4 } from '../../Helpers/Chap4Question.ts';
import { Questions5 } from '../../Helpers/Chap5Question.ts';
import { Questions6 } from '../../Helpers/Chap6Question.ts';
import { Questions7 } from '../../Helpers/Chap7Question.ts';
import { Questions8 } from '../../Helpers/Chap8Question.ts';
import { Questions9 } from '../../Helpers/Chap9Question.ts';
import { Questions10 } from '../../Helpers/Chap10Question.ts';
import { Questions11 } from '../../Helpers/Chap11Question.ts';
import { Questions12 } from '../../Helpers/Chap12Question.ts';
import React from 'react';

interface QuestionType {
  question: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  answer: string;
}

interface ChapterType {
  name: string;
  title: string;
  questions: QuestionType[];
}

export const chapters: { [key: string]: ChapterType } = {
  chap1: { name: "Chapter 1", title: "AFRICA AND THE EARLY HUMANS", questions: Questions1 },
  chap2: { name: "Chapter 2", title: "EARLY AFRICAN CENTRES OF CIVILISATION: EGYPT, KUSH AND AXUM", questions: Questions2 },
  chap3: { name: "Chapter 3", title: "INDIGENOUS AFRICAN POLITICAL SYSTEM", questions: Questions3 },
  chap4: { name: "Chapter 4", title: "AFRICAN RELIGION AND CULTURE", questions: Questions4 },
  chap5: { name: "Chapter 5", title: "AFRICAN TRADITIONAL EDUCATION: NIGERIAN EXPERIENCE", questions: Questions5 },
  chap6: { name: "Chapter 6", title: 'THE ROMANS CIVILISATION IN AFRICA', questions: Questions6 },
  chap7: { name: "Chapter 7", title: 'CHRISTIANITY IN AFRICA', questions: Questions7 },
  chap8: { name: "Chapter 8", title: 'ISLAM IN AFRICA', questions: Questions8 },
  chap9: { name: "Chapter 9", title: "ENVIRONMENT AND CULTURE", questions: Questions9 },
  chap10: { name: "Chapter 10", title: 'COMMUNICATION, LANGUAGE AND CULTURE IN AFRICA', questions: Questions10 },
  chap11: { name: "Chapter 11", title: 'CULTURE DYNAMICS IN THE AGE OF COLONIALISM AND THE EVOLUTION OF NIGERIA', questions: Questions11 },
  chap12: { name: "Chapter 12", title: 'GENDER AND AFRICAN CULTURES', questions: Questions12 },
};
