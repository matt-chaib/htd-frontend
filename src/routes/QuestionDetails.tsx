import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DailyQuestion } from '../components/DailyQuestion';

const QuestionDetails = () => {
  const { id } = useParams(); // Get the question ID from the URL
  const [question, setQuestion] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/questions/${id}`) 
      .then((response) => {
        if (!response.ok) throw new Error('Failed to fetch question');
        return response.json();
      })
      .then((data) => setQuestion(data))
      .catch((err) => setError(err.message));
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!question) {
    return <div>Loading...</div>;
  }

  return (
    <div>
     <DailyQuestion question={question} />
    </div>
  );
};

export default QuestionDetails;
