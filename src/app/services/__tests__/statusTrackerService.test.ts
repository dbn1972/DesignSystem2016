import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import {
  loadServiceTrackingData,
  loadServiceTrackingDataOrFallback,
} from '../statusTrackerService';
import {
  saveCertificateApplications,
  getFallbackApplications,
} from '../certificateFlow';

describe('loadServiceTrackingData', () => {
  beforeEach(() => localStorage.clear());
  afterEach(() => localStorage.clear());

  it('returns null when no application exists in storage', () => {
    expect(loadServiceTrackingData()).toBeNull();
  });

  it('returns tracking data when an application exists', () => {
    const apps = getFallbackApplications();
    saveCertificateApplications(apps);

    const data = loadServiceTrackingData();
    expect(data).not.toBeNull();
    expect(data?.referenceNumber).toBeTruthy();
    expect(data?.statusLabel).toBeTruthy();
    expect(Array.isArray(data?.timeline)).toBe(true);
  });

  it('maps referenceNumber from the latest application', () => {
    const apps = getFallbackApplications();
    saveCertificateApplications(apps);

    const data = loadServiceTrackingData();
    expect(data?.referenceNumber).toBe(apps[0].referenceNumber);
  });

  it('maps statusLabel from the latest application', () => {
    const apps = getFallbackApplications();
    saveCertificateApplications(apps);

    const data = loadServiceTrackingData();
    expect(data?.statusLabel).toBe(apps[0].statusLabel);
  });
});

describe('loadServiceTrackingDataOrFallback', () => {
  beforeEach(() => localStorage.clear());
  afterEach(() => localStorage.clear());

  it('always returns a valid tracking object', () => {
    const data = loadServiceTrackingDataOrFallback();
    expect(data.referenceNumber).toBeTruthy();
    expect(data.statusLabel).toBeTruthy();
    expect(Array.isArray(data.timeline)).toBe(true);
    expect(data.timeline.length).toBeGreaterThan(0);
  });

  it('uses fallback data when no application exists', () => {
    const data = loadServiceTrackingDataOrFallback();
    expect(data.referenceNumber).toBe('CERT-2026-04-456789');
    expect(data.statusLabel).toBe('Under Review');
  });

  it('uses real data when an application exists', () => {
    const apps = getFallbackApplications();
    apps[0].referenceNumber = 'CERT-2026-04-REAL';
    saveCertificateApplications(apps);

    const data = loadServiceTrackingDataOrFallback();
    expect(data.referenceNumber).toBe('CERT-2026-04-REAL');
  });

  it('fallback timeline has completed and pending events', () => {
    const data = loadServiceTrackingDataOrFallback();
    const completed = data.timeline.filter((e) => e.completed);
    const pending = data.timeline.filter((e) => !e.completed);
    expect(completed.length).toBeGreaterThan(0);
    expect(pending.length).toBeGreaterThan(0);
  });
});
