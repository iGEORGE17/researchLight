"use client";

import { useState, type KeyboardEvent } from "react";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";

type ProcessStep = {
  step: string;
  title: string;
  body: string;
};

export function ProcessSlideshow({ steps }: { steps: ProcessStep[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");
  const activeStep = steps[activeIndex];

  if (!activeStep) return null;

  const goTo = (nextIndex: number) => {
    if (nextIndex < 0 || nextIndex >= steps.length || nextIndex === activeIndex) return;
    setDirection(nextIndex > activeIndex ? "forward" : "backward");
    setActiveIndex(nextIndex);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(activeIndex - 1);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goTo(activeIndex + 1);
    }
  };

  return (
    <div
      className="mt-12 overflow-hidden rounded-lg border border-border bg-card shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      role="region"
      aria-roledescription="carousel"
      aria-label="Research process"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <div className="grid grid-cols-7 gap-1 bg-muted p-1" aria-hidden="true">
        {steps.map((step, index) => (
          <span
            key={step.step}
            className={`h-1 rounded-full transition-colors duration-300 ${
              index <= activeIndex ? "bg-gold" : "bg-border"
            }`}
          />
        ))}
      </div>

      <div className="grid min-h-[26rem] lg:grid-cols-[0.9fr_1.6fr]">
        <div className="flex flex-col justify-between bg-primary-deep p-6 text-primary-foreground sm:p-9">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold">
              Your research journey
            </p>
            <p className="mt-6 font-display text-7xl font-semibold leading-none text-primary-foreground/15 sm:text-8xl">
              {activeStep.step}
            </p>
          </div>

          <div className="mt-10">
            <p className="text-sm text-primary-foreground/70" aria-live="polite">
              Step {activeIndex + 1} of {steps.length}
            </p>
            <div className="mt-4 flex gap-2">
              <button
                type="button"
                onClick={() => goTo(activeIndex - 1)}
                disabled={activeIndex === 0}
                aria-label="Previous step"
                title="Previous step"
                className="inline-flex size-10 items-center justify-center rounded-md border border-primary-foreground/30 text-primary-foreground transition-colors hover:bg-primary-foreground/10 disabled:pointer-events-none disabled:opacity-50"
              >
                <HiOutlineArrowLeft className="size-4" />
              </button>
              <button
                type="button"
                onClick={() => goTo(activeIndex + 1)}
                disabled={activeIndex === steps.length - 1}
                aria-label="Next step"
                title="Next step"
                className="inline-flex size-10 items-center justify-center rounded-md bg-gold text-accent-foreground transition-colors hover:bg-gold/90 disabled:pointer-events-none disabled:opacity-50"
              >
                <HiOutlineArrowRight className="size-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between p-6 sm:p-9 lg:p-12">
          <div
            key={activeStep.step}
            className={`max-w-xl motion-reduce:animate-none ${
              direction === "forward" ? "animate-process-forward" : "animate-process-backward"
            }`}
            aria-live="polite"
            aria-atomic="true"
          >
            <span className="inline-flex size-10 items-center justify-center rounded-full bg-gold-soft text-xs font-bold text-primary">
              {activeStep.step}
            </span>
            <h3 className="mt-6 text-3xl sm:text-4xl">{activeStep.title}</h3>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {activeStep.body}
            </p>
          </div>

          <div className="mt-12 border-t border-border pt-6">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
              Select a step
            </p>
            <div className="flex flex-wrap gap-2">
              {steps.map((step, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={step.step}
                    type="button"
                    onClick={() => goTo(index)}
                    aria-label={`Go to step ${index + 1}: ${step.title}`}
                    aria-current={isActive ? "step" : undefined}
                    className={`inline-flex size-10 items-center justify-center rounded-full text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "border border-border bg-background text-foreground hover:bg-muted"
                    }`}
                  >
                    {index + 1}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}