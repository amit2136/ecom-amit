import Pdp from "../../../components/Pdp";

export default function Page(params: { productId: any; } ) {
  const { productId } = params;

  console.log("productid", productId);

  return (
    <div>
      <Pdp productId={productId} />
    </div>
  );
}
