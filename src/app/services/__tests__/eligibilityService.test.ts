import { describe, it, expect } from 'vitest';
import {
  allEligibilityAnswered,
  evaluateEligibility,
  getMissingEligibilityRequirements,
  getEmptyEligibilityAnswers,
} from '../eligibilityService';
import type { EligibilityAnswers } from '../eligibilityService';

const ELIGIBLE: EligibilityAnswers = {
  isCitizen: 'yes',
  ageAbove18: 'yes',
  hasIdentityProof: 'yes',
  hasAddressProof: 'yes',
  certificateType: 'income',
};

describe('getEmptyEligibilityAnswers', () => {
  it('returns all empty strings', () => {
    const empty = getEmptyEligibilityAnswers();
    Object.values(empty).forEach((v) => expect(v).toBe(''));
  });
});

describe('allEligibilityAnswered', () => {
  it('returns true when all fields are filled', () => {
    expect(allEligibilityAnswered(ELIGIBLE)).toBe(true);
  });

  it('returns false when any field is empty', () => {
    expect(allEligibilityAnswered({ ...ELIGIBLE, certificateType: '' })).toBe(false);
    expect(allEligibilityAnswered({ ...ELIGIBLE, isCitizen: '' })).toBe(false);
  });
});

describe('evaluateEligibility', () => {
  it('returns true when all answers are yes and certificateType is set', () => {
    expect(evaluateEligibility(ELIGIBLE)).toBe(true);
  });

  it('returns false when isCitizen is no', () => {
    expect(evaluateEligibility({ ...ELIGIBLE, isCitizen: 'no' })).toBe(false);
  });

  it('returns false when ageAbove18 is no', () => {
    expect(evaluateEligibility({ ...ELIGIBLE, ageAbove18: 'no' })).toBe(false);
  });

  it('returns false when hasIdentityProof is no', () => {
    expect(evaluateEligibility({ ...ELIGIBLE, hasIdentityProof: 'no' })).toBe(false);
  });

  it('returns false when hasAddressProof is no', () => {
    expect(evaluateEligibility({ ...ELIGIBLE, hasAddressProof: 'no' })).toBe(false);
  });

  it('returns false when certificateType is empty', () => {
    expect(evaluateEligibility({ ...ELIGIBLE, certificateType: '' })).toBe(false);
  });
});

describe('getMissingEligibilityRequirements', () => {
  it('returns empty array when fully eligible', () => {
    expect(getMissingEligibilityRequirements(ELIGIBLE)).toHaveLength(0);
  });

  it('reports citizenship requirement when isCitizen is no', () => {
    const missing = getMissingEligibilityRequirements({ ...ELIGIBLE, isCitizen: 'no' });
    expect(missing).toContain('You must be an Indian citizen to apply.');
  });

  it('reports age requirement when ageAbove18 is no', () => {
    const missing = getMissingEligibilityRequirements({ ...ELIGIBLE, ageAbove18: 'no' });
    expect(missing).toContain('You must be 18 years or above.');
  });

  it('reports identity proof requirement when hasIdentityProof is no', () => {
    const missing = getMissingEligibilityRequirements({ ...ELIGIBLE, hasIdentityProof: 'no' });
    expect(missing).toContain('Valid identity proof is mandatory.');
  });

  it('reports address proof requirement when hasAddressProof is no', () => {
    const missing = getMissingEligibilityRequirements({ ...ELIGIBLE, hasAddressProof: 'no' });
    expect(missing).toContain('Valid address proof is required.');
  });

  it('reports certificate type requirement when certificateType is empty', () => {
    const missing = getMissingEligibilityRequirements({ ...ELIGIBLE, certificateType: '' });
    expect(missing).toContain('Select a certificate type to continue.');
  });

  it('reports multiple missing requirements at once', () => {
    const missing = getMissingEligibilityRequirements({
      ...ELIGIBLE,
      isCitizen: 'no',
      ageAbove18: 'no',
    });
    expect(missing).toHaveLength(2);
  });
});
