import React from 'react';
import { useForm } from 'react-hook-form';

// Rename FormData to ResumeData
interface ResumeData {
  name: string;
  email: string;
  education: string;
  workExperience: string;
  skills: string;
}

const ResumeForm: React.FC<{ onChange: (data: ResumeData) => void }> = ({ onChange }) => {
  const { register, handleSubmit } = useForm<ResumeData>();

  const onSubmit = (data: ResumeData) => {
    onChange(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <h2>Resume Builder</h2>
      <label>
        Name:
        <input {...register('name', { required: true })} />
      </label>
      <label>
        Email:
        <input type="email" {...register('email', { required: true })} />
      </label>
      <label>
        Education:
        <textarea {...register('education', { required: true })} />
      </label>
      <label>
        Work Experience:
        <textarea {...register('workExperience', { required: true })} />
      </label>
      <label>
        Skills:
        <textarea {...register('skills', { required: true })} />
      </label>
      <button type="submit">Generate Resume</button>
    </form>
  );
};

export default ResumeForm;
