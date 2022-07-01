import React from 'react'
import ReferencesCard from './ReferencesCard'
import data from './data'

export default function References() {
    const card = data.map(item => {
        return(
            <ReferencesCard 
                item={item}
            />
        )
    })
    return(
        <>
            <section className='references'>
                <br/>
                <br/>
                <br/>
                {card}                
            </section>
        </>
    )
}

