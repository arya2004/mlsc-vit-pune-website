import { put } from '@vercel/blob';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest): Promise<NextResponse> {
    const { searchParams } = new URL(request.url);
    const randomNumber = Math.floor(Math.random() * 1000000);
    const filename = searchParams.get('filename') || `image${randomNumber}.jpg`;
    const blob = await put(filename, request.body, {
        access: 'public',
    });

    return NextResponse.json(blob);
}