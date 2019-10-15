export const maxLengthCreator = maxLength => value =>{
     if (value && value.length <= maxLength) return undefined

     return `Максимальная длина ${maxLength}`
}

export const minLengthCreator = minLength => value =>{
     if (value && value.length >= minLength) return undefined

     return `Минимальная длина ${minLength}`
}