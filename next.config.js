/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: false,
    images: {
        domains: [
            "flowbite.s3.amazonaws.com",
            "oaidalleapiprodscus.blob.core.windows.net",
        ],
    },
    experimental: {
        serverActions: true,
    },
};
