import { DailyQuestion } from "../components/DailyQuestion";
import { Separator } from "../components/Separator";
import { useState } from "react";
import { useQuery } from '@tanstack/react-query';
import { Question } from "../types/types";
import { Header } from "../components/Header";

interface QuestionsShownProps {
  questions: Question[]; // Array of questions
  showPastQuestions: boolean; // Boolean to indicate if past questions should be shown
  setShowPastQuestions: (value: boolean) => void; // Function to toggle the state
  qotd: Question | null; // Question of the Day, or null if not available
}

const QuestionsShown: React.FC<QuestionsShownProps> = ({ questions, showPastQuestions, setShowPastQuestions, qotd }) => {
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
            {qotd && questions && <DailyQuestion question={questions.filter((question) => question.id === qotd.id)[0]}/>}
            <Separator />
            <button onClick={() => setShowPastQuestions(!showPastQuestions)}>Show Past Questions</button>
          </div>
        )
    }
}

const fetchQuestions = async (limit: number): Promise<Question[]> => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/questions?limit=${limit}`);
  if (!response.ok) {
    throw new Error('Failed to fetch questions');
  }
  return response.json();
};

const fetchQOTD = async (): Promise<Question> => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/questions/api/question-of-the-day`);
  if (!response.ok) {
    throw new Error('Failed to fetch question of the day');
  }
  return response.json();
};


export const MainPage = () => {
    const show_limit: number = 50;
    const [showPastQuestions, setShowPastQuestions]= useState(false);

    const { data: qotd, isLoading: qotdLoading, isError: qotd_isError, error: qotd_error } = useQuery({
      queryKey: ['questions', 'question-of-the-day'], // Explicit query naming
      queryFn: fetchQOTD,
      staleTime: 1000 * 60 * 5, // Cache data for 5 minutes
    });

    const { data: questions, isLoading, isError, error } = useQuery({
      queryKey: ['questions', { limit: show_limit }], // Include limit in the query key
      queryFn: () => fetchQuestions(show_limit),
      staleTime: 1000 * 60 * 5, // Cache for 5 minutes
      enabled: !!qotd, // Ensure this query runs only after the QOTD is fetched
    });


    console.log(qotd)
  
    if (qotdLoading) return <div>Loading...</div>;
    if (qotd_isError) return <div>Error: {qotd_error?.message || 'Something went wrong'}</div>;
  

    if (isLoading) return <>
    <div className="skeleton" style={{ width: '400px', height: '200px' }}></div>
  </>;
    if (isError) {
      console.error(`Error: ${(error as Error).message}`)
      return <div>Questions could not be loaded...</div>;
    }

    console.log("Questions", questions)

    return (
      <>
        <Header />
        <div className="questions-block">
           <QuestionsShown questions={questions || []} showPastQuestions={showPastQuestions} setShowPastQuestions={setShowPastQuestions} qotd={qotd || null}/>
        </div>
      </>
    )
}