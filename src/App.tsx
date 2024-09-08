import React, { useState } from 'react';
import ResumeForm from './ResumeForm';
import ResumeDisplay from './ResumeDisplay';
import './App.css'; // Import the CSS file

interface ResumeData {
  name: string;
  email: string;
  education: string;
  workExperience: string;
  skills: string;
}

const App: React.FC = () => {
  const [formData, setFormData] = useState<null | ResumeData>(null);

  const handleFormChange = (data: ResumeData) => {
    setFormData(data);
  };

  return (
    <div className="App">
      <ResumeForm onChange={handleFormChange} />
      {formData && <ResumeDisplay data={formData} />}
    </div>
  );
};

export default App;
