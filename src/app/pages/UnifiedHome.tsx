import { Link } from "react-router";
import {
  ArrowRight,
  BookOpen,
  Box,
  Building2,
  CheckCircle,
  Code,
  Globe,
  Layers,
  Palette,
  Shield,
} from "lucide-react";
import SEOHead from "../components/SEOHead";

const proofPoints = [
  {
    title: "डिफ़ॉल्ट रूप से सुलभ",
    description: "सार्वजनिक सेवाओं के लिए फ़ोकस स्टेट्स, कीबोर्ड सपोर्ट और उपयोगी डिफ़ॉल्ट व्यवहार।",
    icon: Shield,
  },
  {
    title: "तीन इम्प्लीमेंटेशन लेन",
    description: "React, Angular और Web Components एक ही डिज़ाइन सिस्टम अनुबंध के साथ संरेखित।",
    icon: Code,
  },
  {
    title: "भारतीय सेवाओं के लिए पैटर्न",
    description: "पहचान, भुगतान, बहुभाषी यात्राएँ और दस्तावेज़-प्रधान वर्कफ़्लो के लिए तैयार।",
    icon: Globe,
  },
];

const foundations = [
  {
    title: "डिज़ाइन टोकन",
    description: "रंग, स्पेसिंग, रेडियस और टाइप स्केल एक ही टोकन सिस्टम से संचालित होते हैं।",
    to: "/foundations",
    icon: Palette,
  },
  {
    title: "मुख्य कॉम्पोनेंट्स",
    description: "इनपुट, नेविगेशन, फ़ीडबैक, डेटा डिस्प्ले और लेआउट के लिए केंद्रित लाइब्रेरी।",
    to: "/components",
    icon: Box,
  },
  {
    title: "इम्प्लीमेंटेशन मार्गदर्शन",
    description: "उपयोग पैटर्न, स्पेक्स और उदाहरण जो टीमों को लगातार सही तरीके से बनाने में मदद करें।",
    to: "/resources/component-specs",
    icon: BookOpen,
  },
];

const indiaPatterns = [
  {
    title: "पहचान और सत्यापन",
    description: "आधार, पैन और सत्यापन यात्राएँ जो उच्च-विश्वास वाली सार्वजनिक सेवाओं के लिए डिज़ाइन की गई हैं।",
  },
  {
    title: "बहुभाषी इंटरफ़ेस",
    description: "भारतीय भाषाओं के लिए ऐसे लेआउट जो लिपि, स्पेसिंग और स्पष्टता का सम्मान करते हैं।",
  },
  {
    title: "भुगतान और प्रमाणपत्र",
    description: "फ़ीस संग्रह, आधिकारिक दस्तावेज़ और स्थिति-प्रधान सेवा प्रवाह के लिए पैटर्न।",
  },
];

const systemShowcase = [
  {
    title: "कॉम्पोनेंट्स",
    description: "लाइब्रेरी, वेरिएंट्स और लाइव उदाहरण देखें।",
    to: "/components",
    icon: Box,
  },
  {
    title: "सेवा ब्लूप्रिंट्स",
    description: "देखें कि यह सिस्टम एंड-टू-एंड सरकारी वर्कफ़्लो तक कैसे स्केल करता है।",
    to: "/reference-service/overview",
    icon: Layers,
  },
  {
    title: "दस्तावेज़ीकरण",
    description: "फ़ाउंडेशन, इम्प्लीमेंटेशन नोट्स और पैकेज मार्गदर्शन से शुरुआत करें।",
    to: "/documentation",
    icon: BookOpen,
  },
];

const teamLanes = [
  {
    title: "डिज़ाइनर",
    description: "साझा टोकन, फ़ाउंडेशन और स्पेक्स का उपयोग करके UI निर्णयों को अधिक पूर्वानुमेय बनाएं।",
    icon: Palette,
  },
  {
    title: "इंजीनियर",
    description: "सभी फ़्रेमवर्क्स में एकसमान APIs और सुलभ डिफ़ॉल्ट व्यवहार अपनाएँ।",
    icon: Code,
  },
  {
    title: "सेवा टीमें",
    description: "सार्वजनिक सेवा डिलीवरी के लिए बने पैटर्न्स के साथ भरोसेमंद यूज़र जर्नी जारी करें।",
    icon: Building2,
  },
];

const heroMarkers = [
  { value: "01", label: "फ़ाउंडेशन" },
  { value: "02", label: "कॉम्पोनेंट्स" },
  { value: "03", label: "सेवाएँ" },
];

