import Assignment from './Assignment'
import "./Course.css";

const Assignments = ({assignments, onDelete}) => {
    
  return (
    <>
      {assignments.map((i) => (
        <Assignment key={i.id} assignment={i} onDelete={onDelete}/>
      ))}
    </>
  );
};

export default Assignments;
