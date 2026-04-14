/**
 * Adds preview prop, Do/Don't visual examples, and Interactive Playground
 * to component pages. Inserts between "When to use" and "Related components".
 *
 * Run: node scripts/add-playground-dodont.mjs [batchNumber|all]
 */
import { readFileSync, writeFileSync } from 'fs';

const ROOT = '/Users/debabratanayak_1/Documents/DesignSystem_211';

const ALL = {
