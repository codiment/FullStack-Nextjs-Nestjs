import { Card, CardContent } from "@/components/ui/card";
import { getProduct } from "../products.api";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const product = await getProduct(id);

  return (
    <div className="flex justify-center items-center h-screen">
      <Card>
        <CardContent>
          <Image 
            src={product.image} 
            alt={product.name || "Imagen del producto"} 
            width={500} 
            height={300}
            style={{ objectFit: 'contain' }}
          />
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <p>{product.description}</p>
          <span className="text-sm font-bold text-gray-500">
            $ {product.price}
          </span>
          <div className="flex justify-end">
            <Link href='/' className={buttonVariants()}>
              Go back
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}