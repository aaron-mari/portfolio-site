import React, { Component } from 'react'

interface projectProps {
    title:string;
    image:string;
    description: string;
    link: string;
}

const Project = (props:projectProps) => {
    const [title, setTitle]= React.useState(props.title)
    const [image, setImage] = React.useState(props.image)
    const [description, setDescription] = React.useState(props.description)
    const [link, setLink] = React.useState(props.link)

    return (
        <a href={link}>
            <div className="card">
                <img src={image}/>
                <h5>{title}</h5>
                <p>{description}</p>
            </div>
        </a>
        
    )
}

export default Project