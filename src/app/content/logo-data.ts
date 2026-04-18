/**
 * UX4G Government Logo Registry
 *
 * Structured dataset of all government logos available from
 * https://www.ux4g.gov.in/logo.php
 *
 * Source: UX4G official logo page, parsed April 2026.
 * Each entry links to the detail page where download assets are available.
 */

import { LOGO_THUMBNAILS } from './logo-thumbnails';

export interface LogoEntry {
  id: string;
  name: string;
  slug: string;
  sourceUrl: string;
  thumbnailUrl?: string;
  category: LogoCategory;
  tags: string[];
}

export type LogoCategory =
  | 'national-identity'
  | 'digital-india'
  | 'government-scheme'
  | 'government-body'
  | 'public-enterprise'
  | 'event-campaign'
  | 'financial-service'
  | 'education-research'
  | 'defence-security'
  | 'infrastructure';

export const LOGO_CATEGORIES: { key: LogoCategory; label: string }[] = [
  { key: 'national-identity', label: 'National Identity' },
  { key: 'digital-india', label: 'Digital India & IT' },
  { key: 'government-scheme', label: 'Government Schemes' },
  { key: 'government-body', label: 'Government Bodies' },
  { key: 'public-enterprise', label: 'Public Enterprises' },
  { key: 'event-campaign', label: 'Events & Campaigns' },
  { key: 'financial-service', label: 'Financial Services' },
  { key: 'education-research', label: 'Education & Research' },
  { key: 'defence-security', label: 'Defence & Security' },
  { key: 'infrastructure', label: 'Infrastructure' },
];

const BASE = 'https://www.ux4g.gov.in/logos';

