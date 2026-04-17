/**
 * PaymentGateway Component
 * UPI payment component displaying amount, merchant info, and pay button.
 *
 * @example
 * ```tsx
 * <PaymentGateway amount={500} merchantName="Gov Services" upiId="gov@upi" onSuccess={handleSuccess} />
 * ```
 */

import { forwardRef, useCallback } from 'react';
import { cn } from '../../utils/cn';
import { PaymentGatewayProps } from './PaymentGateway.types';

export const PaymentGateway = forwardRef<HTMLDivElement, PaymentGatewayProps>(
  (
    {
      amount,
      merchantName,
      upiId,
      onSuccess,
      onFailure,
      currency = 'INR',
      className,
      ...props
    },
    ref
  ) => {
    const handlePay = useCallback(() => {
      try {
        onSuccess?.();
      } catch {
        onFailure?.('Payment failed');
      }
    }, [onSuccess, onFailure]);

    const formattedAmount = new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency,
    }).format(amount);

    return (
      <div
        ref={ref}
        className={cn('ux4g-payment-gateway border rounded-lg p-6 max-w-sm', className)}
        {...props}
      >
        <div className="ux4g-payment-gateway-header text-center mb-4">
          <p className="ux4g-payment-gateway-merchant text-sm text-muted-foreground">
            Pay to
          </p>
          <p className="text-lg font-semibold text-foreground">{merchantName}</p>
        </div>

        <div className="ux4g-payment-gateway-amount text-center mb-4">
          <p className="text-3xl font-bold text-foreground">{formattedAmount}</p>
        </div>

        <div className="ux4g-payment-gateway-upi text-center mb-6">
          <p className="text-sm text-muted-foreground">UPI ID</p>
          <p className="text-sm font-mono text-foreground">{upiId}</p>
        </div>

        <button
          type="button"
          onClick={handlePay}
          className={cn(
            'ux4g-payment-gateway-pay-btn',
            'w-full py-3 px-4 rounded-md text-sm font-medium',
            'bg-primary text-primary-foreground',
            'hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary'
          )}
        >
          Pay {formattedAmount}
        </button>
      </div>
    );
  }
);

PaymentGateway.displayName = 'PaymentGateway';
