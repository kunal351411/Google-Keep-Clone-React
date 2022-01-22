import React , {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {

    const [ isExpanded , setExpanded] = useState(false);

    const [ note , makeNote] = useState({
        title : "",
        content : "",
    });

    function handleChange(event)
    {
        const {name , value} = event.target;
        makeNote(prevValue => {

            return {
                ...prevValue,
                [name] : value
            }
           
        });
    }

    function expand()
    {
        setExpanded(true);
    }

  return (
    <div>
      <form className="create-note">
        { isExpanded && <input name="title" placeholder="Title" onChange={handleChange} value={note.title} autoFocus/>}
        <textarea name="content" placeholder="Take a note..." rows= { isExpanded ? "3" : "1" } onChange = {handleChange} onClick={expand} value={note.content} />
        <Zoom in ={isExpanded}>
            <Fab onClick={(event)=>
                props.onCreate(note , event , makeNote)    
                } > <AddIcon /> 
             </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
