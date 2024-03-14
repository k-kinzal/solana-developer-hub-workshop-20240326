import { useMemo } from "react";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
  useMediaQuery,
} from "@mui/material";
import { themes } from "../theme";

/**
 * ThemeProvider component
 * テーマを提供するコンポーネント
 *
 * @param {Object} props - コンポーネントのプロパティ
 * @param {string} [props.scheme] - 使用するカラースキーム（"light" または "dark"）
 * @param {React.ReactNode} props.children - 子要素
 * @returns {JSX.Element} - MuiThemeProviderでラップされた子要素
 */
export function ThemeProvider({ scheme, children }) {
  // ユーザーのデバイスがダークモードを優先するかどうかを判定
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  // 指定されたスキームまたはデバイスの設定に基づいてテーマを作成
  const theme = useMemo(
    () => createTheme(themes[scheme || (prefersDarkMode ? "dark" : "light")]),
    [scheme, prefersDarkMode],
  );

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}
