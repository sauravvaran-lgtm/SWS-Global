import Image from "next/image";

/** The SWS Global logo exactly as supplied (public/images/logo/sws-logo-master.png, 481×666). */
export const LOGO = { src: "/images/logo/sws-logo-master.png", width: 481, height: 666 } as const;

type Props = {
  className?: string;
  eager?: boolean;
  sizes?: string;
};

/** Renders the original logo artwork unchanged. Size it with a height or width class. */
export function Logo({ className = "", eager = false, sizes = "200px" }: Props) {
  return (
    <Image
      src={LOGO.src}
      alt="SWS Global — Powering businesses beyond boundaries"
      width={LOGO.width}
      height={LOGO.height}
      loading={eager ? "eager" : "lazy"}
      sizes={sizes}
      className={className}
    />
  );
}
