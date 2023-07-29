import React from 'react'
export default function newsitem(props) {
  return (
    <>
  <div className="card" >
  <img src={props.imgurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.decription}</p>
    <a href={props.newsurl} target="blank" className="btn btn-primary">Go somewhere</a>
  </div>
</div>

    </>
  )
}
