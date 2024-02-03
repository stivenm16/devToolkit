import { RequestDetails } from '@/app/community/client/types/ClientTypes'
import { NextResponse } from 'next/server'

export async function POST(request: any) {
  const requestDetails = await request.json()

  const customHeaders = new Headers()
  let requestOptions: RequestDetails = {
    headers: customHeaders,
    body: JSON.stringify(requestDetails),
    method: 'POST',
  }
  customHeaders.append('Content-Type', 'application/json')

  if (requestDetails.headers?.length > 0) {
    requestDetails.headers!.forEach((header: any) => {
      customHeaders.append(header.key, header.value)
    })
    requestOptions = {
      ...requestOptions,
      headers: customHeaders,
    }
  }

  try {
    const response = await fetch('http://localhost:3001/', requestOptions)
    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error:', error)
  }
}
