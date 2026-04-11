# Component Maturity Framework

**UX4G Design System - Component Lifecycle Management**

This framework defines the maturity levels for all components in the UX4G design system, ensuring transparency about component readiness and setting clear criteria for production use.

---

## Maturity Levels

### 🔵 Draft

**Status:** Experimental - Use with caution

**Criteria:**
- Initial implementation completed
- API unstable and subject to change
- Limited testing coverage (<50%)
- Basic functionality working
- May have known issues or limitations

**Documentation Requirements:**
- Prop interface documented with JSDoc comments
- Basic usage example provided
- Component purpose clearly stated

**Testing Requirements:**
- Unit tests for core functionality only
- No visual regression tests
- Basic type checking passes

**Accessibility Requirements:**
- Basic semantic HTML structure
- Primary ARIA attributes present
- May not be fully WCAG compliant

**States Coverage:**
- Default state implemented
- Disabled state implemented
- Other states (hover, focus, error) may be partial

**Use Cases:**
- Internal prototyping and experimentation
- Design system development and iteration
- **NOT RECOMMENDED** for production use

**Breaking Changes:**
- Expected in any version (patch, minor, or major)
- No migration guide guaranteed
- API may change significantly

**Upgrade Path:**
- Complete all interactive states (hover, focus, active, disabled)
- Achieve 80%+ test coverage
- Pass accessibility audit
- Stabilize API based on feedback
- Document all variants and props comprehensively

---

### 🟡 Beta

**Status:** Production-ready with limitations

**Criteria:**
- API stable with semantic versioning guarantees
- Comprehensive testing coverage (80%+)
- All core functionality working reliably
- Known issues documented and tracked
- Used in at least 2-3 real applications

**Documentation Requirements:**
- Complete prop documentation with JSDoc
- Multiple usage examples covering common scenarios
- Accessibility guide with WCAG mapping
- Migration guide from previous versions (if applicable)
- Related components cross-referenced

**Testing Requirements:**
- Unit tests for all functionality (80%+ coverage)
- Integration tests with related components
- Accessibility tests (jest-axe + manual)
- Cross-browser testing (Chrome, Firefox, Safari, Edge)

**Accessibility Requirements:**
- WCAG 2.1 Level AA compliant
- Tested with automated tools (axe, WAVE)
- Manual keyboard navigation verified
- Basic screen reader testing completed (NVDA or VoiceOver)
- Focus management implemented correctly

**States Coverage:**
- All interactive states: hover, focus, active, disabled, loading, error
- State transitions smooth and accessible
- Visual feedback clear for all states
- ARIA live regions where appropriate

**Use Cases:**
- Non-critical production features
- Internal government applications
- Beta/pilot programs
- Applications with active development support

**Breaking Changes:**
- Only in major versions (following semver)
- 30-day notice before major version release
- Migration guide provided for all breaking changes
- Deprecation warnings in previous minor version

**Upgrade Path:**
- Deploy to 5+ production applications
- Screen reader testing across NVDA, JAWS, VoiceOver
- Visual regression testing configured
- Responsive behavior fully documented and tested
- Community feedback incorporated

---

### 🟢 Stable

**Status:** Production-ready - Fully supported

**Criteria:**
- Battle-tested in production for 6+ months
- API stable and mature
- Comprehensive testing (90%+ coverage)
- No known critical bugs
- Used in 5+ production applications
- Positive feedback from developers and users

**Documentation Requirements:**
- Complete documentation with all sections filled
- Multiple examples covering edge cases
- Accessibility guide with detailed WCAG compliance mapping
- Responsive behavior documented across all breakpoints
- Migration guides for all versions
- Design patterns and best practices documented
- Common pitfalls and solutions documented

**Testing Requirements:**
- Unit tests (90%+ coverage)
- Integration tests with all related components
- Accessibility tests (automated + manual with multiple screen readers)
- Visual regression tests with Percy or Chromatic
- End-to-end tests in realistic scenarios
- Performance benchmarks documented
- Cross-browser and cross-device testing

