import React  from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

function Note(props) {

  
  return (
    <div className="note"  >
      <h1>{props.title}</h1>
      <p >{props.content}</p>
      <button onClick={() => {
          props.onDelete(props.id)
      }} > <DeleteIcon /> </button>
      <button onClick={() =>{
        props.onPin(props.id)
      }}  > { props.star ? <StarIcon/> : <StarBorderIcon /> } </button>
      <button onClick={() => {
      props.onNoteClick(props.id)
    }} > {props.expand ? <ExpandLessIcon /> : <ExpandMoreIcon /> } </button>
    </div>
  );
}

export default Note;
