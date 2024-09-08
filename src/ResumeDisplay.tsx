import React from 'react';

interface ResumeData {
  name: string;
  email: string;
  education: string;
  workExperience: string;
  skills: string;
}

const ResumeDisplay: React.FC<{ data: ResumeData }> = ({ data }) => {
  return (
    <div className="resume">
      <h1>{data.name}</h1>
      <p>Email: {data.email}</p>
      <h2>Education</h2>
      <p>{data.education}</p>
      <h2>Work Experience</h2>
      <p>{data.workExperience}</p>
      <h2>Skills</h2>
      <p>{data.skills}</p>
      <div className="credit">
        Created by Muhammad Ibrahim Khan
      </div>
    </div>
  );
};

export default ResumeDisplay;
