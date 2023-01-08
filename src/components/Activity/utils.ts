enum NumericalUnit {
    THOUSAND = 1_000,
    MILLION = THOUSAND * 1_000,
    BILLION = MILLION * 1_000
}

export const formatNumber = (num: number, divisibleSignsCount: number = 1): string => {
    if (Math.trunc(num / NumericalUnit.BILLION)) {
        return `${(num / NumericalUnit.BILLION).toFixed(divisibleSignsCount)}B`
    }
    if (Math.trunc(num / NumericalUnit.MILLION)) {
        return `${(num / NumericalUnit.MILLION).toFixed(divisibleSignsCount)}M`
    }
    if (Math.trunc(num / NumericalUnit.THOUSAND)) {
        return `${(num / NumericalUnit.THOUSAND).toFixed(divisibleSignsCount)}K`
    }
    return num.toString()
}