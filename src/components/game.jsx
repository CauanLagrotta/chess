import * as Chess from "chess.js";
import {BehaviorSubject} from 'rxjs'

import { useState } from "react";
import { Board } from "./board.jsx";

const chess = new Chess()

export const gameSubject = new BehaviorSubject({
    board: chess.board()
})