function HeroCanvas() {
  return (
    <div className="relative mx-auto max-w-xl">
      <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.72),transparent_55%)]" />
      <div className="absolute -left-6 top-8 h-28 w-28 rounded-full bg-[color:var(--ux4g-color-saffron-500)]/10 blur-3xl" />
      <div className="absolute -right-2 bottom-10 h-36 w-36 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute left-8 top-16 h-px w-20 bg-[linear-gradient(90deg,var(--ux4g-color-saffron-500),transparent)]" />
      <div className="absolute bottom-12 right-10 h-px w-24 bg-[linear-gradient(90deg,var(--primary),transparent)]" />
      <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-2xl">
        <div className="border-b border-border bg-muted/50 px-5 py-4">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                सिस्टम कैनवास
              </p>
              <h2 className="mt-2 text-xl font-semibold text-foreground">
                टोकन, सुलभता और सार्वजनिक-सेवा पैटर्न एक ही जगह
              </h2>
            </div>
            <div className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
              UX4G
            </div>
          </div>
        </div>

        <div className="grid items-start gap-4 p-5 sm:grid-cols-[1.15fr_0.85fr]">
          <div className="self-start space-y-4 rounded-2xl border border-border bg-background p-4">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-primary/10 p-2 text-primary">
                <Layers size={18} />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Service flow</p>
                <p className="text-xs text-muted-foreground">आवेदन, समीक्षा और स्वीकृति स्थितियाँ</p>
              </div>
            </div>

            <div className="grid gap-3">
              {[
                { label: "आवेदन जमा", tone: "bg-primary" },
                { label: "दस्तावेज़ सत्यापित", tone: "bg-[color:var(--ux4g-color-feedback-success)]" },
                { label: "प्रमाणपत्र तैयार", tone: "bg-[color:var(--ux4g-color-feedback-warning)]" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 rounded-xl border border-border bg-card p-3">
                  <div className={`h-2.5 w-2.5 rounded-full ${item.tone}`} />
                  <span className="text-sm text-foreground">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-border bg-card p-4">
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="font-medium text-foreground">सुलभता तैयारी</span>
                <span className="text-muted-foreground">AA लक्ष्य</span>
              </div>
              <div className="h-2 rounded-full bg-muted">
                <div className="h-2 w-[72%] rounded-full bg-primary" />
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-foreground">Language support</p>
                <Globe size={16} className="text-primary" />
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {["अंग्रेज़ी", "हिन्दी", "தமிழ்", "বাংলা"].map((language) => (
                  <span
                    key={language}
                    className="rounded-full border border-border bg-background px-3 py-1 text-xs text-foreground"
                  >
                    {language}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                टोकन
              </p>
              <div className="mt-3 grid grid-cols-3 gap-3">
                <div className="rounded-xl border border-border bg-background p-3">
                  <div className="h-10 rounded-lg bg-primary" />
                  <p className="mt-2 text-xs text-muted-foreground">ब्रांड</p>
                </div>
                <div className="rounded-xl border border-border bg-background p-3">
                  <div className="h-10 rounded-lg bg-[color:var(--ux4g-color-saffron-500)]" />
                  <p className="mt-2 text-xs text-muted-foreground">एक्सेंट</p>
                </div>
                <div className="rounded-xl border border-border bg-background p-3">
                  <div className="h-10 rounded-lg bg-[color:var(--ux4g-color-feedback-success)]" />
                  <p className="mt-2 text-xs text-muted-foreground">सक्सेस</p>
                </div>
              </div>
            </div>
          </div>

          <div className="self-start space-y-4">
            <div className="rounded-2xl border border-border bg-background p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                सेवा संकेतक
              </p>
              <div className="mt-4 space-y-3">
                {heroMarkers.map((marker) => (
                  <div key={marker.label} className="flex items-center justify-between rounded-xl border border-border bg-card px-3 py-2.5">
                    <span className="text-xs font-semibold tracking-[0.18em] text-primary">{marker.value}</span>
                    <span className="text-sm font-medium text-foreground">{marker.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-background p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                फ़ाउंडेशन
              </p>
              <div className="mt-4 space-y-3">
                {[
                  "--ux4g-color-brand-primary",
                  "--ux4g-spacing-4",
                  "--ux4g-radius-lg",
                ].map((token) => (
                  <div key={token} className="rounded-xl border border-border bg-card px-3 py-2">
                    <p className="text-xs font-medium text-foreground">{token}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-[linear-gradient(135deg,color-mix(in_srgb,var(--primary)_92%,black_8%),color-mix(in_srgb,var(--ux4g-color-saffron-500)_36%,var(--primary)_64%))] p-4 text-primary-foreground">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-foreground/70">
                सार्वजनिक सेवा भरोसा
              </p>
              <p className="mt-3 text-lg font-semibold leading-6">
                स्पष्ट स्थिति, स्थिर कॉम्पोनेंट्स और वास्तविक डिलीवरी टीमों के लिए बने पैटर्न।
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function UnifiedHome() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="मुखपृष्ठ"
        description="भारत की ओपन-सोर्स डिज़ाइन सिस्टम लाइब्रेरी, जो सुसंगत और सुलभ डिजिटल सार्वजनिक सेवाएँ बनाने में मदद करती है।"
      />

      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,color-mix(in_srgb,var(--primary)_12%,transparent),transparent_52%),radial-gradient(ellipse_at_bottom_right,color-mix(in_srgb,var(--ux4g-color-saffron-500)_14%,transparent),transparent_48%)]" />
        <div className="absolute inset-x-0 top-0 h-28 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.18),transparent)] opacity-50" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:py-20 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground backdrop-blur">
              <Shield size={14} className="text-primary" />
              डिजिटल सार्वजनिक सेवाओं के लिए डिज़ाइन सिस्टम
            </div>

            <div className="mt-8 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.26em] text-muted-foreground">
              <span className="h-px w-14 bg-[linear-gradient(90deg,var(--ux4g-color-saffron-500),transparent)]" />
              भारत-केंद्रित फ़ाउंडेशन
            </div>

            <h1 className="mt-8 max-w-3xl text-5xl font-bold tracking-[-0.045em] text-foreground sm:text-6xl lg:text-[4.8rem] lg:leading-[0.95]">
              भारत की सबसे महत्वपूर्ण
              <span className="block bg-[linear-gradient(90deg,var(--foreground),color-mix(in_srgb,var(--primary)_72%,var(--foreground)_28%))] bg-clip-text text-transparent">
                डिजिटल सेवाओं के लिए डिज़ाइन सिस्टम
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-[1.3rem] sm:leading-9">
              UX4G टीमों को कॉम्पोनेंट्स, पैटर्न्स और सेवा वर्कफ़्लो के बीच सुलभ, सुसंगत और इम्प्लीमेंटेशन-रेडी अनुभव बनाने में मदद करता है।
            </p>

            <p className="mt-6 max-w-xl text-sm font-medium uppercase tracking-[0.24em] text-muted-foreground">
              डिफ़ॉल्ट रूप से सुलभ। भरोसे के लिए निर्मित। भारतीय सार्वजनिक सेवाओं के लिए आकार दिया गया।
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/components"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-opacity hover:opacity-90"
              >
                कॉम्पोनेंट्स देखें <ArrowRight size={16} />
              </Link>
              <Link
                to="/documentation"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
              >
                दस्तावेज़ पढ़ें
              </Link>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              {[
                { label: "साझा टोकन सिस्टम", value: "फ़ाउंडेशन पहले" },
                { label: "सुलभ डिफ़ॉल्ट", value: "प्रोडक्शन-उन्मुख" },
                { label: "सार्वजनिक-सेवा पैटर्न", value: "भारत के लिए निर्मित" },
              ].map((item) => (
                <div key={item.label} className="border-l-2 border-primary/20 pl-4">
                  <p className="text-sm font-semibold text-foreground">{item.label}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <HeroCanvas />
        </div>
      </section>

      <section className="border-b border-border bg-card/30">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 md:grid-cols-[0.8fr_1.2fr]">
          <div className="max-w-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">प्रमाण</p>
            <h2 className="mt-3 text-2xl font-semibold text-foreground sm:text-3xl">
              एक मजबूत सिस्टम कथा को मजबूत प्रमाण चाहिए
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {proofPoints.map((item) => (
              <div key={item.title} className="rounded-2xl border border-border bg-card p-6">
                <div className="inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                  <item.icon size={20} />
                </div>
                <h2 className="mt-4 text-xl font-semibold text-foreground">{item.title}</h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">फ़ाउंडेशन</p>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
            एक डिज़ाइन सिस्टम को अच्छे निर्णयों को दोहराना आसान बनाना चाहिए
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            UX4G तब सबसे मजबूत है जब टोकन, APIs, सुलभता और उदाहरण साथ चलते हैं। यह मुखपृष्ठ अब उस दिशा को अधिक स्पष्ट रूप से दिखाता है।
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="grid gap-4 sm:grid-cols-3">
            {foundations.map((item) => (
              <Link
                key={item.title}
                to={item.to}
                className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg"
              >
                <div className="inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                  <item.icon size={20} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
              </Link>
            ))}
          </div>

          <div className="rounded-[1.75rem] border border-border bg-card p-8 shadow-sm">
            <div className="inline-flex rounded-xl bg-[color:var(--ux4g-color-feedback-success)]/10 p-3 text-[color:var(--ux4g-color-feedback-success)]">
              <CheckCircle size={22} />
            </div>
            <h3 className="mt-5 text-2xl font-semibold text-foreground">A smaller, stronger promise</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              विश्व-स्तरीय डिज़ाइन सिस्टम केवल व्यापक नहीं होते। वे पूर्वानुमेय, सुलभ और टीमों के लिए सही तरीके से अपनाने में आसान होते हैं।
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "साझा टोकन और थीमिंग",
                "एकसमान कॉम्पोनेंट अनुबंध",
                "महत्वपूर्ण फ्लोज़ में सुलभ डिफ़ॉल्ट",
                "वे उदाहरण जो वास्तविक शिप्ड सिस्टम से मेल खाते हैं",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle size={16} className="mt-0.5 shrink-0 text-[color:var(--ux4g-color-feedback-success)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-gradient-to-b from-primary/5 to-transparent">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">भारत के लिए निर्मित</p>
            <h2 className="mt-3 max-w-xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              अंतर ऐसा होना चाहिए जो उन सेवाओं से स्वाभाविक लगे जिन्हें लोग वास्तव में उपयोग करते हैं
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              UX4G तब सबसे प्रभावशाली है जब यह भारतीय सार्वजनिक सेवा डिलीवरी की वास्तविकताओं को संबोधित करता है: बहुभाषी इंटरफ़ेस, भरोसा-प्रधान यात्राएँ, दस्तावेज़ वर्कफ़्लो और भुगतान।
            </p>
            <div className="mt-8 rounded-[1.75rem] border border-border bg-card p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                यह क्यों महत्वपूर्ण है
              </p>
              <div className="mt-4 grid gap-4 sm:grid-cols-[auto_1fr] sm:items-start">
                <div className="text-5xl font-bold tracking-[-0.05em] text-primary">22</div>
                <p className="text-sm leading-6 text-muted-foreground">
                  भाषाएँ, लिपियाँ, सहायक यात्राएँ, भुगतान प्रवाह, दस्तावेज़ स्थितियाँ और सत्यापन चरण एक ही सेवा इकोसिस्टम का हिस्सा महसूस होने चाहिए, न कि अलग-अलग जोड़ी गई स्क्रीन।
                </p>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {["आधार", "पैन", "UPI", "प्रमाणपत्र", "22 भाषाएँ"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {indiaPatterns.map((item, index) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-card p-6 transition-transform hover:-translate-y-0.5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                    {index + 1}
                  </div>
                  <div className="mt-5 h-px flex-1 bg-[linear-gradient(90deg,var(--primary),transparent)]" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">सिस्टम देखें</p>
            <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
              एक सिस्टम, अलग-अलग प्रवेश बिंदु
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              डिज़ाइनर, इंजीनियर और सेवा टीमें बिना यह समझने की अतिरिक्त मेहनत किए कि सब कैसे काम करता है, एक ही इकोसिस्टम में प्रवेश कर सकें।
            </p>

            <div className="mt-8 space-y-5">
              {teamLanes.map((item) => (
                <div key={item.title} className="border-b border-border pb-5 last:border-b-0 last:pb-0">
                  <div className="flex items-start gap-4">
                    <div className="rounded-xl bg-primary/10 p-3 text-primary">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {systemShowcase.map((item) => (
              <Link
                key={item.title}
                to={item.to}
                className="group rounded-[1.75rem] border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg"
              >
                <div className="inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                  <item.icon size={20} />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.description}</p>
                <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  खोलें <ArrowRight size={16} />
                </div>
              </Link>
            ))}

            <div className="rounded-[1.75rem] border border-border bg-foreground p-6 text-background sm:col-span-3 lg:col-span-3">
              <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-background/70">
                    शुरुआत करें
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold">
                    केवल अधिक कॉम्पोनेंट्स नहीं, बल्कि अधिक स्पष्ट सिस्टम दृष्टि के साथ निर्माण करें
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-background/75">
                    कॉम्पोनेंट्स से शुरुआत करें, दस्तावेज़ पढ़ें और फ़ाउंडेशन से आगे बढ़कर वास्तविक सेवा यात्राओं तक पहुँचें।
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 md:justify-end">
                  <Link
                    to="/components"
                    className="inline-flex items-center gap-2 rounded-full bg-background px-5 py-3 text-sm font-semibold text-foreground transition-opacity hover:opacity-90"
                  >
                    कॉम्पोनेंट्स देखें <ArrowRight size={16} />
                  </Link>
                  <a
                    href="https://github.com/dbn1972/DesignSystem2016"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-background/20 px-5 py-3 text-sm font-semibold text-background transition-colors hover:bg-background/10"
                  >
                    GitHub पर देखें
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
