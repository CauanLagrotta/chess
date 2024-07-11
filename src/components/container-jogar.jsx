import React, { useEffect, useState } from 'react'
import { gameSubject } from './game.js';
import Board from './Board.jsx';
import './chessboard.css';

export function ContainerJogar() {
    const [board, setBoard] = useState([])
    useEffect(() => {
        const subscribe = gameSubject.subscribe((game) => {
            setBoard(game.board); 
        }
                                                    
    )
        return () => subscribe.unsubscribe()
        
    }, [])
    
    return (
        <div className='container'>
            <div className='board-container'>
                <Board board={board} turn={turn}/>
            </div>
        </div>
    )
}            
