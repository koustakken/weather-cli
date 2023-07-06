#!/usr/bin/env node

import { getArgs } from './helpers/args.js'
import { printError, printHelp, printSuccess } from './services/log.service.js'
import { saveKyeValue, tokenDictionary } from './services/storage.service.js'
import { getWeather } from './services/api.service.js'

const saveToken = async (token) => {
    if(!token.length){
        printError('Не передан токен')
        return
    }
    try {
        await saveKyeValue(tokenDictionary.token, token)
        printSuccess('Токен сохранен')
    } catch (e) {
        printError(e.message)
    }
}

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
        return saveToken(args.t)
    }
    getWeather('moscow')
    // Вывести погоду
}

initCLI()