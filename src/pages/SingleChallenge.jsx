import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { taskService } from "../services/taskService";
import { CircleArrowLeft } from "lucide-react";

export default function SingleChallenge() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [taskData, setTaskData] = useState({});
  const [completedDays, setCompletedDays] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const fetchTaskData = async () => {
      const data = await taskService.getTaskById(id);
      setTaskData(data);
      setCompletedDays(data.completedDays);
    };
    fetchTaskData();
  }, [id]);

  const handleUpdateDays = async (positive = true, isReset = false) => {
    try {
      let updatedCompletedDays = completedDays;
      if (isReset) {
        await taskService.updateTask(taskData.task_id, 0, true);
        updatedCompletedDays = 0;
      } else if (positive && completedDays < 21) {
        await taskService.updateTask(taskData.task_id, 1, false);
        updatedCompletedDays += 1;
      } else if (!positive && completedDays > 0) {
        await taskService.updateTask(taskData.task_id, -1, false);
        updatedCompletedDays -= 1;
      }
      setCompletedDays(updatedCompletedDays);
    } catch (error) {
      console.error("Error updating days:", error);
    }
  };

  return (
    <div className="w-1000 border-2 border-lightgray rounded-lg p-4">
      <div className="flex flex-col items-center">
        <CircleArrowLeft
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => navigate("/challenges")}
          className={`cursor-pointer w-8 h-8 ${
            isHovered ? "text-red-500" : "text-black"
          }`}
        />
        <h2 className="text-center font-bold text-lg border-b border-lightgray w-900 my-2">
          {taskData.task_name}
        </h2>
        <div className="flex justify-center gap-4 my-4">
          <button
            onClick={() => handleUpdateDays(true)}
            className="px-4 py-2 text-white border border-red-500 rounded hover:bg-red-500 hover:text-white"
          >
            Increase
          </button>
          <button
            onClick={() => handleUpdateDays(false)}
            className="px-4 py-2 text-white border border-red-500 rounded hover:bg-red-500 hover:text-white"
          >
            Decrease
          </button>
          <button
            onClick={() => handleUpdateDays("", true)}
            className="px-4 py-2 text-white border border-red-500 rounded hover:bg-red-500 hover:text-white"
          >
            Reset
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-between mx-auto w-900 gap-4">
        {[...Array(21)].map((_, index) => (
          <div key={index} className="flex items-center">
            <input
              type="checkbox"
              checked={index < completedDays}
              className="h-5 w-5"
              readOnly
            />
            <span className="ml-2 text-sm">Day {index + 1}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
