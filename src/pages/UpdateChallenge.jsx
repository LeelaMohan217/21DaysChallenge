import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { taskService } from "../services/taskService";
import { CircleChevronLeft } from "lucide-react";

export default function UpdateChallenge() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [challengeData, setChallengeData] = useState({
    taskId: id,
    challenge: "",
    description: "",
  });

  useEffect(() => {
    const fetchTaskData = async () => {
      const data = await taskService.getTaskById(id);
      setChallengeData({
        taskId: data.task_id,
        challenge: data.task_name,
        description: data.task_description,
      });
    };
    fetchTaskData();
  }, [id]);

  const handleUpdateChallenge = async () => {
    if (challengeData.challenge === "" || challengeData.description === "") {
      alert("Please fill all details!");
      return;
    }
    try {
      const res = await taskService.updateChallenge(
        challengeData.taskId,
        challengeData.challenge,
        challengeData.description
      );
      if (res) {
        alert("Task Updated Successfully");
        navigate("/challenges");
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.error("Error updating challenge:", error);
      alert("Something went wrong: " + error.message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setChallengeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center mb-4">
        <CircleChevronLeft
          onClick={() => navigate("/challenges")}
          className="cursor-pointer w-8 h-8 text-black hover:text-red-500"
        />
        <h2 className="text-center font-bold text-lg border-b border-lightgray w-900 ml-4">
          Update Challenge
        </h2>
      </div>
      <div className="w-1000 border-2 border-lightgray rounded-lg p-4">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label className="font-bold text-lg" htmlFor="challenge">
              Challenge Name
            </label>
            <input
              type="text"
              id="challenge"
              name="challenge"
              value={challengeData.challenge}
              onChange={handleInputChange}
              className="border p-2 rounded"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-bold text-lg" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={challengeData.description}
              onChange={handleInputChange}
              className="border p-2 rounded"
            />
          </div>
          <button
            onClick={handleUpdateChallenge}
            className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-700"
          >
            Update Challenge
          </button>
        </div>
      </div>
    </div>
  );
}
