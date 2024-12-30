import { Question } from "../types/types"

type DailyQuestionProps = {
    question: Question;
};


export const DailyQuestion = ({ question }: DailyQuestionProps) => {
    console.log(question)
    return (
        <div>
            <div className="question-date">{`Question #${question.id}`}</div>
            <div className="question-text">{question.text}</div>
            <div className="question-summary">{question.summary}</div>
        </div>
    )
}