import React from 'react'

function ConditionalContent({page}) {
  switch(page){
    case 0:
        return (
            <div className="container-xl px-4 mt-n10">
                <div className="card">
                    <div className="card-header">
                        Not Eligible
                    </div>
                    <div className="card-body py-4">
                        <p>Current page : {page}</p>
                    </div>
                </div>
            </div>
        );
    case 1:
        return (
            <div className="container-xl px-4 mt-n10">
                <div className="card">
                    <div className="card-header">
                        Wh
                    </div>
                    <div className="card-body py-4">
                        <p>Current page : {page}</p>
                    </div>
                </div>
            </div>
        );
    case 2:
        return (
            <div className="container-xl px-4 mt-n10">
                <div className="card">
                    <div className="card-header">
                       Abscd
                    </div>
                    <div className="card-body py-4">
                        <p>Current page : {page}</p>
                    </div>
                </div>
            </div>
        );
    case 3:
        return (
            <div className="container-xl px-4 mt-n10">
                <div className="card">
                    <div className="card-header">
                        lallalalal
                    </div>
                    <div className="card-body py-4">
                        <p>Current page : {page}</p>
                    </div>
                </div>
            </div>
        );
    default:
        return (
            <div>ConditionalContent</div>
          )
  }
  
}

export default ConditionalContent