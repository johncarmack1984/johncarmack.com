"use client";

import React from "react";
import { useTheme } from "next-themes";

export default function useSunHidden() {
  const { resolvedTheme: theme, setTheme } = useTheme();
  const [sunHidden, setSunHidden] = React.useState(false);
  React.useEffect(() => {
    setSunHidden(theme !== "light");
  }, [theme]);
  return { sunHidden, setTheme };
}
