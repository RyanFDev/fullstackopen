import Header from "./Header";

const Content = ({ course }) => (
  <div>
    {course.parts.map((part) => (
      <Part key={part.id} part={part} />
    ))}
  </div>
);

const Part = ({ part }) => (
  <li id={`part_${part.id}`}>
    {part.name} - {part.exercises} exercises
  </li>
);

const Total = ({course}) => {
  const total = course.parts.reduce((sum, part) => sum + part.exercises, 0);
  return (
    <p><b>Number of exercises {total}</b></p>
  )
}

const Course = ({ course }) => {
  return (
    <>
      <Header text={course.name} />
      <Content course={course} />
      <Total course={course} />
    </>
  );
};

export default Course;