function ProductPrice({ price }: { price: string }) {
  const [int, float] = price.split(".");
  return (
    <div className="text-2xl">
      <span className="text-xs align-super">AFN</span>
      {int}
      <span className="text-xs align-super"></span>
    </div>
  );
}

export default ProductPrice;
