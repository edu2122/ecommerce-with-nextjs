import { Card, CardContent, CardFooter, CardHeader } from './ui/card'
import { Skeleton } from './ui/skeleton'

export function CartItemSkeleton() {
  return (
    <Card className="bg-gray-200 dark:bg-white/5">
      <CardContent className="p-4 flex items-center space-x-4">
        <Skeleton className="w-20 h-20 rounded-md" />
        <div className="flex-grow space-y-2">
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-4 w-1/3" />
        </div>
        <div className="flex items-center space-x-2">
          <Skeleton className="h-8 w-8 rounded-md" />
          <Skeleton className="h-8 w-8" />
          <Skeleton className="h-8 w-8 rounded-md" />
        </div>
        <Skeleton className="h-8 w-8 rounded-full" />
      </CardContent>
    </Card>
  )
}

export function OrderSummarySkeleton() {
  return (
    <Card className="bg-gray-200 dark:bg-white/5">
      <CardHeader>
        <Skeleton className="h-6 w-1/2" />
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between">
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-4 w-1/4" />
        </div>
        <div className="flex justify-between">
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-4 w-1/4" />
        </div>
        <div className="flex justify-between">
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-4 w-1/4" />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col space-y-2">
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
      </CardFooter>
    </Card>
  )
}

export function RecommendedProductSkeleton() {
  return (
    <div className="flex-none w-64">
      <Skeleton className="aspect-w-1 aspect-h-1 mb-4 rounded-lg" />
      <Skeleton className="h-4 w-3/4 mb-2" />
      <Skeleton className="h-4 w-1/2 mb-2" />
      <Skeleton className="h-10 w-full" />
    </div>
  )
}
