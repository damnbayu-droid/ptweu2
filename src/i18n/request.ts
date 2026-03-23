import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale: explicitLocale, requestLocale }) => {
  // Use explicit locale if provided (e.g. from layout opts), fallback to request segments
  let locale = explicitLocale || (await requestLocale);
  if (!locale) locale = "en";
  
  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
})
