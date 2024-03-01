/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
        // ssr and displayName are configured by default
        styledComponents: true,
    },
    optimizeFonts: false, async rewrites() {
        return [
            {
                source: '/(uniq|@uniqbtw|uniqbtw|@uniq)',
                destination: '/',
            },
            {
                source: '/(@haunted|haunted|haunted_sad|@haunted_sad)',
                destination: '/haunted'
            }
        ]
    },
}

module.exports = nextConfig
