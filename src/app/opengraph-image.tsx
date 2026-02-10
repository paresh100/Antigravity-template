import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Rachel Singer | Premium Digital Artisan'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: 'linear-gradient(to bottom right, #0a0a0a, #1a1a1a)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'serif',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '40px',
                    }}
                >
                    <svg
                        width="64"
                        height="64"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <polygon points="12 2 2 7 12 12 22 7 12 2" />
                        <polyline points="2 17 12 22 22 17" />
                        <polyline points="2 12 12 17 22 12" />
                    </svg>
                </div>
                <div
                    style={{
                        fontSize: 80,
                        fontWeight: 700,
                        color: 'white',
                        letterSpacing: '-0.05em',
                        marginBottom: '20px',
                        textAlign: 'center',
                    }}
                >
                    Rachel Singer
                </div>
                <div
                    style={{
                        fontSize: 30,
                        color: '#888',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                    }}
                >
                    Premium Digital Artisan
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
