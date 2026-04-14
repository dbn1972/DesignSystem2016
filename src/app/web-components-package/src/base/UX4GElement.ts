/**
 * UX4GElement
 * Base class for all UX4G Web Components
 * Provides common functionality and utilities
 */

export interface UX4GElementOptions {
  /**
   * Whether the component should use Shadow DOM
   * @default true
   */
  useShadowDOM?: boolean;

  /**
   * CSS styles to inject into the component
   */
  styles?: string;
}

export abstract class UX4GElement extends HTMLElement {
  protected _internals: ElementInternals | null = null;
  protected _root: ShadowRoot | HTMLElement;
  protected _options: UX4GElementOptions;

  constructor(options: UX4GElementOptions = {}) {
    super();

    this._options = {
      useShadowDOM: true,
      ...options,
    };

    // Attach shadow DOM or use light DOM
    if (this._options.useShadowDOM) {
      this._root = this.attachShadow({ mode: 'open' });
    } else {
      this._root = this;
    }

    // Try to attach internals for form participation
    try {
      if ('attachInternals' in this) {
        this._internals = (this as any).attachInternals();
      }
    } catch (e) {
      // attachInternals may fail if element is not form-associated
    }
  }

  /**
   * Get the component's root element (Shadow or Light DOM)
   */
  get root(): ShadowRoot | HTMLElement {
    return this._root;
  }

  /**
   * Utility: Get attribute as boolean
   */
  protected getBooleanAttribute(name: string): boolean {
    return this.hasAttribute(name);
  }

  /**
   * Utility: Set boolean attribute
   */
  protected setBooleanAttribute(name: string, value: boolean): void {
    if (value) {
      this.setAttribute(name, '');
    } else {
      this.removeAttribute(name);
    }
  }

  /**
   * Utility: Get attribute with fallback
   */
  protected getAttributeOrDefault(name: string, defaultValue: string): string {
    return this.getAttribute(name) ?? defaultValue;
  }

  /**
   * Utility: Create element with classes
   */
  protected createElement<K extends keyof HTMLElementTagNameMap>(
    tagName: K,
    classes: string[] = [],
    attributes: Record<string, string> = {}
  ): HTMLElementTagNameMap[K] {
    const element = document.createElement(tagName);
    
    if (classes.length > 0) {
      element.className = classes.join(' ');
    }

    Object.entries(attributes).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });

    return element;
  }

  /**
   * Utility: Inject styles into shadow root
   */
  protected injectStyles(styles: string): void {
    if (this._root instanceof ShadowRoot) {
      const styleElement = document.createElement('style');
      styleElement.textContent = styles;
      this._root.appendChild(styleElement);
    }
  }

  /**
   * Utility: Import UX4G styles from external stylesheet
   */
  protected importUX4GStyles(): void {
    if (this._root instanceof ShadowRoot) {
      // Link to the UX4G styles package
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://cdn.ux4g.gov.in/styles/v1.0.0/ux4g.css';
      this._root.appendChild(link);
    }
  }

  /**
   * Dispatch custom event with detail
   */
  protected dispatchCustomEvent<T = any>(
    eventName: string,
    detail?: T,
    options: Partial<CustomEventInit> = {}
  ): boolean {
    return this.dispatchEvent(
      new CustomEvent(eventName, {
        bubbles: true,
        composed: true,
        detail,
        ...options,
      })
    );
  }

  /**
   * Abstract method: Render the component
   * Must be implemented by subclasses
   */
  protected abstract render(): void;

  /**
   * Lifecycle: Called when element is added to the DOM
   */
  connectedCallback(): void {
    this.render();
  }

  /**
   * Lifecycle: Called when observed attributes change
   */
  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
    if (oldValue !== newValue) {
      this.render();
    }
  }
}

/**
 * Form-associated UX4G element base class
 * For form controls that participate in form submission
 */
export abstract class UX4GFormElement extends UX4GElement {
  static formAssociated = true;

  protected _value: string = '';

  constructor(options?: UX4GElementOptions) {
    super(options);
  }

  /**
   * Get the form control's value
   */
  get value(): string {
    return this._value;
  }

  /**
   * Set the form control's value
   */
  set value(val: string) {
    this._value = val;
    if (this._internals) {
      this._internals.setFormValue(val);
    }
    this.render();
  }

  /**
   * Get the form this element belongs to
   */
  get form(): HTMLFormElement | null {
    return this._internals?.form ?? null;
  }

  /**
   * Get the element's name attribute
   */
  get name(): string {
    return this.getAttribute('name') ?? '';
  }

  /**
   * Get validity state
   */
  get validity(): ValidityState {
    return this._internals?.validity ?? ({} as ValidityState);
  }

  /**
   * Get validation message
   */
  get validationMessage(): string {
    return this._internals?.validationMessage ?? '';
  }

  /**
   * Check validity
   */
  checkValidity(): boolean {
    return this._internals?.checkValidity() ?? true;
  }

  /**
   * Report validity
   */
  reportValidity(): boolean {
    return this._internals?.reportValidity() ?? true;
  }

  /**
   * Set custom validity
   */
  setCustomValidity(message: string): void {
    this._internals?.setValidity({ customError: !!message }, message);
  }

  // Required ElementInternals properties (placeholders)
  readonly labels!: NodeList;
  readonly shadowRoot!: ShadowRoot | null;
  readonly willValidate!: boolean;

  setFormValue(value: File | string | FormData | null, state?: File | string | FormData | null): void {
    this._internals?.setFormValue(value, state);
  }

  setValidity(flags: ValidityStateFlags, message?: string, anchor?: HTMLElement): void {
    this._internals?.setValidity(flags, message, anchor);
  }

  // Aria properties
  ariaAtomic!: string | null;
  ariaAutoComplete!: string | null;
  ariaBusy!: string | null;
  ariaChecked!: string | null;
  ariaColCount!: string | null;
  ariaColIndex!: string | null;
  ariaColSpan!: string | null;
  ariaCurrent!: string | null;
  ariaDisabled!: string | null;
  ariaExpanded!: string | null;
  ariaHasPopup!: string | null;
  ariaHidden!: string | null;
  ariaInvalid!: string | null;
  ariaKeyShortcuts!: string | null;
  ariaLabel!: string | null;
  ariaLevel!: string | null;
  ariaLive!: string | null;
  ariaModal!: string | null;
  ariaMultiLine!: string | null;
  ariaMultiSelectable!: string | null;
  ariaOrientation!: string | null;
  ariaPlaceholder!: string | null;
  ariaPosInSet!: string | null;
  ariaPressed!: string | null;
  ariaReadOnly!: string | null;
  ariaRequired!: string | null;
  ariaRoleDescription!: string | null;
  ariaRowCount!: string | null;
  ariaRowIndex!: string | null;
  ariaRowSpan!: string | null;
  ariaSelected!: string | null;
  ariaSetSize!: string | null;
  ariaSort!: string | null;
  ariaValueMax!: string | null;
  ariaValueMin!: string | null;
  ariaValueNow!: string | null;
  ariaValueText!: string | null;
  role!: string | null;
}
