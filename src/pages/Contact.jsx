import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  const handleContactClick = () => {
    window.open("mailto:leelamohan217@gmail.com");
  };

  const handleLinkedinClick = () => {
    window.open("https://www.linkedin.com/in/leelamohan-n/");
  };

  const handleGithubClick = () => {
    window.open("https://github.com/LeelaMohan217");
  };

  return (
    <div className="flex flex-col bg-gray-200 w-[90vw] rounded-md p-8 mx-auto">
      <h2 className="text-2xl font-bold text-center border-b-2 border-gray-300 pb-2 mb-4">
        Contact
      </h2>
      <div className="w-full flex flex-col items-center mb-8">
        <p className="text-center">
          Hey, I'm{" "}
          <span className="font-bold text-lg">Leela Mohan Nethala</span> and you
          can reach me through the links below!
        </p>
      </div>
      <div className="flex items-center justify-center gap-8">
        <Linkedin
          onClick={handleLinkedinClick}
          className="w-10 h-10 cursor-pointer"
        />
        <Mail
          onClick={handleContactClick}
          className="w-10 h-10 cursor-pointer"
        />
        <Github
          onClick={handleGithubClick}
          className="w-10 h-10 cursor-pointer"
        />
      </div>
    </div>
  );
}
