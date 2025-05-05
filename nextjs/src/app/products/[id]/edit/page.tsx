import { ProductForm } from '../../new/product-form';
import { getProduct } from '../../products.api';

interface Props {
  params: {
    id: string;
  };
}

export default async function EditProductPage({ params }: Props) {
  const product = await getProduct(params.id);
  
  return <ProductForm product={product} />;
}