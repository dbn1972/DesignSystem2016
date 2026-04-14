/**
 * Adds preview, Do/Don't, and Playground to all remaining component pages.
 * Uses a data-driven approach with component-specific content.
 * Run: node scripts/add-features-remaining.mjs
 */
import { readFileSync, writeFileSync } from 'fs';
const ROOT = '/Users/debabratanayak_1/Documents/DesignSystem_211';

const DATA = {
