import React from 'react'

interface projectProps {
    title:string;
    image:string;
    description: string;
    link: string;
}

const Project = (props:projectProps) => {
    const [title]= React.useState(props.title)
    const [image] = React.useState(props.image)
    const [description] = React.useState(props.description)
    const [link] = React.useState(props.link)

    return (
        <a href={link}>
            <div className="card">
                <img src={image} alt="" />
                <h5>{title}</h5>
                <p>{description}</p>
            </div>
        </a>
        
    )
}

export default Project