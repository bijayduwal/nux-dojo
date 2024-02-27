export default defineEventHandler(async (event) => {

    const { code } = event.context.params

    const {currencyKey} = useRuntimeConfig ()
    console.log(code, "code"  , currencyKey, " currencyKey  ")

    const uri = `https://api.currencyapi.com/v3/latest?apikey=cur_live_pttVbWdXtuQK89KVe9PjNJyRARF2g1ROTY98nnCQ`

    const { data } = await $fetch(uri)
    
    return data
    
})