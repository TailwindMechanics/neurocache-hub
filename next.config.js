/** @type {import('next').NextConfig} */
module.exports = {
    images: {
        domains: ["flowbite.s3.amazonaws.com"],
    },
    experimental: {
        serverActions: true,
    },
};
