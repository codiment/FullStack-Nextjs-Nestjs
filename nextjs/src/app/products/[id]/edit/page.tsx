import { ProductForm } from '../../new/product-form';
import { getProduct } from '../../products.api';

export default async function EditProductPage({ 
  params 
}: { 
  params: { id: string } 
}) {
  const product = await getProduct(params.id);
  
  return <ProductForm product={product} />;
}