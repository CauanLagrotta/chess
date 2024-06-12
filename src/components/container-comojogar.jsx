import React from 'react';
import { Pieces } from './pieces.jsx';
import { datapieces } from '../data-pieces.jsx';

export function ContainerComojogar() {
  return (
    <div>
      {dataPieces.map((piece, index) => (
        <Pieces
          key={index}
          titlePiece={piece.titlePiece}
          descPiece={piece.descPiece}
          conferir={piece.conferir}
        />
      ))}
    </div>
  );
}