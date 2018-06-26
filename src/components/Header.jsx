import React from "react";

function Header(){
  return (
    <div className="header">

        <h1>Avery's Organics</h1>
      <p>Your go to for the best produce Oregon has to offer</p>
        <style jsx>{`
            .header {
              background-image: url(https://images.unsplash.com/photo-1474440692490-2e83ae13ba29?ixlib=rb-0.3.5&s=5ab60a0d1fc6c20c1733e288f78e65af&auto=format&fit=crop&w=1350&q=80);
              background-size: cover;
              min-height: 800px;
              color: #fff;
              text-align: center;
              display: flex;
              flex-direction: column;
              justify-content: center;
            }
            .header h1{
              font-size: 5rem;
            }
            .header p{
              font-size: 1.3rem;
            }
            `}</style>
    </div>
  );
}

export default Header;
