import React from 'react'

const Sort = ({hTol}) => {

	return(
		<div>
       <button className="btn btn-outline-success" onClick={() => hTol("h")}>
            High
          </button>
          <button className="btn btn-outline-success" onClick={() => hTol("l")}>
            low
          </button>
		</div>
	)
}

export default Sort