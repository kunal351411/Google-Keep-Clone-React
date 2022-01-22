import React ,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App() {

    const [notes , setNotes ] = useState([]);

   
   
    function addNote(note , event , makeNote)
    {
        const completeNote = {
          list : note,
          isPinned : false ,
          fullNote : false
        }
        setNotes(prevValue => {
            return [...prevValue, completeNote] 
        });

        
        makeNote({
            title : "",
            content : ""
        });


        event.preventDefault();
    }

    function deleteNote(id)
    {
        setNotes(prevValue => {
            return prevValue.filter((note,index) => {
                return id !== index;
            });
        });
    }

    function pinNote(id)
    {
      setNotes(prevValue => {
            const pinned = prevValue[id];
            const newList = prevValue.filter((note,index) => {
                return id !== index;
            });
            if (pinned.isPinned)
            {
                pinned.isPinned = false;
                return [ ...newList , pinned];
            }
            else
            {
                  pinned.isPinned = true  ; 
                  return [ pinned , ...newList ];
            }
        });
    }

    function expandNote(id)
    {
      setNotes( prevValue => {
        prevValue[id].fullNote = prevValue[id].fullNote ? false : true ;
        return [...prevValue];
      });
    }


  return (
    <div>
      <Header />
      <CreateArea onCreate={addNote} />
      {
          notes.map((note,index) => {
             const eclipse = note.list.content.length > 20 ? "..." : "";
            return <Note key={index} id={index} title={note.list.title} content={note.fullNote ? note.list.content : (note.list.content.substring(0,20) + eclipse  )} star = {note.isPinned} expand ={note.fullNote} onDelete={deleteNote} onPin={pinNote} onNoteClick={expandNote} />
          })
      } 
      <Footer />
    </div>
  );
}

export default App;

