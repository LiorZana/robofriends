import React from 'react';


const Scroll = (props) => {
    return(
        <div style={{overflowY: 'scroll', border: '5px solid rgba(86, 148, 209, 0.3)', height:'700px'}}>
            {props.children};
        </div>
    );
}

export default Scroll;