import { Card, CardContent } from "@/components/ui/card";
import { ProductForm } from "./product-form";
import { getProduct } from "../products.api";

export default async function ProductsNewPage({ params }: any) {
  const product = params?.id ? await getProduct(params.id) : null;

  return (
    <div className="h-screen flex justify-center items-center">
      <Card>
        <CardContent>
          <ProductForm product={product} />
        </CardContent>
      </Card>
    </div>
  );
}