import { Card, CardContent } from "@/components/ui/card";
import { ProductForm } from "../../new/product-form";
import { getProduct } from "../../products.api";

interface Props {
  params: {
    id: string
  }
}

async function EditProductPage({ params }: Props) {
  // Usar el mismo enfoque que en otras páginas
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

export default EditProductPage;