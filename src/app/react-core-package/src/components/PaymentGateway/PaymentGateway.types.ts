import { BaseComponentProps } from '../../types/common';

export interface PaymentGatewayProps extends BaseComponentProps {
  /** Payment amount */
  amount: number;

  /** Merchant display name */
  merchantName: string;

  /** UPI ID for payment */
  upiId: string;

  /** Called on successful payment */
  onSuccess?: () => void;

  /** Called on payment failure */
  onFailure?: (error: string) => void;

  /** Currency code */
  currency?: string;
}
