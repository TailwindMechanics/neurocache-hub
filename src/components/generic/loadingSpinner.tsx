//path: src\components\generic\loadingSpinner.tsx

export function LoadingSpinner() {
  return <>
    <div className="flex items-center justify-center h-screen w-screen bg-background">
      <div className="loading loading-ring loading-lg text-primary text-opacity-50"></div>
    </div>
    </>
}