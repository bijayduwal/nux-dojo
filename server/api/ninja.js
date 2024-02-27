export default defineEventHandler( async(event) => {
    // api call with private key
   const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_pttVbWdXtuQK89KVe9PjNJyRARF2g1ROTY98nnCQ')
   console.log(data.value, "data value");


   return data;
})