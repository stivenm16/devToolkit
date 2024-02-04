import { RequestDetails } from '@/app/community/client/types/ClientTypes'

import { NextResponse } from 'next/server'

export async function POST(request: any) {
  const requestDetails = await request.json()

  const customHeaders = new Headers()
  let requestOptions: RequestDetails = {
    headers: customHeaders,
    body: requestDetails.method !== 'GET' ? requestDetails.body : undefined,
    method: requestDetails.method,
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
    const response = await fetch(requestDetails.url, requestOptions)
    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error:', error)
    NextResponse.json(false)
  }
}
