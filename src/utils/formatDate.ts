enum TimeUnitInMillis {
    SECOND = 1_000,
    MINUTE = SECOND * 60,
    HOUR = MINUTE * 60,
    DAY = HOUR * 24,
    MONTH = DAY * 30,
    YEAR = MONTH * 12
}

export const formatDate = (date: Date): string => {
    const differenceTime: number = Date.now() - date.getTime()

    if (Math.trunc(differenceTime / TimeUnitInMillis.YEAR)) {
        return `${Math.trunc(differenceTime / TimeUnitInMillis.YEAR)}y`
    }

    if (Math.trunc(differenceTime / TimeUnitInMillis.MONTH)) {
        return `${Math.trunc(differenceTime / TimeUnitInMillis.MONTH)}m`
    }

    if (Math.trunc(differenceTime / TimeUnitInMillis.DAY)) {
        return `${Math.trunc(differenceTime / TimeUnitInMillis.DAY)}d`
    }

    if (Math.trunc(differenceTime / TimeUnitInMillis.HOUR)) {
        return `${Math.trunc(differenceTime / TimeUnitInMillis.HOUR)}h`
    }

    if (Math.trunc(differenceTime / TimeUnitInMillis.MINUTE)) {
        return `${Math.trunc(differenceTime / TimeUnitInMillis.MINUTE)}min`
    }

    if (Math.trunc(differenceTime / TimeUnitInMillis.SECOND)) {
        return `${Math.trunc(differenceTime / TimeUnitInMillis.SECOND)}s`
    }
    return `${differenceTime}ms`
}