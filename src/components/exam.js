import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import 'react-toastify/dist/ReactToastify.css';
import 'sweetalert2/dist/sweetalert2.css';
import Footer from "../components/footer";
import Header from './header';

const dummyExams = [
    { id: 1, title: 'Math Exam - Algebra', questions: [
      { id: 1, text: 'What is 2 + 2?', options: ['3', '4', '5', '6'], correctAnswer: '4' },
      { id: 2, text: 'Multiply 5 by 3', options: ['10', '12', '15', '18'], correctAnswer: '15' },
      { id: 3, text: 'Subtract 7 from 10', options: ['1', '3', '5', '7'], correctAnswer: '3' },
      { id: 4, text: 'Divide 12 by 4', options: ['2', '3', '4', '5'], correctAnswer: '3' },
      { id: 5, text: 'What is the square root of 25?', options: ['3', '4', '5', '6'], correctAnswer: '5' },
    ]},
    { id: 2, title: 'Math Exam - Calculation', questions: [
      { id: 1, text: 'Solve: 8 * (3 + 5)', options: ['48', '56', '64', '72'], correctAnswer: '64' },
      { id: 2, text: 'If x = 10, what is 2x?', options: ['18', '20', '22', '24'], correctAnswer: '20' },
      { id: 3, text: 'What is the result of 15 / 3?', options: ['3', '5', '7', '9'], correctAnswer: '5' },
      { id: 4, text: 'Calculate: 4^2', options: ['8', '12', '16', '20'], correctAnswer: '16' },
      { id: 5, text: 'If y = 3, what is y + 7?', options: ['8', '10', '12', '14'], correctAnswer: '10' },
    ]},
    { id: 3, title: 'Math Exam - Final', questions: [
      { id: 1, text: 'What is 3 multiplied by 4?', options: ['9', '12', '15', '18'], correctAnswer: '12' },
      { id: 2, text: 'Add 7 and 5', options: ['10', '12', '15', '18'], correctAnswer: '12' },
      { id: 3, text: 'Subtract 9 from 15', options: ['3', '6', '9', '12'], correctAnswer: '6' },
      { id: 4, text: 'Divide 20 by 4', options: ['2', '4', '5', '6'], correctAnswer: '5' },
      { id: 5, text: 'What is the square of 7?', options: ['36', '49', '64', '81'], correctAnswer: '49' },
    ]},
    { id: 4, title: 'English Exam - Reading Comprehension', questions: [
      { id: 1, text: 'Read the passage and answer: ...', options: ['Option A', 'Option B', 'Option C', 'Option D'], correctAnswer: 'Option B' },
      { id: 2, text: 'What does the word "meticulous" mean?', options: ['Careless', 'Thorough', 'Confused', 'Energetic'], correctAnswer: 'Thorough' },
      { id: 3, text: 'Identify the main idea of the passage.', options: ['Option A', 'Option B', 'Option C', 'Option D'], correctAnswer: 'Option A' },
      { id: 4, text: 'Choose the synonym for "abundant".', options: ['Scarce', 'Plentiful', 'Limited', 'Sparse'], correctAnswer: 'Plentiful' },
      { id: 5, text: 'What is the author\'s tone in the passage?', options: ['Joyful', 'Neutral', 'Sad', 'Angry'], correctAnswer: 'Neutral' },
    ]},
    { id: 5, title: 'English Exam - Grammar', questions: [
      { id: 1, text: 'Identify the subject in the sentence: "The cat is sleeping."', options: ['The', 'Cat', 'Is', 'Sleeping'], correctAnswer: 'Cat' },
      { id: 2, text: 'Choose the correct form of the verb: "She _____ to the store."', options: ['Goes', 'Go', 'Going', 'Gone'], correctAnswer: 'Goes' },
      { id: 3, text: 'What is the plural form of "child"?', options: ['Childs', 'Child', 'Children', 'Childs\'s'], correctAnswer: 'Children' },
      { id: 4, text: 'Which sentence is in the passive voice?', options: ['She sings a song.', 'The cake was baked by Mary.', 'I eat pizza.', 'They are playing outside.'], correctAnswer: 'The cake was baked by Mary.' },
      { id: 5, text: 'Choose the correct pronoun: "Tom and _____ went to the park."', options: ['He', 'Him', 'His', 'Himself'], correctAnswer: 'He' },
    ]},
    { id: 6, title: 'English Exam - Vocabulary', questions: [
      { id: 1, text: 'What does "ephemeral" mean?', options: ['Permanent', 'Temporary', 'Stable', 'Enduring'], correctAnswer: 'Temporary' },
      { id: 2, text: 'Choose the synonym for "ubiquitous".', options: ['Rare', 'Common', 'Scarce', 'Unique'], correctAnswer: 'Common' },
      { id: 3, text: 'What is the antonym of "benevolent"?', options: ['Kind', 'Generous', 'Malevolent', 'Altruistic'], correctAnswer: 'Malevolent' },
      { id: 4, text: 'Define the word "serendipity".', options: ['Misfortune', 'Luck', 'Tragedy', 'Disaster'], correctAnswer: 'Luck' },
      { id: 5, text: 'Choose the correct meaning of "ephemeral".', options: ['Permanent', 'Lasting', 'Temporary', 'Enduring'], correctAnswer: 'Temporary' },
    ]},
    { id: 7, title: 'Social Studies Exam - Geography Basics', questions: [
      { id: 1, text: 'What is the capital of Canada?', options: ['Toronto', 'Ottawa', 'Vancouver', 'Montreal'], correctAnswer: 'Ottawa' },
      { id: 2, text: 'In which continent is the Amazon Rainforest located?', options: ['South America', 'Africa', 'Asia', 'North America'], correctAnswer: 'South America' },
      { id: 3, text: 'Identify the largest ocean on Earth.', options: ['Atlantic Ocean', 'Indian Ocean', 'Southern Ocean', 'Pacific Ocean'], correctAnswer: 'Pacific Ocean' },
      { id: 4, text: 'What is the prime meridian?', options: ['Equator', 'Tropic of Cancer', 'Tropic of Capricorn', '0 degrees longitude'], correctAnswer: '0 degrees longitude' },
      { id: 5, text: 'Which is the longest river in the world?', options: ['Amazon River', 'Nile River', 'Yangtze River', 'Mississippi River'], correctAnswer: 'Nile River' },
    ]},
    { id: 8, title: 'Social Studies Exam - History Overview', questions: [
      { id: 1, text: 'Who was the first President of the United States?', options: ['George Washington', 'Thomas Jefferson', 'Abraham Lincoln', 'John Adams'], correctAnswer: 'George Washington' },
      { id: 2, text: 'In which year did World War II end?', options: ['1943', '1945', '1947', '1950'], correctAnswer: '1945' },
      { id: 3, text: 'What is the Magna Carta?', options: ['Declaration of Independence', 'Constitution', 'Bill of Rights', 'Medieval legal document'], correctAnswer: 'Medieval legal document' },
      { id: 4, text: 'Who was known as the "Maid of Orleans"?', options: ['Joan of Arc', 'Cleopatra', 'Queen Elizabeth I', 'Catherine the Great'], correctAnswer: 'Joan of Arc' },
      { id: 5, text: 'What is the Renaissance?', options: ['Ancient Greek period', 'Medieval period', 'Revolutionary period', 'Period of renewed interest in art and learning'], correctAnswer: 'Period of renewed interest in art and learning' },
    ]},
    { id: 9, title: 'Social Studies Exam - Civics', questions: [
      { id: 1, text: 'What is the main function of the judicial branch?', options: ['Enforce laws', 'Make laws', 'Interpret laws', 'Conduct elections'], correctAnswer: 'Interpret laws' },
      { id: 2, text: 'How many amendments are in the U.S. Constitution?', options: ['10', '20', '27', '30'], correctAnswer: '27' },
      { id: 3, text: 'Who has the power to declare war in the U.S.?', options: ['President', 'Congress', 'Supreme Court', 'Governors'], correctAnswer: 'Congress' },
      { id: 4, text: 'What is the purpose of the Bill of Rights?', options: ['Limit the power of government', 'Establish a national religion', 'Define the role of the president', 'Regulate trade between states'], correctAnswer: 'Limit the power of government' },
      { id: 5, text: 'Who is the Chief Justice of the U.S. Supreme Court?', options: ['John Roberts', 'Ruth Bader Ginsburg', 'Clarence Thomas', 'Stephen Breyer'], correctAnswer: 'John Roberts' },
    ]},
  
    // TVET Exams
    { id: 10, title: 'Arts Exam - Drawing Techniques', questions: [
      { id: 1, text: 'Who is known for the "Starry Night" painting?', options: ['Pablo Picasso', 'Vincent van Gogh', 'Leonardo da Vinci', 'Claude Monet'], correctAnswer: 'Vincent van Gogh' },
      { id: 2, text: 'What is chiaroscuro?', options: ['Sculpture technique', 'Drawing technique using light and shadow', 'Painting on glass', 'Abstract art style'], correctAnswer: 'Drawing technique using light and shadow' },
      { id: 3, text: 'Define the term "composition" in art.', options: ['Style of painting', 'Arrangement of visual elements', 'Type of sculpture', 'Artistic movement'], correctAnswer: 'Arrangement of visual elements' },
      { id: 4, text: 'Who created the sculpture "David"?', options: ['Michelangelo', 'Donatello', 'Leonardo da Vinci', 'Raphael'], correctAnswer: 'Michelangelo' },
      { id: 5, text: 'What is the primary color wheel?', options: ['Red, Blue, Yellow', 'Green, Orange, Purple', 'Red, Green, Blue', 'Yellow, Cyan, Magenta'], correctAnswer: 'Red, Blue, Yellow' },
    ]},
    { id: 11, title: 'Arts Exam - Painting Fundamentals', questions: [
      { id: 1, text: 'What artistic movement does Salvador Dali belong to?', options: ['Cubism', 'Surrealism', 'Impressionism', 'Abstract Expressionism'], correctAnswer: 'Surrealism' },
      { id: 2, text: 'Who painted the Mona Lisa?', options: ['Pablo Picasso', 'Vincent van Gogh', 'Leonardo da Vinci', 'Claude Monet'], correctAnswer: 'Leonardo da Vinci' },
      { id: 3, text: 'Define the term "impressionism" in art.', options: ['Realistic portrayal', 'Abstract art', 'Expression of emotions', 'Capture of light and atmosphere'], correctAnswer: 'Capture of light and atmosphere' },
 ] },
 { id: 24, title: 'math Exam - primary 4 unit 1', questions:[
  { id: 1, text: 'What is the largest 5-digit number that can be formed from the digits 0, 3, 2, 4, 1, 5?', options: ['54321', '54310', '54325', '54351'], correctAnswer: '54321' },
  { id: 2, text: 'Write the following numbers in figures:', options: ['24,707', '124,770', '34,777', '24,770'], correctAnswer: '24,707' },
  { id: 3, text: 'Write the following in short form:', options: ['4,000 + 200 + 70 + 3', '50,000 + 500 + 30 + 2', '4,400 + 200 + 10 + 3', '9,999'], correctAnswer: '4,000 + 200 + 70 + 3' },
  { id: 4, text: 'In a school with 888 pupils, three girls were voted for the post of head girl. Which girl obtained the greatest number of votes?', options: ['Umuhoza Bianca', 'Ineza Rebecca', 'Uwimana Christa', 'Not specified'], correctAnswer: 'Uwimana Christa' },
  { id: 5, text: 'On a school trip to Akagera National Game Park, we counted 123 zebras, 10 buffaloes, 21 wild pigs, and 14 giraffes. How many giraffes and zebras did we count?', options: ['137', '144', '133', '121'], correctAnswer: '137' },
  { id: 6, text: 'Fill the missing digits in the addition grids below:', options: ['2371', '3777', '4444', '117754'], correctAnswer: '2371' },
  { id: 7, text: 'A shopkeeper in Kimironko main market had the following daily records of sales. What was the value of goods sold on Monday?', options: ['24,750 Frw', '24,450 Frw', '40,765 Frw', '24,000 Frw'], correctAnswer: '24,750 Frw' },
  { id: 8, text: 'A school water tank holds 100,000 liters of water. P5 pupils use 12,500 liters and P6 pupils use 67,500 liters. How much water remains in the tank?', options: ['19,000 liters', '20,000 liters', '10,000 liters', '30,000 liters'], correctAnswer: '20,000 liters' },
  { id: 9, text: 'By how much is 67,999 greater than 45,908?', options: ['21,091', '22,000', '22,091', '20,999'], correctAnswer: '22,091' },
  { id: 10, text: 'Work out:', options: ['2,387', '21,060', '24,150', '11,300'], correctAnswer: '2,387' },
  { id: 11, text: 'Each tray of eggs contains 30 eggs. How many eggs are in 22 trays?', options: ['660', '720', '660', '640'], correctAnswer: '660' },
  { id: 12, text: 'Work out:', options: ['30', '6,345', '12,678', '2,679'], correctAnswer: '6,345' },
  { id: 13, text: 'A father had 23 sweets and decided to give the sweets to his four children equally. How many sweets did each child get?', options: ['6', '5', '4', '7'], correctAnswer: '5' },
  { id: 14, text: 'A class has 67 pupils. A teacher wants to form groups of 4 pupils each. How many groups were formed in the class?', options: ['16', '17', '18', '15'], correctAnswer: '16' },
]}

]
  
  
const Exam = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [exam, setExam] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const selectedExam = dummyExams.find((exam) => exam.id === parseInt(id));
    setExam(selectedExam);
    setAnswers(Array(selectedExam?.questions.length).fill(null));
    setLoading(false);
  }, [id]);

  const handleAnswerChange = (questionId, answer) => {
    setAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      const questionIndex = exam?.questions.findIndex((q) => q.id === questionId);
      newAnswers[questionIndex] = answer;
      return newAnswers;
    });
  };

  const handleSubmit = () => {
    if (answers.includes(null)) {
      // Display SweetAlert to finish all questions
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Please answer all questions before submitting!',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK',
      });
    } else {
      // Identify correct and incorrect answers
      const results = exam.questions.map((question, index) => {
        return {
          id: question.id,
          text: question.text,
          userAnswer: answers[index],
          correctAnswer: question.correctAnswer,
          isCorrect: answers[index] === question.correctAnswer,
        };
      });
  
      // Calculate and display the score and percentage
      const totalQuestions = exam.questions.length;
      const correctAnswers = results.filter((result) => result.isCorrect).length;
      const percentage = (correctAnswers / totalQuestions) * 100;
  
      // Display results in a SweetAlert
      Swal.fire({
        icon: correctAnswers > 50 ? 'success' : 'error',
        title: correctAnswers > 50 ? 'Congratulations!' : 'Oops, failed!',
        html: `You scored <strong>${correctAnswers}/${totalQuestions}</strong> (${percentage.toFixed(2)}%)`,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK',
        showCancelButton: false,
        showCloseButton: false,
      }).then(() => {
        // Display a dialog with questions passed and failed
        const resultsHtml = results
          .map(
            (result) =>
              `<p><strong class="${result.isCorrect ? 'correct' : 'incorrect'}">Question ${result.id}:</strong> ${result.text}<br/> Your Answer: ${result.userAnswer}, Correct Answer: ${result.correctAnswer}<br/> Result: ${
                result.isCorrect ? 'Passed' : 'Failed'
              }</p>`
          )
          .join('');
  
        Swal.fire({
          title: 'Exam Results',
          html: resultsHtml,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
          didOpen: () => {
            // If there are failed questions, mark them in red
            const incorrectQuestionElements = Swal.getPopup().querySelectorAll('.incorrect');
            if (incorrectQuestionElements) {
              incorrectQuestionElements.forEach((element) => {
                element.style.color = 'red';
              });
            }
          },
        }).then(() => {
          // Redirect to the exam list page
          navigate('/exams');
        });
      });
    }
  };
  

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div>
        <Header/>
      </div>
    <div className="container mx-auto mt-20 p-4 bg-gray-100 rounded-md shadow-md mb-20">
      <h2 className="text-3xl font-semibold mb-6 text-center">{exam.title}</h2>
      <form>
        {exam.questions.map((question) => (
          <div key={question.id} className="mb-6">
            <p className="text-lg font-medium mb-2">{question.text}</p>
            <div>
              {question.options.map((option, optionIndex) => (
                <label key={optionIndex} className="block mb-2">
                  <input
                    type="radio"
                    name={`question_${question.id}`}
                    value={option}
                    checked={answers[question.id - 1] === option}
                    onChange={() => handleAnswerChange(question.id, option)}
                    className="mr-2"
                    disabled={loading}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={handleSubmit}
          className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 w-full"
          disabled={loading}
        >
          Submit Exam
        </button>
      </form>
    </div>
    <div>
    <Footer/>
    </div>
    </div>
  );
};

export default Exam;
