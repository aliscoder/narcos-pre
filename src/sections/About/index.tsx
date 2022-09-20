import React, { useCallback, useState } from "react";
import QuestionBox from "./QuestionBox";
import { Question, QuestionList } from "./QList";

const Questions = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(QuestionList[0]);
  const onSelectQuestion = useCallback((question: Question) => {
    setSelectedQuestion(question);
  }, []);
  return (
    <section className="questions-part" id="About">
      <div className="questions container">
        <span className="questions_header">FREQUENTLY ASKED QUESTIONS</span>
        <div className="questions_panel">
          {QuestionList.map((question) => (
            <QuestionBox
              key={question.id}
              question={question}
              isSelected={selectedQuestion.id === question.id}
              onSelect={onSelectQuestion}
            />
          ))}
        </div>{" "}
        <div className="questions_thumb">
          <img src="/images/Thumb.svg" />
        </div>
        <div className="questions_blood">
          <img src="/images/CheckBlood.svg" />
        </div>
      </div>
    </section>
  );
};

export default Questions;
