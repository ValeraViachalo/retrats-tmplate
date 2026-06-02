import Image from "next/image";

export function Logo({ ...rest }) {
  return (
    <Image
      src="/assets/logo.svg"
      alt="logo"
      width={103}
      height={40}
      style={{ objectFit: "contain" }}
      priority
      {...rest}
    />
  );
}
