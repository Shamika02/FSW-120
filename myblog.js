import React from "react"


function myBlog(props) {
    console.log(props)
    return (
        <div className="my-blog">
            <hr/>
            <p>Title: {props.title}</p>
            <p>subTitle: {props.subTitle}</p>
            <p>author: {props.author}</p>
            <p>date: {props.date}</p>
        </div>
    )
}

export default myBlog