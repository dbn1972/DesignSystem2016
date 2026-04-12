import { Component, Input, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Footer column interface
 */
export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

/**
 * Footer link interface
 */
export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

/**
 * Social link interface
 */
export interface SocialLink {
  platform: 'twitter' | 'facebook' | 'linkedin' | 'youtube';
  url: string;
  ariaLabel: string;
}

/**
 * Footer Component
 *
 * Page footer with multi-column links, copyright, social media, and government compliance info.
 * Designed for government and enterprise applications with full accessibility support.
 *
 * @example
 * <ux4g-footer
 *   [columns]="footerColumns"
 *   [copyright]="'© 2026 U.S. Department of Example'"
 *   [socialLinks]="socialLinks"
 *   [disclaimer]="'This is an official U.S. Government website.'"
 *   variant="government">
 * </ux4g-footer>
 *
 * @example Government Portal Use Case
 * <ux4g-footer
 *   [columns]="[
 *     {
 *       title: 'About',
 *       links: [
 *         { label: 'About Us', href: '/about' },
 *         { label: 'Contact', href: '/contact' },
 *         { label: 'Careers', href: '/careers' }
 *       ]
 *     },
 *     {
 *       title: 'Resources',
 *       links: [
 *         { label: 'Documentation', href: '/docs' },
 *         { label: 'FAQ', href: '/faq' },
 *         { label: 'Support', href: '/support' }
 *       ]
 *     }
 *   ]"
 *   [copyright]="'© 2026 Federal Agency. All rights reserved.'"
 *   [disclaimer]="'This is an official U.S. Government website. Information is provided as a public service.'"
 *   variant="government">
 * </ux4g-footer>
 */
@Component({
  selector: 'ux4g-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer
      class="ux4g-footer"
      [class.ux4g-footer--government]="variant === 'government'"
      role="contentinfo">
      <div class="ux4g-footer__container">
        <!-- Footer Columns -->
        @if (columns && columns.length > 0) {
          <div class="ux4g-footer__columns">
            @for (column of columns; track column.title) {
              <div class="ux4g-footer__column">
                <h3 class="ux4g-footer__column-title">{{ column.title }}</h3>
                <ul class="ux4g-footer__link-list" role="list">
                  @for (link of column.links; track link.href) {
                    <li class="ux4g-footer__link-item">
                      <a
                        [href]="link.href"
                        [target]="link.external ? '_blank' : '_self'"
                        [rel]="link.external ? 'noopener noreferrer' : null"
                        class="ux4g-footer__link">
                        {{ link.label }}
                        @if (link.external) {
                          <span class="ux4g-footer__external-icon" aria-hidden="true">↗</span>
                          <span class="sr-only">(opens in new window)</span>
                        }
                      </a>
                    </li>
                  }
                </ul>
              </div>
            }
          </div>
        }

        <!-- Copyright & Social -->
        <div class="ux4g-footer__bottom">
          @if (copyright) {
            <p class="ux4g-footer__copyright">{{ copyright }}</p>
          }

          @if (socialLinks && socialLinks.length > 0) {
            <div class="ux4g-footer__social" role="navigation" aria-label="Social media links">
              @for (social of socialLinks; track social.platform) {
                <a
                  [href]="social.url"
                  [aria-label]="social.ariaLabel"
                  class="ux4g-footer__social-link"
                  target="_blank"
                  rel="noopener noreferrer">
                  <span class="ux4g-footer__social-icon" aria-hidden="true">
                    {{ getSocialIcon(social.platform) }}
                  </span>
                </a>
              }
            </div>
          }
        </div>

        <!-- Disclaimer -->
        @if (disclaimer) {
          <div class="ux4g-footer__disclaimer">
            <p>{{ disclaimer }}</p>
          </div>
        }
      </div>
    </footer>
  `,
  styleUrls: ['./footer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent {
  /** Footer link columns */
  @Input() columns: FooterColumn[] = [];

  /** Copyright text */
  @Input() copyright: string = '';

  /** Social media links */
  @Input() socialLinks: SocialLink[] = [];

  /** Government disclaimer or compliance text */
  @Input() disclaimer: string = '';

  /** Visual variant */
  @Input() variant: 'default' | 'government' = 'default';

  /**
   * Get social media icon by platform
   */
  getSocialIcon(platform: string): string {
    const icons: Record<string, string> = {
      twitter: '🐦',
      facebook: '📘',
      linkedin: '💼',
      youtube: '📺'
    };
    return icons[platform] || '🔗';
  }
}
