#!/usr/bin/env node

import { getArgs } from './helpers/args.js'

const initCLI = () => {
    const args = getArgs(process.argv)
    
    if ( args.h ) {
        // Вывод help
    }

    if ( args.s ) {
        // Сохранить города
    }

    if ( args.t ) {
        // Сохранить токен
    }

    // Вывести погоду
}

initCLI()