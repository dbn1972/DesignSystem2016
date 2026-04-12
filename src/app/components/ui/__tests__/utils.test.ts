import { describe, it, expect } from 'vitest';
import { cn } from '../utils';

describe('cn utility function', () => {
  it('should merge class names correctly', () => {
    const result = cn('px-4', 'py-2');
    expect(result).toBe('px-4 py-2');
  });

  it('should handle conditional classes', () => {
    const isActive = true;
    const result = cn('base-class', isActive && 'active-class');
    expect(result).toBe('base-class active-class');
  });

  it('should filter out false/null/undefined values', () => {
    const result = cn('class1', false, null, undefined, 'class2');
    expect(result).toBe('class1 class2');
  });

  it('should merge conflicting Tailwind classes correctly', () => {
    // twMerge should resolve conflicts, keeping the last value
    const result = cn('px-4 px-6');
    expect(result).toBe('px-6');
  });

  it('should handle arrays of classes', () => {
    const result = cn(['class1', 'class2'], 'class3');
    expect(result).toBe('class1 class2 class3');
  });

  it('should handle objects with boolean values', () => {
    const result = cn({
      'class1': true,
      'class2': false,
      'class3': true,
    });
    expect(result).toBe('class1 class3');
  });

  it('should handle empty input', () => {
    const result = cn();
    expect(result).toBe('');
  });

  it('should handle complex Tailwind class merging', () => {
    const result = cn('bg-red-500 hover:bg-blue-500', 'bg-green-500');
    // The last background color should win
    expect(result).toContain('bg-green-500');
    expect(result).toContain('hover:bg-blue-500');
  });

  it('should combine multiple sources correctly', () => {
    const baseClasses = 'p-4 rounded-lg';
    const conditionalClasses = true ? 'bg-blue-500' : 'bg-gray-500';
    const additionalClasses = ['text-white', 'font-bold'];

    const result = cn(baseClasses, conditionalClasses, additionalClasses);
    expect(result).toBe('p-4 rounded-lg bg-blue-500 text-white font-bold');
  });
});
