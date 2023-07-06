/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: 'https://neurocache.ai',
    async rewrites() {
        return {
            beforeFiles: [
                {
                    source: '/:path*',
                    has: [
                        {
                            type: 'host',
                            value: 'hub.neurocache.ai',
                        },
                    ],
                    destination: '/hub/:path*',
                },
            ],
        };
    },
};

module.exports = nextConfig;