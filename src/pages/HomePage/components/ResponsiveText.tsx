interface ResponsiveTextProps {
  text: string;
  breakPoint?: string;
  className?: string;
}

export default function ResponsiveText({
  text,
  breakPoint = '<br />',
  className,
}: ResponsiveTextProps) {
  const parts = text.split(breakPoint);

  return (
    <p className={className}>
      {parts.map((part, index) => (
        <>
          {part}
          {index < parts.length - 1 && (
            <span className="hidden sm:inline">
              <br />
            </span>
          )}
        </>
      ))}
    </p>
  );
}
