 import React from 'react';
 import './Card.css';

const Card = ({name, email, id}) => {
    return(
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img id="profPic" alt='robotProfile' src={`https://api.adorable.io/avatars/150/${name + id}@adorable.io.png`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>

    )
}

export default Card;