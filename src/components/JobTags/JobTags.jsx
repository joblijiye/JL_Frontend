import React from 'react';
import './JobTags.css'

const jobTags = [
  "Full Stack Developer", "Back End Developer", "Graphic Designer", "UI Designer",
  "UX Designer", "Product Designer", "3D Designer", "Social Media Specialist",
  "Marketing", "Software Developer", "Software Engineer", "Product Manager",
  "Data Science", "Data Analysis", "Front End Developer", "Sales Management",
  "Branding Management", "Office Admin"
];

const colors = {
  "Back End Developer": "bg-pink-500 text-white",
  "Front End Developer": "bg-orange-500 text-white",
  "Social Media Specialist": "bg-green-500 text-white",
  "Software Developer": "bg-teal-500 text-white",
};

function JobTags() {
  const splitIndex = Math.ceil(jobTags.length / 2);
  const firstLineTags = jobTags.slice(0, splitIndex);
  const secondLineTags = jobTags.slice(splitIndex);

  return (
    <div className="mt-1 flex flex-col space-y-4">
      <div className="overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-marquee-rtl">
          {firstLineTags.map(tag => (
            <div key={tag} className={`inline-block px-4 py-2 mx-2 rounded-full border border-gray-300 ${colors[tag] || ''}`}>
              {tag}
            </div>
          ))}
        </div>
      </div>
      <div className="overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-marquee-ltr">
          {secondLineTags.map(tag => (
            <div key={tag} className={`inline-block px-4 py-2 mx-2 rounded-full border border-gray-300 ${colors[tag] || ''}`}>
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default JobTags;
