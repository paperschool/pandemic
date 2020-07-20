

export const random = (min: number = 0, max: number = 1): number => {
    return (Math.random() * (max - min)) + min;
}

export const randomInt = (min: number = 0, max: number = 1): number => {
    return Math.round(random(min, max))
}

export const map = (value: number, targetMin: number, targetMax: number, srcMin: number, srcMax: number) => {
    return (value - targetMin) / (targetMax - targetMin) * (srcMax - srcMin) + srcMin;
}

export const pythagoras = (a: number, b: number) => {
    return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
}


export const normalise = (value: number, min: number, max: number) => {
    // return map(value,)
}