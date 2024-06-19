import React, { useEffect, useState } from 'react'
import { gameSubject } from './game';
import { Board } from './board';


export function ContainerJogar() {
    const [board, setBoard] = useState([])
    useEffect(() => {
        const subscribe = gameSubject.subscribe((game) => 
            setBoard(game.board)

    )
        return () => subscribe.unsubscribe()
        
    }, [])
    
    return 
        <div>
            <Board board={board}/>

            
        </div>
}            
