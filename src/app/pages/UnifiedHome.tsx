import { Link } from "react-router";
import { useTranslation } from "react-i18next";
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

const HOME_COPY = {
  en: {
    seoTitle: "Home",
    seoDescription:
      "India's open-source design system for building consistent, accessible digital public services.",
    hero: {
      badge: "Design systems for digital public services",
      eyebrow: "India-ready foundations",
      titleTop: "Design systems for India’s most important",
      titleAccent: "digital services",
      description:
        "UX4G helps teams ship accessible, consistent, and implementation-ready experiences across components, patterns, and service workflows.",
      kicker: "Accessible by default. Built for trust. Shaped for Indian public services.",
      ctaPrimary: "Explore components",
      ctaSecondary: "Read documentation",
      highlights: [
        { label: "Shared token system", value: "Foundations first" },
        { label: "Accessible defaults", value: "Production-minded" },
        { label: "Public-service patterns", value: "Built for India" },
      ],
    },
    canvas: {
      label: "System canvas",
      title: "Tokens, accessibility, and public-service patterns in one place",
      flowTitle: "Service flow",
      flowDescription: "Application, review, and approval states",
      flowItems: ["Application submitted", "Documents verified", "Certificate ready"],
      accessibilityTitle: "Accessibility readiness",
      accessibilityTarget: "AA target",
      languageTitle: "Language support",
      languages: ["English", "हिन्दी", "தமிழ்", "বাংলা"],
      tokensTitle: "Tokens",
      tokenLabels: ["Brand", "Accent", "Success"],
      markersTitle: "Service markers",
      markers: [
        { value: "01", label: "Foundations" },
        { value: "02", label: "Components" },
        { value: "03", label: "Services" },
      ],
      foundationsTitle: "Foundations",
      trustLabel: "Public-service trust",
      trustDescription:
        "Clear status, stable components, and patterns designed for real delivery teams.",
    },
    proof: {
      eyebrow: "Proof",
      title: "A stronger system story needs stronger evidence",
      items: [
        {
          title: "Accessibility by default",
          description:
            "Focus states, keyboard support, and usable defaults for public-facing services.",
        },
        {
          title: "Three implementation lanes",
          description:
            "React, Angular, and Web Components aligned to one design-system contract.",
        },
        {
          title: "Patterns for Indian services",
          description:
            "Identity, payments, multilingual journeys, and document-heavy workflows.",
        },
      ],
    },
    foundations: {
      eyebrow: "Foundations",
      title: "A design system should make good decisions easier to repeat",
      description:
        "UX4G is strongest when tokens, APIs, accessibility, and examples move together. The homepage now reflects that more directly.",
      cards: [
        {
          title: "Design tokens",
          description: "Colors, spacing, radius, and type scale travel through the same token system.",
          to: "/foundations",
        },
        {
          title: "Core components",
          description:
            "A focused library for inputs, navigation, feedback, data display, and layouts.",
          to: "/components",
        },
        {
          title: "Implementation guidance",
          description:
            "Usage patterns, specs, and examples that help teams build consistently.",
          to: "/resources/component-specs",
        },
      ],
      promiseTitle: "A smaller, stronger promise",
      promiseDescription:
        "World-class design systems are not just broad. They are predictable, accessible, and easy for teams to apply correctly.",
      promiseBullets: [
        "Shared tokens and theming",
        "Consistent component contracts",
        "Accessible defaults in critical flows",
        "Examples that match what is shipped",
      ],
    },
    india: {
      eyebrow: "Built for India",
      title: "The differentiator should feel native to the services people actually use",
      description:
        "UX4G is most compelling when it addresses the actual realities of Indian public-service delivery: multilingual interfaces, trust-heavy journeys, document workflows, and payments.",
      whyLabel: "Why this matters",
      whyDescription:
        "Languages, scripts, assisted journeys, payment flows, document states, and verification steps all need to feel like part of one service ecosystem, not stitched together screens.",
      tags: ["Aadhaar", "PAN", "UPI", "Certificates", "22 languages"],
      cards: [
        {
          title: "Identity and verification",
          description:
            "Aadhaar, PAN, and verification journeys designed for high-trust public services.",
        },
        {
          title: "Multilingual interfaces",
          description:
            "Support for Indian languages with layouts that respect script, spacing, and clarity.",
        },
        {
          title: "Payments and certificates",
          description:
            "Patterns for fee collection, official documents, and status-heavy service flows.",
        },
      ],
    },
    explore: {
      eyebrow: "Explore the system",
      title: "One system, different entry points",
      description:
        "Designers, engineers, and service teams should all land in the same ecosystem without having to reverse-engineer how it works.",
      teams: [
        {
          title: "Designers",
          description:
            "Use shared tokens, foundations, and specs to make UI decisions predictable.",
        },
        {
          title: "Engineers",
          description: "Adopt consistent APIs and accessible defaults across frameworks.",
        },
        {
          title: "Service teams",
          description:
            "Ship trusted user journeys with patterns built for public-service delivery.",
        },
      ],
      cards: [
        {
          title: "Components",
          description: "Explore the library, variants, and live examples.",
          to: "/components",
        },
        {
          title: "Service blueprints",
          description: "See how the system scales to end-to-end government workflows.",
          to: "/reference-service/overview",
        },
        {
          title: "Documentation",
          description: "Start with foundations, implementation notes, and package guidance.",
          to: "/documentation",
        },
      ],
      openLabel: "Open",
      ctaEyebrow: "Get started",
      ctaTitle: "Build with a clearer system narrative, not just a bigger component count",
      ctaDescription:
        "Start with components, read the documentation, and move from foundations into real service journeys.",
      ctaPrimary: "Browse components",
      ctaSecondary: "View on GitHub",
    },
  },
  hi: {
    seoTitle: "मुखपृष्ठ",
    seoDescription:
      "भारत की ओपन-सोर्स डिज़ाइन सिस्टम लाइब्रेरी, जो सुसंगत और सुलभ डिजिटल सार्वजनिक सेवाएँ बनाने में मदद करती है।",
    hero: {
      badge: "डिजिटल सार्वजनिक सेवाओं के लिए डिज़ाइन सिस्टम",
      eyebrow: "भारत-केंद्रित फ़ाउंडेशन",
      titleTop: "भारत की सबसे महत्वपूर्ण",
      titleAccent: "डिजिटल सेवाओं के लिए डिज़ाइन सिस्टम",
      description:
        "UX4G टीमों को कॉम्पोनेंट्स, पैटर्न्स और सेवा वर्कफ़्लो के बीच सुलभ, सुसंगत और इम्प्लीमेंटेशन-रेडी अनुभव बनाने में मदद करता है।",
      kicker:
        "डिफ़ॉल्ट रूप से सुलभ। भरोसे के लिए निर्मित। भारतीय सार्वजनिक सेवाओं के लिए आकार दिया गया।",
      ctaPrimary: "कॉम्पोनेंट्स देखें",
      ctaSecondary: "दस्तावेज़ पढ़ें",
      highlights: [
        { label: "साझा टोकन सिस्टम", value: "फ़ाउंडेशन पहले" },
        { label: "सुलभ डिफ़ॉल्ट", value: "प्रोडक्शन-उन्मुख" },
        { label: "सार्वजनिक-सेवा पैटर्न", value: "भारत के लिए निर्मित" },
      ],
    },
    canvas: {
      label: "सिस्टम कैनवास",
      title: "टोकन, सुलभता और सार्वजनिक-सेवा पैटर्न एक ही जगह",
      flowTitle: "सेवा प्रवाह",
      flowDescription: "आवेदन, समीक्षा और स्वीकृति स्थितियाँ",
      flowItems: ["आवेदन जमा", "दस्तावेज़ सत्यापित", "प्रमाणपत्र तैयार"],
      accessibilityTitle: "सुलभता तैयारी",
      accessibilityTarget: "AA लक्ष्य",
      languageTitle: "भाषा समर्थन",
      languages: ["अंग्रेज़ी", "हिन्दी", "தமிழ்", "বাংলা"],
      tokensTitle: "टोकन",
      tokenLabels: ["ब्रांड", "एक्सेंट", "सक्सेस"],
      markersTitle: "सेवा संकेतक",
      markers: [
        { value: "01", label: "फ़ाउंडेशन" },
        { value: "02", label: "कॉम्पोनेंट्स" },
        { value: "03", label: "सेवाएँ" },
      ],
      foundationsTitle: "फ़ाउंडेशन",
      trustLabel: "सार्वजनिक सेवा भरोसा",
      trustDescription:
        "स्पष्ट स्थिति, स्थिर कॉम्पोनेंट्स और वास्तविक डिलीवरी टीमों के लिए बने पैटर्न।",
    },
    proof: {
      eyebrow: "प्रमाण",
      title: "एक मजबूत सिस्टम कथा को मजबूत प्रमाण चाहिए",
      items: [
        {
          title: "डिफ़ॉल्ट रूप से सुलभ",
          description:
            "सार्वजनिक सेवाओं के लिए फ़ोकस स्टेट्स, कीबोर्ड सपोर्ट और उपयोगी डिफ़ॉल्ट व्यवहार।",
        },
        {
          title: "तीन इम्प्लीमेंटेशन लेन",
          description:
            "React, Angular और Web Components एक ही डिज़ाइन सिस्टम अनुबंध के साथ संरेखित।",
        },
        {
          title: "भारतीय सेवाओं के लिए पैटर्न",
          description:
            "पहचान, भुगतान, बहुभाषी यात्राएँ और दस्तावेज़-प्रधान वर्कफ़्लो के लिए तैयार।",
        },
      ],
    },
    foundations: {
      eyebrow: "फ़ाउंडेशन",
      title: "एक डिज़ाइन सिस्टम को अच्छे निर्णयों को दोहराना आसान बनाना चाहिए",
      description:
        "UX4G तब सबसे मजबूत है जब टोकन, APIs, सुलभता और उदाहरण साथ चलते हैं। यह मुखपृष्ठ अब उस दिशा को अधिक स्पष्ट रूप से दिखाता है।",
      cards: [
        {
          title: "डिज़ाइन टोकन",
          description: "रंग, स्पेसिंग, रेडियस और टाइप स्केल एक ही टोकन सिस्टम से संचालित होते हैं।",
          to: "/foundations",
        },
        {
          title: "मुख्य कॉम्पोनेंट्स",
          description: "इनपुट, नेविगेशन, फ़ीडबैक, डेटा डिस्प्ले और लेआउट के लिए केंद्रित लाइब्रेरी।",
          to: "/components",
        },
        {
          title: "इम्प्लीमेंटेशन मार्गदर्शन",
          description:
            "उपयोग पैटर्न, स्पेक्स और उदाहरण जो टीमों को लगातार सही तरीके से बनाने में मदद करें।",
          to: "/resources/component-specs",
        },
      ],
      promiseTitle: "छोटा, लेकिन अधिक मजबूत वादा",
      promiseDescription:
        "विश्व-स्तरीय डिज़ाइन सिस्टम केवल व्यापक नहीं होते। वे पूर्वानुमेय, सुलभ और टीमों के लिए सही तरीके से अपनाने में आसान होते हैं।",
      promiseBullets: [
        "साझा टोकन और थीमिंग",
        "एकसमान कॉम्पोनेंट अनुबंध",
        "महत्वपूर्ण फ्लोज़ में सुलभ डिफ़ॉल्ट",
        "वे उदाहरण जो वास्तविक शिप्ड सिस्टम से मेल खाते हैं",
      ],
    },
    india: {
      eyebrow: "भारत के लिए निर्मित",
      title: "अंतर ऐसा होना चाहिए जो उन सेवाओं से स्वाभाविक लगे जिन्हें लोग वास्तव में उपयोग करते हैं",
      description:
        "UX4G तब सबसे प्रभावशाली है जब यह भारतीय सार्वजनिक सेवा डिलीवरी की वास्तविकताओं को संबोधित करता है: बहुभाषी इंटरफ़ेस, भरोसा-प्रधान यात्राएँ, दस्तावेज़ वर्कफ़्लो और भुगतान।",
      whyLabel: "यह क्यों महत्वपूर्ण है",
      whyDescription:
        "भाषाएँ, लिपियाँ, सहायक यात्राएँ, भुगतान प्रवाह, दस्तावेज़ स्थितियाँ और सत्यापन चरण एक ही सेवा इकोसिस्टम का हिस्सा महसूस होने चाहिए, न कि अलग-अलग जोड़ी गई स्क्रीन।",
      tags: ["आधार", "पैन", "UPI", "प्रमाणपत्र", "22 भाषाएँ"],
      cards: [
        {
          title: "पहचान और सत्यापन",
          description:
            "आधार, पैन और सत्यापन यात्राएँ जो उच्च-विश्वास वाली सार्वजनिक सेवाओं के लिए डिज़ाइन की गई हैं।",
        },
        {
          title: "बहुभाषी इंटरफ़ेस",
          description:
            "भारतीय भाषाओं के लिए ऐसे लेआउट जो लिपि, स्पेसिंग और स्पष्टता का सम्मान करते हैं।",
        },
        {
          title: "भुगतान और प्रमाणपत्र",
          description: "फ़ीस संग्रह, आधिकारिक दस्तावेज़ और स्थिति-प्रधान सेवा प्रवाह के लिए पैटर्न।",
        },
      ],
    },
    explore: {
      eyebrow: "सिस्टम देखें",
      title: "एक सिस्टम, अलग-अलग प्रवेश बिंदु",
      description:
        "डिज़ाइनर, इंजीनियर और सेवा टीमें बिना यह समझने की अतिरिक्त मेहनत किए कि सब कैसे काम करता है, एक ही इकोसिस्टम में प्रवेश कर सकें।",
      teams: [
        {
          title: "डिज़ाइनर",
          description:
            "साझा टोकन, फ़ाउंडेशन और स्पेक्स का उपयोग करके UI निर्णयों को अधिक पूर्वानुमेय बनाएं।",
        },
        {
          title: "इंजीनियर",
          description: "सभी फ़्रेमवर्क्स में एकसमान APIs और सुलभ डिफ़ॉल्ट व्यवहार अपनाएँ।",
        },
        {
          title: "सेवा टीमें",
          description:
            "सार्वजनिक सेवा डिलीवरी के लिए बने पैटर्न्स के साथ भरोसेमंद यूज़र जर्नी जारी करें।",
        },
      ],
      cards: [
        {
          title: "कॉम्पोनेंट्स",
          description: "लाइब्रेरी, वेरिएंट्स और लाइव उदाहरण देखें।",
          to: "/components",
        },
        {
          title: "सेवा ब्लूप्रिंट्स",
          description: "देखें कि यह सिस्टम एंड-टू-एंड सरकारी वर्कफ़्लो तक कैसे स्केल करता है।",
          to: "/reference-service/overview",
        },
        {
          title: "दस्तावेज़ीकरण",
          description: "फ़ाउंडेशन, इम्प्लीमेंटेशन नोट्स और पैकेज मार्गदर्शन से शुरुआत करें।",
          to: "/documentation",
        },
      ],
      openLabel: "खोलें",
      ctaEyebrow: "शुरुआत करें",
      ctaTitle: "केवल अधिक कॉम्पोनेंट्स नहीं, बल्कि अधिक स्पष्ट सिस्टम दृष्टि के साथ निर्माण करें",
      ctaDescription:
        "कॉम्पोनेंट्स से शुरुआत करें, दस्तावेज़ पढ़ें और फ़ाउंडेशन से आगे बढ़कर वास्तविक सेवा यात्राओं तक पहुँचें।",
      ctaPrimary: "कॉम्पोनेंट्स देखें",
      ctaSecondary: "GitHub पर देखें",
    },
  },
} as const;

