import { useState } from "react";
import { Link } from "react-router";
import { MapPin, ArrowLeft } from "lucide-react";

export default function ScriptLayoutPattern() {
  const [script, setScript] = useState<"ltr" | "rtl" | "complex">("ltr");

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-br from-orange-50 via-white to-red-50 border-b-4 border-[#FF9933]">
        <div className="max-w-[1400px] mx-auto px-12 py-16">
          <div className="mb-6">
            <Link to="/patterns/localization" className="text-sm text-gray-600 hover:text-[#000080]">
              ← Back to Localization Patterns
            </Link>
          </div>
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 border-3 border-white shadow-lg rounded-lg flex items-center justify-center">
                <MapPin size={40} className="text-white" />
              </div>
              <div>
                <div className="text-sm font-bold text-[#000080] mb-2 uppercase tracking-wide">Localization Pattern</div>
                <h1 className="text-5xl font-bold text-gray-900">Script-Specific Layout Handling</h1>
              </div>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Specialized layout adjustments for different writing systems including RTL (Urdu),
              complex conjuncts (Devanagari, Bengali), and script-specific rendering requirements.
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-12 py-12">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-8">
            <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6 mb-6">
              <h2 className="font-bold text-gray-900 mb-2">Interactive Demo</h2>
              <p className="text-sm text-gray-700">
                See how layouts adapt for different script directions and requirements.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-300 rounded-lg p-6 mb-6">
              <div className="flex gap-3 mb-6">
                <button
                  onClick={() => setScript("ltr")}
                  className={`px-4 py-2 rounded font-bold ${
                    script === "ltr" ? "bg-[#000080] text-white" : "border-2 border-gray-300"
                  }`}
                >
                  LTR (English, Hindi)
                </button>
                <button
                  onClick={() => setScript("rtl")}
                  className={`px-4 py-2 rounded font-bold ${
                    script === "rtl" ? "bg-[#000080] text-white" : "border-2 border-gray-300"
                  }`}
                >
                  RTL (Urdu)
                </button>
                <button
                  onClick={() => setScript("complex")}
                  className={`px-4 py-2 rounded font-bold ${
                    script === "complex" ? "bg-[#000080] text-white" : "border-2 border-gray-300"
                  }`}
                >
                  Complex (Devanagari)
                </button>
              </div>

              {/* LTR Example */}
              {script === "ltr" && (
                <div className="space-y-4">
                  <h3 className="font-bold text-gray-900">Left-to-Right (Standard)</h3>
                  <div className="bg-white border-2 border-gray-300 rounded-lg p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg"></div>
                      <div className="flex-1">
                        <div className="font-bold text-gray-900">Welcome to UX4G</div>
                        <div className="text-sm text-gray-600">Government Design System</div>
                      </div>
                      <button className="px-4 py-2 bg-[#000080] text-white rounded font-bold">
                        Start →
                      </button>
                    </div>
                    <p className="text-sm text-gray-700">
                      This is standard left-to-right layout used for most Indian languages written in
                      Latin, Devanagari, Bengali, Tamil, Telugu, and other scripts.
                    </p>
                  </div>
                </div>
              )}

              {/* RTL Example */}
              {script === "rtl" && (
                <div className="space-y-4" dir="rtl">
                  <h3 className="font-bold text-gray-900" dir="ltr">Right-to-Left (Urdu/Arabic)</h3>
                  <div className="bg-white border-2 border-gray-300 rounded-lg p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <button className="px-4 py-2 bg-[#000080] text-white rounded font-bold">
                        ← شروع کریں
                      </button>
                      <div className="flex-1">
                        <div className="font-bold text-gray-900">UX4G میں خوش آمدید</div>
                        <div className="text-sm text-gray-600">سرکاری ڈیزائن سسٹم</div>
                      </div>
                      <div className="w-12 h-12 bg-blue-100 rounded-lg"></div>
                    </div>
                    <p className="text-sm text-gray-700">
                      یہ دائیں سے بائیں لے آؤٹ اردو اور عربی کے لیے استعمال ہوتا ہے۔
                    </p>
                  </div>
                  <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-4" dir="ltr">
                    <p className="text-sm text-gray-700">
                      <strong>Note:</strong> RTL layouts require flipping entire UI including navigation,
                      icons, and reading direction. Use CSS <code>dir="rtl"</code> attribute.
                    </p>
                  </div>
                </div>
              )}

              {/* Complex Script Example */}
              {script === "complex" && (
                <div className="space-y-4">
                  <h3 className="font-bold text-gray-900">Complex Scripts (Devanagari)</h3>
                  <div className="bg-white border-2 border-gray-300 rounded-lg p-6">
                    <div className="space-y-4">
                      <div>
                        <label className="block font-bold text-gray-900 mb-2">नाम (Name)</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded text-lg"
                          placeholder="अपना नाम लिखें"
                          style={{ lineHeight: "1.8" }}
                        />
                      </div>
                      <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
                        <div className="font-bold text-gray-900 mb-2">Complex Rendering Examples:</div>
                        <div className="text-2xl space-y-2">
                          <div>क + ् + ष = क्ष (kṣa)</div>
                          <div>त + ् + र = त्र (tra)</div>
                          <div>ज + ् + ञ = ज्ञ (jña)</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-4">
                    <p className="text-sm text-gray-700">
                      <strong>Requirements:</strong> Devanagari and other Indic scripts need proper conjunct
                      rendering, increased line-height (1.6-1.8), and fonts with full Unicode support.
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Script Categories</h2>
                <div className="bg-white border-2 border-gray-300 rounded-lg p-6">
                  <div className="space-y-4 text-sm">
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">1. Latin-based (English)</h3>
                      <p className="text-gray-700">Simple LTR layout, standard line-height (1.5), minimal special handling required.</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">2. Indic Scripts (Devanagari, Bengali, Tamil, etc.)</h3>
                      <p className="text-gray-700">
                        LTR layout, complex conjuncts, increased line-height (1.6-1.8), requires Unicode fonts with ligature support.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">3. Arabic-based (Urdu)</h3>
                      <p className="text-gray-700">
                        RTL layout, cursive joining, contextual forms, requires mirroring entire UI including icons and navigation.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">4. Gurmukhi (Punjabi)</h3>
                      <p className="text-gray-700">
                        LTR layout, similar to Devanagari but simpler, moderate line-height increase needed.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">CSS Implementation</h2>
                <div className="bg-gray-900 text-gray-100 rounded-lg p-6 text-sm font-mono overflow-x-auto">
                  <pre>{`/* RTL Support */
[dir="rtl"] {
  direction: rtl;
  text-align: right;
}

[dir="rtl"] .icon {
  transform: scaleX(-1); /* Flip icons */
}

/* Complex Scripts */
.devanagari {
  font-family: 'Noto Sans Devanagari', sans-serif;
  line-height: 1.8;
  word-break: keep-all;
}

.bengali {
  font-family: 'Noto Sans Bengali', sans-serif;
  line-height: 1.7;
}

.urdu {
  font-family: 'Noto Nastaliq Urdu', serif;
  direction: rtl;
  text-align: right;
}`}</pre>
                </div>
              </section>
            </div>
          </div>

          <aside className="col-span-4">
            <div className="sticky top-8 space-y-6">
              <div className="bg-white border-2 border-gray-300 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4">Pattern Information</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="text-xs text-gray-600 mb-1">Complexity</div>
                    <div className="font-bold">High</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-600 mb-1">Script Types</div>
                    <div className="font-bold">12+ scripts</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-600 mb-1">Impact</div>
                    <div className="font-bold">Layout, Typography, CSS</div>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Technical Requirements</h3>
                <ul className="space-y-2 text-xs text-gray-700">
                  <li>✓ Unicode font support</li>
                  <li>✓ CSS dir attribute handling</li>
                  <li>✓ BiDi text algorithm</li>
                  <li>✓ Conjunct rendering (Indic)</li>
                  <li>✓ RTL icon flipping</li>
                  <li>✓ Increased line-height</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-300 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4">Fonts Recommended</h3>
                <ul className="space-y-1 text-xs text-gray-700">
                  <li>• Noto Sans Devanagari</li>
                  <li>• Noto Sans Bengali</li>
                  <li>• Noto Sans Tamil</li>
                  <li>• Noto Sans Telugu</li>
                  <li>• Noto Nastaliq Urdu</li>
                  <li>• Noto Sans Gurmukhi</li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
