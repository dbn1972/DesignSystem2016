import { useEffect, useMemo, useState } from "react";
import type { ComponentType } from "react";
import {
  ArrowRight,
  BookOpen,
  Link2,
  CheckCircle2,
  Code2,
  Globe2,
  HelpCircle,
  Layers3,
  LifeBuoy,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

type Language = "en" | "hi";

type FAQLink = {
  label: string;
  href: string;
};

type FAQItem = {
  question: string;
  answer: string;
  keywords: string[];
  relatedLinks: FAQLink[];
};

type FAQSection = {
  id: string;
  title: string;
  intro: string;
  icon: ComponentType<{ className?: string }>;
  faqs: FAQItem[];
};

type FAQPageCopy = {
  badge: string;
  title: string;
  intro: string;
  primaryCta: string;
  secondaryCta: string;
  trustTitle: string;
  trustPoints: Array<{ title: string; text: string }>;
  jumpTitle: string;
  jumpIntro: string;
  searchLabel: string;
  searchPlaceholder: string;
  searchSummary: (count: number, total: number) => string;
  noResultsTitle: string;
  noResultsText: string;
  clearSearch: string;
  questionCount: (count: number) => string;
  relatedResources: string;
  helpfulTitle: string;
  helpfulText: string;
  helpfulYes: string;
  helpfulNo: string;
  helpfulThanks: string;
  helpfulMore: string;
  reviewedLabel: string;
  appliesToLabel: string;
  topicLabel: string;
  popularTitle: string;
  popularText: string;
  peopleAlsoReadTitle: string;
  peopleAlsoReadText: string;
  copyLink: string;
  copiedLink: string;
  sidebarTitle: string;
  helpTitle: string;
  helpText: string;
  helpPrimary: string;
  helpSecondary: string;
  helpTertiary: string;
  quickLinks: FAQLink[];
  sections: FAQSection[];
};

const SECTION_ICONS = {
  about: BookOpen,
  adoption: Code2,
  quality: ShieldCheck,
  governance: Layers3,
  support: LifeBuoy,
} satisfies Record<string, ComponentType<{ className?: string }>>;

const FAQ_COPY: Record<Language, FAQPageCopy> = {
  en: {
    badge: "Design System FAQ",
    title: "Clear answers for teams designing, building, and governing with UX4G.",
    intro:
      "This FAQ is built for the questions that slow teams down in real delivery: when to adopt the system, how to implement it safely, how accessibility and localization fit in, and what to do when a genuine gap appears.",
    primaryCta: "Explore documentation",
    secondaryCta: "Contribution guidance",
    trustTitle: "What this page helps with",
    trustPoints: [
      {
        title: "Grounded in delivery reality",
        text: "Answers focus on actual adoption, implementation, and governance decisions.",
      },
      {
        title: "Useful across roles",
        text: "Design, engineering, accessibility, and governance teams can all start from the same page.",
      },
      {
        title: "Built for faster decisions",
        text: "Search, jump links, and related resources reduce support overhead and dead ends.",
      },
    ],
    jumpTitle: "Jump To",
    jumpIntro:
      "Move directly to the part of the FAQ that matches your role, your delivery phase, or the decision you need to make.",
    searchLabel: "Search the FAQ",
    searchPlaceholder:
      "Search questions like framework support, accessibility, localization, migration…",
    searchSummary: (count, total) =>
      count === total
        ? `${total} questions across all FAQ sections`
        : `${count} matching questions from ${total} total`,
    noResultsTitle: "No matching questions yet",
    noResultsText:
      "Try a broader term such as accessibility, tokens, governance, localization, or migration.",
    clearSearch: "Clear search",
    questionCount: (count) => `${count} key questions`,
    relatedResources: "Related resources",
    helpfulTitle: "Was this page helpful?",
    helpfulText:
      "Use this signal to spot documentation gaps and decide what should be clarified next.",
    helpfulYes: "Yes, it answered my question",
    helpfulNo: "Not yet",
    helpfulThanks: "Thanks. That signal helps improve the FAQ over time.",
    helpfulMore: "If the answer is still missing, go straight to support or contribution guidance.",
    reviewedLabel: "Last reviewed",
    appliesToLabel: "Applies to",
    topicLabel: "Topic",
    popularTitle: "Popular questions",
    popularText: "Start with the questions most teams ask early in adoption.",
    peopleAlsoReadTitle: "People also read",
    peopleAlsoReadText: "Nearby questions and related guidance that usually help next.",
    copyLink: "Copy link to this answer",
    copiedLink: "Link copied",
    sidebarTitle: "Recommended Next Stops",
    helpTitle: "Still Need Help?",
    helpText:
      "If your question is really about a component gap, accessibility issue, or delivery blocker, route it to the right place instead of treating it as a generic help request.",
    helpPrimary: "Contact support",
    helpSecondary: "Review accessibility guidance",
    helpTertiary: "See contribution process",
    quickLinks: [
      { label: "Documentation", href: "/documentation" },
      { label: "Foundations", href: "/foundations" },
      { label: "Components", href: "/components" },
      { label: "Patterns", href: "/patterns" },
      { label: "Accessibility", href: "/accessibility" },
      { label: "Contributing", href: "/contributing" },
    ],
    sections: [
      {
        id: "about",
        title: "About UX4G",
        intro:
          "Start here if you need to understand what the system covers, who it is for, and where it should be used.",
        icon: SECTION_ICONS.about,
        faqs: [
          {
            question: "What is UX4G?",
            answer:
              "UX4G is the shared design system for trusted Government of India digital services. It brings together tokens, components, patterns, archetypes, implementation guidance, and governance so teams can build faster while staying consistent, accessible, and maintainable.",
            keywords: ["overview", "what is ux4g", "design system", "purpose"],
            relatedLinks: [
              { label: "Read the documentation hub", href: "/documentation" },
              { label: "See foundations", href: "/foundations" },
            ],
          },
          {
            question: "Who should use UX4G?",
            answer:
              "UX4G is for product designers, frontend engineers, accessibility reviewers, content teams, service owners, and governance teams working on public digital services. It is most valuable when multiple teams need to ship coherent experiences across service portals, workflows, and operational tools.",
            keywords: ["audience", "who uses", "teams", "roles"],
            relatedLinks: [
              { label: "Browse components", href: "/components" },
              { label: "Browse patterns", href: "/patterns" },
            ],
          },
          {
            question: "When should a team use the design system?",
            answer:
              "Use UX4G from the start of any new public-service product, major redesign, or platform consolidation effort. Teams should also adopt it when they need stronger accessibility baselines, more reuse between services, or better governance around UI quality and implementation consistency.",
            keywords: ["when to use", "adoption", "new service", "redesign"],
            relatedLinks: [
              { label: "Get started", href: "/resources/getting-started" },
              { label: "Review migration guides", href: "/resources/migration-guides" },
            ],
          },
          {
            question: "When should teams avoid creating a custom pattern?",
            answer:
              "Do not create a custom pattern when the need can be solved by combining existing foundations, components, and documented patterns. A custom pattern should be a last resort, used only when the requirement is genuinely new, the constraint is validated, and the team can explain why the existing system cannot be extended safely.",
            keywords: ["custom pattern", "exceptions", "new pattern", "reuse"],
            relatedLinks: [
              { label: "See pattern library", href: "/patterns" },
              { label: "See contribution process", href: "/contributing" },
            ],
          },
        ],
      },
      {
        id: "adoption",
        title: "Adoption And Implementation",
        intro:
          "These answers help teams bring UX4G into design files, codebases, and delivery workflows without drifting from the system.",
        icon: SECTION_ICONS.adoption,
        faqs: [
          {
            question: "How do tokens, components, patterns, and archetypes fit together?",
            answer:
              "Tokens define the shared design language. Components turn those decisions into reusable UI building blocks. Patterns show how components work together in recurring tasks such as forms, authentication, and tracking. Archetypes bring multiple patterns together into fuller service journeys or reference implementations.",
            keywords: ["tokens", "components", "patterns", "archetypes", "structure"],
            relatedLinks: [
              { label: "Explore foundations", href: "/foundations" },
              { label: "Explore archetypes", href: "/archetypes" },
            ],
          },
          {
            question: "Which frameworks are supported?",
            answer:
              "UX4G currently supports React, Angular, and Web Components. Teams should choose the package that matches their product stack while still following the same shared tokens, naming, accessibility expectations, and maturity guidance across frameworks.",
            keywords: ["frameworks", "react", "angular", "web components"],
            relatedLinks: [
              { label: "Angular docs", href: "/docs/angular" },
              { label: "Web Components docs", href: "/docs/web-components" },
            ],
          },
          {
            question: "How should teams adopt UX4G in design and code?",
            answer:
              "Start with foundations and the core components your service needs most. Adopt tokens first, then high-confidence components, then documented patterns for key workflows. In code, prefer the shipped component APIs over recreating local variants. In design, use the approved library and keep explorations anchored to the same system rules.",
            keywords: ["adopt", "implementation", "design and code", "start"],
            relatedLinks: [
              { label: "Getting started", href: "/resources/getting-started" },
              { label: "Component specs", href: "/resources/component-specs" },
            ],
          },
          {
            question: "How much customization is acceptable?",
            answer:
              "Teams can customize within the bounds of UX4G tokens, documented variants, and approved layout patterns. They should not fork component behavior, invent new visual variants casually, or hardcode one-off styling that breaks consistency. If a service needs something new, the right path is to propose an extension back to the design system.",
            keywords: ["customization", "variants", "tokens", "extension"],
            relatedLinks: [
              { label: "Read component contract guidance", href: "/documentation" },
              { label: "Open contributing", href: "/contributing" },
            ],
          },
          {
            question: "How do I scaffold a new UX4G project quickly?",
            answer:
              "Use the create-ux4g-app CLI tool to scaffold a new project in seconds. Run npx create-ux4g-app my-app to create a React project, or npx create-ux4g-app my-app --template angular for Angular. The CLI generates a complete project with UX4G dependencies, TypeScript configuration, build tooling, and a sample app with Indian tricolor branding.",
            keywords: ["cli", "scaffold", "create app", "npx", "starter", "new project"],
            relatedLinks: [
              { label: "Getting started guide", href: "/resources/getting-started" },
              { label: "Starter kit", href: "/resources/starter-kit" },
            ],
          },
          {
            question: "How does the advanced theming system work?",
            answer:
              "UX4G includes a full-featured theming system with runtime theme switching, custom department themes, and high-contrast accessibility mode. Use the ThemeProvider component to wrap your app, then use the useTheme hook to access theme state and switching functions. Five built-in presets are available: default (navy), saffron-primary, green-primary, navy-primary, and high-contrast. Departments can create custom themes using the createTheme API, which deep-merges overrides onto any base preset while maintaining WCAG 2.1 AA compliance.",
            keywords: ["theming", "theme provider", "dark mode", "custom theme", "department branding", "high contrast"],
            relatedLinks: [
              { label: "Foundations", href: "/foundations" },
              { label: "Accessibility guidance", href: "/accessibility" },
            ],
          },
          {
            question: "What CSS styles are available for components?",
            answer:
              "All 87 UX4G components have corresponding CSS files in the @ux4g/styles package. Each CSS file follows a consistent template: base class, sub-elements, variants, states, sizes, pseudo-classes, and reduced-motion support. All visual values use CSS custom properties (var(--ux4g-*, fallback)) from the design tokens package, ensuring components are themeable and render correctly even without the tokens package loaded.",
            keywords: ["css", "styles", "component styles", "tokens", "custom properties"],
            relatedLinks: [
              { label: "Foundations", href: "/foundations" },
              { label: "Component library", href: "/components" },
            ],
          },
        ],
      },
      {
        id: "quality",
        title: "Accessibility, Localization, And Quality",
        intro:
          "These are the questions teams ask when they need to trust the system in real public-service conditions.",
        icon: SECTION_ICONS.quality,
        faqs: [
          {
            question: "How does accessibility work in UX4G?",
            answer:
              "Accessibility is a system requirement, not a later review step. UX4G aims for accessible defaults across tokens, components, content patterns, and interactions, including keyboard support, clear focus treatment, semantic structure, error messaging, and screen-reader compatibility. Teams are still responsible for accessible product copy, workflow logic, and testing in their own service context.",
            keywords: ["accessibility", "wcag", "screen reader", "keyboard"],
            relatedLinks: [
              { label: "Accessibility guidance", href: "/accessibility" },
              { label: "Patterns for support and help", href: "/patterns/contact-support/overview" },
            ],
          },
          {
            question: "How should teams handle multilingual and localization requirements?",
            answer:
              "Teams should design for language expansion, script differences, clear copy, and predictable layout behavior from the beginning. UX4G supports localization-aware design and encourages products to test critical flows in the languages they actually serve. Do not assume English-first layouts will hold up once real localized content is introduced.",
            keywords: ["localization", "multilingual", "language", "hindi"],
            relatedLinks: [
              { label: "Localization patterns", href: "/patterns/localization" },
              { label: "Content system", href: "/content-system" },
            ],
          },
          {
            question: "What browser and device support should teams expect?",
            answer:
              "Teams should target current evergreen browsers, common mobile devices, and realistic public-service usage conditions such as constrained bandwidth and varied screen sizes. When products have additional support requirements, those should be validated explicitly rather than assumed from the design system alone.",
            keywords: ["browser support", "device support", "mobile", "compatibility"],
            relatedLinks: [
              { label: "Documentation hub", href: "/documentation" },
              { label: "Reference service overview", href: "/reference-service/overview" },
            ],
          },
          {
            question: "How do stable, beta, and experimental maturity levels work?",
            answer:
              "Stable items are the safest default for production adoption. Beta items are available for real use but may still evolve based on implementation and accessibility feedback. Experimental items are shared for exploration, testing, or narrow pilots and should not be treated as long-term contracts without review.",
            keywords: ["maturity", "stable", "beta", "experimental"],
            relatedLinks: [
              { label: "Documentation hub", href: "/documentation" },
              { label: "Governance", href: "/governance" },
            ],
          },
          {
            question: "How is accessibility testing automated in UX4G?",
            answer:
              "UX4G has comprehensive automated accessibility testing using vitest-axe (axe-core) integrated into every component's test file. The a11y test helper module provides checkA11y, assertA11y, and assertA11yStates functions that scan components against WCAG 2.1 A and AA rules. All 54 tiered components have Accessibility describe blocks with axe scans for default, disabled, error, and variant states, plus keyboard navigation tests for interactive components. Run pnpm run test:a11y to execute the full accessibility test suite.",
            keywords: ["accessibility testing", "axe", "wcag", "automated testing", "a11y"],
            relatedLinks: [
              { label: "Accessibility guidance", href: "/accessibility" },
              { label: "Component library", href: "/components" },
            ],
          },
          {
            question: "What is the current test coverage?",
            answer:
              "UX4G maintains 95%+ test coverage across all 87 components: 95.4% statement coverage, 91.3% branch coverage, 96.9% function coverage, and 96.8% line coverage. The CI pipeline enforces an 80% minimum threshold on every pull request. Tests cover rendering, variants, states, interactions, keyboard navigation, accessibility (axe scans), and edge cases.",
            keywords: ["test coverage", "unit tests", "vitest", "ci", "quality"],
            relatedLinks: [
              { label: "Contributing", href: "/contributing" },
              { label: "Governance", href: "/governance" },
            ],
          },
          {
            question: "How does the theme validation system ensure accessibility?",
            answer:
              "The ThemeValidator module provides a validateTheme function that checks all color token pairs against WCAG 2.1 contrast requirements. It computes relative luminance using the WCAG formula and verifies text-to-background pairs meet 4.5:1 (AA normal text) and interactive-to-background pairs meet 3:1 (AA UI components). The high-contrast preset targets WCAG AAA (7:1 for text). Custom themes created with createTheme can be validated before deployment to ensure department branding maintains accessibility compliance.",
            keywords: ["theme validation", "contrast ratio", "wcag", "color accessibility", "luminance"],
            relatedLinks: [
              { label: "Accessibility guidance", href: "/accessibility" },
              { label: "Foundations", href: "/foundations" },
            ],
          },
        ],
      },
      {
        id: "governance",
        title: "Governance And Contribution",
        intro:
          "Use this section when your team needs a clear path for extending, reviewing, or evolving the system responsibly.",
        icon: SECTION_ICONS.governance,
        faqs: [
          {
            question: "How should a team request a new component or pattern?",
            answer:
              "Start by documenting the service need, the user problem, why existing UX4G options are insufficient, and what evidence supports the request. Strong requests include accessibility considerations, content needs, interaction states, and examples of repeated usage beyond a single screen.",
            keywords: ["request component", "request pattern", "new component", "new pattern"],
            relatedLinks: [
              { label: "Contributing", href: "/contributing" },
              { label: "Patterns library", href: "/patterns" },
            ],
          },
          {
            question: "What is the contribution and governance process?",
            answer:
              "Contributions should follow the system’s documented review process and must be evaluated for design quality, accessibility, implementation consistency, documentation completeness, and maintainability. Governance is not just visual approval; it is the mechanism that protects system trust over time.",
            keywords: ["governance", "review", "contribution", "process"],
            relatedLinks: [
              { label: "Contribution guidelines", href: "/contributing" },
              { label: "Governance overview", href: "/governance" },
            ],
          },
          {
            question: "What should teams do if UX4G does not yet cover their need?",
            answer:
              "Teams should first confirm that the need cannot be met through an existing component combination or documented pattern. If the gap is real, they should build the smallest responsible extension, document the rationale, and bring it back for design-system review instead of allowing a permanent local fork to spread unchecked.",
            keywords: ["gap", "missing", "exceptions", "system does not cover"],
            relatedLinks: [
              { label: "Contributing", href: "/contributing" },
              { label: "Contact support", href: "/contact" },
            ],
          },
          {
            question: "How do versioning and migrations work?",
            answer:
              "Teams should treat version upgrades as planned engineering work, not passive package bumps. Review migration guidance, check for maturity changes, test critical flows, and watch for API or behavioral updates. The design system should make upgrades understandable, but product teams still own safe rollout in their applications.",
            keywords: ["migration", "versioning", "upgrade", "breaking changes"],
            relatedLinks: [
              { label: "Migration guides", href: "/resources/migration-guides" },
              { label: "API reference", href: "/api-reference" },
            ],
          },
          {
            question: "What does the CI/CD pipeline include?",
            answer:
              "UX4G has a complete CI/CD pipeline with five GitHub Actions workflows: (1) CI Pipeline — TypeScript typecheck, unit tests with 80%+ coverage threshold, accessibility tests, production build verification, and validation checks (doc links, API drift, semantic colors). (2) Publish Pipeline — builds and publishes @ux4g/tokens, @ux4g/styles, and @ux4g/react-core to NPM with provenance, supporting dry-run mode. (3) Visual Regression — Playwright-based screenshot comparison at desktop, tablet, and mobile viewports. (4) Storybook Smoke — verifies Storybook builds successfully. (5) Deploy Docs — deploys the documentation site to GitHub Pages.",
            keywords: ["ci", "cd", "pipeline", "github actions", "deployment", "npm publish"],
            relatedLinks: [
              { label: "Contributing", href: "/contributing" },
              { label: "Governance", href: "/governance" },
            ],
          },
          {
            question: "How can departments share custom themes?",
            answer:
              "Custom themes can be exported and imported as JSON using the serializeTheme and deserializeTheme functions. The serialized format includes a version field, theme name, base theme reference, and token overrides for both light and dark variants. This allows departments to share branded themes across projects and teams while maintaining version compatibility.",
            keywords: ["theme sharing", "json", "serialize", "department theme", "export import"],
            relatedLinks: [
              { label: "Foundations", href: "/foundations" },
              { label: "Contributing", href: "/contributing" },
            ],
          },
        ],
      },
      {
        id: "support",
        title: "Support And Responsible Use",
        intro:
          "These answers help teams know where to go next, how to escalate issues, and how to use UX4G responsibly in public-service delivery.",
        icon: SECTION_ICONS.support,
        faqs: [
          {
            question: "Where do teams find Figma files, documentation, and code resources?",
            answer:
              "Start in the documentation and resources sections of the site for foundations, components, patterns, migration notes, Figma resources, and framework-specific guidance. Teams should work from the current official sources rather than screenshots, copied snippets, or outdated local files.",
            keywords: ["figma", "documentation", "resources", "code"],
            relatedLinks: [
              { label: "Figma resources", href: "/resources/figma" },
              { label: "Documentation hub", href: "/documentation" },
            ],
          },
          {
            question: "How should government and public-service products use UX4G responsibly?",
            answer:
              "Teams should prioritize clarity, inclusion, trust, and service completion over decorative novelty. That means plain language, strong accessibility, predictable patterns, careful data handling, and honest user guidance. Government products should use the system to reduce friction, not to create visual inconsistency or unnecessary complexity.",
            keywords: ["government", "public service", "responsible use", "trust"],
            relatedLinks: [
              { label: "Accessibility", href: "/accessibility" },
              { label: "Patterns library", href: "/patterns" },
            ],
          },
          {
            question: "How do teams report bugs, accessibility issues, or documentation gaps?",
            answer:
              "Report issues through the project’s documented support and contribution channels with enough detail to reproduce the problem. Good reports include the affected route or component, framework, expected behavior, actual behavior, screenshots or recordings when helpful, and any accessibility impact that needs urgent review.",
            keywords: ["bugs", "report", "documentation gap", "accessibility issue"],
            relatedLinks: [
              { label: "Contact support", href: "/contact" },
              { label: "Contribution guidelines", href: "/contributing" },
            ],
          },
          {
            question: "Where should teams go when they still need help?",
            answer:
              "If the answer is not in documentation, check the relevant component, pattern, accessibility, or governance pages first, then reach out through the support or contribution channels. The best next step depends on whether the issue is about adoption, implementation, accessibility, or a true system gap, so route the question with that context whenever possible.",
            keywords: ["support", "help", "contact", "where to go"],
            relatedLinks: [
              { label: "Contact support", href: "/contact" },
              { label: "Accessibility guidance", href: "/accessibility" },
              { label: "Contributing", href: "/contributing" },
            ],
          },
        ],
      },
    ],
  },
  hi: {
    badge: "डिज़ाइन सिस्टम FAQ",
    title: "UX4G के साथ डिज़ाइन, निर्माण और गवर्नेंस करने वाली टीमों के लिए स्पष्ट उत्तर।",
    intro:
      "यह FAQ उन वास्तविक सवालों के लिए बनाया गया है जो डिलीवरी को धीमा करते हैं: सिस्टम कब अपनाना है, इसे सुरक्षित तरीके से कैसे लागू करना है, accessibility और localization इसमें कैसे जुड़ते हैं, और जब कोई वास्तविक gap दिखे तो क्या करना है।",
    primaryCta: "दस्तावेज़ीकरण देखें",
    secondaryCta: "योगदान मार्गदर्शन",
    trustTitle: "यह पेज किसमें मदद करता है",
    trustPoints: [
      {
        title: "वास्तविक डिलीवरी पर आधारित",
        text: "उत्तर adoption, implementation और governance के वास्तविक निर्णयों पर केंद्रित हैं।",
      },
      {
        title: "अलग-अलग भूमिकाओं के लिए उपयोगी",
        text: "डिज़ाइन, इंजीनियरिंग, accessibility और governance टीमें एक ही पेज से शुरू कर सकती हैं।",
      },
      {
        title: "तेज़ निर्णयों के लिए बनाया गया",
        text: "Search, jump links और related resources support overhead और dead ends कम करते हैं।",
      },
    ],
    jumpTitle: "सीधे जाएँ",
    jumpIntro:
      "FAQ के उस हिस्से में जाएँ जो आपकी भूमिका, आपकी delivery stage या आपके निर्णय से सबसे अधिक जुड़ा है।",
    searchLabel: "FAQ खोजें",
    searchPlaceholder:
      "ऐसे प्रश्न खोजें जैसे framework support, accessibility, localization, migration…",
    searchSummary: (count, total) =>
      count === total
        ? `${total} प्रश्न सभी FAQ sections में`
        : `${total} में से ${count} matching प्रश्न`,
    noResultsTitle: "कोई matching प्रश्न नहीं मिला",
    noResultsText:
      "Accessibility, tokens, governance, localization या migration जैसे व्यापक शब्दों से खोजें।",
    clearSearch: "खोज साफ़ करें",
    questionCount: (count) => `${count} मुख्य प्रश्न`,
    relatedResources: "संबंधित संसाधन",
    helpfulTitle: "क्या यह पेज उपयोगी था?",
    helpfulText:
      "इस संकेत से documentation gaps पता चलते हैं और यह तय करना आसान होता है कि आगे क्या स्पष्ट किया जाए।",
    helpfulYes: "हाँ, मेरे प्रश्न का उत्तर मिला",
    helpfulNo: "अभी नहीं",
    helpfulThanks: "धन्यवाद। यह संकेत समय के साथ FAQ को बेहतर बनाने में मदद करता है।",
    helpfulMore: "यदि उत्तर अभी भी नहीं मिला है, तो सीधे support या contribution guidance पर जाएँ।",
    reviewedLabel: "अंतिम समीक्षा",
    appliesToLabel: "लागू होता है",
    topicLabel: "विषय",
    popularTitle: "लोकप्रिय प्रश्न",
    popularText: "उन प्रश्नों से शुरू करें जो adoption के शुरुआती चरण में सबसे अधिक पूछे जाते हैं।",
    peopleAlsoReadTitle: "लोग यह भी पढ़ते हैं",
    peopleAlsoReadText: "पास के प्रश्न और संबंधित guidance जो आम तौर पर आगे मदद करते हैं।",
    copyLink: "इस उत्तर का लिंक कॉपी करें",
    copiedLink: "लिंक कॉपी हो गया",
    sidebarTitle: "आगे कहाँ जाएँ",
    helpTitle: "अब भी मदद चाहिए?",
    helpText:
      "अगर आपका प्रश्न वास्तव में component gap, accessibility issue या delivery blocker से जुड़ा है, तो उसे generic help request की तरह न लें और सही जगह भेजें।",
    helpPrimary: "सहायता से संपर्क करें",
    helpSecondary: "Accessibility guidance देखें",
    helpTertiary: "Contribution process देखें",
    quickLinks: [
      { label: "दस्तावेज़ीकरण", href: "/documentation" },
      { label: "Foundations", href: "/foundations" },
      { label: "Components", href: "/components" },
      { label: "Patterns", href: "/patterns" },
      { label: "सुगम्यता", href: "/accessibility" },
      { label: "योगदान", href: "/contributing" },
    ],
    sections: [
      {
        id: "about",
        title: "UX4G के बारे में",
        intro:
          "यदि आपको समझना है कि सिस्टम क्या कवर करता है, यह किनके लिए है, और इसे कहाँ उपयोग करना चाहिए, तो यहाँ से शुरू करें।",
        icon: SECTION_ICONS.about,
        faqs: [
          {
            question: "UX4G क्या है?",
            answer:
              "UX4G भारत सरकार की विश्वसनीय डिजिटल सेवाओं के लिए साझा design system है। यह tokens, components, patterns, archetypes, implementation guidance और governance को एक साथ लाता है ताकि टीमें तेज़ी से निर्माण कर सकें और फिर भी consistent, accessible और maintainable रहें।",
            keywords: ["overview", "ux4g", "design system", "purpose"],
            relatedLinks: [
              { label: "Documentation hub देखें", href: "/documentation" },
              { label: "Foundations देखें", href: "/foundations" },
            ],
          },
          {
            question: "UX4G किसे उपयोग करना चाहिए?",
            answer:
              "UX4G product designers, frontend engineers, accessibility reviewers, content teams, service owners और governance teams के लिए है जो public digital services पर काम कर रहे हैं। यह तब सबसे अधिक उपयोगी होता है जब कई टीमें service portals, workflows और operational tools में coherent experiences ship करना चाहती हैं।",
            keywords: ["audience", "teams", "roles", "who uses"],
            relatedLinks: [
              { label: "Components देखें", href: "/components" },
              { label: "Patterns देखें", href: "/patterns" },
            ],
          },
          {
            question: "टीम को design system कब अपनाना चाहिए?",
            answer:
              "किसी भी नई public-service product, बड़े redesign या platform consolidation की शुरुआत से UX4G अपनाना चाहिए। जब टीमों को बेहतर accessibility baseline, services के बीच अधिक reuse या UI quality पर मजबूत governance चाहिए, तब भी इसे अपनाना चाहिए।",
            keywords: ["when to use", "adoption", "redesign", "new service"],
            relatedLinks: [
              { label: "Getting started", href: "/resources/getting-started" },
              { label: "Migration guides", href: "/resources/migration-guides" },
            ],
          },
          {
            question: "टीमों को custom pattern कब नहीं बनाना चाहिए?",
            answer:
              "जब आवश्यकता existing foundations, components और documented patterns को मिलाकर पूरी की जा सकती हो, तब custom pattern नहीं बनाना चाहिए। Custom pattern अंतिम विकल्प होना चाहिए, और तभी जब requirement वास्तव में नई हो, constraint validated हो, और टीम स्पष्ट रूप से बता सके कि existing system को सुरक्षित रूप से extend क्यों नहीं किया जा सकता।",
            keywords: ["custom pattern", "exceptions", "reuse", "new pattern"],
            relatedLinks: [
              { label: "Pattern library देखें", href: "/patterns" },
              { label: "Contributing देखें", href: "/contributing" },
            ],
          },
        ],
      },
      {
        id: "adoption",
        title: "Adoption और Implementation",
        intro:
          "ये उत्तर टीमों को UX4G को design files, codebases और delivery workflows में बिना drift के अपनाने में मदद करते हैं।",
        icon: SECTION_ICONS.adoption,
        faqs: [
          {
            question: "Tokens, components, patterns और archetypes साथ में कैसे काम करते हैं?",
            answer:
              "Tokens साझा design language तय करते हैं। Components उन्हीं निर्णयों को reusable UI building blocks में बदलते हैं। Patterns दिखाते हैं कि forms, authentication और tracking जैसे recurring tasks में components साथ कैसे काम करते हैं। Archetypes कई patterns को जोड़कर अधिक पूर्ण service journeys या reference implementations बनाते हैं।",
            keywords: ["tokens", "components", "patterns", "archetypes"],
            relatedLinks: [
              { label: "Foundations देखें", href: "/foundations" },
              { label: "Archetypes देखें", href: "/archetypes" },
            ],
          },
          {
            question: "कौन-कौन से frameworks supported हैं?",
            answer:
              "UX4G अभी React, Angular और Web Components को support करता है। टीमों को वही package चुनना चाहिए जो उनके product stack से मेल खाता हो, लेकिन tokens, naming, accessibility expectations और maturity guidance सभी frameworks में shared रहनी चाहिए।",
            keywords: ["frameworks", "react", "angular", "web components"],
            relatedLinks: [
              { label: "Angular docs", href: "/docs/angular" },
              { label: "Web Components docs", href: "/docs/web-components" },
            ],
          },
          {
            question: "टीमों को UX4G को design और code में कैसे अपनाना चाहिए?",
            answer:
              "Foundations और उन core components से शुरू करें जिनकी आपकी service को सबसे अधिक ज़रूरत है। पहले tokens अपनाएँ, फिर high-confidence components, फिर key workflows के लिए documented patterns। Code में shipped component APIs को prefer करें। Design में approved library का उपयोग करें और नई explorations को भी system rules से जोड़े रखें।",
            keywords: ["adopt", "implementation", "design", "code"],
            relatedLinks: [
              { label: "Getting started", href: "/resources/getting-started" },
              { label: "Component specs", href: "/resources/component-specs" },
            ],
          },
          {
            question: "कितनी customization स्वीकार्य है?",
            answer:
              "टीमें UX4G tokens, documented variants और approved layout patterns की सीमा में customization कर सकती हैं। उन्हें component behavior fork नहीं करना चाहिए, casually नए visual variants नहीं बनाने चाहिए, और one-off styling hardcode नहीं करनी चाहिए जो consistency तोड़ दे। यदि service को कुछ नया चाहिए, तो सही रास्ता design system में extension propose करना है।",
            keywords: ["customization", "variants", "tokens", "extension"],
            relatedLinks: [
              { label: "Documentation hub", href: "/documentation" },
              { label: "Contributing", href: "/contributing" },
            ],
          },
          {
            question: "नया UX4G प्रोजेक्ट जल्दी कैसे scaffold करें?",
            answer:
              "नया प्रोजेक्ट सेकंडों में scaffold करने के लिए create-ux4g-app CLI टूल का उपयोग करें। React प्रोजेक्ट बनाने के लिए npx create-ux4g-app my-app चलाएँ, या Angular के लिए npx create-ux4g-app my-app --template angular। CLI एक पूर्ण प्रोजेक्ट generate करता है जिसमें UX4G dependencies, TypeScript configuration, build tooling और Indian tricolor branding वाला sample app शामिल होता है।",
            keywords: ["cli", "scaffold", "create app", "npx", "starter", "new project"],
            relatedLinks: [
              { label: "Getting started guide", href: "/resources/getting-started" },
              { label: "Starter kit", href: "/resources/starter-kit" },
            ],
          },
          {
            question: "Advanced theming system कैसे काम करता है?",
            answer:
              "UX4G में एक पूर्ण theming system है जिसमें runtime theme switching, custom department themes और high-contrast accessibility mode शामिल हैं। अपने app को ThemeProvider component से wrap करें, फिर theme state और switching functions के लिए useTheme hook का उपयोग करें। पाँच built-in presets उपलब्ध हैं: default (navy), saffron-primary, green-primary, navy-primary और high-contrast। Departments createTheme API का उपयोग करके custom themes बना सकते हैं, जो किसी भी base preset पर overrides को deep-merge करता है और WCAG 2.1 AA compliance बनाए रखता है।",
            keywords: ["theming", "theme provider", "dark mode", "custom theme", "department branding", "high contrast"],
            relatedLinks: [
              { label: "Foundations", href: "/foundations" },
              { label: "Accessibility guidance", href: "/accessibility" },
            ],
          },
          {
            question: "Components के लिए कौन-सी CSS styles उपलब्ध हैं?",
            answer:
              "सभी 87 UX4G components की corresponding CSS files @ux4g/styles package में हैं। प्रत्येक CSS file एक consistent template का पालन करती है: base class, sub-elements, variants, states, sizes, pseudo-classes और reduced-motion support। सभी visual values design tokens package से CSS custom properties (var(--ux4g-*, fallback)) का उपयोग करती हैं, जिससे components themeable रहते हैं और tokens package लोड न होने पर भी सही render होते हैं।",
            keywords: ["css", "styles", "component styles", "tokens", "custom properties"],
            relatedLinks: [
              { label: "Foundations", href: "/foundations" },
              { label: "Component library", href: "/components" },
            ],
          },
        ],
      },
      {
        id: "quality",
        title: "Accessibility, Localization और Quality",
        intro:
          "ये वे प्रश्न हैं जो टीमें तब पूछती हैं जब उन्हें real public-service conditions में system पर भरोसा करना होता है।",
        icon: SECTION_ICONS.quality,
        faqs: [
          {
            question: "UX4G में accessibility कैसे काम करती है?",
            answer:
              "Accessibility यहाँ बाद की review step नहीं, बल्कि system requirement है। UX4G tokens, components, content patterns और interactions में accessible defaults देने का प्रयास करता है, जिसमें keyboard support, clear focus treatment, semantic structure, error messaging और screen-reader compatibility शामिल हैं। फिर भी teams को अपने service context में product copy, workflow logic और testing की जिम्मेदारी लेनी होती है।",
            keywords: ["accessibility", "wcag", "screen reader", "keyboard"],
            relatedLinks: [
              { label: "Accessibility guidance", href: "/accessibility" },
              { label: "Support patterns", href: "/patterns/contact-support/overview" },
            ],
          },
          {
            question: "टीमों को multilingual और localization requirements कैसे संभालनी चाहिए?",
            answer:
              "टीमों को शुरुआत से ही language expansion, script differences, clear copy और predictable layout behavior के लिए design करना चाहिए। UX4G localization-aware design को support करता है और यह प्रोत्साहित करता है कि products अपने वास्तविक service languages में critical flows test करें। यह मानकर न चलें कि English-first layouts हर localized content में ठीक रहेंगे।",
            keywords: ["localization", "multilingual", "language", "hindi"],
            relatedLinks: [
              { label: "Localization patterns", href: "/patterns/localization" },
              { label: "Content system", href: "/content-system" },
            ],
          },
          {
            question: "Browser और device support के बारे में टीमों को क्या अपेक्षा रखनी चाहिए?",
            answer:
              "टीमों को current evergreen browsers, common mobile devices और सार्वजनिक सेवाओं की वास्तविक usage conditions जैसे constrained bandwidth और varied screen sizes को target करना चाहिए। यदि किसी product की अतिरिक्त support needs हों, तो उन्हें design system पर छोड़ने के बजाय स्पष्ट रूप से validate किया जाना चाहिए।",
            keywords: ["browser support", "device support", "mobile", "compatibility"],
            relatedLinks: [
              { label: "Documentation hub", href: "/documentation" },
              { label: "Reference service overview", href: "/reference-service/overview" },
            ],
          },
          {
            question: "Stable, beta और experimental maturity levels कैसे काम करते हैं?",
            answer:
              "Stable items production adoption के लिए सबसे सुरक्षित default हैं। Beta items वास्तविक उपयोग के लिए उपलब्ध होते हैं, लेकिन implementation और accessibility feedback के आधार पर विकसित हो सकते हैं। Experimental items exploration, testing या narrow pilots के लिए साझा किए जाते हैं और review के बिना उन्हें long-term contract नहीं माना जाना चाहिए।",
            keywords: ["maturity", "stable", "beta", "experimental"],
            relatedLinks: [
              { label: "Documentation hub", href: "/documentation" },
              { label: "Governance", href: "/governance" },
            ],
          },
          {
            question: "UX4G में accessibility testing कैसे automated है?",
            answer:
              "UX4G में vitest-axe (axe-core) का उपयोग करके व्यापक automated accessibility testing है जो हर component की test file में integrated है। a11y test helper module checkA11y, assertA11y और assertA11yStates functions प्रदान करता है जो components को WCAG 2.1 A और AA rules के विरुद्ध scan करते हैं। सभी 54 tiered components में Accessibility describe blocks हैं जिनमें default, disabled, error और variant states के लिए axe scans हैं, साथ ही interactive components के लिए keyboard navigation tests भी हैं। पूरा accessibility test suite चलाने के लिए pnpm run test:a11y का उपयोग करें।",
            keywords: ["accessibility testing", "axe", "wcag", "automated testing", "a11y"],
            relatedLinks: [
              { label: "Accessibility guidance", href: "/accessibility" },
              { label: "Component library", href: "/components" },
            ],
          },
          {
            question: "वर्तमान test coverage कितनी है?",
            answer:
              "UX4G सभी 87 components में 95%+ test coverage बनाए रखता है: 95.4% statement coverage, 91.3% branch coverage, 96.9% function coverage और 96.8% line coverage। CI pipeline हर pull request पर 80% minimum threshold enforce करती है। Tests rendering, variants, states, interactions, keyboard navigation, accessibility (axe scans) और edge cases को cover करते हैं।",
            keywords: ["test coverage", "unit tests", "vitest", "ci", "quality"],
            relatedLinks: [
              { label: "Contributing", href: "/contributing" },
              { label: "Governance", href: "/governance" },
            ],
          },
          {
            question: "Theme validation system accessibility कैसे सुनिश्चित करता है?",
            answer:
              "ThemeValidator module एक validateTheme function प्रदान करता है जो सभी color token pairs को WCAG 2.1 contrast requirements के विरुद्ध जाँचता है। यह WCAG formula का उपयोग करके relative luminance compute करता है और verify करता है कि text-to-background pairs 4.5:1 (AA normal text) और interactive-to-background pairs 3:1 (AA UI components) को पूरा करते हैं। High-contrast preset WCAG AAA (text के लिए 7:1) को target करता है। createTheme से बनाई गई custom themes को deployment से पहले validate किया जा सकता है ताकि department branding accessibility compliance बनाए रखे।",
            keywords: ["theme validation", "contrast ratio", "wcag", "color accessibility", "luminance"],
            relatedLinks: [
              { label: "Accessibility guidance", href: "/accessibility" },
              { label: "Foundations", href: "/foundations" },
            ],
          },
        ],
      },
      {
        id: "governance",
        title: "Governance और Contribution",
        intro:
          "इस section का उपयोग तब करें जब आपकी team को system को जिम्मेदारी से extend, review या evolve करने के लिए स्पष्ट रास्ता चाहिए।",
        icon: SECTION_ICONS.governance,
        faqs: [
          {
            question: "नई component या pattern request टीम कैसे करे?",
            answer:
              "पहले service need, user problem, existing UX4G options क्यों पर्याप्त नहीं हैं, और कौन-सा evidence request का समर्थन करता है, यह document करें। मजबूत requests में accessibility considerations, content needs, interaction states और single screen से आगे repeated usage के उदाहरण शामिल होते हैं।",
            keywords: ["request component", "request pattern", "new component", "new pattern"],
            relatedLinks: [
              { label: "Contributing", href: "/contributing" },
              { label: "Patterns", href: "/patterns" },
            ],
          },
          {
            question: "Contribution और governance process क्या है?",
            answer:
              "Contributions को documented review process का पालन करना चाहिए और design quality, accessibility, implementation consistency, documentation completeness और maintainability के आधार पर evaluate किया जाना चाहिए। Governance केवल visual approval नहीं है; यह वह mechanism है जो समय के साथ system trust की रक्षा करता है।",
            keywords: ["governance", "review", "contribution", "process"],
            relatedLinks: [
              { label: "Contribution guidelines", href: "/contributing" },
              { label: "Governance overview", href: "/governance" },
            ],
          },
          {
            question: "यदि UX4G अभी किसी आवश्यकता को cover नहीं करता, तो क्या करना चाहिए?",
            answer:
              "टीमों को पहले confirm करना चाहिए कि आवश्यकता existing component combinations या documented patterns से पूरी नहीं हो सकती। यदि gap वास्तविक है, तो सबसे छोटा responsible extension बनाना चाहिए, rationale document करना चाहिए, और उसे design-system review के लिए वापस लाना चाहिए, बजाय इसके कि uncontrolled local fork फैलने दिया जाए।",
            keywords: ["gap", "missing", "exceptions", "system does not cover"],
            relatedLinks: [
              { label: "Contributing", href: "/contributing" },
              { label: "Contact support", href: "/contact" },
            ],
          },
          {
            question: "Versioning और migrations कैसे काम करते हैं?",
            answer:
              "टीमों को version upgrades को planned engineering work की तरह लेना चाहिए, passive package bump की तरह नहीं। Migration guidance देखें, maturity changes जाँचें, critical flows test करें, और API या behavioral changes पर ध्यान दें। Design system upgrades को समझने योग्य बना सकता है, लेकिन safe rollout की जिम्मेदारी product teams की ही रहती है।",
            keywords: ["migration", "versioning", "upgrade", "breaking changes"],
            relatedLinks: [
              { label: "Migration guides", href: "/resources/migration-guides" },
              { label: "API reference", href: "/api-reference" },
            ],
          },
          {
            question: "CI/CD pipeline में क्या शामिल है?",
            answer:
              "UX4G में पाँच GitHub Actions workflows के साथ एक पूर्ण CI/CD pipeline है: (1) CI Pipeline — TypeScript typecheck, 80%+ coverage threshold के साथ unit tests, accessibility tests, production build verification और validation checks (doc links, API drift, semantic colors)। (2) Publish Pipeline — @ux4g/tokens, @ux4g/styles और @ux4g/react-core को provenance के साथ NPM पर build और publish करती है, dry-run mode support करती है। (3) Visual Regression — desktop, tablet और mobile viewports पर Playwright-based screenshot comparison। (4) Storybook Smoke — verify करती है कि Storybook सफलतापूर्वक build होता है। (5) Deploy Docs — documentation site को GitHub Pages पर deploy करती है।",
            keywords: ["ci", "cd", "pipeline", "github actions", "deployment", "npm publish"],
            relatedLinks: [
              { label: "Contributing", href: "/contributing" },
              { label: "Governance", href: "/governance" },
            ],
          },
          {
            question: "Departments custom themes कैसे share कर सकते हैं?",
            answer:
              "Custom themes को serializeTheme और deserializeTheme functions का उपयोग करके JSON के रूप में export और import किया जा सकता है। Serialized format में version field, theme name, base theme reference और light तथा dark दोनों variants के लिए token overrides शामिल हैं। इससे departments branded themes को projects और teams में share कर सकते हैं और version compatibility बनाए रख सकते हैं।",
            keywords: ["theme sharing", "json", "serialize", "department theme", "export import"],
            relatedLinks: [
              { label: "Foundations", href: "/foundations" },
              { label: "Contributing", href: "/contributing" },
            ],
          },
        ],
      },
      {
        id: "support",
        title: "Support और Responsible Use",
        intro:
          "ये उत्तर टीमों को बताते हैं कि आगे कहाँ जाना है, issues को कैसे escalate करना है, और public-service delivery में UX4G का जिम्मेदारी से उपयोग कैसे करना है।",
        icon: SECTION_ICONS.support,
        faqs: [
          {
            question: "टीमें Figma files, documentation और code resources कहाँ पाएँ?",
            answer:
              "Foundations, components, patterns, migration notes, Figma resources और framework-specific guidance के लिए साइट के documentation और resources sections से शुरू करें। Teams को current official sources से काम करना चाहिए, screenshots, copied snippets या outdated local files से नहीं।",
            keywords: ["figma", "documentation", "resources", "code"],
            relatedLinks: [
              { label: "Figma resources", href: "/resources/figma" },
              { label: "Documentation hub", href: "/documentation" },
            ],
          },
          {
            question: "सरकारी और public-service products को UX4G का जिम्मेदारी से उपयोग कैसे करना चाहिए?",
            answer:
              "टीमों को decorative novelty से अधिक clarity, inclusion, trust और service completion को प्राथमिकता देनी चाहिए। इसका मतलब है plain language, strong accessibility, predictable patterns, careful data handling और honest user guidance। Government products को system का उपयोग friction कम करने के लिए करना चाहिए, visual inconsistency या unnecessary complexity बढ़ाने के लिए नहीं।",
            keywords: ["government", "public service", "responsible use", "trust"],
            relatedLinks: [
              { label: "Accessibility", href: "/accessibility" },
              { label: "Patterns", href: "/patterns" },
            ],
          },
          {
            question: "टीमें bugs, accessibility issues या documentation gaps कैसे report करें?",
            answer:
              "Issues को project के documented support और contribution channels के माध्यम से इतनी detail के साथ report करें कि problem reproduce की जा सके। अच्छे reports में affected route या component, framework, expected behavior, actual behavior, screenshots या recordings, और accessibility impact जैसी जानकारी शामिल होती है।",
            keywords: ["bugs", "report", "documentation gap", "accessibility issue"],
            relatedLinks: [
              { label: "Contact support", href: "/contact" },
              { label: "Contribution guidelines", href: "/contributing" },
            ],
          },
          {
            question: "यदि टीमों को अब भी मदद चाहिए, तो कहाँ जाएँ?",
            answer:
              "यदि उत्तर documentation में नहीं है, तो पहले संबंधित component, pattern, accessibility या governance pages देखें, फिर support या contribution channels के माध्यम से reach out करें। अगला सही कदम इस बात पर निर्भर करता है कि issue adoption, implementation, accessibility या किसी वास्तविक system gap से जुड़ा है, इसलिए उसी context के साथ प्रश्न भेजें।",
            keywords: ["support", "help", "contact", "where to go"],
            relatedLinks: [
              { label: "Contact support", href: "/contact" },
              { label: "Accessibility guidance", href: "/accessibility" },
              { label: "Contributing", href: "/contributing" },
            ],
          },
        ],
      },
    ],
  },
};

const FAQ_REVIEW_DATE = "April 18, 2026";
const FAQ_APPLIES_TO = "React, Angular, Web Components, foundations, patterns, and governance guidance";
const POPULAR_QUESTION_REFS = [
  { sectionId: "about", index: 0 },
  { sectionId: "adoption", index: 1 },
  { sectionId: "quality", index: 0 },
  { sectionId: "governance", index: 0 },
  { sectionId: "support", index: 3 },
];

function slugifyQuestion(sectionId: string, question: string) {
  return `${sectionId}-${question
    .toLowerCase()
    .replace(/[^a-z0-9\u0900-\u097f]+/g, "-")
    .replace(/^-+|-+$/g, "")}`;
}

function trackFaqEvent(eventName: string, detail: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(
    new CustomEvent("ux4g:faq-event", {
      detail: { eventName, ...detail },
    }),
  );
}

export default function FAQ() {
  const { i18n } = useTranslation();
  const language: Language = i18n.resolvedLanguage === "hi" ? "hi" : "en";
  const copy = FAQ_COPY[language];
  const [query, setQuery] = useState("");
  const [helpfulState, setHelpfulState] = useState<"yes" | "no" | null>(null);
  const [copiedQuestionId, setCopiedQuestionId] = useState<string | null>(null);
  const initialHash =
    typeof window !== "undefined" ? window.location.hash.replace(/^#/, "") : "";

  const allQuestions = useMemo(
    () =>
      copy.sections.flatMap((section) =>
        section.faqs.map((faq, index) => ({
          sectionId: section.id,
          sectionTitle: section.title,
          index,
          faq,
          questionId: slugifyQuestion(section.id, faq.question),
        })),
      ),
    [copy.sections],
  );

  const filteredSections = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) {
      return copy.sections;
    }

    return copy.sections
      .map((section) => ({
        ...section,
        faqs: section.faqs.filter((faq) => {
          const haystack = [
            section.title,
            section.intro,
            faq.question,
            faq.answer,
            ...faq.keywords,
          ]
            .join(" ")
            .toLowerCase();

          return haystack.includes(normalizedQuery);
        }),
      }))
      .filter((section) => section.faqs.length > 0);
  }, [copy.sections, query]);

  const totalQuestions = copy.sections.reduce(
    (count, section) => count + section.faqs.length,
    0,
  );
  const filteredQuestionCount = filteredSections.reduce(
    (count, section) => count + section.faqs.length,
    0,
  );
  const popularQuestions = useMemo(
    () =>
      POPULAR_QUESTION_REFS.map((ref) =>
        allQuestions.find(
          (question) =>
            question.sectionId === ref.sectionId && question.index === ref.index,
        ),
      ).filter(Boolean),
    [allQuestions],
  );
  const peopleAlsoRead = useMemo(() => {
    const sourceQuestions = query.trim()
      ? filteredSections.flatMap((section) =>
          section.faqs.map((faq, index) => ({
            sectionId: section.id,
            sectionTitle: section.title,
            index,
            faq,
            questionId: slugifyQuestion(section.id, faq.question),
          })),
        )
      : allQuestions;

    const prioritized = sourceQuestions.filter(
      (question) => !popularQuestions.some((popular) => popular?.questionId === question.questionId),
    );

    return prioritized.slice(0, 4);
  }, [allQuestions, filteredSections, popularQuestions, query]);

  useEffect(() => {
    if (!query.trim()) return;
    const timeoutId = window.setTimeout(() => {
      trackFaqEvent("faq_search", {
        language,
        query: query.trim(),
        matches: filteredQuestionCount,
      });
    }, 350);

    return () => window.clearTimeout(timeoutId);
  }, [filteredQuestionCount, language, query]);

  async function copyQuestionLink(questionId: string) {
    if (typeof window === "undefined") return;

    const url = `${window.location.origin}${window.location.pathname}#${questionId}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopiedQuestionId(questionId);
      trackFaqEvent("faq_copy_link", { language, questionId });
      window.setTimeout(() => setCopiedQuestionId((current) => (current === questionId ? null : current)), 1800);
    } catch (error) {
      console.error("Failed to copy FAQ link", error);
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <section className="border-b border-border bg-[radial-gradient(circle_at_top_left,rgba(255,153,51,0.18),transparent_28%),radial-gradient(circle_at_top_right,rgba(0,0,128,0.15),transparent_34%),linear-gradient(180deg,var(--background),var(--card))]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(320px,0.9fr)] lg:items-start">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
                <HelpCircle className="h-4 w-4" />
                {copy.badge}
              </div>
              <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                {copy.title}
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
                {copy.intro}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/documentation"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-95"
                >
                  {copy.primaryCta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contributing"
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition hover:border-primary/40 hover:text-primary"
                >
                  {copy.secondaryCta}
                </Link>
              </div>
            </div>

            <aside className="rounded-3xl border border-border bg-card/95 p-6 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-semibold text-foreground">
                  {copy.trustTitle}
                </h2>
              </div>
              <div className="space-y-4">
                {copy.trustPoints.map((point) => (
                  <div
                    key={point.title}
                    className="rounded-2xl border border-border/80 bg-background p-4"
                  >
                    <p className="font-semibold text-foreground">{point.title}</p>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      {point.text}
                    </p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid gap-8 xl:grid-cols-[240px_minmax(0,1fr)] xl:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                {copy.jumpTitle}
              </p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {copy.jumpIntro}
              </p>
            </div>
            <div className="space-y-5">
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {copy.sections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="group rounded-2xl border border-border bg-background px-4 py-4 transition hover:border-primary/30 hover:bg-primary/5"
                    >
                      <div className="flex items-center gap-3">
                        <div className="rounded-xl bg-primary/10 p-2 text-primary">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground group-hover:text-primary">
                            {section.title}
                          </p>
                          <p className="mt-1 text-sm text-muted-foreground">
                            {copy.questionCount(section.faqs.length)}
                          </p>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>

              <div className="rounded-2xl border border-border bg-background p-4">
                <label className="sr-only" htmlFor="faq-search">
                  {copy.searchLabel}
                </label>
                <div className="relative">
                  <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    id="faq-search"
                    type="search"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder={copy.searchPlaceholder}
                    className="w-full rounded-xl border border-border bg-card py-3 pr-4 pl-11 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary"
                  />
                </div>
                <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                  <p className="text-sm text-muted-foreground">
                    {copy.searchSummary(filteredQuestionCount, totalQuestions)}
                  </p>
                  {query ? (
                    <button
                      type="button"
                      onClick={() => setQuery("")}
                      className="text-sm font-medium text-primary transition hover:underline"
                    >
                      {copy.clearSearch}
                    </button>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
          <div className="space-y-8">
            {filteredSections.length ? (
              filteredSections.map((section) => {
                const Icon = section.icon;

                return (
                  <section
                    id={section.id}
                    key={section.id}
                    className="scroll-mt-28 rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8"
                  >
                    <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
                      <div className="max-w-3xl">
                        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/8 px-3 py-1.5 text-sm font-medium text-primary">
                          <Icon className="h-4 w-4" />
                          {section.title}
                        </div>
                        <h2 className="text-2xl font-bold tracking-tight text-foreground">
                          {section.title}
                        </h2>
                        <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                          {section.intro}
                        </p>
                      </div>
                      <div className="rounded-2xl border border-border/80 bg-background px-4 py-3 text-sm text-muted-foreground">
                        {copy.questionCount(section.faqs.length)}
                      </div>
                    </div>

                    <Accordion
                      type="multiple"
                      defaultValue={
                        initialHash && section.faqs.some((faq) => slugifyQuestion(section.id, faq.question) === initialHash)
                          ? [initialHash]
                          : undefined
                      }
                      className="rounded-2xl border border-border bg-background px-5"
                    >
                      {section.faqs.map((faq, index) => (
                        (() => {
                          const questionId = slugifyQuestion(section.id, faq.question);
                          return (
                        <AccordionItem
                          key={faq.question}
                          id={questionId}
                          value={questionId}
                        >
                          <AccordionTrigger className="py-5 text-base font-semibold text-foreground hover:no-underline">
                            <div className="flex flex-col items-start gap-1 text-left">
                              <span>{faq.question}</span>
                              <span className="text-xs font-medium text-muted-foreground">
                                #{questionId}
                              </span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="pb-6">
                            <div className="space-y-4">
                              <div className="flex flex-wrap items-center gap-2">
                                <span className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-foreground">
                                  {copy.topicLabel}: {section.title}
                                </span>
                                <span className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
                                  {copy.reviewedLabel}: {FAQ_REVIEW_DATE}
                                </span>
                              </div>
                              <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                                {faq.answer}
                              </p>
                              <div className="flex flex-wrap items-center gap-3">
                                <a
                                  href={`#${questionId}`}
                                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-2 text-xs font-semibold text-foreground transition hover:border-primary/30 hover:text-primary"
                                >
                                  <Link2 className="h-3.5 w-3.5" />
                                  #{questionId}
                                </a>
                                <button
                                  type="button"
                                  onClick={() => copyQuestionLink(questionId)}
                                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-2 text-xs font-semibold text-foreground transition hover:border-primary/30 hover:text-primary"
                                >
                                  <Link2 className="h-3.5 w-3.5" />
                                  {copiedQuestionId === questionId
                                    ? copy.copiedLink
                                    : copy.copyLink}
                                </button>
                              </div>
                              {faq.relatedLinks.length ? (
                                <div className="rounded-2xl border border-border/80 bg-card p-4">
                                  <p className="mb-3 text-sm font-semibold text-foreground">
                                    {copy.relatedResources}
                                  </p>
                                  <div className="flex flex-wrap gap-2">
                                    {faq.relatedLinks.map((link) => (
                                      <Link
                                        key={`${faq.question}-${link.href}`}
                                        to={link.href}
                                        className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-2 text-sm font-medium text-foreground transition hover:border-primary/30 hover:text-primary"
                                      >
                                        {link.label}
                                        <ArrowRight className="h-3.5 w-3.5" />
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ) : null}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                          );
                        })()
                      ))}
                    </Accordion>
                  </section>
                );
              })
            ) : (
              <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
                <div className="max-w-2xl">
                  <h2 className="text-2xl font-bold text-foreground">
                    {copy.noResultsTitle}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
                    {copy.noResultsText}
                  </p>
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    className="mt-5 inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
                  >
                    {copy.clearSearch}
                  </button>
                </div>
              </div>
            )}
          </div>

          <aside className="space-y-6 xl:sticky xl:top-24 xl:self-start">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
              <div className="mb-6">
                <div className="flex items-center gap-3">
                  <Sparkles className="h-5 w-5 text-primary" />
                  <h2 className="text-lg font-semibold text-foreground">
                    {copy.popularTitle}
                  </h2>
                </div>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {copy.popularText}
                </p>
                <div className="mt-4 space-y-2">
                  {popularQuestions.map((question) => (
                    <a
                      key={question.questionId}
                      href={`#${question.questionId}`}
                      onClick={() =>
                        trackFaqEvent("faq_popular_question_open", {
                          language,
                          questionId: question.questionId,
                        })
                      }
                      className="block rounded-2xl border border-border bg-background px-4 py-3 text-sm transition hover:border-primary/30"
                    >
                      <p className="font-semibold text-foreground">
                        {question.faq.question}
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {question.sectionTitle}
                      </p>
                    </a>
                  ))}
                </div>
              </div>

              <div className="mb-5 rounded-2xl border border-border bg-background p-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      {copy.reviewedLabel}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-foreground">
                      {FAQ_REVIEW_DATE}
                    </p>
                  </div>
                  <div className="max-w-[180px] text-right">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      {copy.appliesToLabel}
                    </p>
                    <p className="mt-1 text-sm text-foreground">
                      {FAQ_APPLIES_TO}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-semibold text-foreground">
                  {copy.sidebarTitle}
                </h2>
              </div>
              <div className="mt-5 space-y-3">
                {copy.quickLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="flex items-center justify-between rounded-2xl border border-border bg-background px-4 py-3 text-sm font-medium text-foreground transition hover:border-primary/30 hover:text-primary"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <BookOpen className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-semibold text-foreground">
                  {copy.peopleAlsoReadTitle}
                </h2>
              </div>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {copy.peopleAlsoReadText}
              </p>
              <div className="mt-4 space-y-2">
                {peopleAlsoRead.map((question) => (
                  <a
                    key={question.questionId}
                    href={`#${question.questionId}`}
                    onClick={() =>
                      trackFaqEvent("faq_related_question_open", {
                        language,
                        questionId: question.questionId,
                        sourceQuery: query.trim() || null,
                      })
                    }
                    className="block rounded-2xl border border-border bg-background px-4 py-3 text-sm transition hover:border-primary/30"
                  >
                    <p className="font-semibold text-foreground">
                      {question.faq.question}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {question.sectionTitle}
                    </p>
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-[linear-gradient(180deg,rgba(0,0,128,0.04),rgba(255,153,51,0.08))] p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <Globe2 className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-semibold text-foreground">
                  {copy.helpTitle}
                </h2>
              </div>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                {copy.helpText}
              </p>
              <div className="mt-5 space-y-3">
                <Link
                  to="/contact"
                  className="flex items-center justify-between rounded-2xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-95"
                >
                  <span>{copy.helpPrimary}</span>
                  <LifeBuoy className="h-4 w-4" />
                </Link>
                <Link
                  to="/accessibility"
                  className="flex items-center justify-between rounded-2xl border border-border bg-card px-4 py-3 text-sm font-semibold text-foreground transition hover:border-primary/30 hover:text-primary"
                >
                  <span>{copy.helpSecondary}</span>
                  <ShieldCheck className="h-4 w-4" />
                </Link>
                <Link
                  to="/contributing"
                  className="flex items-center justify-between rounded-2xl border border-border bg-card px-4 py-3 text-sm font-semibold text-foreground transition hover:border-primary/30 hover:text-primary"
                >
                  <span>{copy.helpTertiary}</span>
                  <Users className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-semibold text-foreground">
                  {copy.helpfulTitle}
                </h2>
              </div>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                {copy.helpfulText}
              </p>
              <div className="mt-5 grid gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setHelpfulState("yes");
                    trackFaqEvent("faq_helpful", { language, value: "yes" });
                  }}
                  className={`rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition ${
                    helpfulState === "yes"
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-background text-foreground hover:border-primary/30"
                  }`}
                >
                  {copy.helpfulYes}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setHelpfulState("no");
                    trackFaqEvent("faq_helpful", { language, value: "no" });
                  }}
                  className={`rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition ${
                    helpfulState === "no"
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-background text-foreground hover:border-primary/30"
                  }`}
                >
                  {copy.helpfulNo}
                </button>
              </div>
              {helpfulState ? (
                <div className="mt-4 rounded-2xl border border-border/80 bg-background p-4">
                  <p className="text-sm font-semibold text-foreground">
                    {copy.helpfulThanks}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    {copy.helpfulMore}
                  </p>
                </div>
              ) : null}
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
