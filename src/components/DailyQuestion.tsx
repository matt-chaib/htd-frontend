import { Question } from "../types/types"

type DailyQuestionProps = {
    question: Question;
};


export const DailyQuestion = ({ question }: DailyQuestionProps) => {
    console.log("Question", question)
    return (
        <>
            <div className="question-date">{`Question #${question.id}`}</div>
            <div className="question-text">{question.text}</div>
            <div className="question-summary">{question.summary}</div>
            <div className="question-tags">
            {question.tags.map(tag => <div className="tag-button">{tag.name}</div>)}
            </div>
        </>
    )
}