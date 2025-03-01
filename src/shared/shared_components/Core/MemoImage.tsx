import React, { useMemo  } from "react";

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

const MemoImage = React.forwardRef<HTMLImageElement, ImageProps>(({ src, alt, className }, ref) => {
  const memoizedImage = useMemo(() => src, [src]);
  return <img src={memoizedImage} alt={alt} className={className} ref={ref} loading="lazy"/>;
});

export default MemoImage;