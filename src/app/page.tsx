// This is the new root page at src/app/page.tsx
// It redirects to the default locale.
import { redirect } from 'next/navigation';
import { defaultLocale } from '../i18n';

export default function RootPage() {
  redirect(`/${defaultLocale}`);
}
