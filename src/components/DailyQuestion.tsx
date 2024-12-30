import { Question } from "../types/types"

type DailyQuestionProps = {
    question: Question;
};


export const DailyQuestion = ({ question }: DailyQuestionProps) => {
    console.log("Question", question)
    return (
        <>
        <div className="question-header">
            <div className="question-date">{`Question #${question.id}`}</div>
            <div className="question-date">{question.date_used && new Date(question.date_used).toLocaleDateString('en-GB', {
  day: '2-digit',
  month: 'long',
  year: 'numeric',
})}</div>
        </div>
            
            <div className="question-text">{question.text}</div>
            <div className="question-summary">{question.summary}</div>
            <div className="question-link">Discuss this question on Reddit at <a href={question.link ? `https://www.reddit.com/r/hashtagdeep/comments/${question.link}` : "https://www.reddit.com/r/hashtagdeep"} target="_blank">r/hashtagdeep</a>.</div>
            <div className="question-tags">
            {question.tags && question.tags.map(tag => <div key={tag.id} className="tag-button">{tag.name}</div>)}
            </div>
        </>
    )
}