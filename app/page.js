import About from "@/components/About";
import Contact from "@/components/Contact";
import Expertise from "@/components/Expertise";
import GoogleMap from "@/components/GoogleMap";
import Header from "@/components/Header";
import Project from "@/components/Project";
import Service from "@/components/Service";
import Video from "@/components/Video";

import React from "react";

function page() {
  // about page details
  const about = {
    description: `As a student, time constraints limited my ability to dedicate full
    effort to coding projects. However, with my experience in web
    development, I am now free to invest my skills and time into
    creating meaningful and impactful projects. Excited to unleash my
    full potential in the world of web development, I am prepared to
    take on challenges and contribute innovative solutions.`,
    frontEnd: `HTML,CSS,JavaScript`,
    backEnd: `PHP, JavaScript`,
    frameWorks: `Laravel, React js, Next js, Node js, Express js, Vue js, Bootstrap, Jquery (JavaScript Library)`,
    database: `Mysql, MongoDB`,
    programmingLanguage: `Python, C, C++, Java, JavaScript, PHP`,
    software: `MS Word, MS Powerpoint, MS Excel, Photoshop, Proteus`,
    projectComplete: `24`,
  };

  return (
    <div>
      <Header />
      <Video />
      <About
        description={about.description}
        frontEnd={about.frontEnd}
        backEnd={about.backEnd}
        frameWorks={about.frameWorks}
        database={about.database}
        programmingLanguage={about.programmingLanguage}
        software={about.software}
        projectComplete={about.projectComplete}
      />
      <Expertise />
      <Service />
      <Project />
      <Contact />
      <GoogleMap />
    </div>
  );
}

export default page;
