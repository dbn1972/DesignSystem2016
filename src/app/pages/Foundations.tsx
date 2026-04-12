import { Palette, Type, Layers, Grid, Sparkles, Ruler } from "lucide-react";

export default function Foundations() {
  const colorPalette = [
    { name: "Saffron", hex: "#FF9933", desc: "Primary action, highlights" },
    { name: "Navy Blue", hex: "#000080", desc: "Primary brand, headers" },
    { name: "India Green", hex: "#138808", desc: "Success, confirmation" },
    { name: "White", hex: "#FFFFFF", desc: "Backgrounds, contrast" },
    { name: "Gray 50", hex: "#F9FAFB", desc: "Secondary backgrounds" },
    { name: "Gray 900", hex: "#111827", desc: "Primary text" }
  ];

  const spacing = [
    { value: "4px", token: "spacing-1", usage: "Tight spacing" },
    { value: "8px", token: "spacing-2", usage: "Small spacing" },
    { value: "16px", token: "spacing-4", usage: "Medium spacing" },
    { value: "24px", token: "spacing-6", usage: "Large spacing" },
    { value: "32px", token: "spacing-8", usage: "Section spacing" },
    { value: "48px", token: "spacing-12", usage: "Major sections" }
  ];

  const typography = [
    { name: "Display Large", size: "48px", weight: "700", usage: "Hero headlines" },
    { name: "Display", size: "36px", weight: "700", usage: "Page titles" },
    { name: "Heading 1", size: "30px", weight: "700", usage: "Section headers" },
    { name: "Heading 2", size: "24px", weight: "600", usage: "Card titles" },
    { name: "Heading 3", size: "20px", weight: "600", usage: "Subsections" },
    { name: "Body Large", size: "18px", weight: "400", usage: "Lead text" },
    { name: "Body", size: "16px", weight: "400", usage: "Default text" },
    { name: "Body Small", size: "14px", weight: "400", usage: "Secondary text" },
    { name: "Caption", size: "12px", weight: "400", usage: "Labels, captions" }
  ];

  const principles = [
    {
      icon: Sparkles,
      title: "Accessibility First",
      description: "Every design decision prioritizes inclusive access for all citizens, ensuring WCAG 2.1 AA compliance across all components and patterns."
    },
    {
      icon: Grid,
      title: "Consistency",
      description: "Unified visual language, interaction patterns, and service conventions across all government digital touchpoints."
    },
    {
      icon: Layers,
      title: "Scalability",
      description: "Built to support national-scale services across multiple departments, languages, devices, and user contexts."
    },
    {
      icon: Ruler,
      title: "Clarity",
      description: "Clear, direct communication that reduces cognitive load and helps citizens complete their tasks efficiently."
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#000080] to-[#000050] dark:from-blue-900 dark:to-blue-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <Palette size={32} />
            <h1 className="text-4xl lg:text-5xl font-bold">Design Foundations</h1>
          </div>
          <p className="text-xl text-blue-100 dark:text-blue-200 max-w-3xl">
            The principles, tokens, and baseline decisions that create consistency,
            accessibility, and usability across all Government of India digital services.
          </p>
        </div>
      </section>

      {/* Design Principles */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">Design Principles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8 hover:border-[#000080] dark:hover:border-blue-500 transition-colors"
              >
                <div className="w-12 h-12 bg-[#000080] rounded-lg flex items-center justify-center mb-4">
                  <principle.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  {principle.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Color System */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">Color System</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Inspired by the Indian national flag, our color palette ensures visual consistency
              and accessibility across all government digital services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {colorPalette.map((color, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
              >
                <div
                  className="h-32 flex items-center justify-center"
                  style={{ backgroundColor: color.hex }}
                >
                  <span
                    className={`font-mono text-sm font-semibold px-3 py-1 rounded ${
                      color.hex === "#FFFFFF" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
                    }`}
                  >
                    {color.hex}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">{color.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{color.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-gray-700 rounded-xl">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Accessibility Note</h3>
            <p className="text-gray-700 dark:text-gray-300">
              All color combinations meet WCAG 2.1 AA contrast requirements. Use the color
              contrast checker to validate custom combinations.
            </p>
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <Type size={28} className="text-gray-900 dark:text-gray-100" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Typography</h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              A clear, accessible type system designed for readability across devices and contexts.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                  <tr>
                    <th className="text-left px-6 py-4 font-semibold text-gray-900 dark:text-gray-100">Style</th>
                    <th className="text-left px-6 py-4 font-semibold text-gray-900 dark:text-gray-100">Size</th>
                    <th className="text-left px-6 py-4 font-semibold text-gray-900 dark:text-gray-100">Weight</th>
                    <th className="text-left px-6 py-4 font-semibold text-gray-900 dark:text-gray-100">Usage</th>
                    <th className="text-left px-6 py-4 font-semibold text-gray-900 dark:text-gray-100">Example</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {typography.map((type, index) => (
                    <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className="px-6 py-4 font-medium text-gray-900 dark:text-gray-100">{type.name}</td>
                      <td className="px-6 py-4 text-gray-600 dark:text-gray-400">{type.size}</td>
                      <td className="px-6 py-4 text-gray-600 dark:text-gray-400">{type.weight}</td>
                      <td className="px-6 py-4 text-gray-600 dark:text-gray-400">{type.usage}</td>
                      <td className="px-6 py-4">
                        <span style={{ fontSize: type.size, fontWeight: type.weight }} className="text-gray-900 dark:text-gray-100">Aa</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 p-6 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-gray-700 rounded-xl">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Font Family</h3>
            <p className="text-gray-700 dark:text-gray-300">
              System font stack for optimal performance: -apple-system, BlinkMacSystemFont,
              "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
            </p>
          </div>
        </div>
      </section>

      {/* Spacing */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">Spacing System</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Consistent spacing creates visual rhythm and improves content hierarchy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {spacing.map((space, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="bg-[#000080]"
                    style={{ width: space.value, height: space.value }}
                  ></div>
                  <div>
                    <div className="font-mono text-sm font-semibold text-gray-900 dark:text-gray-100">
                      {space.value}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{space.token}</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{space.usage}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-gray-700 rounded-xl">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Implementation</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Use spacing tokens in your code for consistency:
            </p>
            <code className="block bg-white dark:bg-gray-800 px-4 py-3 rounded border border-green-300 dark:border-gray-700 text-sm font-mono text-gray-900 dark:text-gray-100">
              className="p-spacing-4 m-spacing-2"
            </code>
          </div>
        </div>
      </section>

      {/* Grid System */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <Grid size={28} className="text-gray-900 dark:text-gray-100" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Grid & Layout</h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Responsive grid system that adapts to different screen sizes and devices.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-12 gap-4 mb-6">
              {Array.from({ length: 12 }).map((_, i) => (
                <div 
                  key={i}
                  className="h-16 bg-[#000080] rounded flex items-center justify-center text-white text-sm font-semibold"
                >
                  {i + 1}
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded flex items-center justify-center text-sm text-gray-700 dark:text-gray-300">
                  12 Columns
                </div>
              </div>
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-6 h-12 bg-blue-100 dark:bg-blue-900/30 rounded flex items-center justify-center text-sm text-gray-700 dark:text-gray-300">
                  6 Columns
                </div>
                <div className="col-span-6 h-12 bg-blue-100 dark:bg-blue-900/30 rounded flex items-center justify-center text-sm text-gray-700 dark:text-gray-300">
                  6 Columns
                </div>
              </div>
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-4 h-12 bg-blue-100 dark:bg-blue-900/30 rounded flex items-center justify-center text-sm text-gray-700 dark:text-gray-300">
                  4 Columns
                </div>
                <div className="col-span-4 h-12 bg-blue-100 dark:bg-blue-900/30 rounded flex items-center justify-center text-sm text-gray-700 dark:text-gray-300">
                  4 Columns
                </div>
                <div className="col-span-4 h-12 bg-blue-100 dark:bg-blue-900/30 rounded flex items-center justify-center text-sm text-gray-700 dark:text-gray-300">
                  4 Columns
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Mobile</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">320px - 767px</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Stack content vertically</p>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Tablet</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">768px - 1023px</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">2-column layouts</p>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Desktop</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">1024px+</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Full grid layouts</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
