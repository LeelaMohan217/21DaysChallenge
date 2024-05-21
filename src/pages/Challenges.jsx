import React, { useEffect, useState } from "react";
import { taskService } from "../services/taskService";
import { useNavigate } from "react-router-dom";
import { Trash2, FilePenLine } from "lucide-react";

export default function Challenges({ userData }) {
  const [challenges, setChallenges] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    if (userData) {
      const challengesList = await taskService.getTasksByUserId(userData.id);
      setChallenges(challengesList);
    }
  };

  useEffect(() => {
    fetchData();
  }, [userData]);

  const handleDeleteClick = async (id) => {
    try {
      await taskService.deleteTask(id);
      setChallenges(challenges.filter((challenge) => challenge.task_id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div>
      {challenges.map((challenge) => (
        <div
          key={challenge.task_id}
          className="flex items-center justify-between w-full h-20 p-2 mb-2 border-none rounded-md bg-orange-500"
          onClick={() => navigate(`/challenge/${challenge.task_id}`)}
        >
          <div className="flex flex-col ml-4 cursor-pointer">
            <h3 className="text-xl font-bold text-white">
              {challenge.task_name}
            </h3>
            <p className="text-sm font-normal text-white">
              {challenge.task_description}
            </p>
          </div>
          <div className="pr-4">
            <FilePenLine
              className="w-8 h-8 text-white cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/update-challenge/${challenge.task_id}`);
              }}
            />
            <Trash2
              className="w-8 h-8 text-white cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                handleDeleteClick(challenge.task_id);
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
