import { Card, CardContent } from "@/components/ui/card";
import { ProductForm } from "../../new/product-form";
import { getProduct } from "../../products.api";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const product = await getProduct(id);

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