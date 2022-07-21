import React from 'react'
import data_references from './data-references'

export default function References() {
    const referencesCard = data_references.map(item => {
        return(
            <section className='reference-card'>
                <div className='reference-title'>
                    {item.title}
                    <span className='reference-type'>{item.type}</span>
                </div>
                <div className='reference-link-container'>
                    <i className={item.tag}></i>
                    <a href={item.link} target='_blank'>{item.link}</a>
                </div>    
            </section>
        )
    })
    return(
        <>
            <section className='references'>
                <div className='refererences-title'><h1>References</h1></div>
                {referencesCard}                
            </section>
        </>
    )
}

