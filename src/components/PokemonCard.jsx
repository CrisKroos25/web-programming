import { useEffect, useState } from 'react'

export default function Card({name = "PIKACHU"}){
    return(
        <>
        <div className="card">
            <div className="card__container-img">
                <img className="card__img" src="/pikachu.webp" alt="" />
            </div>
            <h2 className="card__title">
                {name}
            </h2>
            <p 
                className="card__paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias asperiores, laudantium, aliquid porro, fuga soluta quis fugiat ad beatae libero repellendus et? Consequuntur iure nobis ratione vero excepturi eum veritatis.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nisi solisicing elitisicing elitisicing 
            </p>
        </div>
        </> 
    )
}

