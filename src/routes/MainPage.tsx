import { DailyQuestion } from "../components/DailyQuestion";
import { Separator } from "../components/Separator";
import { useState } from "react";
import { useQuery } from '@tanstack/react-query';
import { Question } from "../types/types";
  const QuestionsShown = ({questions, showPastQuestions, setShowPastQuestions}) => {
    if (showPastQuestions) {
        return ( <>
         {questions.map((question) => {
            return (
                <div className="question">
                  <DailyQuestion question={question}/>
                  <Separator />
                </div>
        )
        })}
        </>)
    } else {
        return (
            <div className="question">
            {questions && <DailyQuestion question={questions[0]}/>}
            <Separator />
            <button onClick={() => setShowPastQuestions(!showPastQuestions)}>Show Past Questions</button>
          </div>
        )
    }
}

const fetchQuestions = async (): Promise<Question[]> => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/questions`);
  if (!response.ok) {
    throw new Error('Failed to fetch questions');
  }
  return response.json();
};

export const MainPage = () => {
    const show_limit: number = 50;
    const [showPastQuestions, setShowPastQuestions]= useState(false);

    const { data: questions, isLoading, isError, error } = useQuery({
      queryKey: ['questions'], // Explicitly naming the query
      queryFn: fetchQuestions,
      staleTime: 1000 * 60 * 5, // Cache for 5 minutes
    });

    if (isLoading) return <>
    <div className="skeleton" style={{ width: '400px', height: '200px' }}></div>
  </>;
    if (isError) {
      console.error(`Error: ${(error as Error).message}`)
      return <div>Questions could not be loaded...</div>;
    }

    console.log("Questions", questions)

    return (
        <div className="questions-block">
           <QuestionsShown questions={questions || []} showPastQuestions={showPastQuestions} setShowPastQuestions={setShowPastQuestions}/>
        </div>
    )
}