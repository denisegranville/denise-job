'use client';

import {useEffect} from 'react';

export default function Error({
                                error,
                                reset,
                              }: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="">
      <h2 className="">Something went wrong!</h2>
      <button className=""
              onClick={
                () => reset()
              }
      >
        Try again
      </button>
    </main>
  );
}
