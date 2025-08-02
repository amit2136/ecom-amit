import Pdp from "../../../components/Pdp";

interface PageProps {
  params: {
    productId: string;
  };
}

export default function Page({ params }: PageProps) {
  const { productId } = params;

  console.log("productid", productId);

  return (
    <div>
      <Pdp productId={productId} />
    </div>
  );
}
