async function createReview({ name, description, stars }) {
  const response = await fetch(
    'https://apis.codante.io/api/reviews-api/reviews',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, description, stars })
    }
  )

  if (!response.ok) {
    throw new Error('Erro ao criar o review')
  }

  const data = await response.json()
  return data
}

export { createReview }
