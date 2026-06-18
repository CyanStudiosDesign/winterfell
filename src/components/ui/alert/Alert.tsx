// app/components/ui/Alert.tsx
import React from 'react';
import { CheckCircle2, AlertTriangle, XCircle, Info, X } from 'lucide-react';

export type AlertSeverity = 'success' | 'info' | 'warning' | 'error';
export type AlertVariant = 'subtle' | 'solid' | 'outline';

interface AlertProps {
  severity?: AlertSeverity;
  variant?: AlertVariant;
  title: string;
  description: string;
  onClose?: () => void;
}

// 1. Fixed Configuration Map: Maps directly to your exact CSS theme variables
const severityConfig = {
  success: { Icon: CheckCircle2, iconColor: 'text-success' },
  info: { Icon: Info, iconColor: 'text-info' },
  warning: { Icon: AlertTriangle, iconColor: 'text-warning' },
  error: { Icon: XCircle, iconColor: 'text-danger' }, 
};

// 2. Structural lookups utilizing your exact Tailwind CSS v4 variables
const variantStyles: Record<AlertVariant, Record<AlertSeverity, string>> = {
  subtle: {
    success: "bg-success-subtle border-success/30 text-success-strong",
    info: "bg-info-subtle border-info/30 text-info-strong",
    warning: "bg-warning-subtle border-warning/30 text-warning-strong",
    error: "bg-danger-subtle border-danger/30 text-danger-strong", 
  },
  solid: {
    success: "bg-success border-success text-fg-inverse",
    info: "bg-info border-info text-fg-inverse",
    warning: "bg-warning border-warning text-zinc-950", 
    error: "bg-danger border-danger text-fg-inverse",
  },
  outline: {
    success: "bg-transparent border-2 border-success text-success",
    info: "bg-transparent border-2 border-info text-info",
    warning: "bg-transparent border-2 border-warning text-warning",
    error: "bg-transparent border-2 border-danger text-danger",
  },
};

// 3. Sub-text description configurations optimized to match your theme guidelines
const secondaryTextStyles: Record<AlertVariant, Record<AlertSeverity, string>> = {
  subtle: {
    success: "text-success-strong/80",
    info: "text-info-strong/80",
    warning: "text-warning-strong/80",
    error: "text-danger-strong/80",
  },
  solid: {
    success: "text-fg-inverse/80",
    info: "text-fg-inverse/80",
    warning: "text-zinc-900/70",
    error: "text-fg-inverse/80",
  },
  outline: {
    success: "text-success/90",
    info: "text-info/90",
    warning: "text-warning/90",
    error: "text-danger/90",
  },
};

export default function Alert({
  severity = 'warning',
  variant = 'subtle',
  title,
  description,
  onClose
}: AlertProps) {
  const { Icon, iconColor } = severityConfig[severity];
  const combinedClasses = variantStyles[variant][severity];
  const secondaryColorClass = secondaryTextStyles[variant][severity];

  // Dynamic Icon Color Rule: Force white icons on solid variant backgrounds
  const activeIconColor = variant === 'solid' ? 'text-fg-inverse' : iconColor;

  return (
    <div 
      className={`w-full sm:w-max max-w-full sm:max-w-100 flex items-center border p-3 gap-3 rounded-lg shadow-sm backdrop-blur-sm transition-all duration-200 ${combinedClasses}`}
      role="alert"
    >
      {/* 1. Icon */}
      <div className="shrink-0 flex items-center justify-center">
        <Icon className={`h-5 w-5 ${activeIconColor}`} />
      </div>

      {/* 2. Text Content */}
      <div className="flex-1 min-w-0">
        <div className="text-sm font-normal tracking-wide leading-tight wrap-break-words">
          {title}
        </div>
        <div className={`text-xs mt-0.5 font-medium wrap-break-words ${secondaryColorClass}`}>
          {description}
        </div>
      </div>

      {/* 3. Close Button Cell */}
      {onClose && (
        <div className="shrink-0 flex items-center justify-center">
          <button
            onClick={onClose}
            className="transition-all p-1 focus-ring-visible rounded-md opacity-70 hover:opacity-100 cursor-pointer"
            aria-label="Close alert"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  );
}