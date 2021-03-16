import React from 'react'

const Post = (props) => {      
    console.log(props);
      
    return (
        <div className='card'>
            <div className='card-body'>
                <h5 className='card-title'>{props.title}</h5>
            </div>
        </div>
    )
}

export default Post