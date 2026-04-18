import { Link, Navigate, useParams } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { LOGO_REGISTRY } from '../content/logo-data';
import { LogoDetailView } from './logoResourcesShared';

export default function LogoResourceDetail() {
  const { id } = useParams();
  const logo = LOGO_REGISTRY.find((entry) => entry.id === id);

  if (!id || !logo) {
    return <Navigate to="/resources/logos" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <Link
            to="/resources/logos"
            className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
          >
            <ArrowLeft size={16} />
            Back to logo library
          </Link>
          <div className="mt-6 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Logo asset detail</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {logo.name}
            </h1>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Review implementation-ready files, preview the mark across approved surfaces, and verify local mirror readiness before use.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <LogoDetailView logo={logo} />
      </section>
    </div>
  );
}
