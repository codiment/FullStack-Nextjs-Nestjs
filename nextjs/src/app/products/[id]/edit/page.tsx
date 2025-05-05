import { ProductForm } from '../../new/product-form';
import { getProduct } from '../../products.api';

interface Params {
  id: string;
}

export default async function EditProductPage({ params }: { params: Params }) {
  const product = await getProduct(params.id);
  
  return <ProductForm product={product} />;
}