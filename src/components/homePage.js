import React from 'react';

const HomePage = () => {
  const backgroundImage = 'url(https://res.cloudinary.com/ishimwe/image/upload/v1700137816/P5_urbcy1.jpg)';

  return (
    <div className="min-h-screen flex flex-col overflow-hidden mt-20 mb-20">

      <div className="flex-1 bg-cover bg-center" style={{ backgroundImage }}>
        <div className="bg-black bg-opacity-50 w-4/5 mx-auto text-white p-8">
          <h1 className="text-4xl font-semibold mb-4">Welcome to Our Exam Stimulation Platform</h1>

          <p className="text-lg mb-6">
            This platform is designed to facilitate exam preparation for students based on the Rwandan curriculum.
            Teachers can create exams for students, and students can practice for national exams. The platform includes
            auto-marked simulated exams to enhance the learning experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-75 p-4 rounded-md shadow-md">
              <h2 className="text-xl font-semibold mb-2">Primary school leaving exams practice</h2>
              <p>Some description about the feature.</p>
            </div>

            <div className="bg-white bg-opacity-75 p-4 rounded-md shadow-md">
              <h2 className="text-xl font-semibold mb-2">secondary and upgrady school exam practice</h2>
              <p>Some description about the feature.</p>
            </div>

            <div className="bg-white bg-opacity-75 p-4 rounded-md shadow-md">
              <h2 className="text-xl font-semibold mb-2">TVET Exam practice</h2>
              <p>Some description about the feature.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
