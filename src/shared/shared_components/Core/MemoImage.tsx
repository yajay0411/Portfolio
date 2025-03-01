import React, { memo } from "react";

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

const MemoImage = memo(
  React.forwardRef<HTMLImageElement, ImageProps>(({ src, alt, className }, ref) => {
    return <img src={src} alt={alt} className={className} ref={ref} loading="lazy"/>;
  })
);

export default MemoImage;

// const MemoImage = React.forwardRef<HTMLImageElement, ImageProps>(({ src, alt, className }, ref) => {
//   return <img src={src} alt={alt} className={className} ref={ref} />;
// });

// const areEqual = (prevProps: ImageProps, nextProps: ImageProps) => {
//   return prevProps.src === nextProps.src && prevProps.alt === nextProps.alt;
// };

// export default React.memo(MemoImage, areEqual);