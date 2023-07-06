/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'Access-Control-Allow-Origin',
                        value: '*',
                    },
                ],
            },
        ];
    },
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
    // Set assetPrefix dynamically based on the HOST header
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.output.publicPath = `https://${process.env.HOST}${config.output.publicPath}`;
        }
        return config;
    },
};

module.exports = nextConfig;
