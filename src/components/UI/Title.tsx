import { useTranslations } from "next-intl";
import React from "react";

export default function Title() {
  const t = useTranslations("Global");
  return (
    <div>
      <h1>{t("hello")}</h1>
    </div>
  );
}
