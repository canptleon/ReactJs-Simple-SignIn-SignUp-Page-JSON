import React, { useState } from 'react';

function HooksDeneme() {
  const [selected, setselected] = useState("merhaba");
  
  return (
    <div>
      <p> {selected}</p>
     { selected === "merhaba" ? 
       ( <button onClick={() => setselected(selected === "merhaba" ? "hello" : "merhaba")}>
            change
        </button>):(
             <button onClick={() => setselected(selected === "merhaba" ? "hello" : "merhaba")}>
             change2
         </button>
        )
      }

      
    </div>
  );
}
export default HooksDeneme