import { ArrowRight } from "lucide-react";
import React from "react";

export default function About() {
  return (
    <div className="flex flex-col bg-gray-200 w-[90vw] rounded-md p-0 mt-0 mx-auto">
      <h4 className="font-bold text-2xl text-center py-5 border-b-2 border-gray-300">
        About this App
      </h4>
      <p className="font-bold pt-5 mx-12">Welcome to 21 Days Challenge</p>
      <p className="pt-5 mx-12">
        At 21 Days Challenge, we're dedicated to helping you cultivate lasting
        habits that lead to personal growth and productivity. Our platform is
        designed to make habit formation simple and sustainable.
      </p>
      <p className="font-bold pt-5 mx-12">
        So, what exactly does our application do?
      </p>
      <div className="pt-5 mx-12 flex">
        <span>
          <ArrowRight />
        </span>
        <p className="mx-4">
          Imagine having a tool that not only helps you create tasks but also
          guides you through maintaining them for a crucial period of time.
          That's precisely what Welcome to 21 Days Challenge offers.
        </p>
      </div>
      <div className="pt-5 mx-12 flex">
        <span>
          <ArrowRight />
        </span>
        <p className="mx-4">
          With our user-friendly interface, you can effortlessly create tasks
          tailored to your goals, whether it's exercising more, reading
          regularly, or practicing a new skill. But here's the magic: we
          understand that forming habits takes time, which is why our platform
          is built around the science-backed concept that it takes approximately
          21 days to establish a habit.
        </p>
      </div>
      <div className="pt-5 mx-12 flex">
        <span>
          <ArrowRight />
        </span>
        <p className="mx-4">
          Using proven techniques, 21 Days Challenge assists you in maintaining
          your tasks consistently over this critical 21-day period. By providing
          reminders, progress tracking, and motivational support, we empower you
          to stay committed and build habits that stick.
        </p>
      </div>
      <div className="py-5 mx-12 flex">
        <span>
          <ArrowRight />
        </span>
        <p className="mx-4">
          So, whether you're striving to boost your productivity, improve your
          well-being, or enhance any aspect of your life, let 21 Days Challenge
          be your trusted companion on your journey to positive change. Start
          today and witness the transformation as your habits evolve into
          lasting behaviors that shape your future.
        </p>
      </div>
    </div>
  );
}
