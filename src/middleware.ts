import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import type { ShortLinkSchema } from './schema/short-link-schema';

export async function middleware(req: NextRequest) {   
    const slug = req.nextUrl.pathname.split("/").pop();
    const slugFetch = await fetch(`${req.nextUrl.origin}/api/get-short-link/${slug}`);

    if (slugFetch.status === 404) {
        return NextResponse.redirect(req.nextUrl.origin);
    }

    const data: ShortLinkSchema = await slugFetch.json();
    
    if (data?.url) {
        return NextResponse.redirect(data.url);
    }
}

export const config = {
    matcher: "/s/:slug*",
};