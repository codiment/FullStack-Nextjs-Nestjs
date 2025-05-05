'use client'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { deleteProduct } from "@/app/products/products.api";
import { useRouter } from "next/navigation";

export function ProductCard({ product }: any) {

    const router = useRouter()

    async function handleRemoveProduct(id: string) {
        console.log(id)
        await deleteProduct(id)
        router.refresh()
    }

    return (
        <Card key={product.id} onClick={() => {
            router.push(`/products/${product.id}`)
        }}>
            <CardHeader>
                <CardTitle className="flex justify-between">
                    {product.name}
                    <span className="text-sm font-bold text-gray-500">
                        {product.price}
                    </span>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <img src={product.image} alt="" />
                <p>{product.description}</p>
                <CardFooter className="flex justify-between">
                    <Button className="mt-5 cursor-pointer" onClick={(e) => {
                        e.stopPropagation()
                        router.push(`/products/${product.id}/edit`)
                    }}>
                        Edit
                    </Button>
                    <Button className="mt-5 cursor-pointer" variant='destructive' onClick={(e) => {
                        e.stopPropagation()
                        handleRemoveProduct(product.id)
                    }}>
                        Delete
                    </Button>
                </CardFooter>
            </CardContent>
        </Card>
    )
}