"use client";

import { useTranslations } from "next-intl";

type Props = {
  error: Error;
  reset: () => void;
};
export default function Error({ error, reset }: Props) {
  const t = useTranslations("Buttons");
  console.log(error);

  return <div>error</div>;
}
