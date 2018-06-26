import React from "react";
import { Link } from 'react-router-dom';


function NavTop () {

  return(
    <div className="nav-top">
      <style jsx>{`
          .nav-top{
            min-height: 100px;
            display: flex;
            justify-content: space-around;
          }
          `}
      </style>


        <Link style={{ textDecoration: 'none', marginTop: '50px' }}to="/">Home</Link>
        <Link style={{ textDecoration: 'none', marginTop: '50px' }}to="/produce">Produce</Link>
        <Link style={{ textDecoration: 'none', marginTop: '50px' }}to="/schedule">Schedule</Link>

    </div>
  );
}

export default NavTop;
