
import { useNavigate , useLocation } from "react-router-dom";
import { CirclePlus} from "lucide-react";
import { useState,useEffect, useRef } from 'react';




const NotePage = () => {

  const [note, setnote] = useState([]);
  let navigate = useNavigate();

  let location= useLocation();
  let hasaddnote= useRef(false);

  
  useEffect(() => {
      let recievednote = location.state?.note || []
    if(recievednote && !hasaddnote.current){
      setnote((prev)=>[...prev,recievednote])
      hasaddnote.current=true
    }
  }, [recievednote]);

  let handleChange = (e)=>{
    setnote(e.target.value)
  }

  let redirect = () => {
    navigate("/defaultNotepage");
  };
  return (
    <div>

      
      <div className="bg-purple-200 min-h-screen ">
        <div>
          <h1 className="text-4xl font-bold text-center pt-10 ">
            Notes Taking App
          </h1>
        </div>

        <div>
          <button onClick={redirect} className="absolute right-0 bottom-0">
            <CirclePlus className="h-20 w-20" />
          </button>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-3 md:grid-cols-2">
          {Array.isArray(note)&& note.map((item,index)=>(
            <div onChange={handleChange} className="text-3xl " key={index}>
              the displayed note is:{item}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default NotePage;
