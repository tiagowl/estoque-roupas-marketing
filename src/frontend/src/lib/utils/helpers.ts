/**
 * Formata CEP removendo caracteres não numéricos
 */
export function formatCEP(cep: string): string {
  return cep.replace(/\D/g, '');
}

/**
 * Valida formato de CEP (8 dígitos)
 */
export function isValidCEP(cep: string): boolean {
  const cleanCEP = formatCEP(cep);
  return cleanCEP.length === 8;
}

/**
 * Formata CEP com hífen (01310-100)
 */
export function formatCEPWithDash(cep: string): string {
  const cleanCEP = formatCEP(cep);
  if (cleanCEP.length === 8) {
    return `${cleanCEP.slice(0, 5)}-${cleanCEP.slice(5)}`;
  }
  return cleanCEP;
}

/**
 * Debounce function
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };

    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
  };
}

