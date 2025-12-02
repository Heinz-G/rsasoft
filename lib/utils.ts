import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Detect if user is from Africa based on timezone
export function isAfricanTimezone(): boolean {
  if (typeof window === 'undefined') return true; // SSR default to Africa
  
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const africanTimezones = [
    'Africa/',
    'Indian/Mauritius',
    'Indian/Reunion',
    'Indian/Mayotte',
    'Indian/Comoro',
  ];
  
  return africanTimezones.some(tz => timezone.startsWith(tz));
}

// Get pricing based on region
export function getRegionalPricing() {
  const isAfrican = isAfricanTimezone();
  
  return {
    currency: isAfrican ? 'R' : '$',
    currencyCode: isAfrican ? 'ZAR' : 'USD',
    dashboard: {
      min: isAfrican ? 15000 : 2500,
      max: isAfrican ? 75000 : 12500,
    },
    integration: {
      min: isAfrican ? 50000 : 8000,
      max: isAfrican ? 250000 : 40000,
    },
    automation: {
      min: isAfrican ? 25000 : 4000,
      max: isAfrican ? 150000 : 25000,
    },
  };
}

// Format number with currency
export function formatCurrency(amount: number, currency: string = 'R'): string {
  if (currency === '$') {
    return `$${amount.toLocaleString()}`;
  }
  return `R${amount.toLocaleString()}`;
}

// Format date for display
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-ZA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}
