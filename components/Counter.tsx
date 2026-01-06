type CounterSize = 'sm' | 'md' | 'lg';
type CounterColor =
  | 'primary'
  | 'accent'
  | 'secondary'
  | 'destructive'
  | 'muted';

interface CounterProps {
  currency?: string;
  amount?: number;
  size?: CounterSize;
  bgColor?: string;
  digitColor?: CounterColor;
  currencyColor?: CounterColor;
}

export default function Counter({
  currency = 'RM',
  amount = 0,
  size = 'md',
  bgColor = 'bg-primary-900',
  digitColor = 'accent',
  currencyColor = 'accent',
}: CounterProps) {
  /* ----------------------------------------
   * Formatting
   * -------------------------------------- */
  const digits = amount.toLocaleString('en-US').split('');

  /* ----------------------------------------
   * Size configuration
   * -------------------------------------- */
  const sizeConfig: Record<
    CounterSize,
    {
      fontSize: string;
      containerPadding: string;
      currencyPadding: string;
      digitPadding: string;
    }
  > = {
    sm: {
      fontSize: 'text-h5',
      containerPadding: 'px-1.5 py-[1.78px]',
      currencyPadding: 'px-2 py-[1.78px]',
      digitPadding: 'px-2 py-[1.78px]',
    },
    md: {
      fontSize: 'text-h4',
      containerPadding: 'px-1.5 py-px',
      currencyPadding: 'xl:px-2 md:px-0 px-px py-[1.78px]',
      digitPadding: 'xl:px-2 md:px-[3px] px-1.5 py-[1.78px]',
    },
    lg: {
      fontSize: 'text-h3',
      containerPadding: 'px-1.5 py-1',
      currencyPadding: 'px-3 py-1',
      digitPadding: 'px-2 py-1',
    },
  };

  /* ----------------------------------------
   * Color mapping
   * -------------------------------------- */
  const colorMap: Record<CounterColor, string> = {
    primary: 'text-primary-500',
    accent: 'text-accent-500',
    secondary: 'text-secondary-500',
    destructive: 'text-destructive-500',
    muted: 'text-muted-500',
  };

  const currentSize = sizeConfig[size];

  /* ----------------------------------------
   * Class composition (order-safe)
   * -------------------------------------- */
  const containerClasses = `
    ${bgColor}
    flex items-center justify-center
    rounded-lg
    font-body font-bold
    w-fit
    ${currentSize.containerPadding}
  `;

  const currencyClasses = `
    ${currentSize.currencyPadding}
    ${currentSize.fontSize}
    ${colorMap[currencyColor]}
    font-body font-bold
    text-right
  `;

  const digitClasses = `
    ${currentSize.fontSize}
    ${currentSize.digitPadding}
    ${colorMap[digitColor]}
    font-body font-bold
    text-center
  `;

  /* ----------------------------------------
   * Render
   * -------------------------------------- */
  return (
    <div className={containerClasses}>
      {/* Currency */}
      <span className={currencyClasses}>{currency}</span>

      {/* Digits */}
      <div className="flex">
        {digits.map((char, index) => {
          const isSeparator = char === ',';

          return (
            <span
              key={index}
              className={
                isSeparator
                  ? `${currentSize.fontSize} px-1 opacity-60 text-center`
                  : digitClasses
              }
            >
              {char}
            </span>
          );
        })}
      </div>
    </div>
  );
}
