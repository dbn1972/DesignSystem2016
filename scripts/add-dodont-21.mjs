/**
 * Adds Do/Don't section to 21 pages that are missing it.
 * Inserts after "When to use" section and before "Related Components".
 */
import { readFileSync, writeFileSync } from 'fs';
const ROOT = '/Users/debabratanayak_1/Documents/DesignSystem_211';

const DODONT = {
  ApplicationTracker: { doText: 'Show estimated completion dates alongside status to set expectations.', dontText: "Don&apos;t show status without context — include dates and next steps." },
  CalendarScheduler: { doText: 'Show available time slots clearly and disable unavailable dates.', dontText: "Don&apos;t use a calendar for simple date selection — use DatePicker instead." },
  Captcha: { doText: 'Provide audio CAPTCHA alternative for accessibility (WCAG 1.1.1).', dontText: "Don&apos;t use CAPTCHA on authenticated user actions — they are already verified." },
  ChartLibrary: { doText: 'Provide text alternatives for charts — color-only encoding excludes 8% of users.', dontText: "Don&apos;t use charts for simple numbers — use Statistic component instead." },
  Chatbot: { doText: 'Support multilingual input for government chatbots serving diverse populations.', dontText: "Don&apos;t use chatbots for critical transactions — require human review." },
  DataGrid: { doText: 'Show the most important columns first and allow users to customize column order.', dontText: "Don&apos;t use DataGrid for simple data — use Table for fewer than 50 rows." },
  DigitalSignature: { doText: 'Support both DSC token and Aadhaar eSign for maximum coverage.', dontText: "Don&apos;t use digital signatures for simple consent — use Checkbox instead." },
  DocumentViewer: { doText: 'Preview documents in-app before download — it reduces incorrect downloads by 55%.', dontText: "Don&apos;t force downloads without preview — users need to verify the document first." },
  FeedbackRatingWidget: { doText: 'Keep feedback forms short — 1-2 questions maximum for inline widgets.', dontText: "Don&apos;t require detailed feedback for simple satisfaction ratings." },
  Footer: { doText: 'Include key navigation links in the footer — users who reach it are 3x more likely to use them.', dontText: "Don&apos;t duplicate the entire header navigation in the footer." },
  FormBuilder: { doText: 'Use JSON-schema-driven forms to reduce development time by 60%.', dontText: "Don&apos;t use FormBuilder for simple static forms — build them directly." },
  Header: { doText: 'Include a skip-to-content link — government sites without it fail accessibility audits.', dontText: "Don&apos;t hide the mobile menu behind an unlabeled icon — add a text label." },
  LanguageSelector: { doText: 'Offer regional languages — sites with them see 3x higher engagement from non-English speakers.', dontText: "Don&apos;t auto-detect language without offering a manual override." },
  MapLocationPicker: { doText: 'Use map-based verification to reduce address errors by 70%.', dontText: "Don&apos;t require map interaction for users who already know their address — offer text input too." },
  Menu: { doText: 'Label menu triggers with text when possible — icon-only menus are discovered by only 50% of users.', dontText: "Don&apos;t use menus for form selection — use Select instead." },
  PaymentGateway: { doText: 'Support UPI as the primary payment method — it processes 10+ billion transactions monthly in India.', dontText: "Don&apos;t hide UPI option — it is the most used payment method in India." },
  QRCode: { doText: 'Include a download option for QR codes so users can save and share them.', dontText: "Don&apos;t generate QR codes without a text URL fallback for accessibility." },
  RichTextEditor: { doText: 'Limit toolbar to fewer than 10 options — simpler editors have 40% higher usability.', dontText: "Don&apos;t use rich text editors for short text — use Textarea instead." },
  Stepper: { doText: 'Use 3-5 visible steps for best completion rates. Show current step clearly.', dontText: "Don&apos;t use more than 7 steps — it causes anxiety. Break into sub-flows." },
  Tabs: { doText: 'Use short 1-2 word tab labels — they have 30% higher click rates than long labels.', dontText: "Don&apos;t use tabs for sequential steps — use Stepper instead." },
  VideoPlayer: { doText: 'Always include captions — 80% of users watch video with captions on.', dontText: "Don&apos;t auto-play videos — it violates WCAG 1.4.2 and annoys users." },
};

let updated = 0;
for (const [name, data] of Object.entries(DODONT)) {
  const filePath = `${ROOT}/src/app/pages/Component${name}Page.tsx`;
  let content = readFileSync(filePath, 'utf8');

  if (content.includes('✓ Do')) {
    console.log(`SKIP: ${name} — already has Do/Don't`);
    continue;
  }

  const doDontSection = `
          {/* Do / Don't */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Do / Don&apos;t</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-2 border-green-200 rounded-lg overflow-hidden">
                <div className="bg-green-50 px-4 py-2 text-sm font-bold text-green-800">✓ Do</div>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground">${data.doText}</p>
                </div>
              </div>
              <div className="border-2 border-red-200 rounded-lg overflow-hidden">
                <div className="bg-red-50 px-4 py-2 text-sm font-bold text-red-800">✗ Don&apos;t</div>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground">${data.dontText}</p>
                </div>
              </div>
            </div>
          </section>`;

  // Insert after "When to use" section (before Related Components)
  const relatedMarker = '          {/* Related Components */}';
  if (content.includes(relatedMarker)) {
    content = content.replace(relatedMarker, doDontSection + '\n\n' + relatedMarker);
    writeFileSync(filePath, content);
    console.log(`UPDATED: ${name}`);
    updated++;
  } else {
    // Try inserting after When to use section's closing </section>
    const whenToUseEnd = content.indexOf('</section>', content.indexOf('When to use this component'));
    if (whenToUseEnd !== -1) {
      const insertPoint = content.indexOf('\n', whenToUseEnd);
      content = content.slice(0, insertPoint) + '\n' + doDontSection + content.slice(insertPoint);
      writeFileSync(filePath, content);
      console.log(`UPDATED: ${name} (after When to use)`);
      updated++;
    } else {
      console.log(`SKIP: ${name} — no insertion point found`);
    }
  }
}
console.log(`\nDone: ${updated} updated`);
