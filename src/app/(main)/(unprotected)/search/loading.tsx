export default function SearchResultLoading() {
  return (
    <section id="search-results" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Title tetep ada */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Search Results
          </h2>
        </div>

        {/* Skeleton cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="animate-pulse rounded-2xl p-6 space-y-5 bg-slate-200 bg-muted/40 dark:bg-muted/20"
            >
              {/* Train name */}
              <div className="h-5 w-3/4 rounded-lg bg-muted/70 dark:bg-muted/40" />

              {/* Route */}
              <div className="flex justify-between gap-4">
                <div className="h-4 flex-1 rounded bg-muted/70 dark:bg-muted/40" />
                <div className="h-4 flex-1 rounded bg-muted/70 dark:bg-muted/40" />
              </div>

              {/* Time */}
              <div className="flex justify-between gap-4">
                <div className="h-4 w-24 rounded bg-muted/70 dark:bg-muted/40" />
                <div className="h-4 w-24 rounded bg-muted/70 dark:bg-muted/40" />
              </div>

              {/* Duration */}
              <div className="h-3 w-16 rounded bg-muted/70 dark:bg-muted/40" />

              {/* Price */}
              <div className="h-7 w-32 rounded-xl bg-muted/70 dark:bg-muted/40 mt-4" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
