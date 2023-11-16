import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
const examsData = {
    primary: [
      { id: 1, title: 'Math Exam - Algebra' },
      { id: 2, title: 'Math Exam - Calculation' },
      { id: 3, title: 'Math Exam - Final' },
      { id: 4, title: 'English Exam - Reading Comprehension' },
      { id: 5, title: 'English Exam - Grammar' },
      { id: 6, title: 'English Exam - Vocabulary' },
      { id: 7, title: 'Social Studies Exam - Geography Basics' },
      { id: 8, title: 'Social Studies Exam - History Overview' },
      { id: 9, title: 'Social Studies Exam - Civics' },
      { id: 24, title: 'math Exam - primary 4 unit 1'}
    ],
    tvet: [
      { id: 10, title: 'Arts Exam - Drawing Techniques' },
      { id: 11, title: 'Arts Exam - Painting Fundamentals' },
      { id: 12, title: 'Arts Exam - Sculpture Principles' },
      { id: 13, title: 'Math Exam - Basic TVET Math' },
      { id: 14, title: 'Math Exam - Technical Calculations' },
    ],
    ttc: [
      { id: 15, title: 'Geography Exam - World Geography' },
      { id: 16, title: 'Geography Exam - Regional Studies' },
      { id: 17, title: 'Geography Exam - Environmental Science' },
      { id: 18, title: 'History Exam - Ancient Civilizations' },
      { id: 19, title: 'History Exam - Modern History' },
      { id: 20, title: 'History Exam - Cultural Heritage' },
      { id: 21, title: 'Math Exam - Basic TTC Math' },
      { id: 22, title: 'Math Exam - Statistical Analysis' },
      { id: 23, title: 'Entrepreneurship Exam - Business Fundamentals' },
    ],
  };

const ExamList = () => {
  const [selectedCategory, setSelectedCategory] = useState('primary');
  const [selectedLesson, setSelectedLesson] = useState('');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedLesson('');
  };

  const handleLessonChange = (lesson) => {
    setSelectedLesson(lesson);
  };

  return (
    <div> 
      <div>
      <Header/>
      </div>
    <div className="container mx-auto mt-20 mb-20">
      <div
        className="bg-cover bg-center h-64 mb-6"
        style={{
          backgroundImage:
            'url(https://png.pngtree.com/background/20210710/original/pngtree-primary-school-student-award-poster-background-material-picture-image_1051861.jpg)',
        }}
      >
        <h2 className="text-4xl font-semibold text-white p-8">Choose Your Category and Lesson</h2>
      </div>
      <div className="flex flex-col md:flex-row justify-between mb-4">
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <label className="block text-gray-700 text-sm font-bold mb-2">Category</label>
          <select
            value={selectedCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
            className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          >
            <option value="primary">Primary</option>
            <option value="tvet">Lower Level TVET</option>
            <option value="ttc">TTC</option>
          </select>
        </div>
        <div className="w-full md:w-1/2">
          <label className="block text-gray-700 text-sm font-bold mb-2">Lesson</label>
          <select
            value={selectedLesson}
            onChange={(e) => handleLessonChange(e.target.value)}
            className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          >
            <option value="">Select Lesson</option>
            {examsData[selectedCategory].map((lesson) => (
              <option key={lesson.id} value={lesson.title}>
                {lesson.title}
              </option>
            ))}
          </select>
        </div>
      </div>
      <h2 className="text-2xl font-semibold mb-4">Exam List</h2>
      <ul>
        {examsData[selectedCategory]
          .filter((exam) => !selectedLesson || exam.title === selectedLesson)
          .map((exam) => (
            <li key={exam.id} className="mb-4">
              <Link to={`/exam/${exam.id}`} className="text-blue-500 hover:underline">
                {exam.title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
    <div>
    <Footer/>
    </div>    
    </div>
  );
};

export default ExamList;
