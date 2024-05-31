
import './App.css';
import react, { useState, useEffect } from "react"

import  {get_data} from "./api";



import Card from "./card";


function App() {

 const [data,setData]=useState(null);

 
 


  useEffect(()=>{

     get_data().then((user)=>{
       setData(user.results[0]);
     });
     

  },[])

  const refresh=()=>{
    get_data().then((user)=>{
      setData(user.results[0]);
    });
  }



  return (
    

  
 <div>
{
 data &&  <Card data={data} />

}
<div className='flex justify-center items-center mt-12'>
<div className='px-[24px] py-[12px] bg-cyan-600 text-white border-gray-200 border-2 shadow-slate-200 shadow-xl rounded-lg'>
          <button onClick={refresh}>Refresh</button>
        </div>

</div>

</div>





  );
}

export default App;


