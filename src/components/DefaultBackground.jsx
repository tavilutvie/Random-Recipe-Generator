export default function DefaultBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FDFDFD] via-white to-[#FDFDFD] opacity-80" />
      
      {/* Subtle patterns */}
      <div className="absolute inset-y-0 right-0 w-1/2">
        <svg
          className="absolute right-0 transform translate-x-1/2 opacity-5"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
        >
          <defs>
            <pattern
              id="pattern-squares"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-primary-100" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={784} fill="url(#pattern-squares)" />
        </svg>
      </div>
      
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 transform">
        <div className="h-96 w-96 rounded-full bg-gradient-to-br from-primary-50 to-white opacity-20 blur-3xl" />
      </div>
      <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 transform">
        <div className="h-96 w-96 rounded-full bg-gradient-to-tl from-primary-50 to-white opacity-20 blur-3xl" />
      </div>
    </div>
  );
}