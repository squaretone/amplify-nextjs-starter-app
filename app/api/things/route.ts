export async function GET() {
  const res = await fetch('https://swapi.dev/api/starships/', {
    // @ts-ignore 
    headers: {
      'Content-Type': 'application/json',
      'API-Key': process.env.DATA_API_KEY,
    },
  })
  const data = await res.json()
 
  return Response.json({ data })
}