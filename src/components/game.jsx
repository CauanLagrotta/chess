import { Chess } from 'chess.js'
import {BehaviorSubject} from 'rxjs'

import { useState } from "react";
import Board from "./board";

const chess = new Chess()

export const gameSubject = new BehaviorSubject({
    board: chess.board()
})

