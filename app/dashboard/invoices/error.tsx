'use client'
import { useEffect, useState } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const [errorDetail, setErrorDetail] = useState<Error | undefined>(undefined)

  useEffect(() => {
    console.log(error)
    setErrorDetail(error)
  }, [error])

  return (
    <main className="flex h-full flex-col items-center justify-center">
      <h2 className="text-center">Somfething went wrong!</h2>
      {/* 詳細を表示するならこんな感じで出来る */}
      {errorDetail && <p>{errorDetail.toString()}</p>}
      <button
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
        onClick={
          // Attempt to recover by trying to re-render the invoices route
          () => reset()
        }
      >
        Try again
      </button>
    </main>
  )
}
