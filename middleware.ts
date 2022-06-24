
import type { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  console.log('referrer', req.referrer); 
  
  if (req.referrer.includes('facebook.com'){
  return NextResponse.redirect(
    new URL(`medicalmag.info/${req.nextUrl.pathname}`, req.url)
  )
  }
}
