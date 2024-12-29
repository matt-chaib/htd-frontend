type Question = {
    question: string;
    date: Date;
  };

export const DailyQuestion = ({question}) => {
    console.log(question)
    return (
        <div>
            <div className="question-date">{new Date(question.date).toLocaleDateString('en-GB', {
  day: '2-digit',
  month: 'long',
  year: 'numeric',
})}</div>
            <div className="question-text">{question.question}</div>
            <div className="question-summary">{question.summary}</div>
        </div>
    )
}