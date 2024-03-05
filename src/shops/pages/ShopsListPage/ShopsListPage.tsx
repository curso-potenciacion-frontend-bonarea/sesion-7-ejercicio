import Heading from "@/shared/components/Heading";
import { useShopsQuery } from "@/shops/queries/useShopsQuery";
import { useAppStore } from "@/store";
import { useEffect } from "react";

const ShopsListPage = (): React.ReactElement => {
  const shops = useAppStore((state) => state.shops);
  const loadShops = useAppStore((state) => state.loadShops);

  const { data, isSuccess } = useShopsQuery();

  useEffect(() => {
    if (isSuccess) {
      loadShops(data.shops);
    }
  }, [data?.shops, isSuccess, loadShops]);

  return (
    <>
      <Heading level={2}>Shops list</Heading>
      <ul className="shops">
        {shops.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </>
  );
};

export default ShopsListPage;
