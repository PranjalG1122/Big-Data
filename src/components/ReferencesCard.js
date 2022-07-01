import React from 'react'

export default function ReferencesCard(props) {
    return(
        <>
        <section className='reference-card'>
            <div className='reference-title'>
                {props.item.title}
                <span className='reference-type'>{props.item.type}</span>
            </div>
            <div className='reference-link-container'>
                <i className={props.item.tag}></i>
                <a href={props.item.link} target='_blank'>{props.item.link}</a>
            </div>    
        </section>
        </>
    )
}