export default defineEventHandler(async (event) => {

    // handle query params
    //const { name } = useQuery(event)

    // handle post data
  // const { age } = await useBody()

    // api call with private key
    const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=eJdPhICJUDBt6B4e4IX6DZ4A9Xos4Z2JRZ8xh2v2')

    return data;

    return {
        message: `Hello, ${name}! Your are ${age} years old.`
    }
})