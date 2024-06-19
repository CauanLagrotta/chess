import React, { useEffect } from 'react'
import { gameSubject } from './game';

export function ContainerJogar() {
    useEffect(() => {
        const subscribe = gameSubject.subscribe(game => {
            
        })
    }, [])
    
}            
