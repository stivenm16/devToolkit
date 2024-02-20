import { NextResponse } from 'next/server'

export async function GET(request: any) {
  const url = request.url?.split('/') || []
  const game = url[url.length - 1]

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/guides/${game}/getFile`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }
    const data = await response.json()

    return NextResponse.json(data)
    // return NextResponse.json(data)
  } catch (error) {
    console.error('Error:', error)
    NextResponse.json(false)
  }
}
