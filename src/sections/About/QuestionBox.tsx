import React from "react";
import { ArrowDown, ArrowUp } from "../../Icons";
import { Question } from "./QList";

interface Props {
  question: Question;
  isSelected: boolean;
  onSelect: (question: Question) => void;
}
const QuestionBox: React.FC<Props> = ({ question, isSelected, onSelect }) => {
  return (
    <div className="questions_box" onClick={() => onSelect(question)}>
      <div className="questions_box_top">
        <div className="questions_box_top_title_container ">
          <span className={`questions_box_top_title ${isSelected && "selected"}`}>{`0${question.id}`}</span>
          <span className={`questions_box_top_title ${isSelected && "selected"}`}>{question.title}</span>
        </div>
        {isSelected ? <ArrowDown /> : <ArrowUp />}
      </div>
      {isSelected && <p className="questions_box_body">{question.body}</p>}
    </div>
  );
};

export default QuestionBox;
