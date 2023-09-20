import React from 'react'

function CARD(props) {
    
  return <>
  <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{props.data.plane}</h5>
            <h6 className="card-price text-center">${props.data.price}<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              <li className={props.data.userEnbler?'':"text-muted"}><span className="fa-li"><i className={props.data.userEnbler?"fas fa-check":"fas fa-times"}></i></span>{props.data.user}</li>
              <li className={props.data.StorageEnbler?'':"text-muted"}><span className="fa-li"><i className={props.data.StorageEnbler?"fas fa-check":"fas fa-times"}></i></span>{props.data. Storage}</li>
              <li className={props.data. publicprojectEnbler?'':"text-muted"}><span className="fa-li"><i className={props.data.publicprojectEnbler?"fas fa-check":"fas fa-times"}></i></span>{props.data.publicproject }</li>
              <li className={props.data.communityEnbler?'':"text-muted"}><span className="fa-li"><i className={props.data.communityEnbler?"fas fa-check":"fas fa-times"}></i></span>{props.data.community}</li>
              <li className={props.data. priviteprojectEnbler?'':"text-muted"}><span className="fa-li"><i className={props.data.priviteprojectEnbler?"fas fa-check":"fas fa-times"}></i></span>{props.data.priviteproject}</li>
              <li className={props.data.supportEnbler?'':"text-muted"}><span className="fa-li"><i className={props.data.supportEnbler?"fas fa-check":"fas fa-times"}></i></span>{props.data.suport}</li>
              <li className={props.data.SubdomainEnbler?'':"text-muted"}><span className="fa-li"><i className={props.data.SubdomainEnbler?"fas fa-check":"fas fa-times"}></i></span>{props.data.Subdomain} </li>
              <li className={props.data.ReportsEnbler?'':"text-muted"}><span className="fa-li"><i className={props.data.ReportsEnbler?"fas fa-check":"fas fa-times"}></i></span>{props.data. Reports}</li>
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
     
   
  </>
}

export default CARD