#!/usr/bin/env node
import { getArgs } from "./helpers/args.js"
import { getWeather } from "./services/api.service.js";
import { printError, printHelp, printSuccess } from "./services/log.service.js";
import { saveKeyValue } from "./services/storage.service.js";

const saveToken = async (token) => {
    if (!token.length) {
        printError('не передан токен')
        return
    }
    try {
        await saveKeyValue("token", token)
        printSuccess("Токен сохранен")
    } catch (e) {
        printError(e.message)
    }
}

const saveCity = async (city) => {
    if (!city.length) {
        printError('не передан city')
        return
    }
    try {
        await saveKeyValue("city", city)
        printSuccess("city сохранен")
    } catch (e) {
        printError(e.message)
    }
}

const getForcast = async () => {

}
const initCli = () => {
    const args = getArgs(process.argv)
    if (args.h) {
        printHelp()
    }
    if (args.s) {
        saveCity(args.s)
        getWeather(args.s)
    }
    if (args.t) {
        saveToken(args.t)
    }




}

initCli()