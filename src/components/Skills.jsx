// src/SkillsSection.jsx
import React from "react";
import { ScatterAppear } from "../animations/scatterAppear";

const skills = [
    { name: "AI/ML", imageUrl: "../../media/about/ml.png" },
    { name: "Bash", imageUrl: "../../media/about/bash.png" },
    { name: "Powershell", imageUrl: "../../media/about/powershell.png" },
    { name: "Linux", imageUrl: "../../media/about/linux.png" },
    { name: "VMware", imageUrl: "../../media/about/vmware.png" },
    { name: "Docker", imageUrl: "../../media/about/docker.png" },
    { name: "React", imageUrl: "../../media/about/react.png" },
    { name: "Tailwind", imageUrl: "../../media/about/tailwind.png" },
    { name: "SQL", imageUrl: "../../media/about/SQL.png" },
    { name: "C++", imageUrl: "../../media/about/c++.png" },
    { name: "JavaScript", imageUrl: "../../media/about/javascript.png" },
    { name: "HTML", imageUrl: "../../media/about/html.png" },
    { name: "CSS", imageUrl: "../../media/about/css.png" },
    { name: "Python", imageUrl: "../../media/about/python.png" },
    { name: "Java", imageUrl: "../../media/about/java.png" },
];

const SkillsSection = () => {
    const numSkills = skills.length;
    const skillRows = [];
    let index = 0;

    // Generate skill rows
    for (let i = 1; index < numSkills; i++) {
        const rowSkills = [];
        for (let j = 0; j < i && index < numSkills; j++) {
            rowSkills.push(skills[index++]);
        }
        skillRows.push(rowSkills);
    }

    return (
        <div className="flex flex-col items-center mx-auto">
    {skillRows.map((row, rowIndex) => (
        <div className="flex justify-center" key={rowIndex}>
            {row.map((skill, index) => (
                <ScatterAppear key={index} delay={1 + index * 0.35}> {/* 1-second initial delay, then staggered by 0.25 seconds */}
                    <div
                        className="flex flex-col items-center"
                        style={{ width: "120px", height: "120px" }}
                    >
                        <img
                            src={skill.imageUrl}
                            alt={skill.name}
                            className="w-20 h-20 object-contain aspect-square rounded-full"
                        />
                        <span className="text-sm text-white text-center">{skill.name}</span>
                    </div>
                </ScatterAppear>
            ))}
        </div>
    ))}
</div>
    );
};

export default SkillsSection;
