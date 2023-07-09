import React, { useState } from "react";
import { DBoard } from "../DBoard";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { putQuestion } from "../../helper/helper";

// Inside your component
export const Updatequestion = () => {
  const { id, _id } = useParams();
  const [ans, setans] = useState(-1);
  const handleQuestionChange = (e) => {
    setNewObject({ ...newObject, question: e.target.value, id: indx });
  };
  const notifySuccess = () => {
    toast.success("Successfull operation");
  };
  const handleOptionChange = (e, index) => {
    const updatedOptions = [...newObject.options];
    updatedOptions[index] = e.target.value;
    setNewObject({ ...newObject, options: updatedOptions, id: indx });
  };
  const handleanswerChange = (e) => {
    setans((prevans) => {
      prevans = e.target.value;
      setNewObject({
        ...newObject,
        answers: { id: id, ans: prevans },
        id: indx,
      });
      return prevans;
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setNewObject({
      id: indx,
      question: question.question,
      options: question.options,
      answers: answer,
    });
  };

  const question2 = useSelector((state) => state.question.queue);
  const [question] = question2.filter((x) => x.id === id);
  const indx = question2.findIndex((x) => x.id === id);
  const answer = useSelector((state) => state.question.answers[indx]);
  const [newObject, setNewObject] = useState({
    id: indx,
    question: question.question,
    options: question.options,
    answers: answer,
  });
  const commit = async () => {
    try {
      const response = await putQuestion(
        `${process.env.REACT_APP_SERVER_HOSTNAME}/api/questions`,
        { _id, newObject }
      );
      if (response) {
        notifySuccess();

        console.log("Data sent successfully");
      }
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  return (
    <body style={{ backgroundColor: "white" }}>
      <div id="root"></div>
      <div class="flex ">
        <DBoard />
        <div
          class="custom ml-14 ;
w-full   "
        >
          <div class="  bg-indigo-100 container ">
            <div class="  my-3 p-0">
              <div class="p-0 m-0 font-serif flex justify-center font-light text-xl ">
                {" "}
                Enter the details of the new question
              </div>
              <form onSubmit={handleSubmit}>
                <div class="flex flex-col ...">
                  <div class="flex flex-row my-3">
                    <textarea
                      class="w-full h-32 font-serif  p-2"
                      type="text"
                      required
                      defaultValue={question?.question}
                      placeholder={`Question:`}
                      id="question"
                      onChange={handleQuestionChange}
                    />{" "}
                  </div>
                  <div class="flex flex-row my-3">
                    <input
                      class="w-full h-10 font-serif p-2 "
                      type="text"
                      id="option1"
                      defaultValue={question?.options[0]}
                      placeholder="option1"
                      required
                      onChange={(e) => handleOptionChange(e, 0)}
                    />

                    <input
                      placeholder="option2"
                      required
                      type="text"
                      defaultValue={question?.options[1]}
                      class="w-full ml-5 font-serif p-2"
                      id="option2"
                      onChange={(e) => handleOptionChange(e, 1)}
                    />
                  </div>
                  <div class="flex flex-row my-3 ">
                    <input
                      class="w-full h-10 font-serif p-2"
                      type="text"
                      id="option3"
                      defaultValue={question?.options[2]}
                      placeholder="option3"
                      required
                      onChange={(e) => handleOptionChange(e, 2)}
                    />

                    <input
                      type="text"
                      id="option4"
                      class="w-full ml-5 font-serif p-2"
                      placeholder="option4"
                      defaultValue={question?.options[3]}
                      required
                      onChange={(e) => handleOptionChange(e, 3)}
                    />
                  </div>
                  <div class="flex flex-row">
                    <div class="basis-full">
                      <input
                        class="w-full h-10 font-serif p-2"
                        type="text"
                        id="answer"
                        defaultValue={answer.ans}
                        required
                        placeholder="Correct Answer"
                        onChange={handleanswerChange}
                      />
                    </div>
                  </div>
                  <div class="flex justify-between">
                    <button
                      type="submit"
                      class="btnn2  bg-green-600    flex justify-center"
                      onClick={commit}
                    >
                      Update
                    </button>{" "}
                  </div>
                </div>{" "}
              </form>
            </div>
          </div>
          <ToastContainer />
        </div>
      </div>
    </body>
  );
};
