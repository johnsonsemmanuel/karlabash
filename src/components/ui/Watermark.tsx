import { currentUser } from '@/data/mockData';

interface WatermarkProps {
  text?: string;
  enabled?: boolean;
}

export default function Watermark({ text, enabled = true }: WatermarkProps) {
  if (!enabled) return null;

  const watermarkContent = text || `${currentUser.name} • ${currentUser.email}`;

  const rows = 12;
  const cols = 6;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-50 overflow-hidden"
      aria-hidden="true"
    >
      <div
        className="absolute inset-0"
        style={{
          transform: 'rotate(-35deg)',
          transformOrigin: 'center center',
          width: '200%',
          height: '200%',
          top: '-50%',
          left: '-50%',
        }}
      >
        {Array.from({ length: rows }).map((_, row) => (
          <div key={row} className="flex whitespace-nowrap" style={{ marginBottom: '80px' }}>
            {Array.from({ length: cols }).map((_, col) => (
              <span
                key={col}
                className="text-xs text-ink/[0.03] font-medium mr-16 select-none"
                style={{ minWidth: '300px' }}
              >
                {watermarkContent}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