**Accessibility Requirements:**
- WCAG 2.1 Level AA fully compliant
- Tested with NVDA, JAWS, and VoiceOver screen readers
- Keyboard navigation comprehensive and documented
- Touch target sizes meet WCAG 2.5.5 (min 24x24px, recommended 44x44px)
- High contrast mode support verified
- Reduced motion support (prefers-reduced-motion)
- Color contrast meets or exceeds 4.5:1 for text, 3:1 for UI components

**States Coverage:**
- All states documented with visual examples
- State transitions accessible and smooth
- Loading states with appropriate ARIA announcements
- Error states with clear messaging and recovery paths
- Success states with confirmation feedback
- Responsive behavior per state documented

**Use Cases:**
- All production scenarios
- Critical government services
- Public-facing applications
- Applications requiring high accessibility
- Applications with limited development support

**Breaking Changes:**
- Only in major versions with 6+ months notice
- Deprecation warnings in at least one minor version
- Comprehensive migration guide with code examples
- Automated migration tooling where possible (codemods)

**Support Commitment:**
- Security fixes backported to previous major version
- Bug fixes for critical issues
- Active maintenance and community support
- Quarterly reviews for potential improvements

---

### 🔴 Deprecated

**Status:** Scheduled for removal - Migrate to replacement

**Criteria:**
- Replacement component available and stable
- Security or accessibility concerns with current component
- Better patterns or APIs discovered
- Maintenance burden outweighs benefits

**Documentation Requirements:**
- Clear deprecation notice with timeline
- Migration guide to replacement component
- Side-by-side comparison with replacement
- Code examples showing before/after
- FAQ addressing common migration questions

**Testing Requirements:**
- Existing tests maintained until removal
- Tests for replacement component comprehensive
- Migration path tested

**Support:**
- Security fixes only (no new features)
- Critical bug fixes on case-by-case basis
- Community support continues until removal

**Timeline:**
- **Minimum 6 months** notice before removal
- Deprecation warnings in code and runtime
- Multiple communication channels:
  - Release notes
  - Migration guide
  - Console warnings (development mode)
  - Email to known users (if possible)

**Removal Process:**
1. **Month 0:** Announce deprecation, publish migration guide
2. **Month 2:** Add console warnings in development builds
3. **Month 4:** Final reminder in release notes
4. **Month 6:** Remove component in next major version
5. **Month 6+:** Support migration questions for 3 months post-removal

---

## Maturity Level Indicators

### In Code

```typescript
/**
 * Button Component
 * 
 * @maturity Stable 🟢
 * @since 1.0.0
 * @updated 2.1.0
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  // Component implementation
});
```

### In Documentation

Each component README starts with a status badge:

```markdown
# Button

**Maturity:** 🟢 Stable  
**Tier:** Core  
**Package:** @ux4g/react-core  
**Since:** v1.0.0  
**Last Updated:** v2.1.0  
```

### In Package Exports

Components export their maturity level:

```typescript
// From @ux4g/react-core
export { Button } from './components/Button';
export const BUTTON_MATURITY = 'stable' as const;
```

---

## Component Inventory

Track all components with their current maturity levels:

| Component | Tier | Maturity | Since | Status |
|-----------|------|----------|-------|--------|
| Button | Core | 🟡 Beta | v1.0.0 | In use, stabilizing |
| Input | Core | 🟡 Beta | v1.0.0 | In use, stabilizing |
| Alert | Core | 🟡 Beta | v1.0.0 | In use, stabilizing |
| Field | Core | 🟡 Beta | v1.0.0 | In use, stabilizing |
| Label | Core | 🟡 Beta | v1.0.0 | In use, stabilizing |
| HintText | Core | 🟡 Beta | v1.0.0 | In use, stabilizing |
| ErrorText | Core | 🟡 Beta | v1.0.0 | In use, stabilizing |
| Textarea | Core | 🔵 Draft | TBD | Planned |
| Select | Core | 🔵 Draft | TBD | Planned |
| Checkbox | Core | 🔵 Draft | TBD | Planned |
| Radio | Core | 🔵 Draft | TBD | Planned |
| Badge | Core | 🔵 Draft | TBD | Planned |
| Card | Core | 🔵 Draft | TBD | Planned |
| Tabs | Composite | 🔵 Draft | TBD | Planned |
| Dialog | Composite | 🔵 Draft | TBD | Planned |
| Table | Composite | 🔵 Draft | TBD | Planned |
| Pagination | Composite | 🔵 Draft | TBD | Planned |

