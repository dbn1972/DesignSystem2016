/**
 * Global site search using Fuse.js.
 * Lazy-initializes the index on first search.
 */

import Fuse from 'fuse.js';
import { SEARCH_INDEX, type SearchEntry } from '../content/search-index';

let fuseInstance: Fuse<SearchEntry> | null = null;

function getFuse(): Fuse<SearchEntry> {
  if (!fuseInstance) {
    fuseInstance = new Fuse(SEARCH_INDEX, {
      keys: [
        { name: 'title', weight: 3 },
        { name: 'keywords', weight: 2 },
        { name: 'description', weight: 1 },
        { name: 'category', weight: 0.5 },
      ],
      threshold: 0.35,
      includeMatches: true,
      minMatchCharLength: 2,
    });
  }
  return fuseInstance;
}

export interface SearchResult {
  item: SearchEntry;
  score: number;
}

export function search(query: string, limit = 12): SearchResult[] {
  if (!query || query.trim().length < 2) return [];
  const results = getFuse().search(query.trim(), { limit });
  return results.map((r) => ({ item: r.item, score: r.score ?? 0 }));
}
