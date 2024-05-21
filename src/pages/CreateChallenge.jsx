import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { taskService } from "../services/taskService";

export default function CreateChallenge({ userData }) {
  const [challengeData, setChallengeData] = useState({
    challenge: "",
    description: "",
  });
  const navigate = useNavigate();

  const handleCreateChallenge = async () => {
    if (challengeData.challenge === "" || challengeData.description === "") {
      alert("Please fill all details!");
      return;
    }
    try {
      const res = await taskService.createChallenge(
        userData.id,
        challengeData.challenge,
        challengeData.description
      );
      if (res) {
        alert("Task Created Successfully");
        navigate("/challenges");
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.error("Error creating challenge:", error);
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
      <h2 className="text-center font-bold text-lg border-b border-lightgray w-900 mb-4">
        Create Challenge
      </h2>
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
            onClick={handleCreateChallenge}
            className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-700"
          >
            Create Challenge
          </button>
        </div>
      </div>
    </div>
  );
}
