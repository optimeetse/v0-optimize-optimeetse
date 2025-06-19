"use client"

import Logo from "./logo"

export default function LogoVariations() {
  return (
    <div className="p-8 space-y-12">
      <h1 className="text-3xl font-bold text-slate-900 mb-8">OptiMeet Logo Variations</h1>

      {/* Main Logo Variations */}
      <section>
        <h2 className="text-xl font-semibold text-slate-800 mb-6">Primary Logos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Color Version */}
          <div className="bg-white p-6 rounded-lg border border-slate-200 text-center">
            <Logo size="lg" variant="color" />
            <p className="text-sm text-slate-600 mt-4">Color Version (Primary)</p>
          </div>

          {/* Dark Version */}
          <div className="bg-slate-100 p-6 rounded-lg border border-slate-200 text-center">
            <Logo size="lg" variant="dark" />
            <p className="text-sm text-slate-600 mt-4">Dark Version</p>
          </div>

          {/* Light Version */}
          <div className="bg-slate-900 p-6 rounded-lg text-center">
            <Logo size="lg" variant="light" />
            <p className="text-sm text-slate-300 mt-4">Light Version</p>
          </div>
        </div>
      </section>

      {/* Icon Only Versions */}
      <section>
        <h2 className="text-xl font-semibold text-slate-800 mb-6">Icon Only (for profiles & favicons)</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white p-4 rounded-lg border border-slate-200 text-center">
            <Logo size="lg" variant="color" showText={false} />
            <p className="text-xs text-slate-600 mt-2">Color Icon</p>
          </div>
          <div className="bg-slate-100 p-4 rounded-lg border border-slate-200 text-center">
            <Logo size="lg" variant="dark" showText={false} />
            <p className="text-xs text-slate-600 mt-2">Dark Icon</p>
          </div>
          <div className="bg-slate-900 p-4 rounded-lg text-center">
            <Logo size="lg" variant="light" showText={false} />
            <p className="text-xs text-slate-300 mt-2">Light Icon</p>
          </div>
          <div className="bg-cyan-500 p-4 rounded-lg text-center">
            <Logo size="lg" variant="light" showText={false} />
            <p className="text-xs text-white mt-2">On Brand Color</p>
          </div>
        </div>
      </section>

      {/* Different Sizes */}
      <section>
        <h2 className="text-xl font-semibold text-slate-800 mb-6">Size Variations</h2>
        <div className="bg-white p-6 rounded-lg border border-slate-200">
          <div className="flex items-center gap-8 flex-wrap">
            <div className="text-center">
              <Logo size="sm" variant="color" />
              <p className="text-xs text-slate-600 mt-2">Small</p>
            </div>
            <div className="text-center">
              <Logo size="md" variant="color" />
              <p className="text-xs text-slate-600 mt-2">Medium</p>
            </div>
            <div className="text-center">
              <Logo size="lg" variant="color" />
              <p className="text-xs text-slate-600 mt-2">Large</p>
            </div>
            <div className="text-center">
              <Logo size="xl" variant="color" />
              <p className="text-xs text-slate-600 mt-2">Extra Large</p>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Guidelines */}
      <section>
        <h2 className="text-xl font-semibold text-slate-800 mb-6">Usage Guidelines</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <h3 className="font-semibold text-green-800 mb-3">✅ Do</h3>
            <ul className="text-sm text-green-700 space-y-2">
              <li>• Use the color version on white/light backgrounds</li>
              <li>• Use the light version on dark backgrounds</li>
              <li>• Maintain proper spacing around the logo</li>
              <li>• Use icon-only version for small spaces (favicons, social profiles)</li>
              <li>• Keep the logo proportional when resizing</li>
            </ul>
          </div>
          <div className="bg-red-50 p-6 rounded-lg border border-red-200">
            <h3 className="font-semibold text-red-800 mb-3">❌ Don't</h3>
            <ul className="text-sm text-red-700 space-y-2">
              <li>• Stretch or distort the logo</li>
              <li>• Change the colors arbitrarily</li>
              <li>• Place on busy backgrounds without proper contrast</li>
              <li>• Use the logo smaller than 24px height</li>
              <li>• Separate the icon from the text in the main logo</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Download Instructions */}
      <section>
        <h2 className="text-xl font-semibold text-slate-800 mb-6">How to Use These Logos</h2>
        <div className="bg-slate-50 p-6 rounded-lg">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-slate-800">For Website/Digital Use:</h4>
              <p className="text-sm text-slate-600">
                Right-click on any logo above and "Save image as..." to download as PNG
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-800">For Print/High-Res Use:</h4>
              <p className="text-sm text-slate-600">
                The SVG component can be exported at any resolution without quality loss
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-800">For Social Media:</h4>
              <p className="text-sm text-slate-600">
                Use the icon-only versions for profile pictures, the full logo for cover images
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
