
import { Card, CardContent} from "@/components/ui/card";
import { ProductForm } from "./product-form";
import { getProduct } from "../products.api";

interface Props {
    params: {
        id?: string
    }
}

async function ProductsNewPage({ params } : Props ) {
    // Usar await en params antes de acceder a sus propiedades
    const paramsData = await params;
    const product = paramsData.id ? await getProduct(paramsData.id) : null;
    console.log(product);

    return (
        <div className="h-screen flex justify-center items-center">
            <Card>
                <CardContent>
                    <ProductForm product={product}/>
                </CardContent>
            </Card>
        </div>
    )
}

export default ProductsNewPage;