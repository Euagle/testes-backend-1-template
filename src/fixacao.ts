export interface stringg{
    dev: string[]
}
export const fixacao = (dev1: string) :stringg=> {
const splitDev = dev1.split("")
return {dev: splitDev}
}
