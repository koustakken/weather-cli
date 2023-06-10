#!/usr/bin/env node

import { getArgs } from './helpers/args.js'
import { printError, printHelp, printSuccess } from './services/log.service.js'

const initCLI = () => {
    const args = getArgs(process.argv)
    
    if ( args.h ) {
        // Вывод help]
        printHelp()
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