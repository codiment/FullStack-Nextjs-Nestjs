import { Card, CardContent } from "@/components/ui/card";
import { ProductForm } from "../../new/product-form";
import { getProduct } from "../../products.api";

export default async function EditProductPage({ 
  params 
}: { 
  params: { id: string } 
}) {
  const product = await getProduct(params.id);
  
  return (
    <div className="h-screen flex justify-center items-center">
      <Card>
        <CardContent>
          <ProductForm product={product}/>
        </CardContent>
      </Card>
    </div>
  );
}