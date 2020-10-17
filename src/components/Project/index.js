import React from "react"

function Project({src, alt, deployed, linkone, repo, linktwo}){
    return (
        <div>
        <img src = {src} alt = {alt} height = "200" width = "300"/>
        <p><a className = "homework-link" href = {deployed}>{linkone}</a></p>
        <p><a className = "homework-link" href = {repo}>{linktwo}</a></p>
        </div>
    );
}

export default Project