const RAW_LOGO_REGISTRY: Omit<LogoEntry, 'thumbnailUrl'>[] = [
  // ── National Identity ──
  { id: 'national-emblem', name: 'National Emblem', slug: 'national-embel', sourceUrl: `${BASE}/national-embel.php`, category: 'national-identity', tags: ['emblem', 'ashoka', 'official'] },
  { id: 'aadhaar', name: 'AADHAAR', slug: 'aadhaar-logo', sourceUrl: `${BASE}/aadhaar-logo.php`, category: 'national-identity', tags: ['identity', 'uidai', 'aadhaar'] },
  { id: 'india-post', name: 'India Post', slug: 'india-post', sourceUrl: `${BASE}/india-post.php`, category: 'national-identity', tags: ['postal', 'mail'] },
  { id: 'election-commission', name: 'Election Commission of India', slug: 'election-commission-of-india-logo', sourceUrl: `${BASE}/election-commission-of-india-logo.php`, category: 'national-identity', tags: ['election', 'eci', 'voting'] },
  { id: 'indian-army', name: 'Indian Army', slug: 'india-army', sourceUrl: `${BASE}/india-army.php`, category: 'national-identity', tags: ['army', 'defence', 'military'] },

  // ── Digital India & IT ──
  { id: 'digital-india', name: 'Digital India', slug: 'dic-logo', sourceUrl: `${BASE}/dic-logo.php`, category: 'digital-india', tags: ['digital', 'dic', 'meity'] },
  { id: 'nic', name: 'NIC', slug: 'nic-logo', sourceUrl: `${BASE}/nic-logo.php`, category: 'digital-india', tags: ['nic', 'informatics'] },
  { id: 'digitalnic', name: 'DigitalNIC', slug: 'digitalnic', sourceUrl: `${BASE}/digitalnic.php`, category: 'digital-india', tags: ['nic', 'digital'] },
  { id: 'digilocker', name: 'DigiLocker', slug: 'digilocker', sourceUrl: `${BASE}/digilocker.php`, category: 'digital-india', tags: ['digilocker', 'documents'] },
  { id: 'umang', name: 'UMANG', slug: 'umang', sourceUrl: `${BASE}/umang.php`, category: 'digital-india', tags: ['umang', 'mobile', 'app'] },
  { id: 'e-taal', name: 'e-Taal', slug: 'e-taal-logo', sourceUrl: `${BASE}/e-taal-logo.php`, category: 'digital-india', tags: ['etaal', 'transactions'] },
  { id: 'gov', name: '@GOV', slug: 'gov-logo', sourceUrl: `${BASE}/gov-logo.php`, category: 'digital-india', tags: ['gov', 'email'] },
  { id: 'national-cloud', name: 'National Cloud', slug: 'cloud-logo', sourceUrl: `${BASE}/cloud-logo.php`, category: 'digital-india', tags: ['cloud', 'meghraj'] },
  { id: 'cca', name: 'Controller of Certifying Authorities (CCA)', slug: 'cca-logo', sourceUrl: `${BASE}/cca-logo.php`, category: 'digital-india', tags: ['cca', 'certificate', 'digital-signature'] },
  { id: 'cert-in', name: 'Indian Computer Emergency Response Team (CERT-In)', slug: 'indian-computer-emergency-response-team-cert-in', sourceUrl: `${BASE}/indian-computer-emergency-response-team-cert-in.php`, category: 'digital-india', tags: ['cert', 'security', 'cyber'] },
  { id: 'nielit', name: 'NIELIT', slug: 'nielit', sourceUrl: `${BASE}/nielit.php`, category: 'digital-india', tags: ['nielit', 'electronics', 'training'] },
  { id: 'stqc', name: 'Standardisation Testing and Quality Certification', slug: 'standardisation-testing-and-quality-certification', sourceUrl: `${BASE}/standardisation-testing-and-quality-certification.php`, category: 'digital-india', tags: ['stqc', 'testing', 'quality'] },
  { id: 'national-egovernance', name: 'National eGovernance Plan', slug: 'national-egovernance-plan', sourceUrl: `${BASE}/national-egovernance-plan.php`, category: 'digital-india', tags: ['egovernance', 'negp'] },
  { id: 'e-office', name: 'eOffice', slug: 'e-office-logo', sourceUrl: `${BASE}/e-office-logo.php`, category: 'digital-india', tags: ['eoffice', 'paperless'] },
  { id: 'gepnic', name: 'GepNIC', slug: 'gepnic', sourceUrl: `${BASE}/gepnic.php`, category: 'digital-india', tags: ['gepnic', 'procurement'] },
  { id: 'service-plus', name: 'Service Plus', slug: 'service-plus', sourceUrl: `${BASE}/service-plus.php`, category: 'digital-india', tags: ['service', 'delivery'] },
  { id: 'etrans', name: 'eTrans', slug: 'etrans-logo', sourceUrl: `${BASE}/etrans-logo.php`, category: 'digital-india', tags: ['etrans', 'transport'] },
  { id: 'gem', name: 'Government e Marketplace (GeM)', slug: 'government-e-marketplace-gem', sourceUrl: `${BASE}/government-e-marketplace-gem.php`, category: 'digital-india', tags: ['gem', 'marketplace', 'procurement'] },
  { id: 'csc', name: 'Common Services Centres (CSCs)', slug: 'csc-logo', sourceUrl: `${BASE}/csc-logo.php`, category: 'digital-india', tags: ['csc', 'services'] },
  { id: 'nicsi', name: 'NICSI', slug: 'nicsi', sourceUrl: `${BASE}/nicsi.php`, category: 'digital-india', tags: ['nicsi', 'nic'] },
  { id: 'cdac', name: 'Centre for Development of Advanced Computing', slug: 'centre-for-development-of-advanced-computing', sourceUrl: `${BASE}/centre-for-development-of-advanced-computing.php`, category: 'digital-india', tags: ['cdac', 'computing'] },
  { id: 'electronics-india', name: 'Electronics India', slug: 'electronic-india-logo', sourceUrl: `${BASE}/electronic-india-logo.php`, category: 'digital-india', tags: ['electronics'] },
  { id: 'stpi', name: 'Software Technology Parks of India', slug: 'software-technology-parks-of-india', sourceUrl: `${BASE}/software-technology-parks-of-india.php`, category: 'digital-india', tags: ['stpi', 'software', 'parks'] },
  { id: 'sameer', name: 'SAMEER', slug: 'sameer', sourceUrl: `${BASE}/sameer.php`, category: 'digital-india', tags: ['sameer', 'electronics'] },
  { id: 'msh', name: 'MEITY Start-up Hub (MSH)', slug: 'meity-start-up-hub-msh', sourceUrl: `${BASE}/meity-start-up-hub-msh.php`, category: 'digital-india', tags: ['meity', 'startup'] },

  // ── Government Schemes ──
  { id: 'swachh-bharat', name: 'Swachh Bharat', slug: 'swachh-bharat', sourceUrl: `${BASE}/swachh-bharat.php`, category: 'government-scheme', tags: ['swachh', 'clean', 'sanitation'] },
  { id: 'pm-svanidhi', name: 'PM SVANidhi', slug: 'pm-svanidhi', sourceUrl: `${BASE}/pm-svanidhi.php`, category: 'government-scheme', tags: ['svanidhi', 'street-vendor'] },
  { id: 'standup-india', name: 'Stand-Up India', slug: 'stand-up-india', sourceUrl: `${BASE}/stand-up-india.php`, category: 'government-scheme', tags: ['standup', 'entrepreneurship'] },
  { id: 'pm-jay', name: 'Pradhan Mantri Jan Arogya Yojana (PM-JAY)', slug: 'pradhan-mantri-jan-arogya-yojana-pm-jay', sourceUrl: `${BASE}/pradhan-mantri-jan-arogya-yojana-pm-jay.php`, category: 'government-scheme', tags: ['pmjay', 'health', 'ayushman'] },
  { id: 'pm-kvy', name: 'Pradhan Mantri Kaushal Vikas Yojna (PM-KVY)', slug: 'pradhan-mantri-kaushal-vikas-yojna-pm-kvy', sourceUrl: `${BASE}/pradhan-mantri-kaushal-vikas-yojna-pm-kvy.php`, category: 'government-scheme', tags: ['pmkvy', 'skill'] },
  { id: 'pm-mudra', name: 'Pradhan Mantri Mudra Yojana', slug: 'pradhan-mantri-mudra-yojana', sourceUrl: `${BASE}/pradhan-mantri-mudra-yojana.php`, category: 'government-scheme', tags: ['mudra', 'loan'] },
  { id: 'pm-ujjwala', name: 'Pradhan Mantri Ujjwala Yojana (PMUY)', slug: 'pradhan-mantri-ujjwala-yojana-pmuy', sourceUrl: `${BASE}/pradhan-mantri-ujjwala-yojana-pmuy.php`, category: 'government-scheme', tags: ['ujjwala', 'lpg'] },
  { id: 'pm-fasal-bima', name: 'Pradhan Mantri Fasal Bima Yojana (PMFBY)', slug: 'pradhan-mantri-fasal-bima-yojana-pmfby', sourceUrl: `${BASE}/pradhan-mantri-fasal-bima-yojana-pmfby.php`, category: 'government-scheme', tags: ['pmfby', 'crop', 'insurance'] },
  { id: 'pm-jdy', name: 'Pradhan Mantri Jan Dhan Yojana (PMJDY)', slug: 'pradhan-mantri-jan-dhan-yojana-pmjdy', sourceUrl: `${BASE}/pradhan-mantri-jan-dhan-yojana-pmjdy.php`, category: 'government-scheme', tags: ['pmjdy', 'banking'] },
  { id: 'pm-gram-sadak', name: 'Pradhan Mantri Gram Sadak Yojana (PMGSY)', slug: 'pradhan-mantri-gram-sadak-yojana-pmgsy', sourceUrl: `${BASE}/pradhan-mantri-gram-sadak-yojana-pmgsy.php`, category: 'government-scheme', tags: ['pmgsy', 'roads', 'rural'] },
  { id: 'jal-jeevan', name: 'Jal Jeevan Mission (JJM)', slug: 'jal-jeevan-mission-jjm', sourceUrl: `${BASE}/jal-jeevan-mission-jjm.php`, category: 'government-scheme', tags: ['jjm', 'water'] },
  { id: 'pmbjp', name: 'Pradhan Mantri Bhartiya Janaushadhi Pariyojana (PMBJP)', slug: 'pradhan-mantri-bhartiya-janaushadhi-pariyojana-pmbjp', sourceUrl: `${BASE}/pradhan-mantri-bhartiya-janaushadhi-pariyojana-pmbjp.php`, category: 'government-scheme', tags: ['pmbjp', 'medicine'] },
  { id: 'startup-india', name: 'Startup India', slug: 'startup-india', sourceUrl: `${BASE}/startup-india.php`, category: 'government-scheme', tags: ['startup', 'entrepreneurship'] },
  { id: 'skill-india', name: 'Skill India', slug: 'skill-india', sourceUrl: `${BASE}/skill-india.php`, category: 'government-scheme', tags: ['skill', 'training'] },
  { id: 'beti-bachao', name: 'Beti Bachao, Beti Padhao', slug: 'beti-bachao-beti-padhao', sourceUrl: `${BASE}/beti-bachao-beti-padhao.php`, category: 'government-scheme', tags: ['beti', 'women', 'education'] },
  { id: 'smart-city', name: 'Smart City Mission', slug: 'smart-city-mission', sourceUrl: `${BASE}/smart-city-mission.php`, category: 'government-scheme', tags: ['smart-city', 'urban'] },
  { id: 'poshan', name: 'POSHAN Abhiyaan', slug: 'poshan-abhiyaan', sourceUrl: `${BASE}/poshan-abhiyaan.php`, category: 'government-scheme', tags: ['poshan', 'nutrition'] },
  { id: 'nrhm', name: 'National Rural Health Mission (NRHM)', slug: 'national-rural-health-mission-nrhm', sourceUrl: `${BASE}/national-rural-health-mission-nrhm.php`, category: 'government-scheme', tags: ['nrhm', 'health', 'rural'] },
  { id: 'accessible-india', name: 'Accessible India Campaign', slug: 'accessible-india-campaign', sourceUrl: `${BASE}/accessible-india-campaign.php`, category: 'government-scheme', tags: ['accessible', 'disability', 'sugamya'] },
  { id: 'garib-kalyan', name: 'Garib Kalyan Rojgar Abhiyaan', slug: 'garib-kalyan-rojgar-abhiyaan', sourceUrl: `${BASE}/garib-kalyan-rojgar-abhiyaan.php`, category: 'government-scheme', tags: ['garib-kalyan', 'employment'] },
  { id: 'dbt-bharat', name: 'DBT Bharat', slug: 'dbt-bharat-logo', sourceUrl: `${BASE}/dbt-bharat-logo.php`, category: 'government-scheme', tags: ['dbt', 'direct-benefit'] },

  // ── Government Bodies ──
  { id: 'my-gov', name: 'MyGov', slug: 'my-gov', sourceUrl: `${BASE}/my-gov.php`, category: 'government-body', tags: ['mygov', 'citizen'] },
  { id: 'ndma', name: 'National Disaster Management Authority', slug: 'national-disaster-management-authority', sourceUrl: `${BASE}/national-disaster-management-authority.php`, category: 'government-body', tags: ['ndma', 'disaster'] },
  { id: 'doordarshan', name: 'Doordarshan', slug: 'doordarshan-logo', sourceUrl: `${BASE}/doordarshan-logo.php`, category: 'government-body', tags: ['doordarshan', 'tv', 'media'] },
  { id: 'ncs', name: 'National Career Service (NCS)', slug: 'national-career-service-ncs', sourceUrl: `${BASE}/national-career-service-ncs.php`, category: 'government-body', tags: ['ncs', 'career', 'jobs'] },
  { id: 'nhrc', name: 'National Human Rights Commission', slug: 'national-human-rights-commission', sourceUrl: `${BASE}/national-human-rights-commission.php`, category: 'government-body', tags: ['nhrc', 'human-rights'] },
  { id: 'cvc', name: 'Central Vigilance Commission', slug: 'cvc-logo', sourceUrl: `${BASE}/cvc-logo.php`, category: 'government-body', tags: ['cvc', 'vigilance'] },
  { id: 'cbi', name: 'Central Bureau of Investigation (CBI)', slug: 'central-bureau-of-investigation-cbi', sourceUrl: `${BASE}/central-bureau-of-investigation-cbi.php`, category: 'government-body', tags: ['cbi', 'investigation'] },
  { id: 'cci', name: 'Competition Commission of India (CCI)', slug: 'competition-commission-of-india-cci', sourceUrl: `${BASE}/competition-commission-of-india-cci.php`, category: 'government-body', tags: ['cci', 'competition'] },
  { id: 'cci-2', name: 'Competition Commission of India (CCI) Alt', slug: 'competition-commission-of-india-cci-2', sourceUrl: `${BASE}/competition-commission-of-india-cci-2.php`, category: 'government-body', tags: ['cci', 'competition'] },
  { id: 'naco', name: 'National Aids Control Organisation (NACO)', slug: 'national-aids-control-organisation-naco', sourceUrl: `${BASE}/national-aids-control-organisation-naco.php`, category: 'government-body', tags: ['naco', 'aids', 'health'] },
  { id: 'nsdc', name: 'National Skill Development Corporation (NSDC)', slug: 'national-skill-development-corporation-nsdc', sourceUrl: `${BASE}/national-skill-development-corporation-nsdc.php`, category: 'government-body', tags: ['nsdc', 'skill'] },
  { id: 'nss', name: 'National Service Scheme', slug: 'national-service-scheme', sourceUrl: `${BASE}/national-service-scheme.php`, category: 'government-body', tags: ['nss', 'service', 'youth'] },
  { id: 'msme', name: 'Micro, Small and Medium Enterprises (MSME)', slug: 'micro-small-and-medium-enterprises-msme', sourceUrl: `${BASE}/micro-small-and-medium-enterprises-msme.php`, category: 'government-body', tags: ['msme', 'enterprise'] },
  { id: 'bprd', name: 'Bureau of Police Research and Development (BPR&D)', slug: 'bureau-of-police-research-and-development-bprd', sourceUrl: 'https://www.ux4g.gov.in/bureau-of-police-research-and-development-bprd.php', category: 'government-body', tags: ['bprd', 'police'] },
  { id: 'ciso', name: 'CISO', slug: 'ciso-logo', sourceUrl: `${BASE}/ciso-logo.php`, category: 'government-body', tags: ['ciso', 'security'] },
  { id: 'invest-india', name: 'Invest India', slug: 'invest-india', sourceUrl: `${BASE}/invest-india.php`, category: 'government-body', tags: ['invest', 'fdi'] },
  { id: 'itpo', name: 'India Trade Promotion Organisation (ITPO)', slug: 'india-trade-promotion-organisation-itpo', sourceUrl: `${BASE}/india-trade-promotion-organisation-itpo.php`, category: 'government-body', tags: ['itpo', 'trade'] },
  { id: 'nisg', name: 'National Institute for Smart Government (NISG)', slug: 'national-institute-for-smart-government-nisg', sourceUrl: `${BASE}/national-institute-for-smart-government-nisg.php`, category: 'government-body', tags: ['nisg', 'smart-government'] },
  { id: 'nipfp', name: 'National Institute of Public Finance and Policy', slug: 'national-institute-of-public-finance-and-policy', sourceUrl: `${BASE}/national-institute-of-public-finance-and-policy.php`, category: 'government-body', tags: ['nipfp', 'finance', 'policy'] },

  // ── Public Enterprises ──
  { id: 'ongc', name: 'Oil and Natural Gas Corporation (ONGC)', slug: 'oil-and-natural-gas-corporation-ongc', sourceUrl: `${BASE}/oil-and-natural-gas-corporation-ongc.php`, category: 'public-enterprise', tags: ['ongc', 'oil', 'gas'] },
  { id: 'ntpc', name: 'National Thermal Power Corporation (NTPC)', slug: 'national-thermal-power-corporation-ntpc', sourceUrl: `${BASE}/national-thermal-power-corporation-ntpc.php`, category: 'public-enterprise', tags: ['ntpc', 'power'] },
  { id: 'gail', name: 'Gail (India) Limited (GAIL)', slug: 'gail-india-limited-gail', sourceUrl: `${BASE}/gail-india-limited-gail.php`, category: 'public-enterprise', tags: ['gail', 'gas'] },
  { id: 'coal-india', name: 'Coal India', slug: 'coal-india', sourceUrl: `${BASE}/coal-india.php`, category: 'public-enterprise', tags: ['coal', 'mining'] },
  { id: 'sail', name: 'Steel Authority of India Limited (SAIL)', slug: 'steel-authority-of-india-limited-sail', sourceUrl: `${BASE}/steel-authority-of-india-limited-sail.php`, category: 'public-enterprise', tags: ['sail', 'steel'] },
  { id: 'bhel', name: 'Bharat Heavy Electricals Limited (BHEL)', slug: 'bharat-heavy-electricals-limited-bhel', sourceUrl: `${BASE}/bharat-heavy-electricals-limited-bhel.php`, category: 'public-enterprise', tags: ['bhel', 'electrical'] },
  { id: 'indianoil', name: 'IndianOil', slug: 'indianoil', sourceUrl: `${BASE}/indianoil.php`, category: 'public-enterprise', tags: ['indianoil', 'petroleum'] },
  { id: 'bsnl', name: 'Bharat Sanchar Nigam Limited (BSNL)', slug: 'bharat-sanchar-nigam-limited-bsnl', sourceUrl: `${BASE}/bharat-sanchar-nigam-limited-bsnl.php`, category: 'public-enterprise', tags: ['bsnl', 'telecom'] },
  { id: 'air-india', name: 'Air India', slug: 'air-india', sourceUrl: `${BASE}/air-india.php`, category: 'public-enterprise', tags: ['air-india', 'airline'] },
  { id: 'railtel', name: 'RailTel', slug: 'railtel', sourceUrl: `${BASE}/railtel.php`, category: 'public-enterprise', tags: ['railtel', 'railway', 'telecom'] },
  { id: 'ecil', name: 'Electronics Corporation of India Limited (ECIL)', slug: 'electronics-corporation-of-india-limited-ecil', sourceUrl: `${BASE}/electronics-corporation-of-india-limited-ecil.php`, category: 'public-enterprise', tags: ['ecil', 'electronics'] },
  { id: 'iti', name: 'Indian Telephone Industries (ITI)', slug: 'indian-telephone-industries-iti', sourceUrl: `${BASE}/indian-telephone-industries-iti.php`, category: 'public-enterprise', tags: ['iti', 'telecom'] },
  { id: 'irctc', name: 'Indian Railway Catering and Tourism Corporation', slug: 'indian-railway-catering-and-tourism-corporation', sourceUrl: `${BASE}/indian-railway-catering-and-tourism-corporation.php`, category: 'public-enterprise', tags: ['irctc', 'railway'] },
  { id: 'power-grid', name: 'Power Grid Corp', slug: 'power-grid-corp', sourceUrl: `${BASE}/power-grid-corp.php`, category: 'public-enterprise', tags: ['powergrid', 'electricity'] },
  { id: 'pfc', name: 'Power Finance Corp (PFC)', slug: 'power-finance-corp-pfc', sourceUrl: `${BASE}/power-finance-corp-pfc.php`, category: 'public-enterprise', tags: ['pfc', 'finance', 'power'] },
  { id: 'npcc', name: 'National Projects Construction Corporation Limited', slug: 'national-projects-construction-corporation-limited', sourceUrl: `${BASE}/national-projects-construction-corporation-limited.php`, category: 'public-enterprise', tags: ['npcc', 'construction'] },
  { id: 'aai', name: 'Airport Authority of India (AAI)', slug: 'airport-authority-of-india-aai', sourceUrl: `${BASE}/airport-authority-of-india-aai.php`, category: 'public-enterprise', tags: ['aai', 'airport'] },

  // ── Financial Services ──
  { id: 'bhim', name: 'BHIM', slug: 'bhim-logo', sourceUrl: `${BASE}/bhim-logo.php`, category: 'financial-service', tags: ['bhim', 'upi', 'payment'] },
  { id: 'upi', name: 'Unified Payments Interface (UPI)', slug: 'unified-payments-interface-upi', sourceUrl: `${BASE}/unified-payments-interface-upi.php`, category: 'financial-service', tags: ['upi', 'payment'] },
  { id: 'lic', name: 'Life Insurance Corporation (LIC)', slug: 'life-insurance-corporation-lic', sourceUrl: `${BASE}/life-insurance-corporation-lic.php`, category: 'financial-service', tags: ['lic', 'insurance'] },
  { id: 'irda', name: 'IRDA', slug: 'irda', sourceUrl: `${BASE}/irda.php`, category: 'financial-service', tags: ['irda', 'insurance', 'regulatory'] },
  { id: 'nabard', name: 'NABARD', slug: 'nabard', sourceUrl: `${BASE}/nabard.php`, category: 'financial-service', tags: ['nabard', 'agriculture', 'rural'] },
  { id: 'bis-hallmark', name: 'BIS Hallmark', slug: 'bis-hallmark-logo', sourceUrl: `${BASE}/bis-hallmark-logo.php`, category: 'financial-service', tags: ['bis', 'hallmark', 'gold'] },
  { id: 'agmark', name: 'AGMARK', slug: 'agmark-logo', sourceUrl: `${BASE}/agmark-logo.php`, category: 'financial-service', tags: ['agmark', 'agriculture', 'quality'] },

  // ── Events & Campaigns ──
  { id: 'azadi-hindi', name: 'Azadi ka Amrit Mahotsav (Hindi)', slug: 'azadi-ka-amrit-hindi-logo', sourceUrl: `${BASE}/azadi-ka-amrit-hindi-logo.php`, category: 'event-campaign', tags: ['azadi', 'independence', 'hindi'] },
  { id: 'azadi-english', name: 'Azadi ka Amrit Mahotsav (English)', slug: 'azadi-ka-amrit-english-logo', sourceUrl: `${BASE}/azadi-ka-amrit-english-logo.php`, category: 'event-campaign', tags: ['azadi', 'independence', 'english'] },
  { id: 'har-ghar-tiranga', name: 'AKAM - Har Ghar Tiranga', slug: 'akam-har-ghar-tiranga', sourceUrl: `${BASE}/akam-har-ghar-tiranga.php`, category: 'event-campaign', tags: ['tiranga', 'flag'] },
  { id: 'g20', name: "India's G20 Presidency", slug: 'indias-g20-presidency', sourceUrl: `${BASE}/indias-g20-presidency.php`, category: 'event-campaign', tags: ['g20', 'presidency'] },
  { id: 'b20', name: 'B20 India', slug: 'b20-india-logo', sourceUrl: `${BASE}/b20-india-logo.php`, category: 'event-campaign', tags: ['b20', 'business'] },
  { id: 'mahatma-150', name: '150 Years of celebrating Mahatma', slug: 'years-of-mahatma-logo', sourceUrl: `${BASE}/years-of-mahatma-logo.php`, category: 'event-campaign', tags: ['gandhi', 'mahatma'] },
  { id: 'desh-ka-maha-tyohar', name: 'Desh ka Maha Tyohar', slug: 'desh-ka-maha-tyohar-logo', sourceUrl: `${BASE}/desh-ka-maha-tyohar-logo.php`, category: 'event-campaign', tags: ['election', 'festival'] },
  { id: 'sveep', name: 'SVEEP', slug: 'sveep', sourceUrl: `${BASE}/sveep.php`, category: 'event-campaign', tags: ['sveep', 'voter', 'election'] },
  { id: 'meghalaya-games', name: '5th Meghalaya Games', slug: 'meghalaya-games', sourceUrl: `${BASE}/meghalaya-games.php`, category: 'event-campaign', tags: ['meghalaya', 'sports'] },
  { id: 'aero-india', name: 'Aero India', slug: 'aero-india-logo', sourceUrl: `${BASE}/aero-india-logo.php`, category: 'event-campaign', tags: ['aero', 'defence', 'exhibition'] },
  { id: 'tourism-summit', name: '1st Global Tourism Investors Summit', slug: '1st-global-tourism-investors-summit', sourceUrl: `${BASE}/1st-global-tourism-investors-summit.php`, category: 'event-campaign', tags: ['tourism', 'investment'] },
  { id: 'ictt', name: 'ICTT India International Conference', slug: 'ictt-india-international-conference', sourceUrl: `${BASE}/ictt-india-international-conference.php`, category: 'event-campaign', tags: ['ictt', 'conference'] },
  { id: 'up-investor', name: 'Uttar Pradesh Global Investors Summit', slug: 'up-global-investor', sourceUrl: `${BASE}/up-global-investor.php`, category: 'event-campaign', tags: ['up', 'investment'] },
  { id: 'tech-conclave', name: 'Tech Conclave', slug: 'tech-conclave', sourceUrl: `${BASE}/tech-conclave.php`, category: 'event-campaign', tags: ['tech', 'conclave'] },
  { id: 'raise', name: 'RAISE', slug: 'raise', sourceUrl: `${BASE}/raise.php`, category: 'event-campaign', tags: ['raise', 'ai'] },
  { id: 'khelo-india', name: 'Khelo India', slug: 'khelo-india', sourceUrl: `${BASE}/khelo-india.php`, category: 'event-campaign', tags: ['khelo', 'sports'] },
  { id: 'fit-india', name: 'FIT India', slug: 'fit-india-logo', sourceUrl: `${BASE}/fit-india-logo.php`, category: 'event-campaign', tags: ['fit', 'fitness'] },
  { id: 'incredible-india-hi', name: 'Incredible India (Hindi)', slug: 'incredible-india-hindi', sourceUrl: `${BASE}/incredible-india-hindi.php`, category: 'event-campaign', tags: ['incredible', 'tourism', 'hindi'] },
  { id: 'incredible-india-en', name: 'Incredible India (English)', slug: 'incredible-india-eng', sourceUrl: `${BASE}/incredible-india-eng.php`, category: 'event-campaign', tags: ['incredible', 'tourism', 'english'] },
  { id: 'ek-bharat', name: 'Ek Bharat Shreshtha Bharat', slug: 'ek-bharat-shrestha-logo', sourceUrl: `${BASE}/ek-bharat-shrestha-logo.php`, category: 'event-campaign', tags: ['ek-bharat', 'unity'] },
  { id: 'digitag', name: 'DigiTAG Arena', slug: 'digitag-arena-logo', sourceUrl: `${BASE}/digitag-arena-logo.php`, category: 'event-campaign', tags: ['digitag', 'digital'] },
  { id: 'tag', name: 'TAG', slug: 'tag', sourceUrl: `${BASE}/tag.php`, category: 'event-campaign', tags: ['tag'] },

  // ── Education & Research ──
  { id: 'isro', name: 'Indian Space Research Organisation (ISRO)', slug: 'indian-space-research-organisation-isro', sourceUrl: `${BASE}/indian-space-research-organisation-isro.php`, category: 'education-research', tags: ['isro', 'space'] },
  { id: 'ignou', name: 'Indira Gandhi National Open University', slug: 'indira-gandhi-national-open-university', sourceUrl: `${BASE}/indira-gandhi-national-open-university.php`, category: 'education-research', tags: ['ignou', 'university'] },
  { id: 'ugc', name: 'University Grants Commission (UGC)', slug: 'university-grants-commission-ugc', sourceUrl: `${BASE}/university-grants-commission-ugc.php`, category: 'education-research', tags: ['ugc', 'university'] },
  { id: 'ftii', name: 'Film and Television Institute of India (FTII)', slug: 'film-and-television-institute-of-india-ftii', sourceUrl: `${BASE}/film-and-television-institute-of-india-ftii.php`, category: 'education-research', tags: ['ftii', 'film'] },
  { id: 'cec', name: 'Consortium for Educational Communication (CEC)', slug: 'consortium-for-educational-communication-cec', sourceUrl: `${BASE}/consortium-for-educational-communication-cec.php`, category: 'education-research', tags: ['cec', 'education'] },
  { id: 'cec-2', name: 'Consortium for Educational Communication (CEC) Alt', slug: 'consortium-for-educational-communication-cec-2', sourceUrl: `${BASE}/consortium-for-educational-communication-cec-2.php`, category: 'education-research', tags: ['cec', 'education'] },
  { id: 'ernet', name: 'Education and Research Network (ERNET)', slug: 'education-and-research-network-ernet', sourceUrl: `${BASE}/education-and-research-network-ernet.php`, category: 'education-research', tags: ['ernet', 'network'] },
  { id: 'igot', name: 'Integrated Government Online Training (iGOT)', slug: 'integrated-government-online-training-igot', sourceUrl: `${BASE}/integrated-government-online-training-igot.php`, category: 'education-research', tags: ['igot', 'training'] },
  { id: 'karmayogi-hi', name: 'Karmayogi Bharat (Hindi)', slug: 'karmayogi-bharat-hindi', sourceUrl: `${BASE}/karmayogi-bharat-hindi.php`, category: 'education-research', tags: ['karmayogi', 'training', 'hindi'] },
  { id: 'karmayogi-en', name: 'Karmayogi Bharat (English)', slug: 'karmayogi-bharat-english', sourceUrl: `${BASE}/karmayogi-bharat-english.php`, category: 'education-research', tags: ['karmayogi', 'training', 'english'] },
  { id: 'capacity-building', name: 'Capacity Building Commission', slug: 'capacity-building-logo', sourceUrl: `${BASE}/capacity-building-logo.php`, category: 'education-research', tags: ['capacity', 'training'] },
  { id: 'vidyanjali', name: 'Vidyanjali', slug: 'vidyanjali', sourceUrl: `${BASE}/vidyanjali.php`, category: 'education-research', tags: ['vidyanjali', 'education'] },
  { id: 'yuvika', name: 'Yuvika', slug: 'yuvika', sourceUrl: `${BASE}/yuvika.php`, category: 'education-research', tags: ['yuvika', 'isro', 'youth'] },
  { id: 'gpai', name: 'GPAI', slug: 'gpai', sourceUrl: `${BASE}/gpai.php`, category: 'education-research', tags: ['gpai', 'ai'] },

  // ── Defence & Security ──
  { id: 'bsf', name: 'Border Security Force (BSF)', slug: 'border-security-force-bsf', sourceUrl: `${BASE}/border-security-force-bsf.php`, category: 'defence-security', tags: ['bsf', 'border', 'security'] },
  { id: 'sai', name: 'SAI', slug: 'sai', sourceUrl: `${BASE}/sai.php`, category: 'defence-security', tags: ['sai', 'sports'] },

  // ── Infrastructure ──
  { id: 'nkn-h', name: 'National Knowledge Network (NKN) Horizontal', slug: 'national-knowledge-network-nkn-horizontal', sourceUrl: `${BASE}/national-knowledge-network-nkn-horizontal.php`, category: 'infrastructure', tags: ['nkn', 'network'] },
  { id: 'nkn-v', name: 'National Knowledge Network (NKN) Vertical', slug: 'national-knowledge-network-nkn-vertical', sourceUrl: `${BASE}/national-knowledge-network-nkn-vertical.php`, category: 'infrastructure', tags: ['nkn', 'network'] },
  { id: 'nixi', name: 'National Internet Exchange of India (NIXI)', slug: 'national-internet-exchange-of-india-nixi', sourceUrl: `${BASE}/national-internet-exchange-of-india-nixi.php`, category: 'infrastructure', tags: ['nixi', 'internet'] },
  { id: 'iig', name: 'India Investment Grid (IIG)', slug: 'india-investment-grid-iig', sourceUrl: `${BASE}/india-investment-grid-iig.php`, category: 'infrastructure', tags: ['iig', 'investment'] },
  { id: 'e-amrit', name: 'e-AMRIT', slug: 'e-amrit-logo', sourceUrl: `${BASE}/e-amrit-logo.php`, category: 'infrastructure', tags: ['eamrit', 'ev', 'electric'] },
  { id: 'csitm', name: 'CSITM', slug: 'csitm-logo', sourceUrl: `${BASE}/csitm-logo.php`, category: 'infrastructure', tags: ['csitm'] },
  { id: 'nhp-hi', name: 'NHP (Hindi)', slug: 'nhp-hi', sourceUrl: `${BASE}/nhp-hi.php`, category: 'infrastructure', tags: ['nhp', 'hydrology', 'hindi'] },
  { id: 'nhp-en', name: 'NHP (English)', slug: 'nhp-eng', sourceUrl: `${BASE}/nhp-eng.php`, category: 'infrastructure', tags: ['nhp', 'hydrology', 'english'] },
  { id: 'pm-sangrahralaya', name: 'Pradhanmantri Sangrahralaya', slug: 'pradhanmantri-sangrahralaya-2', sourceUrl: `${BASE}/pradhanmantri-sangrahralaya-2.php`, category: 'infrastructure', tags: ['museum', 'pm'] },
  { id: 'nextgen-hospital', name: 'NextGen e-Hospital', slug: 'nextgen-e-hospital', sourceUrl: `${BASE}/nextgen-e-hospital.php`, category: 'infrastructure', tags: ['hospital', 'health'] },
  { id: 'ndap', name: 'NDAP', slug: 'ndap', sourceUrl: `${BASE}/ndap.php`, category: 'infrastructure', tags: ['ndap', 'data'] },
  { id: 'shoonya', name: 'Shoonya', slug: 'shoonya', sourceUrl: `${BASE}/shoonya.php`, category: 'infrastructure', tags: ['shoonya', 'ev'] },
  { id: 'bhoomi-rashi', name: 'Bhoomi Rashi', slug: 'bhoomi-rashi-logo', sourceUrl: `${BASE}/bhoomi-rashi-logo.php`, category: 'infrastructure', tags: ['bhoomi', 'land'] },
  { id: 'prayas', name: 'Prayas', slug: 'prayas', sourceUrl: `${BASE}/prayas.php`, category: 'infrastructure', tags: ['prayas'] },
  { id: 'nature-protects', name: 'Nature Protects If She Is Protected', slug: 'nature-protects-if-she-is-protected', sourceUrl: `${BASE}/nature-protects-if-she-is-protected.php`, category: 'infrastructure', tags: ['nature', 'environment'] },
  { id: 'vivid', name: 'VIVID', slug: 'vivid', sourceUrl: `${BASE}/vivid.php`, category: 'infrastructure', tags: ['vivid'] },
  { id: 'icccc', name: 'ICCCC', slug: 'icccc', sourceUrl: `${BASE}/icccc.php`, category: 'infrastructure', tags: ['icccc'] },
  { id: 'india-handlooms', name: 'India Handlooms', slug: 'india-handlooms', sourceUrl: `${BASE}/india-handlooms.php`, category: 'infrastructure', tags: ['handloom', 'textile'] },
  { id: 'handloom-marks', name: 'Handloom Marks', slug: 'handloom-marks', sourceUrl: `${BASE}/handloom-marks.php`, category: 'infrastructure', tags: ['handloom', 'mark'] },
  { id: 'ficci', name: 'FICCI', slug: 'ficci', sourceUrl: `${BASE}/ficci.php`, category: 'infrastructure', tags: ['ficci', 'industry'] },
  { id: 'agnii', name: 'Accelerating Growth of New India\'s Innovations', slug: 'agnii-logo', sourceUrl: `${BASE}/agnii-logo.php`, category: 'infrastructure', tags: ['agnii', 'innovation'] },
  { id: 'rti-hi', name: 'Right to Information (RTI) Hindi', slug: 'right-to-information-rti-hindi-2', sourceUrl: `${BASE}/right-to-information-rti-hindi-2.php`, category: 'government-body', tags: ['rti', 'information', 'hindi'] },
  { id: 'rti-en', name: 'Right to Information (RTI) English', slug: 'right-to-information-rti-english', sourceUrl: `${BASE}/right-to-information-rti-english.php`, category: 'government-body', tags: ['rti', 'information', 'english'] },
  { id: 'pmay', name: 'Pradhan Mantri Awas Yojana (PMAY)', slug: 'pradhan-mantri-awas-yojna', sourceUrl: 'https://www.ux4g.gov.in/pradhan-mantri-awas-yojna.php', category: 'government-scheme', tags: ['pmay', 'housing'] },
];

export const LOGO_REGISTRY: LogoEntry[] = RAW_LOGO_REGISTRY.map((logo) => ({
  ...logo,
  thumbnailUrl: LOGO_THUMBNAILS[logo.id],
}));
