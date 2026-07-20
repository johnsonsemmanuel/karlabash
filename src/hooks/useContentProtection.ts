import { useEffect, useRef } from 'react';

interface ContentProtectionOptions {
  enabled?: boolean;
  watermarkText?: string;
  userName?: string;
  userEmail?: string;
  onViolation?: (type: string) => void;
}

interface ContentProtectionResult {
  containerRef: React.RefObject<HTMLDivElement | null>;
  protectedStyle: React.CSSProperties;
}

export function useContentProtection(options: ContentProtectionOptions = {}): ContentProtectionResult {
  const {
    enabled = true,
    onViolation,
  } = options;

  const containerRef = useRef<HTMLDivElement>(null);

  const protectedStyle: React.CSSProperties = enabled ? {
    userSelect: 'none',
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    msUserSelect: 'none',
  } : {};

  useEffect(() => {
    if (!enabled) return;

    const handleContextMenu = (e: Event) => {
      e.preventDefault();
      onViolation?.('right-click');
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault();
        onViolation?.('print');
        return;
      }
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        onViolation?.('save');
        return;
      }
      if ((e.ctrlKey || e.metaKey) && e.key === 'u') {
        e.preventDefault();
        onViolation?.('view-source');
        return;
      }
      if (e.key === 'F12') {
        e.preventDefault();
        onViolation?.('devtools');
        return;
      }
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'I') {
        e.preventDefault();
        onViolation?.('devtools');
        return;
      }
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'J') {
        e.preventDefault();
        onViolation?.('console');
        return;
      }
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'C') {
        e.preventDefault();
        onViolation?.('inspect');
        return;
      }
      if (e.key === 'PrintScreen') {
        onViolation?.('screenshot');
        return;
      }
    };

    const handleDragStart = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'IMG') {
        e.preventDefault();
      }
    };

    const printStyle = document.createElement('style');
    printStyle.id = 'karlabash-print-protect';
    printStyle.textContent = `
      @media print {
        body * { visibility: hidden !important; }
        body::after {
          content: 'This content is protected and cannot be printed.' !important;
          visibility: visible !important;
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 24px;
          color: #333;
        }
      }
    `;
    document.head.appendChild(printStyle);

    const frameMeta = document.createElement('meta');
    frameMeta.httpEquiv = 'X-Frame-Options';
    frameMeta.content = 'DENY';
    document.head.appendChild(frameMeta);

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('dragstart', handleDragStart);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('dragstart', handleDragStart);
      printStyle.remove();
      frameMeta.remove();
    };
  }, [enabled, onViolation]);

  return { containerRef, protectedStyle };
}