*Note: This inventory will be maintained in `/src/app/react-core-package/src/components/README.md`*

---

## Decision Framework: Choosing the Right Maturity Level

### Promoting from Draft to Beta

**Checklist:**
- [ ] API stable for at least 1 month with no breaking changes
- [ ] 80%+ test coverage (unit + integration)
- [ ] All interactive states implemented (hover, focus, active, disabled)
- [ ] WCAG 2.1 AA compliance verified with automated tools
- [ ] Documentation complete (props, examples, accessibility)
- [ ] Used in at least 2 internal applications
- [ ] Peer review completed by 2+ team members
- [ ] No critical bugs open for 2+ weeks

**Process:**
1. Developer proposes promotion in PR
2. Team review against checklist
3. Update maturity level in code and docs
4. Announce in release notes
5. Monitor for issues in next 2 releases

### Promoting from Beta to Stable

**Checklist:**
- [ ] Component in production for 6+ months
- [ ] 90%+ test coverage (unit + integration + e2e + visual regression)
- [ ] Manual testing with NVDA, JAWS, VoiceOver completed
- [ ] Used in 5+ production applications
- [ ] Responsive behavior tested on mobile, tablet, desktop
- [ ] Performance benchmarks within acceptable ranges
- [ ] No moderate or critical bugs for 3+ months
- [ ] Comprehensive documentation including edge cases
- [ ] Positive feedback from developers and users
- [ ] Design review confirms component matches design system principles

**Process:**
1. Developer prepares promotion proposal with evidence
2. Full team review (dev + design + accessibility)
3. Final accessibility audit by specialist
4. Update maturity level with version bump (minor version)
5. Announce widely in release notes and communications
6. Celebrate achievement 🎉

### Marking as Deprecated

**Checklist:**
- [ ] Replacement component available and at least Beta maturity
- [ ] Migration guide written and reviewed
- [ ] Deprecation timeline planned (minimum 6 months)
- [ ] Communication plan prepared
- [ ] Console warnings implemented
- [ ] Known users identified (if possible)

**Process:**
1. Proposal with justification and migration path
2. Team review and approval
3. Publish migration guide
4. Add deprecation notices to code and docs
5. Monitor migration progress
6. Remove in next major version (after timeline expires)

---

## Governance

**Maturity Level Changes:**
- Require PR review by at least 2 team members
- Design system lead approval for Stable promotions
- Accessibility specialist approval for Stable promotions
- Full team discussion for Deprecation decisions

**Quarterly Reviews:**
- Review all Draft components for promotion or removal
- Review all Beta components for Stable promotion
- Review all Stable components for potential improvements
- Update inventory and communicate status

**Exceptions:**
- Security issues can fast-track Deprecation
- Critical accessibility violations can fast-track Deprecation
- Extraordinary circumstances require team consensus

---

## FAQ

**Q: Can a component skip from Draft directly to Stable?**

A: No. The Beta phase provides valuable production feedback and ensures robustness. Minimum 3 months in Beta is required before Stable consideration.

**Q: What if a Stable component needs a breaking change?**

A: Release a new major version with migration guide, or deprecate and create a new component with a different name.

**Q: How long should Draft components remain in the library?**

A: Maximum 6 months. After 6 months, either promote to Beta or remove from the library.

**Q: Can I use a Draft component in production?**

A: Technically yes, but **strongly discouraged**. Draft components have no stability guarantees. If absolutely necessary, pin the exact version and prepare for manual migration.

**Q: What happens if a Beta component has a critical bug?**

A: Critical bugs are fixed immediately. This doesn't automatically demote the component unless the bug reveals systemic issues with the design or implementation.

---

## Related Documentation

- [Component Taxonomy](./COMPONENT_TAXONOMY.md) - Organization into tiers
- [Component Documentation Template](./COMPONENT_DOCUMENTATION_TEMPLATE.md) - Structure for component docs
- [Accessibility Testing Guide](./ACCESSIBILITY_TESTING.md) - How to test for WCAG compliance

---

**Last Updated:** 2026-04-10  
**Version:** 1.0.0  
**Owner:** UX4G Design System Team
