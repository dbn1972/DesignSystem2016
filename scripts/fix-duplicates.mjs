/**
 * Fixes pages with duplicate additionalContent props by removing the second one
 * and merging its sections into the first.
 */
import { readFileSync, writeFileSync } from 'fs';
const ROOT = '/Users/debabratanayak_1/Documents/DesignSystem_211';

const DUPES = ['AadhaarInput', 'AddressAutocompleteIndia', 'Checkbox', 'DatePicker', 'FileUpload', 'OTPInput', 'Pagination', 'Select', 'Switch', 'Textarea'];

for (const name of DUPES) {
  const filePath = `${ROOT}/src/app/pages/Component${name}Page.tsx`;
  let content = readFileSync(filePath, 'utf8');

  // Find the second additionalContent block and extract its sections
  const firstIdx = content.indexOf('additionalContent={');
  const secondIdx = content.indexOf('additionalContent={', firstIdx + 1);
  
  if (secondIdx === -1) {
    console.log(`SKIP: ${name} — no duplicate found`);
    continue;
  }

  // The second additionalContent has the 4 new sections wrapped in <> ... </>
  // Extract from the second additionalContent to its closing
  const secondStart = secondIdx;
  // Find the closing pattern: "      }\n    />\n  );\n}"
  const closingAfterSecond = content.indexOf('\n    />\n  );\n}', secondStart);
  
  if (closingAfterSecond === -1) {
    console.log(`SKIP: ${name} — can't find closing after second additionalContent`);
    continue;
  }

  // Extract the sections from the second block (between <> and </>)
  const secondBlock = content.slice(secondStart, closingAfterSecond);
  // Find the sections (everything between the first <> and last </>)
  const sectionsMatch = secondBlock.match(/        <>\n([\s\S]*?)\n        <\/>/);
  
  if (!sectionsMatch) {
    console.log(`SKIP: ${name} — can't extract sections from second block`);
    continue;
  }

  const newSections = sectionsMatch[1];

  // Remove the second additionalContent block entirely (from "      additionalContent={" to before "/>")
  // The second block is: "\n      additionalContent={\n        <>\n...sections...\n        </>\n      }"
  const removeStart = content.lastIndexOf('\n      additionalContent={', closingAfterSecond);
  const removeEnd = content.indexOf('\n    />', removeStart);
  
  // Remove the second additionalContent prop
  content = content.slice(0, removeStart) + '\n    />' + content.slice(removeEnd + '\n    />'.length);

  // Now insert the new sections into the first additionalContent, before its closing
  // Find the first additionalContent's closing </> or the last </section> before }
  // The first additionalContent ends with either "</>\n      }" or just before the next prop
  
  // Find where to insert in the first additionalContent
  // Look for the Playground section end, then insert after it
  const playgroundEnd = content.indexOf('</section>', content.indexOf('Playground'));
  if (playgroundEnd !== -1) {
    const insertPoint = content.indexOf('\n', playgroundEnd);
    content = content.slice(0, insertPoint) + '\n\n' + newSections + content.slice(insertPoint);
  }

  writeFileSync(filePath, content);
  console.log(`FIXED: ${name}`);
}