function HeroCanvas({ copy }: { copy: typeof HOME_COPY.en }) {
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
                {copy.canvas.label}
              </p>
              <h2 className="mt-2 text-xl font-semibold text-foreground">{copy.canvas.title}</h2>
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
                <p className="text-sm font-semibold text-foreground">{copy.canvas.flowTitle}</p>
                <p className="text-xs text-muted-foreground">{copy.canvas.flowDescription}</p>
              </div>
            </div>

            <div className="grid gap-3">
              {[
                { label: copy.canvas.flowItems[0], tone: "bg-primary" },
                { label: copy.canvas.flowItems[1], tone: "bg-[color:var(--ux4g-color-feedback-success)]" },
                { label: copy.canvas.flowItems[2], tone: "bg-[color:var(--ux4g-color-feedback-warning)]" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 rounded-xl border border-border bg-card p-3">
                  <div className={`h-2.5 w-2.5 rounded-full ${item.tone}`} />
                  <span className="text-sm text-foreground">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-border bg-card p-4">
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="font-medium text-foreground">{copy.canvas.accessibilityTitle}</span>
                <span className="text-muted-foreground">{copy.canvas.accessibilityTarget}</span>
              </div>
              <div className="h-2 rounded-full bg-muted">
                <div className="h-2 w-[72%] rounded-full bg-primary" />
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-foreground">{copy.canvas.languageTitle}</p>
                <Globe size={16} className="text-primary" />
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {copy.canvas.languages.map((language) => (
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
                {copy.canvas.tokensTitle}
              </p>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                <div className="rounded-xl border border-border bg-background p-3">
                  <div className="h-10 rounded-lg bg-primary" />
                  <p className="mt-2 text-xs text-muted-foreground">{copy.canvas.tokenLabels[0]}</p>
                </div>
                <div className="rounded-xl border border-border bg-background p-3">
                  <div className="h-10 rounded-lg bg-[color:var(--ux4g-color-saffron-500)]" />
                  <p className="mt-2 text-xs text-muted-foreground">{copy.canvas.tokenLabels[1]}</p>
                </div>
                <div className="rounded-xl border border-border bg-background p-3">
                  <div className="h-10 rounded-lg bg-[color:var(--ux4g-color-feedback-success)]" />
                  <p className="mt-2 text-xs text-muted-foreground">{copy.canvas.tokenLabels[2]}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="self-start space-y-4">
            <div className="rounded-2xl border border-border bg-background p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                {copy.canvas.markersTitle}
              </p>
              <div className="mt-4 space-y-3">
                {copy.canvas.markers.map((marker) => (
                  <div key={marker.label} className="flex items-center justify-between rounded-xl border border-border bg-card px-3 py-2.5">
                    <span className="text-xs font-semibold tracking-[0.18em] text-primary">{marker.value}</span>
                    <span className="text-sm font-medium text-foreground">{marker.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-background p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                {copy.canvas.foundationsTitle}
              </p>
              <div className="mt-4 space-y-3">
                {["--ux4g-color-brand-primary", "--ux4g-spacing-4", "--ux4g-radius-lg"].map((token) => (
                  <div key={token} className="rounded-xl border border-border bg-card px-3 py-2">
                    <p className="text-xs font-medium text-foreground">{token}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-[linear-gradient(135deg,color-mix(in_srgb,var(--primary)_92%,black_8%),color-mix(in_srgb,var(--ux4g-color-saffron-500)_36%,var(--primary)_64%))] p-4 text-primary-foreground">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-foreground/70">
                {copy.canvas.trustLabel}
              </p>
              <p className="mt-3 text-lg font-semibold leading-6">{copy.canvas.trustDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function UnifiedHome() {
  const { i18n } = useTranslation();
  const language = i18n.resolvedLanguage === "hi" ? "hi" : "en";
  const copy = HOME_COPY[language];

  const proofCards = [
    { ...copy.proof.items[0], icon: Shield },
    { ...copy.proof.items[1], icon: Code },
    { ...copy.proof.items[2], icon: Globe },
  ];

  const foundationCards = [
    { ...copy.foundations.cards[0], icon: Palette },
    { ...copy.foundations.cards[1], icon: Box },
    { ...copy.foundations.cards[2], icon: BookOpen },
  ];

  const teamCards = [
    { ...copy.explore.teams[0], icon: Palette },
    { ...copy.explore.teams[1], icon: Code },
    { ...copy.explore.teams[2], icon: Building2 },
  ];

  const showcaseCards = [
    { ...copy.explore.cards[0], icon: Box },
    { ...copy.explore.cards[1], icon: Layers },
    { ...copy.explore.cards[2], icon: BookOpen },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead title={copy.seoTitle} description={copy.seoDescription} />

      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,color-mix(in_srgb,var(--primary)_12%,transparent),transparent_52%),radial-gradient(ellipse_at_bottom_right,color-mix(in_srgb,var(--ux4g-color-saffron-500)_14%,transparent),transparent_48%)]" />
        <div className="absolute inset-x-0 top-0 h-28 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.18),transparent)] opacity-50" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:py-20 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground backdrop-blur">
              <Shield size={14} className="text-primary" />
              {copy.hero.badge}
            </div>

            <div className="mt-8 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.26em] text-muted-foreground">
              <span className="h-px w-14 bg-[linear-gradient(90deg,var(--ux4g-color-saffron-500),transparent)]" />
              {copy.hero.eyebrow}
            </div>

            <h1 className="mt-8 max-w-3xl text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.045em] text-foreground sm:text-6xl lg:text-[4.8rem] lg:leading-[0.95]">
              {copy.hero.titleTop}
              <span className="block bg-[linear-gradient(90deg,var(--foreground),color-mix(in_srgb,var(--primary)_72%,var(--foreground)_28%))] bg-clip-text text-transparent">
                {copy.hero.titleAccent}
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-[1.3rem] sm:leading-9">
              {copy.hero.description}
            </p>

            <p className="mt-6 max-w-xl text-sm font-medium uppercase tracking-[0.24em] text-muted-foreground">
              {copy.hero.kicker}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/components"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-opacity hover:opacity-90"
              >
                {copy.hero.ctaPrimary} <ArrowRight size={16} />
              </Link>
              <Link
                to="/documentation"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
              >
                {copy.hero.ctaSecondary}
              </Link>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              {copy.hero.highlights.map((item) => (
                <div key={item.label} className="border-l-2 border-primary/20 pl-4">
                  <p className="text-sm font-semibold text-foreground">{item.label}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <HeroCanvas copy={copy} />
        </div>
      </section>

      <section className="border-b border-border bg-card/30">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 md:grid-cols-[0.8fr_1.2fr]">
          <div className="max-w-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">{copy.proof.eyebrow}</p>
            <h2 className="mt-3 text-2xl font-semibold text-foreground sm:text-3xl">{copy.proof.title}</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {proofCards.map((item) => (
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
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
            {copy.foundations.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">{copy.foundations.title}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{copy.foundations.description}</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="grid gap-4 sm:grid-cols-3">
            {foundationCards.map((item) => (
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
            <h3 className="mt-5 text-2xl font-semibold text-foreground">{copy.foundations.promiseTitle}</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              {copy.foundations.promiseDescription}
            </p>
            <ul className="mt-6 space-y-3">
              {copy.foundations.promiseBullets.map((item) => (
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
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">{copy.india.eyebrow}</p>
            <h2 className="mt-3 max-w-xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {copy.india.title}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">{copy.india.description}</p>
            <div className="mt-8 rounded-[1.75rem] border border-border bg-card p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                {copy.india.whyLabel}
              </p>
              <div className="mt-4 grid gap-4 sm:grid-cols-[auto_1fr] sm:items-start">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.05em] text-primary">22</div>
                <p className="text-sm leading-6 text-muted-foreground">{copy.india.whyDescription}</p>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {copy.india.tags.map((tag) => (
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
            {copy.india.cards.map((item, index) => (
              <div key={item.title} className="rounded-2xl border border-border bg-card p-6 transition-transform hover:-translate-y-0.5">
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
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">{copy.explore.eyebrow}</p>
            <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">{copy.explore.title}</h2>
            <p className="mt-4 text-lg text-muted-foreground">{copy.explore.description}</p>

            <div className="mt-8 space-y-5">
              {teamCards.map((item) => (
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
            {showcaseCards.map((item) => (
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
                  {copy.explore.openLabel} <ArrowRight size={16} />
                </div>
              </Link>
            ))}

            <div className="rounded-[1.75rem] border border-border bg-foreground p-6 text-background sm:col-span-3 lg:col-span-3">
              <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-background/70">
                    {copy.explore.ctaEyebrow}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold">{copy.explore.ctaTitle}</h3>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-background/75">
                    {copy.explore.ctaDescription}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 md:justify-end">
                  <Link
                    to="/components"
                    className="inline-flex items-center gap-2 rounded-full bg-background px-5 py-3 text-sm font-semibold text-foreground transition-opacity hover:opacity-90"
                  >
                    {copy.explore.ctaPrimary} <ArrowRight size={16} />
                  </Link>
                  <a
                    href="https://github.com/dbn1972/DesignSystem2016"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-background/20 px-5 py-3 text-sm font-semibold text-background transition-colors hover:bg-background/10"
                  >
                    {copy.explore.ctaSecondary}
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
