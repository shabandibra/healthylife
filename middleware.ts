import type { NextRequest, NextResponse } from 'next/server'
import { areCredentialsValid } from '../lib'

export function middleware(req: NextRequest) {
  if (areCredentialsValid(req.headers.get('authorization'))) {
    return NextResponse.next()
  }
  return NextResponse.redirect(
    new URL(`/login?from=${req.nextUrl.pathname}`, req.url)
  )
}



import type { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  console.log('referrer', req.referrer); 
  
  if (req.referrer.includes('facebook.com'){
  return NextResponse.redirect(
    new URL(`medicalmag.info/${req.nextUrl.pathname}`, req.url)
  )
  }
}
